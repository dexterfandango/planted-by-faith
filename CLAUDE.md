# Planted by Faith — project notes
Shared notes for Claude. **Update this file (and commit it) when a decision is made.**

**Owner:** Faith (Tim's wife). Planted by Faith is her business: Christian books (Amazon KDP), apparel (Merch on Demand) and gifts. It's a DBA of TnF Farms LLC (newspaper notice and Sunbiz fictitious-name filing both done, 2026-10-27). Domain **plantedbyfaith.com** is on Tim's Cloudflare account.

## Hard rules
- **Faith's own words only.** Never write her bio, story or welcome for her. Placeholders use `<Draft note="...">`, which shows only while `site.showDrafts` is true. Her text comes from an interview (Claude asks, she answers, Claude assembles her answers) or from what she writes.
- **Scripture on the site: ESV** (Faith's choice, 2026-10-27). Crossway allows short quotes on a website as long as its notice is shown (it's in the footer, from `scriptureNotice` in `src/data/site.ts`); keep the "(ESV)" label on each verse. **Products for sale (shirts, journals): check with Crossway before printing ESV text**, or use KJV (public domain). Other modern translations (NIV, ...) need permission.
- The site is **not a store yet** and may never be one. They are figuring it out as they go: keep it flexible, ask before adding sections.
- **plantedbyfaith.com is attached (2026-10-27), so the site is public:** ask Tim before pushing to `main` or deploying (website-repo rule). The earlier standing OK has ended.
- Faith's original photo is in `photos/` (gitignored); the site uses the resized copy `public/images/faith.jpg`. Her paper sketches (`logo/source/*.jpg`) stay off GitHub.

## Brand
- Final logo (2026-10-23): round badge, rose #AD5170, gold #F0BE45, cream #F3EBDD. PLANTED BY FAITH over a gold vine, cross with sprout and water (Psalms 1:3), PSALMS 1:3 at the bottom. Faith chose "Psalms" (not "Psalm").
- Files and guide: `logo/README.txt`. Design board: https://claude.ai/artifact/RLdzzfZxM9EAMvqdLdBQwm
- Fonts: Cinzel 600 (caps/headings) + Cormorant Garamond (text), self-hosted via @fontsource.

## Amazon (KDP + Merch on Demand)
- **Accounts created 2026-10-27** on a separate Amazon login (not Tim's personal Prime/Vine account). KDP is set up; **Merch on Demand is pending approval** (expect a few weeks).
- Payee = TnF Farms LLC; Planted by Faith is the publisher/brand name. Tim must not Vine-review products that compete with hers.
- **Merch rules are filed (2026-10-27):** the 12 resource pages as PDFs (snapshot of 2026-10-27) are in `private/amazon/merch-resources/`, with searchable text copies in `text/`. **Faith's cheat sheet: `private/amazon/merch-cheat-sheet.md`** (royalties, file specs, rejection rules, tiers, account rules). Read it before any Merch design or listing work. `private/` stays out of git (the repo is public).
- **First KDP book (2026-10-28): Faith chose a gratitude journal.** Cover art: Tim makes it in Leonardo (copy-paste prompt, artwork only, no lettering); title, author and logo are added afterwards in the brand fonts. KDP will ask whether the content is AI-generated: answer yes for the cover. Options for Faith (guided prayer journal / devotional / her story) with costs, royalties and shared decisions: https://claude.ai/artifact/YbFTqwDMau7JM1bZ8YhWH9. Open choices: Bible (KJV, or ESV only within Crossway's book terms: ≤500 verses and <25% of the text, notice on the copyright page), author name, free KDP ISBN ("Independently published") vs her own Bowker ISBN to show Planted by Faith as publisher. Content comes from an interview, as with the site. Order a proof copy before publishing.
- Every shirt saying gets a USPTO trademark check before upload; verses on products = KJV unless Crossway OKs ESV.
- Merch traps that matter for this brand: no "proceeds support [ministry/charity]" wording, no website or email in listings, no shipping/quality claims. Tees: text at least 32 pt (thin Cormorant needs a sample print). Don't join Merch Collab (it takes ownership of the design). One account per person, and a closed account can never be reopened.

## Site
- Astro 5 (same setup as Tim's other sites). Pages: `/` (badge, verse, welcome, meet Faith, say hello), `/about/` and `/prayer/` (Need Prayer, 2026-10-27: Faith's words; requests go by email to `site.prayerEmail` = prayer@plantedbyfaith.com, never stored or shown on the site). Portraits use an oval double-gold frame (Faith's pick).
- **Faith's words are in (2026-10-23):** Home welcome + Meet Faith and the About story come from her interview and she approved them. 2026-10-27: at her request the church and the pastor's names were taken out ("a small church just inside the Tennessee border"); don't name them. Raw answers and the assembled drafts are in `private/` (gitignored, backed up nightly). Don't reword her text without her OK.
- **Launched for search 2026-10-27:** `noindex` off; `functions/_middleware.js` 301s www → plantedbyfaith.com (apex is canonical) and adds `X-Robots-Tag: noindex` on *.pages.dev; 404 page is noindexed; Organization + WebSite JSON-LD in `Base.astro`. Search Console: domain property, ftmediaweb@.
- Settings in `src/data/site.ts`: `noindex` and `showDrafts` (false since her words went in), emails `hello@` and `prayer@plantedbyfaith.com` (Cloudflare Email Routing → Faith's Gmail, set up 2026-10-27; catch-all off).
- Components: `Badge.astro` (logo, leaves fade in on load), `Mark.astro` (small logo), `Draft.astro`, `Ornament.astro`, `FtCredit.astro` (copy of the ft-media master).
- Build: `npm ci && npm run build`. Preview build: `SITE_URL=https://planted-by-faith.pages.dev npm run build`.
- **Hosting:** classic Cloudflare Pages project `planted-by-faith` (direct upload, like sigma-devices), created 2026-10-23. Custom domains plantedbyfaith.com and www.plantedbyfaith.com attached 2026-10-27 (dashboard; the auto-mode check blocks domain/DNS API calls from the box). Test address https://planted-by-faith.pages.dev still works.
- Deploy (with Tim's OK): `npm run build && wrangler pages deploy dist --project-name=planted-by-faith --branch=main` (no SITE_URL now that the domain is attached).
- **Gotcha (wrangler 4.146, 2026-10-23):** `wrangler pages project create` now hands off to Cloudflare Workers. It rewrote astro.config/package.json/tsconfig/.gitignore (added the SSR Cloudflare adapter and wrangler.jsonc) and deployed a Worker instead of a Pages project. All of that was reverted and the stray Worker deleted. The classic project was created with `--force` once; `wrangler pages deploy` works normally now. Never run wrangler's create/setup commands from inside a repo.
