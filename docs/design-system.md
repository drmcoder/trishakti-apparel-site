# Design System — Trishakti Apparel export site

Anchored on the **real logo** (hexagonal blue monogram pulled from the live site).
Logo blue = **#3888d0**. Full palette researched + WCAG-AA audited (2026-07-11).

## Strategy
- **Blue is the dominant brand color** — links, icons, eyebrows, brand fills, focus rings.
- **Navy (#1e2a44) is the "ink"** — headings, nav, footer, dark sections. Same hue family.
- **Amber (#b45309) = the single primary-CTA action color** ("Request a Quote"). Used
  sparingly so it always means "act here."
- **WhatsApp keeps its green** (#0f766e) — platform convention, AA-safe with white text.

## Tokens (see `tailwind.config.js`)
| Token | Hex | Role |
|---|---|---|
| primary-500 | #3888d0 | logo blue — icons, fills, focus ring (UI/large only, 3.75:1) |
| primary-600 | #2b6fb0 | text links / eyebrows on white (5.25:1 AA) |
| primary-700 | #235a91 | badge text, outline buttons (7.14:1) |
| navy / ink | #1e2a44 | headings, nav, footer, dark bands (14.29:1) |
| navy-900 | #131c30 | footer base |
| accent (CTA) | #b45309 | primary CTA bg, white text (5.02:1 AA); hover #92400e |
| whatsapp | #0f766e | WhatsApp buttons, white text (5.47:1 AA) |
| body | #334155 | body copy (10.35:1) |
| muted | #64748b | captions / meta (4.76:1) |
| mist | #f8fafc | subtle/alternating section surface |
| line | #e2e8f0 | hairline borders |
| success / warning / error | #15803d / #b45309 / #b91c1c | semantic |

## Buttons (globals.css)
- `.btn-primary` → amber CTA (the one action color)
- `.btn-secondary` → solid brand blue
- `.btn-outline` → blue outline
- `.btn-whatsapp` → green
- `.btn-ghost-light` → for dark backgrounds

## Accessibility
All 21 text/UI pairs used in the site pass WCAG AA (text ≥4.5:1, large/UI ≥3:1).
The only intentional sub-4.5 value is logo-blue on white (3.75:1), restricted to
icons, borders, and focus rings (governed by the 3:1 UI threshold, which it passes).

## Logo assets (`public/assets/`)
- `logo-mark.png` — blue mark (light backgrounds)
- `logo-mark-white.png` — white mark (dark footer)
- `logo-mark-64.png` — square, for OG/social
- `app/favicon.ico` — generated from the mark
Source pulled from `trishaktiapparel.com.np` (Nexelit media uploads).
