# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

Two independent npm packages (no root package.json / workspace) — run commands inside each folder:

- `dropnote-cms/` — Sanity Studio v5 (project `fsaqqobg`, dataset `production`)
- `dropnote-web/` — Astro 6 static site (SSG, no adapter; deployed to Cloudflare Pages) that reads from Sanity

## Commands

dropnote-cms:
- `npm run dev` — Studio at http://localhost:3333
- `npm run build` / `npm run deploy` — build / deploy hosted Studio
- `npx eslint .` — lint (no npm script); Prettier config lives in package.json (no semicolons, single quotes, no bracket spacing, width 100)

dropnote-web (Node >= 22.12):
- `npm run dev` — site at http://localhost:4321
- `npm run build` / `npm run preview`
- `npx astro check` — type-check (no npm script)

There are no tests in either package.

## Architecture

- **All GROQ fetches go through `dropnote-web/src/sanity/lib/load-query.ts`.** It switches between `published` and `drafts` perspective (plus stega + read token) based on `PUBLIC_SANITY_VISUAL_EDITING_ENABLED`. `SANITY_API_READ_TOKEN` is required when that flag is `true`. Env lives in `dropnote-web/.env` (gitignored).
- The Sanity client comes from the `sanity:client` virtual module configured by the `sanity()` integration in `astro.config.mjs` (projectId, apiVersion, stega studioUrl).
- **Singletons:** `siteSettings` and `homePage` are fixed document IDs set in `dropnote-cms/structure.ts` and queried by `_id` on the web side. `Layout`, `Navbar` and `Footer` each fetch `siteSettings` themselves; page-level SEO props passed to `Layout` override site settings.
- **Home page** = `homePage` doc with one object field per section (`sectionHero`, `sectionFeatures`, …). `src/pages/index.astro` holds the single GROQ projection and passes each section to a matching component in `src/components/`. Adding a section means editing the schema (`dropnote-cms/schemaTypes/homePage.ts`), the projection in `index.astro`, and adding a component.
- **Blog:** `post` / `author` / `category` documents; `post.body` is `blockContent` rendered via `src/components/PortableText.astro`.
- **Rich text blocks:** custom body blocks live in `dropnote-cms/schemaTypes/blocks/` (code and tables come from the `@sanity/code-input` / `@sanity/table` plugins registered in `sanity.config.ts`). Adding a block touches: the schema file → `schemaTypes/index.ts` → `blockContent.ts` (`of` + an `insertMenu` group) → a component in `dropnote-web/src/components/portable-text/` → the `type` map in `PortableText.astro`. If it references other documents, dereference it in the `body[]{…}` projection in `src/pages/blog/[slug].astro` (internal link slugs and related posts are resolved there, including inside callouts). Mark components are shared via `portable-text/marks.ts`.
- **Visual Editing stega:** with visual editing on, every string from Sanity carries invisible stega characters. Wrap any value used as code, HTML, a URL, a class name or an enum (`tone`, `size`, `language`…) in `stegaClean` from `@sanity/client/stega` before using it.
- **Visual editing / Presentation:** Studio `presentationTool` previews `http://localhost:4321`; document→route mapping is in `dropnote-cms/src/sanity/lib/resolve.ts` — update it when adding routes. Both URLs are hard-coded for local dev.
- New schema types must be registered in `dropnote-cms/schemaTypes/index.ts` and added to the desk structure in `structure.ts`.
- Styling is a Webflow-exported global stylesheet (`src/assets/styles/global.css`) with `u-*` utility and `cc-*` modifier classes; page-specific styles use scoped `<style>` blocks.
- Images: Sanity URLs passed to Astro `<Image>` must be in `image.domains` in `astro.config.mjs`. Astro `<Image>` can't process SVGs — Navbar/Footer fall back to `<img>` for SVG/local logos.
