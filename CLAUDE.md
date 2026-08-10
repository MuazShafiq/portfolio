# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, responsive software engineering portfolio site (Astro + React + TypeScript) for Muaz Shafiq. It presents featured projects (Faask, Koro.ai, FocusFlow, SubscriptionFlow), professional experience, technical skills, and a few Easter eggs. Static assets only — no database, server functions, paid APIs, or analytics, and no environment variables are required at runtime.

Live site: https://muaz-shafiq-portfolio.vercel.app/

## Commands

```powershell
npm install       # install dependencies
npm run dev       # start Astro dev server
npm run lint      # eslint .
npm run build     # astro check && astro build (type-check + production build to dist/)
npm run preview   # preview the production build locally
```

There is no test suite — `npm run lint` and `npm run build` (which runs `astro check`, i.e. Astro/TypeScript type-checking) are the verification steps before considering a change done.

Deployment is via Vercel (Hobby tier), auto-deployed from `main`; manual publish is `vercel deploy --prod --archive=tgz`.

## Architecture

The entire site is effectively one page:

- `src/pages/index.astro` — the only real route (plus `src/pages/404.astro`, which duplicates the same style imports since it doesn't mount `App`). Server-rendered by Astro at build time: sets up all `<head>` SEO/meta tags, JSON-LD structured data (`Person` schema), self-hosted font imports (`@fontsource-variable/manrope`, `@fontsource/dm-mono`), imports every file in `src/styles/` **in a specific order** (see below), then mounts the single React entry point with `<App client:load />` (hydrated immediately on load — the whole interactive UI ships as one client island).
- `src/App.tsx` — composition root and page content. Exports the default `App` component (nav, hero, marquee, and all page `<section>`s) plus two small local helpers used only within it, `BrandMark` and `LahoreTime`. Everything else App.tsx used to contain inline now lives in `src/components/` and `src/data.ts` (see below) and is imported in.
- `src/components/` — the page's self-contained interactive widgets, one per file: `Reveal` (scroll-triggered reveal wrapper, used throughout the page to animate sections in), `MiniFaask`/`MiniKoro`/`MiniFocusFlow`/`MiniSubscriptionFlow` (mini interactive previews for each featured project card), and `TerminalModal` (the Ctrl+K developer-terminal Easter egg).
- `src/data.ts` — the content constants (`EMAIL`, `GITHUB`, `LINKEDIN`, `experience`, `skills`). This is the file to edit for a new job entry, a new skill, or a changed contact link — it has no JSX around it.
- `src/styles/` — the stylesheet, split into ordered section files (`base.css`, `header.css`, `hero.css`, `marquee.css`, `projects.css`, `capabilities.css`, `experience.css`, `about.css`, `contact.css`, `footer.css`, `terminal-modal.css`, `responsive.css`). **Import order in `index.astro`/`404.astro` matters and must not change** — a few rules were authored as multi-selector groups spanning two sections (e.g. `.nav-contact:hover, .button.primary:hover`) and were kept intact rather than split, so they physically live in whichever file their first selector belongs to; each file that borrows a style this way has a one-line comment at the top saying where to find it. `responsive.css` holds all breakpoints plus `prefers-reduced-motion` and is always imported last so it keeps winning the cascade.
- `public/` — static assets served as-is: résumé PDF, portrait image, favicon, `site.webmanifest`, `robots.txt`, `sitemap.xml`, and a Netlify-style `_headers` file (informational only; actual response headers for the Vercel deployment are defined in `vercel.json`).

Content or copy changes (new job, new skill, changed link) go in `src/data.ts`. New/changed page sections or layout go in `src/App.tsx`. A widget's own behavior goes in its `src/components/*.tsx` file. Matching CSS goes in the relevant `src/styles/*.css` file — check that file's top-of-file comment first in case the rule you're after actually lives in a neighboring file. Site-wide `<head>`/SEO/meta changes belong in `src/pages/index.astro`.

## Conventions

- Astro is configured for fully static output (`output: "static"` in `astro.config.mjs`) with the React integration only for hydrating `App`.
- `tsconfig.json` extends Astro's strict preset with the classic JSX transform (`jsxImportSource: "react"`).
- ESLint (`eslint.config.js`) applies `typescript-eslint` recommended rules plus `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` to `**/*.{ts,tsx}` only (Astro files are not linted by this config).
- Security-related response headers (CSP-adjacent headers, caching for `/_astro/*`, résumé, and portrait) are defined centrally in `vercel.json` — update there, not in `public/_headers`, when changing production headers.

## Working efficiently in this repo

The codebase is already split by concern (components, data, per-section styles), so most tasks now touch one small file, not one large one. Still:

- Use Serena's symbolic tools rather than a full `Read` when a file is more than a quick skim — `get_symbols_overview` then `find_symbol` with `include_body=True` scoped to the one function/constant you need. Edit with `replace_symbol_body` / `insert_after_symbol` / `insert_before_symbol` rather than rewriting a file.
- CSS files under `src/styles/` aren't symbol-structured — `Grep` for the selector/class name first (check the neighboring files' top-of-file comments too, since a few rules are intentionally shared across two section files) rather than reading a whole stylesheet file.
- If a CSS rule needs splitting out of a multi-selector group that spans two files, verify the individual selectors don't overlap/conflict in specificity before separating them — the existing split relied on never reordering rules relative to each other, only cutting at rule boundaries.
- Never `Read`, `Grep`, or `Glob` into `node_modules/`, `dist/`, `.astro/`, or `.vercel/` — these are generated/vendored and add nothing (they're already excluded from lint/build).

## Recommended tooling

- **Serena MCP** (already configured for this project) is the main lever here — lean on it for every `App.tsx` read/edit per the section above instead of the built-in `Read`/`Edit` tools.
- For visual/layout/animation changes (`Reveal` transitions, `TerminalModal`, the `Mini*` previews), view the running page before calling the change done — `astro check`/`build` passing confirms it compiles, not that it looks or animates right, and there's no test suite as a backstop.
