# Deploy guide — Trishakti Apparel site

## Current production hosting

The public domain is served by **Vercel**. This was verified on 2026-07-26 from the
production HTTPS response (`server: Vercel`) and the `www` Vercel DNS CNAME.

The repository is configured as a static Next.js export (`out/`) and Vercel also applies
the redirects in `vercel.json`.

## Deploying a change

1. Run `npm run build` locally. A successful build writes the deployable static site to `out/`.
2. Deploy through the Vercel project connected to this domain, using the project dashboard or
   the deployment method configured there.
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
