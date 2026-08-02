# Muaz Shafiq — Portfolio

A static, responsive portfolio for Muaz Shafiq. The visual direction combines a
playful near-future interface with developer-terminal details while keeping the
content easy for recruiters and clients to scan.

## Stack

- Astro static rendering for complete initial HTML and SEO
- React and TypeScript for interactive behavior
- Handcrafted CSS and lightweight React interactions
- Lucide icons
- Self-hosted Manrope and DM Mono fonts
- Static assets only: no database, server functions, paid APIs, or analytics

## Run locally

```powershell
npm install
npm run dev
```

## Verify

```powershell
npm run lint
npm run build
```

## Free deployment

The production site is deployed on Vercel's Hobby tier at
[`muaz-shafiq-portfolio.vercel.app`](https://muaz-shafiq-portfolio.vercel.app).

To publish local updates:

```powershell
vercel deploy --prod --archive=tgz
```

No environment variables are required. The contact links use `mailto:` and the
résumé is served as a static download, so there are no ongoing service costs.
