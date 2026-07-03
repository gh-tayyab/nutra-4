# Nutra-4 Website

Full front-end redesign of nutra-4.com — single-product weight gainer site,
built as one rich homepage plus a few light supporting pages. Next.js 14
(App Router), TypeScript, Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build locally
```

## What's built

- **Homepage** (`app/page.tsx`) — announcement bar, sticky header, hero,
  rotating social-proof strip, "Who It's For" tiles, "How It Works",
  ingredients/nutrition, how-to-use steps, real-customer reviews section,
  comparison table, FAQ accordion, quantity-bundle order section, contact
  form + map, footer.
- **Supporting pages** — `/about`, `/privacy-policy`, `/shipping-policy`.
- **SEO** — per-page metadata via the Next.js Metadata API, Open Graph +
  Twitter cards, canonical URLs, `robots.ts` (now `index, follow` —
  replacing the old site's blanket `noindex, nofollow`), `sitemap.ts`,
  and JSON-LD for Organization, Product, WebSite, and FAQPage.
- **WhatsApp button** — floating click-to-chat, pre-filled message.
- **Contact form** — posts to `app/api/contact/route.ts`. Currently logs
  submissions server-side; see "Connecting the contact form" below to wire
  up real email delivery.

## Dropping in real assets

Nothing in the layout uses stock photography or fake data. Every image
slot is a labelled placeholder (`<AssetSlot />`) — see
`public/images/README.md` for the exact file list and how to swap each one
for a real `next/image`.

The reviews section (`lib/reviews.ts`) ships with three placeholder
entries and clear instructions for adding real WhatsApp/Instagram
screenshots as you collect them — no duplicated or fake reviewer photos.

## Connecting the contact form

`app/api/contact/route.ts` validates and currently just logs submissions.
To actually deliver them to info@nutra-4.com, pick an email provider
(Resend, Postmark, SMTP via Nodemailer, etc.), add its API key to a
`.env.local` file, and uncomment/adjust the example `fetch` call already
in that file.

## Content still marked as placeholder

- **How Nutra-4 Works** copy (`components/HowItWorks.tsx`) — the old
  site's "increases appetite... reduces metabolism" line was confusing;
  this draft uses simpler, directional language until you send the final
  wording.
- **Nutrition facts** (`components/Ingredients.tsx`) — figures are "TBC"
  pending your product label.
- **Bundle pricing** (`components/OrderSection.tsx`) — 3-box and 5-box
  prices are calculated at 10%/20% off; confirm exact rounding before
  launch.

## Before going live

- Swap all `AssetSlot` placeholders for real photography (see above).
- Fill in real review screenshots/quotes in `lib/reviews.ts`.
- Confirm nutrition figures and mechanism copy with the client.
- Add `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`
  to `/public`.
- Wire up the contact form's email delivery.
- Point the `nutra-4.com` DNS at your hosting provider and confirm
  SSL/HTTPS is issued automatically (Vercel/Netlify do this out of the
  box).
- Re-check `robots.ts` is live and submit the sitemap in Google Search
  Console — the old site was `noindex, nofollow`, so it may need a
  "request indexing" nudge to get picked back up quickly.
