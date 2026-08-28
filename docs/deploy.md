# Deploy guide — Trishakti Apparel site

## Current production hosting

The site is served by **Vercel** (verified 2026-07-26 from the production HTTPS response,
`server: Vercel`, and the Vercel DNS CNAME).

The repository is configured as a static Next.js export (`out/`) and Vercel also applies
the redirects in `vercel.json`.

### Domains

**Primary: `trishaktiapparel.com`** — registered 28 Aug 2026 via Nest Nepal / OwnRegistrar
(Rs. 2,500/yr, renews 27 Aug 2027). `seo.url` in `lib/content.js` is the single source of
truth for this; `metadataBase`, `app/robots.js`, `app/sitemap.js` and every page's
canonical, OG and JSON-LD URL derive from it.

**`trishaktiapparel.com.np`** — 301-redirects to the `.com`. Keep it registered and
pointed at Vercel indefinitely: it holds the original Search Console history and is
linked from ~50 outreach emails already sent.

⚠️ **Mail is separate from the website and must not be assumed to have moved.**
`admin@trishaktiapparel.com.np` routes via Cloudflare Email Routing
(`route1-3.mx.cloudflare.net`) and is the address published across the site and all
collateral. `trishaktiapparel.com`'s MX still points at the Nest Nepal cPanel box, so
`admin@trishaktiapparel.com` is **not** a working mailbox. Do not swap the address in
content until a mailbox or forwarder exists on the `.com`.

⚠️ **The old 2024 Laravel/Nexelit site is still on Nest Nepal cPanel at 190.92.174.24.**
It must stay redirected or removed — served directly it returns HTTP 200 with the old
B2C positioning, a self-canonical to `https://trishaktiapparel.com`, a March-2024
sitemap and its own GA tag (`G-Q9TBSV3CPH`).

## Deploying a change

1. Run `npm run build` locally. A successful build writes the deployable static site to `out/`.
2. **Push to `master` on GitHub (drmcoder/trishakti-apparel-site).** Verified 2026-08-04:
   minutes after a push, new pages returned 200 on production without any manual deploy —
   the Vercel project is connected to the GitHub repo and auto-deploys on push.
   Note: the production Vercel project is NOT in the `santoshrijals-projects` Vercel
   account (the one the local CLI and claude.ai connector see) — deployment access is
   via the GitHub integration only.
3. Verify the primary routes, `/sitemap.xml`, `/robots.txt`, and the inquiry form after deployment.

The repository does not contain a GitHub Actions deployment workflow. Its only workflow,
`.github/workflows/seo-ping.yml`, notifies IndexNow after a Vercel deployment.

## Subpath previews

Set `NEXT_PUBLIC_BASE_PATH=/preview-path` when building a subpath preview. `NEXT_BASE_PATH`
remains supported for backward compatibility, but use the public variable consistently so asset
paths and Next.js routing stay aligned.

## Historical cPanel material

The previous cPanel/FTP instructions were retained in Git history but no longer describe the
current production hosting. Do not FTP-upload over the Vercel production deployment unless the
hosting strategy is deliberately changed and redirects, DNS, and rollback steps are redesigned.
