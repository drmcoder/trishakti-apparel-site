# Trishakti Apparel — Website

Export-facing website for **Trishakti Apparel**, a garment (cut & sew) manufacturer in Gaindakot, Nepal.

- **Live domain:** https://trishaktiapparel.com.np (currently a Laravel/XGenious "Nexelit" v3.8.0 CMS)
- **Goal:** rebuild / evolve into a buyer-hook site for **general export / all markets** — product catalog, MOQ, capacity, factory story + photos, private-label capability, buyer inquiry.
- **Company:** founded 2023, ~50 workers, ~50 sewing machines, sewing-only (no wash/print/embroidery in-house).

## Status
- [ ] Get server access (cPanel FTP/SSH) to pull existing site OR decide fresh build
- [ ] Map current pages + DB-driven content
- [ ] Content plan (export pitch, catalog, MOQ, factory story)
- [ ] Build
- [ ] Deploy

## Notes
- Server: cPanel user `trishakt`, home `/home/trishakt`, IP `190.92.174.24`. trishaktiapparel is an addon domain.
- Do **not** commit secrets (.env, credentials). See `.gitignore`.
