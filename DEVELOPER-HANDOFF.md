# DEX STRUCTURE — Developer Handoff

## What this project gives you
A branded Next.js codebase with the public website and the main planned product routes already laid out. The aim is to avoid starting from a blank project: use the existing UI as the foundation and wire the product systems into it.

## What is already in the project
- Responsive home page and navigation
- Course catalogue and course detail pages
- Drawing marketplace preview
- Login and sign-up form UI
- Learner dashboard UI
- Instructor/contributor workspace UI
- Admin workspace UI
- Certificate verification UI
- Paystack server-side initialization route and signed webhook skeleton
- Supabase browser/server helper files
- Initial PostgreSQL schema proposal
- Environment variable template and setup instructions

## What is not complete
- Supabase authentication and session handling
- Database-backed course/lesson content
- Protected dashboard/admin/instructor routes
- Verified payment fulfillment and course enrolment
- Secure paid lesson access
- Certificate generation and live verification
- Drawing uploads, private downloads, moderation, licensing, and contributor payouts
- Production tests, deployment, legal pages, monitoring, and security review

## Product assumptions to confirm with the owner
1. Nigeria-first launch and applicable structural design standards/codes.
2. ₦2,000 one-time purchase per paid class.
3. Proposed 80% contributor / 20% platform split for drawing sales.
4. Whether drawing files are for education/reference only or may be used in professional work; define licence limits.
5. Certificate wording and criteria; avoid implying professional licensure or accreditation unless formally authorised.
6. Which roles can upload, review, publish, refund, issue certificates, and change user roles.

## Recommended implementation order
1. Set up Supabase and apply a reviewed version of `supabase/schema.sql`.
2. Implement auth, profile creation, role checks, and route protection.
3. Seed the first real course and lesson content.
4. Implement a trusted order-creation flow where the server looks up the actual price.
5. Verify Paystack transactions server-side and fulfill orders idempotently.
6. Grant course access only from verified successful payments.
7. Implement course progress and certificates.
8. Implement drawing submissions and admin review, then secure downloads after purchase.
9. Implement contributor ledger and payout reconciliation; start with manual payouts until the process is tested.
10. Add automated tests, policies, error handling, accessibility review, and deployment.

## Critical security notes
- Never put `PAYSTACK_SECRET_KEY` or `SUPABASE_SERVICE_ROLE_KEY` in browser code.
- Never grant access because a user reaches a payment success URL.
- Do not trust a price supplied by the browser; calculate it from database records on the server.
- Enforce permissions in server code and PostgreSQL Row Level Security.
- Make payment webhook fulfillment idempotent.
- Store private drawing files in a private bucket and issue short-lived signed download links after entitlement checks.
- Protect `/admin` with server-side role checks before deployment.
- Do not upload drawings unless the submitter owns them or has clear distribution permission.
- Have the applicable engineering/legal professional review technical, licensing, and commercial terms.

## Commands
```bash
npm install
cp .env.example .env.local
npm run dev
npm run build
```
