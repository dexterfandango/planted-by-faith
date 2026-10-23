# Planted by Faith — project notes
Shared notes for Claude. **Update this file (and commit it) when a decision is made.**

**Owner:** Faith (Tim's wife). Planted by Faith is her business: Christian books (Amazon KDP), apparel (Merch on Demand) and gifts. It's a DBA of TnF Farms LLC (newspaper notice + Sunbiz filing in progress, 2026-10). Domain **plantedbyfaith.com** is on Tim's Cloudflare account.

## Hard rules
- **Faith's own words only.** Never write her bio, story or welcome for her. Placeholders use `<Draft note="...">`, which shows only while `site.showDrafts` is true. Her text comes from an interview (Claude asks, she answers, Claude assembles her answers) or from what she writes.
- **Scripture: KJV (public domain).** Modern translations (NIV, ESV, ...) are copyrighted; don't put them on the site or products without permission.
- The site is **not a store yet** and may never be one. They are figuring it out as they go: keep it flexible, ask before adding sections.
- Treat this as a **website repo**: pushing to `main` and production deploys need Tim's yes. Preview deploys are fine.
- Faith's original photo is in `photos/` (gitignored); the site uses the resized copy `public/images/faith.jpg`. Her paper sketches (`logo/source/*.jpg`) stay off GitHub.

## Brand
- Final logo (2026-10-23): round badge, rose #AD5170, gold #F0BE45, cream #F3EBDD. PLANTED BY FAITH over a gold vine, cross with sprout and water (Psalms 1:3), PSALMS 1:3 at the bottom. Faith chose "Psalms" (not "Psalm").
- Files and guide: `logo/README.txt`. Design board: https://claude.ai/artifact/RLdzzfZxM9EAMvqdLdBQwm
- Fonts: Cinzel 600 (caps/headings) + Cormorant Garamond (text), self-hosted via @fontsource.

## Site
- Astro 5 (same setup as Tim's other sites). Pages: `/` (badge, verse, welcome, meet Faith, say hello) and `/about/`.
- Settings in `src/data/site.ts`: `noindex` and `showDrafts` (both true until Faith's words are in), email `hello@plantedbyfaith.com` (to be set up as Cloudflare email routing → Faith's Gmail, from the Mac).
- Components: `Badge.astro` (logo, leaves fade in on load), `Mark.astro` (small logo), `Draft.astro`, `Ornament.astro`, `FtCredit.astro` (copy of the ft-media master).
- Build: `npm ci && npm run build`. Preview build: `SITE_URL=https://planted-by-faith.pages.dev npm run build`.
- **Hosting:** classic Cloudflare Pages project `planted-by-faith` (direct upload, like sigma-devices), created 2026-10-23. Test address **https://planted-by-faith.pages.dev** (noindex). plantedbyfaith.com is not attached yet; that and email routing are done from the Mac.
- Deploy: `SITE_URL=https://planted-by-faith.pages.dev npm run build && wrangler pages deploy dist --project-name=planted-by-faith --branch=main` (until the domain is attached, then build without SITE_URL). Production deploys need Tim's yes.
- **Gotcha (wrangler 4.146, 2026-10-23):** `wrangler pages project create` now hands off to Cloudflare Workers. It rewrote astro.config/package.json/tsconfig/.gitignore (added the SSR Cloudflare adapter and wrangler.jsonc) and deployed a Worker instead of a Pages project. All of that was reverted and the stray Worker deleted. The classic project was created with `--force` once; `wrangler pages deploy` works normally now. Never run wrangler's create/setup commands from inside a repo.
