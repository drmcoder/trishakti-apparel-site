# Current Site Analysis — trishaktiapparel.com.np

_Analyzed 2026-07-11. Snapshot of the existing live site so we know exactly what we're replacing/evolving._

## Platform
- **Stack:** Laravel (PHP) app running the **XGenious "Nexelit" v3.8.0** corporate/CMS theme.
- **Hosting:** cPanel shared hosting, LiteSpeed server, IP `190.92.174.24`, user `trishakt` (`/home/trishakt`). trishaktiapparel is an **addon domain**.
- **Content:** DB-driven (MySQL `trishakt_tsa`). Pages, blog, services, testimonials, team all managed from the Nexelit admin panel.
- **Design libs:** Bootstrap, Owl Carousel, Animate.css, Magnific Popup, FontAwesome. Fonts: Nunito, Roboto, Outfit, Source Serif Pro, Space Grotesk.
- **Baggage from the CMS template we do NOT need:** user login/register, payment gateways (Paystack, PayPal, Paytm, Mollie, Flutterwave), RSS feed, "apply for job" flows. These ship with Nexelit but aren't relevant to an export buyer site.

## Brand colors (extracted from live CSS)
| Hex | Role (observed) |
|---|---|
| `#1e73be` | Primary blue (dominant accent) |
| `#1a3e73` | Deep navy blue |
| `#d7282b` | Red accent |
| `#228b22` | Green (sustainability) |
| `#4a4a4a` | Body text gray |
| `#f2f2f2` | Light background |

## Sitemap (real pages)
Home · About · Service (Design & Develop / Full Private Label Packages / Quality Control & Compliance) · Corporate Orders · Quote · Contact · Career · Team · Testimonial · Clients Feedback · FAQ · Image Gallery · Video Gallery · Events · Blog (9 posts) · Privacy Policy · Login/Register (CMS cruft)

## Content inventory (verbatim highlights)

### Hero
- "Crafting Excellence in Fashion" / "Welcome to Trishakti Apparel"
- "Craftsmanship Meets Sustainability" / "Discover the Art of Ethical Fashion"

### Value props
- Superior Quality · Innovative Designs · Local Empowerment

### Stats shown
- 1K+ Happy Customers · 250+ Total Item Varieties · 100+ Machinery Equipped · 5K+ Production Capacity · 365K+ Total Pieces Produced

### About / story
- Evolved from **Trishakti Stores**; established **2023**. Name = Sanskrit "Trishakti" (three powers: creation, preservation, transformation).
- Inaugural year: **NPR 30M+** turnover (~$220K), **100,000+ pieces** sold, **100+ people** direct/indirect.
- **33 years** of parent-company fashion industry legacy.
- Uses **Optitex CAD**. Sewing/cut-and-sew focus.
- Leadership: **Santosh Rijal** (Founder-CEO), **Bishnu Rijal** (Principal Founder), **Saroj Rijal** (COO).
- Tagline: "Crafting Fashion Legacies, Stitched with Tradition, Woven into Tomorrow."

### Services
1. **Design & Develop** — ideation to realization, R&D, fabric range, sustainable manufacturing, showroom, in-house print collections.
2. **Full Private Label Packages** — pattern creation, marking, on-site resizing, fabric research, certified QC, factory-to-consumer, cut & sew, trims sourcing, duty management.
3. **Quality Control & Compliance** — garment marking/care labels, sizing, textile composition, retail-ready packaging, shipping standards.

### Contact / footer
- **Address:** Gaida Chowk, Ward-6, Gaidakot Municipality, Nawalparasi (East), Gandaki Province, Nepal
- **Phone:** +977-78-590826 · +977-9863618347 · +977-9865005120
- **Email:** admin@trishaktiapparel.com
- **WhatsApp:** +977 9863618347
- **Hours:** Factory 7AM–8PM, Office 9AM–6PM (Sun–Fri)
- **Facebook:** facebook.com/trishaktiapparel

## Assessment — what's wrong for EXPORT buyers
- **Domestic/retail framing.** Copy is about "happy customers," heritage, and Nepal retail — not what an overseas sourcing manager needs (MOQ, lead time, capacity, compliance certs, product range, price positioning).
- **CMS clutter.** Login/register/payment gateways signal a shop template, not a manufacturer's B2B site. Erodes credibility with buyers.
- **No product catalog** an importer can browse (t-shirts, polos, knit basics with fabric/GSM/MOQ).
- **No sourcing-decision info:** MOQ, monthly capacity in real units, lead times, Incoterms, ports, certifications, fabric sourcing (China → single-transformation), sample policy.
- **Weak inquiry path:** a generic quote form vs. a focused "request a quote / book a factory visit / get samples" flow with a real email destination.
- **Trust gaps:** no clear factory photos, no compliance/social-audit posture, no client logos.

→ See `build-prompt.md` for the rebuild brief.
