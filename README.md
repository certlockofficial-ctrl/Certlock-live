# CertLock (MVP SaaS)

Universal employee license & certification tracking with email + SMS reminders and Stripe billing (Option A pricing).

## Features (MVP)
- Username/password auth (NextAuth Credentials)
- Multi-tenant: Company + Admin user
- Employees CRUD (create + list + view)
- Licenses per employee + expiration status
- Daily reminder digest endpoint (SendGrid + Twilio)
- Stripe subscription checkout + webhook (Option A: $49/mo includes 10 employees, then $3/employee)
- Trialing state on signup (14-day timer is part of launch checklist)

## Quick start (local)
1) Install deps:
```bash
npm install
```

2) Create `.env` (copy `.env.example`):
```bash
cp .env.example .env
```

3) Run Prisma migrations:
```bash
npx prisma migrate dev --name init
```

4) Start dev server:
```bash
npm run dev
```

Open:
- http://localhost:3000

## Stripe setup (Option A)
Create two recurring prices in Stripe:
- Base: $49/mo  => set `STRIPE_PRICE_BASE`
- Extra seat: $3/mo => set `STRIPE_PRICE_PER_SEAT`

Set webhook endpoint:
- `POST /api/stripe/webhook`
and paste `STRIPE_WEBHOOK_SECRET`.

## Reminders (email + SMS)
Set SendGrid + Twilio env vars then schedule:
- `GET /api/cron/send-reminders?secret=YOUR_SECRET`
Daily via Vercel Cron / GitHub Actions / Render Cron.

## Launch checklist (recommended)
- Use Neon/Supabase Postgres in production
- Deploy to Vercel
- Set APP_URL to your domain
- Stripe webhooks (production)
- Add a real 14-day trial timer (store `trialEndsAt` on Company)
- Add uploads (S3/UploadThing)
- Add Stripe customer portal for subscription management
