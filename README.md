# Portfolio

**Live site:** [muaz-shafiq-portfolio.vercel.app](https://muaz-shafiq-portfolio.vercel.app/)

A static, responsive software engineering portfolio combining a playful
near-future interface with developer-terminal details. It presents selected
products, professional experience, technical capabilities, and a few personal
Easter eggs without getting in the way of recruiters and clients.

## Featured work

- **Faask:** Swipe-first fashion discovery with taste learning and semantic search
- **Koro.ai:** Production-ready voice tutoring with persistent learning data, managed resources, and offline review packs
- **FocusFlow:** Offline-capable adaptive planning with durable synchronization and conflict handling
- **SubscriptionFlow:** Public-safe highlights from production subscription software

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

## Deployment

The production site is available at
[muaz-shafiq-portfolio.vercel.app](https://muaz-shafiq-portfolio.vercel.app/).
It runs on Vercel's Hobby tier and is connected to this repository for automatic
deployments from `main`.

To publish local updates:

```powershell
vercel deploy --prod --archive=tgz
```

No environment variables are required. The contact links use `mailto:` and the
résumé is served as a static download, so there are no ongoing service costs.
