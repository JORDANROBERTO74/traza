# Traza

General contractor & construction studio in Austin, Texas.

> **Live:** https://traza-woad.vercel.app

Traza is a marketing site for a small general contractor: custom homes, commercial build-outs and renovations, with honest materials and disciplined execution. Built as a clean, fast, bilingual (English / Spanish) Next.js site.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **Tailwind CSS 4**
- **TypeScript** (strict)
- Fonts: **Fraunces** (display serif) and **Space Grotesk** (sans), self-hosted at build time via `next/font`

## Features

- **i18n** `en` / `es`, English default, automatic browser-language detection (cookie + `Accept-Language`), locale-prefixed routes (`/en`, `/es`).
- **SEO**: per-page metadata, canonical + `hreflang` alternates, Open Graph / Twitter cards, dynamic OG image, `sitemap.xml`, `robots.txt`, and `GeneralContractor` JSON-LD.
- **Three pages**: Home, About, Services, with a shared header, footer and call-to-action band.
- **Accessibility**: skip link, keyboard-managed mobile menu, focus management, `prefers-reduced-motion` support.
- **Performance**: self-hosted WebP imagery, minimal client JavaScript.

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `pnpm dev`         | Start the development server         |
| `pnpm build`       | Create a production build            |
| `pnpm start`       | Serve the production build           |
| `pnpm lint`        | Run ESLint                           |
| `pnpm typecheck`   | Type-check with `tsc --noEmit`       |

## Environment

| Variable               | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL for metadata/SEO      |

Copy `.env.example` to `.env.local` and adjust as needed. In production, set `NEXT_PUBLIC_SITE_URL` on the hosting platform.

## Structure

```
src/
├── app/
│   ├── [locale]/          # /en, /es routes (home, about, services)
│   ├── robots.ts
│   ├── sitemap.ts
│   └── globals.css
├── components/            # layout, home, about, services, shared
├── config/                # site + region settings
├── i18n/                  # locale config + dictionaries
└── lib/                   # SEO + utilities
```

## License

MIT. Fonts are distributed under the SIL Open Font License (see `src/assets/OFL-*.txt`).
