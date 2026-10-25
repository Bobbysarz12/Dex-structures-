-- DEX STRUCTURE initial schema proposal.
-- Review and adapt before applying. Enable RLS on every user-facing table.
create extension if not exists pgcrypto;

create type public.app_role as enum ('learner', 'instructor', 'admin');
create type public.course_status as enum ('draft', 'published', 'archived');
create type public.drawing_status as enum ('pending', 'approved', 'rejected', 'withdrawn');
create type public.payment_status as enum ('pending', 'success', 'failed', 'refunded');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  role public.app_role not null default 'learner',
  created_at timestamptz not null default now()
);

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  summary text not null default '',
  price_kobo bigint not null check (price_kobo >= 0),
  status public.course_status not null default 'draft',
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.lessons (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title text not null,
  position integer not null,
  content jsonb not null default '{}'::jsonb,
  is_preview boolean not null default false,
  created_at timestamptz not null default now(),
  unique(course_id, position)
);

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  item_type text not null check (item_type in ('course', 'drawing')),
  item_id uuid not null,
  amount_kobo bigint not null check (amount_kobo >= 0),
  currency text not null default 'NGN',
  status public.payment_status not null default 'pending',
  paystack_reference text unique,
  created_at timestamptz not null default now()
);

create table public.enrollments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  order_id uuid references public.orders(id),
  enrolled_at timestamptz not null default now(),
  unique(user_id, course_id)
);

create table public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  completed_at timestamptz not null default now(),
  unique(user_id, lesson_id)
);

create table public.certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  course_id uuid not null references public.courses(id),
  verification_code text unique not null,
  status text not null default 'valid' check (status in ('valid', 'revoked', 'superseded')),
  issued_at timestamptz not null default now(),
  unique(user_id, course_id)
);

create table public.drawings (
  id uuid primary key default gen_random_uuid(),
  contributor_id uuid not null references public.profiles(id),
  title text not null,
  description text not null default '',
  category text not null,
  price_kobo bigint not null check (price_kobo >= 0),
  preview_path text,
  private_file_path text,
  licence_terms text not null,
  status public.drawing_status not null default 'pending',
  reviewed_by uuid references public.profiles(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.drawing_purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  drawing_id uuid not null references public.drawings(id),
  order_id uuid not null references public.orders(id),
  licence_snapshot text not null,
  purchased_at timestamptz not null default now(),
  unique(user_id, drawing_id, order_id)
);

create table public.contributor_ledger (
  id uuid primary key default gen_random_uuid(),
  contributor_id uuid not null references public.profiles(id),
  order_id uuid not null references public.orders(id),
  drawing_id uuid not null references public.drawings(id),
  gross_kobo bigint not null,
  contributor_share_kobo bigint not null,
  platform_share_kobo bigint not null,
  payout_status text not null default 'pending',
  created_at timestamptz not null default now(),
  unique(order_id, drawing_id)
);

create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles(id),
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- Minimal starter RLS policies. These must be audited and extended for production.
alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.lessons enable row level security;
alter table public.orders enable row level security;
alter table public.enrollments enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.certificates enable row level security;
alter table public.drawings enable row level security;
alter table public.drawing_purchases enable row level security;
alter table public.contributor_ledger enable row level security;
alter table public.audit_logs enable row level security;

create policy "Profiles: read own profile" on public.profiles
for select to authenticated using (auth.uid() = id);
create policy "Profiles: update own profile" on public.profiles
for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

create policy "Published courses are public" on public.courses
for select to anon, authenticated using (status = 'published');
create policy "Published lessons are visible if preview" on public.lessons
for select to anon, authenticated using (
  is_preview and exists (select 1 from public.courses c where c.id = course_id and c.status = 'published')
);

create policy "Users read own orders" on public.orders
for select to authenticated using (auth.uid() = user_id);
create policy "Users read own enrollments" on public.enrollments
for select to authenticated using (auth.uid() = user_id);
create policy "Users read own lesson progress" on public.lesson_progress
for select to authenticated using (auth.uid() = user_id);
create policy "Users update own lesson progress" on public.lesson_progress
for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users read own certificates" on public.certificates
for select to authenticated using (auth.uid() = user_id);
create policy "Approved drawings are public" on public.drawings
for select to anon, authenticated using (status = 'approved');
create policy "Contributors read own drawings" on public.drawings
for select to authenticated using (auth.uid() = contributor_id);
create policy "Contributors insert own pending drawings" on public.drawings
for insert to authenticated with check (auth.uid() = contributor_id and status = 'pending');
create policy "Users read own drawing purchases" on public.drawing_purchases
for select to authenticated using (auth.uid() = user_id);
create policy "Contributors read own ledger" on public.contributor_ledger
for select to authenticated using (auth.uid() = contributor_id);

-- Production TODO:
-- 1. Add safe role-aware admin policies using trusted server-side checks.
-- 2. Do not allow clients to set orders to successful or edit financial ledger rows.
-- 3. Create server-only RPC/functions for verified payment fulfillment and admin review.
-- 4. Add storage buckets/policies for public previews and private purchased files.
-- 5. Add profile creation trigger, indexes, rate limits, and migration tests.
