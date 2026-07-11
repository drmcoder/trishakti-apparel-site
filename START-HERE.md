# START HERE — Trishakti Apparel website (handoff for any Claude session)

Read this first, then read `docs/` in order. This project builds an **export-facing
website** for Trishakti Apparel (garment cut-and-sew manufacturer, Gaindakot, Nepal).
Audience = **overseas apparel buyers / sourcing managers, all markets**. It is a B2B
lead-gen brochure site — NOT a retail shop, NOT the domestic site.

## What's already done
- `docs/current-site-analysis.md` — teardown of the existing live Laravel/Nexelit site
  and why it fails export buyers.
- `docs/build-prompt.md` — the full build brief + a copy-paste prompt. Has `⟨FILL⟩`
  placeholders for real numbers that must NOT be invented.
- `docs/what-we-need.md` — checklist of inputs needed from the factory owner (Santosh).

## Your next steps (in order)
1. **Check for new inputs.** Look in this repo for any of: filled-in numbers, an
   `assets/` or `public/` folder with logo/photos, or notes Santosh added. Also check
   whether `docs/what-we-need.md` checkboxes got filled.
2. **If assets + key numbers exist → scaffold the site.** Build a static, mobile-first
   **Next.js (App Router) + Tailwind** site, statically exportable. Pages: Home,
   Products/Line Card, Capabilities, About, Contact/Get-a-Quote. NO login/cart/payments.
   Follow the design + content spec in `docs/build-prompt.md`.
3. **If inputs are still missing → scaffold with clearly-marked placeholders** for the
   missing data (never fake capacity/MOQ/certs) and wire real content where known
   (company story, contact details, brand colors — all in build-prompt.md).
4. **Keep secrets out of git.** `.gitignore` already blocks `.env`, credentials,
   `live-backup/`. Never commit server passwords.

## Hard rules (do not break)
- No fabricated specs, certs, client names, or numbers — omit if unknown.
- No login / register / cart / payment gateways.
- Every page needs a clear path to the inquiry form + WhatsApp (+977 9863618347).
- English only unless told otherwise.

## Verified facts you can use freely (from build-prompt.md)
- Founded 2023; grew out of Trishakti Stores; 33-yr family fashion legacy.
- ~50 workers, ~50 sewing machines, sewing-only floor. In-house Optitex CAD.
- Product focus: knit basics (t-shirts, polos). Fabric/trims from China.
- Address: Gaida Chowk, Ward-6, Gaidakot Municipality, Nawalparasi (East), Gandaki, Nepal.
- Phones: +977-78-590826, +977-9863618347, +977-9865005120. Email: admin@trishaktiapparel.com.
- Leadership: Santosh Rijal (Founder-CEO), Bishnu Rijal (Principal Founder), Saroj Rijal (COO).
- Brand colors: blue #1e73be, navy #1a3e73, green #228b22, red #d7282b, text #4a4a4a.

## Deploy target (later)
Live domain trishaktiapparel.com.np is on cPanel (user `trishakt`, IP 190.92.174.24),
where trishaktiapparel is an addon domain. To publish, Santosh creates an FTP account in
cPanel. Decide with him: replace the Laravel site, or launch on a subdomain first.
