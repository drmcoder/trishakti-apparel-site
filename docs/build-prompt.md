# Build Prompt for Claude — Trishakti Apparel export website

_Copy everything in the fenced block below and give it to Claude (or use it as the brief in this repo). Fill in the `⟨FILL: …⟩` placeholders first — these are real business numbers I must not invent. Anything left blank, Claude should omit rather than fabricate._

---

```
You are building a website for Trishakti Apparel, a garment (cut-and-sew) manufacturer
in Gaindakot, Nepal. The audience is OVERSEAS APPAREL BUYERS / SOURCING MANAGERS /
private-label brands looking for a manufacturing partner — GENERAL EXPORT, ALL MARKETS
(EU, US, UK, buying houses). This is a B2B factory site, NOT a retail shop and NOT a
domestic Nepal site. Its one job: make a sourcing manager think "this factory is
credible, I should send an inquiry."

## What to build
A fast, modern, mobile-first static site (Next.js App Router + Tailwind, statically
exportable). No user accounts, no cart, no payment gateways, no login/register — strip
all of that. Clean, professional, image-forward. English only.

## Pages / sections
1. Home
   - Hero: strong B2B headline about being an export-ready private-label garment
     manufacturer from Nepal + primary CTA "Request a Quote" and secondary "Download
     Line Card / Book a Factory Visit".
   - Trust bar: key sourcing facts at a glance (see "Sourcing facts" — only real ones).
   - What we make (product categories with photos).
   - Capabilities (cut & sew, in-house CAD/pattern, private label, QC).
   - Why Trishakti (differentiators — see below).
   - Certifications / compliance posture.
   - Short factory story + factory photos.
   - Client / testimonial strip (optional).
   - Strong closing CTA + inquiry form.
2. Products / Line Card — browsable catalog of what they make: knit basics
   (t-shirts, polos, etc.). Each product card: photo, fabric type, GSM range, sizes,
   MOQ, sample availability. (Use ⟨FILL⟩ data; if unknown, show the category without
   fake specs.)
3. Capabilities — cut & sew, in-house pattern/marking (Optitex CAD), on-site resizing,
   trims sourcing, private-label packaging, QC & compliance, duty management.
4. About — company story (below), leadership, factory profile, values.
5. Contact / Get a Quote — inquiry form (name, company, country, product, target qty,
   target price, message) that emails to a real address; plus WhatsApp button, phone,
   address, map, office hours.

## Differentiators to lead with (verified, true)
- Own designs & spec charts — not just contract sewing; can design/develop.
- In-house CAD pattern making + marking (Optitex) and on-site resizing.
- Small-MOQ flexibility for emerging brands (⟨FILL: state real MOQ⟩).
- Vertically light but quality-focused: sewing specialist, top-notch finish.
- Fabric & trims sourced from China → single-transformation origin (garment made in
  Nepal). NOTE: only mention duty-free/EBA framing if the buyer market is EU; since this
  is all-markets, keep it as "flexible global sourcing" unless building an EU section.

## Sourcing facts block (ONLY use real, confirmed numbers — placeholders below)
- Founded: 2023 (parent-company legacy 33 years).
- Workforce: ~50 factory workers, ~50 sewing machines (sewing-only floor).
- Location: Gaida Chowk, Ward-6, Gaindakot Municipality, Nawalparasi (East),
  Gandaki Province, Nepal.
- Product focus: knit basics — t-shirts, polos.
- Monthly production capacity: ⟨FILL: real pcs/month⟩
- MOQ per style/color: ⟨FILL⟩
- Lead time (sample / bulk): ⟨FILL⟩
- Incoterms handled: ⟨FILL: EXW/FOB Kathmandu/…⟩
- Certifications / audits: ⟨FILL: e.g. in progress — REX registered for EU, none yet⟩
- Export codes: EXIM code held; REX (EU) in progress via TEPC.
Do NOT print any capacity/MOQ/lead-time number that isn't filled in — omit the row.

## Company story (verified, use / tighten for export tone)
Trishakti Apparel grew out of Trishakti Stores and was established in 2023. The name is
Sanskrit — "Trishakti," three powers: creation, preservation, transformation. It builds
on 33 years of family fashion-industry experience. The factory in Gaindakot runs
in-house CAD (Optitex) pattern making and a dedicated cut-and-sew line focused on
quality knit basics, produced to the brand's own designs and spec charts.
Leadership: Santosh Rijal (Founder-CEO), Bishnu Rijal (Principal Founder),
Saroj Rijal (COO).
Tagline available: "Crafting Fashion Legacies, Stitched with Tradition, Woven into
Tomorrow." (Consider a more buyer-focused primary tagline; keep this as secondary.)

## Contact details (real)
- Address: Gaida Chowk, Ward-6, Gaidakot Municipality, Nawalparasi (East),
  Gandaki Province, Nepal
- Phone: +977-78-590826, +977-9863618347, +977-9865005120
- Email: admin@trishaktiapparel.com  (inquiry destination)
- WhatsApp: +977 9863618347
- Hours: Factory 7AM–8PM, Office 9AM–6PM (Sun–Fri)
- Facebook: facebook.com/trishaktiapparel

## Brand / design
- Colors: primary blue #1e73be, deep navy #1a3e73, sustainability green #228b22,
  red accent #d7282b (use sparingly), text #4a4a4a, light bg #f2f2f2. Refine into a
  clean B2B palette — navy + one accent + neutrals.
- Fonts: a clean sans (Inter/Outfit/Nunito) for UI, optional serif for headlines.
- Feel: professional, trustworthy, industrial-but-clean, lots of real factory/product
  photography, generous whitespace, fast load. Mobile-first. Accessible. SEO-optimized
  for terms like "Nepal garment manufacturer", "private label knitwear manufacturer",
  "cut and sew factory Nepal", "t-shirt manufacturer Nepal".

## Hard rules
- No fabricated specs, certifications, client names, or numbers. If a number isn't
  provided, omit it — never invent capacity, MOQ, or audit claims.
- No login/register/cart/payment. This is a lead-gen brochure site.
- Every page must have a clear path to the inquiry form / WhatsApp.
```

---

## Photos & assets still needed from Santosh
- Real factory-floor photos, product shots (t-shirts/polos), team photo, logo (SVG/PNG).
- Confirmed numbers for the `⟨FILL⟩` placeholders (capacity, MOQ, lead time, Incoterms, certs).
- Preferred primary tagline / any client logos allowed to display.
