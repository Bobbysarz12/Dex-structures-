# DEX STRUCTURE — Next.js Platform Starter

**Tagline:** Where Africa's engineers learn to build.

This is a working, extensible Next.js App Router foundation for DEX STRUCTURE. It includes the branded website, course catalogue/detail pages, drawing marketplace, dashboard interfaces, login/sign-up screens, certificate verification page, and server-side Paystack initialization/webhook scaffolding.

## Important status
This is a **developer starter**, not a production-ready paid learning platform. The visual routes and demo data work without credentials. Real account sessions, course entitlements, certificate issuance, marketplace purchases, contributor payouts, and admin permissions must be completed and tested before launch. Do not accept real payments until the developer has implemented server-side payment verification and database entitlements.

## Requirements
- Node.js 20+
- npm
- Supabase project for auth/database/storage (recommended)
- Paystack account for Nigerian payments

## Run locally
1. Extract the ZIP.
2. In this folder run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

The site renders demo data when Supabase environment variables are not configured.

## Stack
- Next.js 14 / React / TypeScript
- Tailwind CSS
- Supabase Auth + PostgreSQL + Storage (client helpers included)
- Paystack server-side initialization and webhook skeleton

## Routes included
- `/` — homepage
- `/courses` — learning catalogue
- `/courses/[slug]` — course landing page
- `/marketplace` — drawing marketplace
- `/dashboard` — learner dashboard mockup
- `/login` and `/signup` — auth screens
- `/certificates/verify` — verification interface
- `/instructor` — instructor workspace mockup
- `/admin` — admin workspace mockup
- `/api/paystack/initialize` — server-side payment initialization scaffold
- `/api/paystack/webhook` — webhook scaffold

## Before production
1. Create Supabase tables using `supabase/schema.sql`.
2. Implement Supabase SSR cookie-based auth and protect private routes.
3. Enforce roles and entitlements on the server/database; never trust hidden buttons or client-side checks.
4. Complete Paystack callback verification; validate webhook signatures and make webhook processing idempotent.
5. Create order, payment, enrollment, drawing-license, payout, and audit-log tables.
6. Add admin moderation workflows for uploaded drawings and user reports.
7. Add file upload validation, malware scanning where appropriate, signed private URLs, and storage policies.
8. Write the actual course lessons, add original drawings, and verify all technical content against the relevant codes.
9. Add tests, privacy policy, terms, refund policy, content licensing terms, and professional/legal review.
10. Configure domain, HTTPS, monitoring, backups, and deployment environment variables.

## Product rules from the brief
- Paid classes are intended to be one-time purchases at ₦2,000 each (confirm this price before launch).
- Course certificates should be individually verifiable by unique codes.
- Drawing library revenue model proposed: 80% contributor / 20% platform, subject to finalized terms and payment-provider capabilities.
- The founder/admin approves submitted drawings before listing.
- Initial focus is Nigeria; confirm applicable design codes, payment, tax, and consumer terms before expanding regionally.

## Suggested first delivery milestone
Make the public site production-quality, connect authentication, implement course purchase + secure access for one course, and validate the full payment lifecycle in test mode before building contributor payouts.
