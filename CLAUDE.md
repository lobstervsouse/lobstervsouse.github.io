# Project: Daria Radiuk portfolio

Astro static site, bilingual EN/DE, deployed to GitHub Pages. Built for a
non-technical owner — content is drop-in editable.

## Commands
- `npm install` — install deps
- `npm run dev` — local dev server
- `npm run build` — production build (must end with "Complete!"); output in `dist/`
- `npm run preview` — serve the built site locally

## Key facts
- **Astro 4** (4.16.x): use `ViewTransitions` from `astro:transitions`, NOT
  `ClientRouter` (that's Astro 5).
- i18n: English at root, German under `/de/`. `prefixDefaultLocale: false`.
- `astro.config.mjs` has `SITE`/`BASE` deploy placeholders (USERNAME/REPO).
- Content collections in `src/content/{videos,posts,texts,projects}/`; files
  prefixed `en-`/`de-`; schema in `src/content/config.ts` with a future-ready
  `media.type` (upload|youtube|tiktok|instagram).
- Fixed data in `src/data/` (site.ts, ui.ts, achievements.ts).
- Page bodies are in `src/sections/`, reused by both EN (`src/pages/`) and DE
  (`src/pages/de/`) route files.

## Conventions
- Keep everything bilingual (EN + DE) and content drop-in (no code edits to add
  an entry).
- Comments in source files are written for a non-technical owner — keep that tone.

See README.md (owner-facing) and DESIGN-NOTES.md (design rationale + deviations).
