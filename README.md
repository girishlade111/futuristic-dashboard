# Futuristic Dashboard

A futuristic, sci-fi themed **seismic monitoring dashboard** — a real-time earthquake
observation console with a Turkish-language interface. Built with Next.js 15, shadcn/ui,
and Recharts.

The dashboard presents a command-center style view of seismic activity: live earthquake
feeds, alert management, base-station status, global earthquake tracking, reports, and
system settings. All telemetry shown in the demo is **client-side simulated data**
(randomized magnitudes, depths, and station metrics, refreshed on a timer) — there is
no live seismic API connected.

## Screenshots / pages

| Route | Page |
|---|---|
| `/` | Main command dashboard (status cards, charts, activity feed) |
| `/konsol` | Operations console — simulated terminal log of base stations |
| `/konumlar` | Station/location listings |
| `/kuresel-ag` | Global network — worldwide earthquake tracking |
| `/raporlar` | Reports view |
| `/sismik-aktivite` | Seismic activity feed (auto-refreshes every 60 s) |
| `/uyarilar` | Alerts center |
| `/ayarlar` | Settings (theme, toggles) |

## Features

- Sci-fi command-center UI with dark theme and cyan accents
- Live-feel seismic activity feed (simulated, auto-refreshing)
- Alerts center with severity badges and notifications
- Base-station console with simulated terminal output and data-rate metrics
- Global earthquake tracking view
- Reports and settings pages
- Charts powered by Recharts (activity trends, distributions)
- Light/dark theming via `next-themes`
- Fully client-side — no backend, no database, no API keys required

## Tech stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **UI:** Tailwind CSS 3.4, shadcn/ui + Radix UI primitives, Lucide icons
- **Charts:** Recharts 2.15
- **Forms/state:** React Hook Form, Zod, date-fns, embla-carousel, cmdk
- Originally generated with [v0](https://v0.app) and customized afterwards

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the dashboard loads with simulated live data.

To build a static export (GitHub Pages ready):

```bash
npm run build   # emits ./out
```

## Project structure

```
app/                  # Next.js App Router pages
  page.tsx            # main dashboard (re-exports components/dashboard)
  konsol/             # operations console
  konumlar/           # station locations
  kuresel-ag/         # global network
  raporlar/           # reports
  sismik-aktivite/    # seismic activity feed
  uyarilar/           # alerts
  ayarlar/            # settings
  layout.tsx          # root layout + theme provider
components/
  dashboard.tsx       # main command-center dashboard (~50 KB)
  theme-provider.tsx  # next-themes wrapper
  ui/                 # shadcn/ui components (button, card, tabs, dialog, ...)
lib/utils.ts          # cn() helper
styles/globals.css    # global styles
public/               # placeholder images/logos
```

## Environment variables

None — the app runs fully client-side with simulated data. No `.env` needed.

## Deployment

The app is a static export (`output: 'export'` in `next.config.mjs`):

- Live demo: https://girishlade111.github.io/futuristic-dashboard/
- Deploy anywhere static hosting works: GitHub Pages, Cloudflare Pages, Vercel, Netlify.

Note: `basePath: '/futuristic-dashboard'` is set for the GitHub Pages subpath.
Remove it (or set it to `''`) if you deploy to a domain root such as Vercel.

> Originally scaffolded with [v0](https://v0.app). Security note: Next.js was bumped
> to 15.2.8 to cover CVE-2025-55182 (React2Shell) and related advisories.

---

Built by Girish Lade · https://ladestack.in
