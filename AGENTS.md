# AGENTS.md

This file provides repository-specific instructions for Codex and other coding
agents. Treat it as the agent equivalent of `CLAUDE.md`: both files describe the
same project and working conventions. If the architecture or workflow changes,
keep both files aligned.

## Project

This is Muaz Shafiq's static, responsive software-engineering portfolio, built
with Astro, React, and TypeScript. It presents Faask, Koro.ai, FocusFlow,
SubscriptionFlow, professional experience, technical skills, and personal
Easter eggs.

The production site is:
https://muaz-shafiq-portfolio.vercel.app/

The site has no runtime database, server functions, paid APIs, analytics, or
environment variables. Preserve the static, free-cost architecture unless the
user explicitly changes that requirement.

## Required working style

- Read this file before making repository changes.
- Treat `CLAUDE.md` as parallel guidance and keep behavior consistent with it.
- Use Serena as the primary code-navigation and symbol-editing tool. Activate
  this project and read Serena's instructions when needed, but do not run
  Serena onboarding for this repository.
- Inspect narrowly. Use symbol overviews and targeted symbol reads for code;
  search for selectors before opening entire CSS files.
- Preserve user changes and unrelated worktree modifications. Stage and commit
  only the files intended for the current task.
- For public copy, use accurate, client/recruiter-facing language. Do not add
  private product details, unsupported metrics, or unimplemented claims.
- Before replacing existing portfolio wording with newly invented copy, show
  the exact proposed replacement unless the user has directly authorized the
  edit.
- For visual, layout, interaction, or animation work, validate the running page
  at relevant desktop and mobile widths. A successful build alone is not visual
  verification.
- Do not describe local changes as live. Publishing requires an intentional
  commit and push, confirmation that Vercel completed the deployment, and a
  check of the production result.

## Commands

```powershell
npm install       # install dependencies
npm run dev       # start the Astro development server
npm run lint      # run ESLint
npm run build     # run astro check and create the production build
npm run preview   # preview the production build locally
```

There is no automated test suite. Run both `npm run lint` and `npm run build`
before considering a code change complete. Run `git diff --check` as a final
whitespace sanity check.

Deployment is through Vercel's Hobby tier and normally occurs automatically
from `main`. A manual production deployment can be started with:

```powershell
vercel deploy --prod --archive=tgz
```

## Architecture and file routing

The site is effectively one page:

- `src/pages/index.astro` is the main route. It owns SEO metadata, JSON-LD,
  font imports, ordered stylesheet imports, portrait optimization, and the
  hydrated `<App client:load />` entry point.
- `src/pages/404.astro` is the styled error page. It duplicates the ordered
  stylesheet imports because it does not mount `App`.
- `src/App.tsx` is the composition root for navigation, hero, marquee, page
  sections, content that is expressed directly in JSX, and top-level terminal
  open/close behavior.
- `src/components/` contains self-contained interactive widgets: `Reveal`, the
  four `Mini*` project previews, `Preloader`, and `TerminalModal`.
- `src/data.ts` owns shared contact constants, experience entries, and skills.
  Use it for a new job, skill, or changed contact link.
- `src/styles/` contains section-specific CSS. Put matching styles in the
  relevant file and keep `responsive.css` last.
- `src/assets/muaz-portrait.jpeg` is the hero portrait source. Replace this file
  when changing the portrait; do not add a duplicate portrait under `public/`.
- `public/` contains the resume PDF, favicon and app icons, manifest, robots and
  sitemap files, and social/static assets.
- `vercel.json` is the source of truth for production response headers. Do not
  rely on `public/_headers` for Vercel behavior.

Site-wide head, SEO, structured-data, or social metadata changes belong in
`src/pages/index.astro`. A widget's behavior belongs in its component. New or
changed sections belong in `src/App.tsx`. Shared content belongs in
`src/data.ts` where applicable.

## CSS constraints

Stylesheets are imported in this order and that order must remain stable:

1. `base.css`
2. `header.css`
3. `hero.css`
4. `marquee.css`
5. `projects.css`
6. `capabilities.css`
7. `experience.css`
8. `about.css`
9. `contact.css`
10. `footer.css`
11. `terminal-modal.css`
12. `responsive.css`

Some multi-selector rules intentionally style elements from neighboring
sections and live in the file associated with their first selector. Read each
stylesheet's opening comment and search neighboring files before moving or
duplicating a rule. If splitting a shared selector group, check specificity and
cascade order first.

`responsive.css` also owns reduced-motion behavior and must remain last so its
overrides win the cascade.

## Asset constraints

`index.astro` optimizes `src/assets/muaz-portrait.jpeg` with `astro:assets` and
passes its generated source and dimensions into the React app. Keep that
boundary intact.

`public/muaz-portrait-original.jpeg` is currently used by Open Graph, Twitter,
and JSON-LD metadata. It is portrait-oriented and is not a suitable automatic
landscape social-card crop. Do not replace or recrop it without deliberate
visual review.

When changing `public/favicon.svg`, keep `icon-192.png`, `icon-512.png`, and
`apple-touch-icon.png` synchronized.

## Code conventions

- Keep Astro configured for fully static output.
- Preserve the React integration and the current hydrated-app boundary unless
  a requested change requires a deliberate architectural revision.
- Keep TypeScript strict and follow the existing classic JSX configuration.
- Follow the existing ESLint rules, including React Hooks and React Refresh.
- Prefer existing components, variables, layout patterns, and Lucide icons over
  introducing parallel abstractions.
- Maintain keyboard accessibility, focus behavior, semantic labels, reduced
  motion, and touch usability when changing interactions.
- Do not search generated or vendored directories: `node_modules/`, `dist/`,
  `.astro/`, or `.vercel/`.

## Serena workflow

- Start with `get_symbols_overview` when exploring an unfamiliar code file.
- Use `find_symbol` with `include_body=true` for only the symbol being changed.
- Use `find_referencing_symbols` before a change that may affect callers.
- Prefer `rename_symbol` and `safe_delete_symbol` for reference-aware
  refactors.
- Use `replace_symbol_body`, `insert_before_symbol`, or `insert_after_symbol`
  for complete-symbol changes.
- Use targeted text edits for small changes within a large symbol and for CSS,
  Markdown, Astro markup, or configuration files when symbolic editing is not
  appropriate.
- Search CSS selectors before reading a full stylesheet.

## Verification and publishing

Use verification proportional to the change:

- Copy-only Markdown changes: inspect the rendered structure or diff and run
  `git diff --check`.
- Code or style changes: run `npm run lint`, `npm run build`, and
  `git diff --check`.
- Responsive or interactive changes: additionally inspect the running site on
  representative desktop and mobile viewports and exercise the changed flow.
- Asset changes: inspect the actual rendered asset at its intended sizes.

Before publishing:

1. Inspect `git status` and the complete intended diff.
2. Keep unrelated local changes out of the commit.
3. Commit with a concise description of the outcome.
4. Push the intended branch; portfolio releases normally go to `main` when the
   user explicitly asks to make them live.
5. Wait for Vercel to reach a ready state.
6. Verify the production URL contains the requested change before reporting it
   as live.
