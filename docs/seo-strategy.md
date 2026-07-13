# SEO Strategy — Trishakti Apparel

Consolidated from three fact-based research passes (2026-07-13): buyer keywords, competitor
teardown, and backlink/Domain-Rating growth. **Audience:** overseas apparel buyers (EU/UK/US/CA).
Confidence is flagged inline; all keyword *volumes* are directional (no free tool publishes B2B
"manufacturer" volumes) — see §7 to pull real numbers free.

---

## 0. The big picture (what the research actually found)

1. **The Nepal search space is SOFT and winnable.** Sites ranking for "garment manufacturer
   Nepal" are weak local directories, cashmere/pashmina makers, thin brochures with missing
   `<title>` tags, hidden MOQs, and almost no schema. One India company (Wings2Fashion) even
   ranks on "Nepal" queries via `/nepal/` pages — beatable on genuine local signals.
2. **Your site is already technically AHEAD of nearly every Nepal peer** (clean titles/meta,
   canonical, OG, Organization+LocalBusiness JSON-LD, real photos, FAQ). The gap is **content
   depth and pages**, not technical hygiene.
3. **Nobody owns "duty-free knit basics from Nepal" as a content topic.** This is your
   uncontested moat — build the pages and you can own it.
4. **Don't chase head terms** ("clothing manufacturer", "wholesale t-shirt manufacturer",
   "best countries to manufacture clothing"). High-authority directories (Alibaba, Sewport,
   ThomasNet, Maker's Row) own them. Win the **geo + niche + intent** long-tail instead.
5. **The #1 strategic question: the `.com.np` ccTLD.** Google treats `.com.np` as *"targets
   Nepal"* and you **cannot override** a ccTLD's geo-target in Search Console. Since all buyers
   are abroad, this caps foreign rankings. **Consider acquiring `trishaktiapparel.com`, make it
   primary, 301 the ccTLD → it.** Highest-leverage single move. (Business decision — cost/benefit.)

---

## 1. Winnable keyword clusters (target these)

**A. Geo-qualified transactional — WIN NOW (low competition, high intent):**
`t-shirt manufacturer Nepal` · `clothing / garment manufacturer Nepal` · `polo shirt manufacturer
Nepal` · `knitwear manufacturer Nepal` · `private label clothing manufacturer Nepal` · `cut and
sew manufacturer Nepal` · `jersey manufacturer Nepal` · `apparel manufacturer Nepal export` ·
`custom t-shirt manufacturer Nepal` · `contract sewing Nepal`.

**B. Duty-free / trade-mechanism long-tail — WIN NOW (your differentiator, uncontested):**
`Nepal garment duty free EU` · `duty-free t-shirt supplier EU` · `EBA Everything But Arms garments`
· `LDC duty free garment sourcing` · `rules of origin single transformation garments` · `Nepal REX
registered exporter EU` · `import duty on clothing from Nepal to EU` · `Nepal LDC graduation 2026`.

**C. Comparison / diversification — WINNABLE via content (2026 zeitgeist):**
`Nepal vs Bangladesh garment manufacturing` · `Nepal vs India clothing manufacturer` · `alternative
to Bangladesh garment sourcing` · `alternative to India clothing manufacturer` · `China plus one
apparel sourcing` · `is Nepal good for garment manufacturing` · `sourcing knitwear from South Asia`.

**D. Low-MOQ long-tail — MAYBE (some mid-difficulty):**
`low MOQ t-shirt manufacturer` · `private label t-shirt manufacturer low MOQ` · `small batch
clothing manufacturer` · `OEM t-shirt manufacturer for small brands`.

**E. Informational (blog fuel) — WINNABLE subset:**
`what is MOQ in clothing manufacturing` · `what is cut and sew manufacturing` · `private label vs
white label` · `GSM meaning t-shirt` · `single jersey vs pique` · `how to import clothing from Nepal`.

**F. Brand (must-win 100%):** `Trishakti Apparel` (+ variants). Ensure exact-match title/meta+schema.

**AVOID as primary targets:** `clothing manufacturer`, `wholesale t-shirt manufacturer`,
`best countries to manufacture clothing`, `organic cotton t-shirt manufacturer` — owned by
high-DR directories/listicles. Capture that demand *via* the directories (§5), not organically.

---

## 2. Keyword → page mapping

| Page | Primary target |
|---|---|
| `/` Home | `private-label knit/t-shirt manufacturer Nepal` + brand |
| `/products` | `t-shirt / polo / knit manufacturer Nepal`, low MOQ |
| `/capabilities` | `cut and sew Nepal`, Optitex CAD, QC, lead time |
| `/about` | `ethical garment manufacturer Nepal`, brand/legacy |
| `/contact` | RFQ / sample-request intent |
| **NEW `/why-nepal`** | comparison cluster C (Nepal vs Bangladesh/India, China+1) |
| **NEW `/duty-free-sourcing`** | cluster B (EBA / single-transformation / LDC) — **highest strategic value** |
| **NEW product sub-pages** | `/products/t-shirts`, `/polo-shirts`, `/knit-jersey`, `/woven-shirts` — 4× commercial surface |
| **NEW `/blog`** | clusters C + E (see §4) |

---

## 3. On-site SEO to-do (code — mostly quick wins)

Already done in-repo: Organization+LocalBusiness JSON-LD, FAQPage JSON-LD (home), per-page
canonicals, OG image, sitemap, robots, 301 redirects for old Laravel URLs.

Still to do:
- [ ] **`/why-nepal` + `/duty-free-sourcing` pages** (content already in `lib/content.js` →
      `whyNepal`, `compliance`). Add to sitemap + nav.
- [ ] **Split `/products` into 4 spec-rich sub-pages** (title=H1 per product), each with `Product`
      schema, GSM, fabric, sizes, MOQ.
- [ ] **`BreadcrumbList` schema** on all sub-pages.
- [ ] **Publish real MOQ / lead time / capacity / GSM** — flip `confirmed: false → true` once
      Santosh confirms. **The competitor teardown found almost NO competitor publishes MOQ** —
      transparency is an instant differentiator. Until confirmed, a stated range beats "on request".
- [ ] **Compress product images** (WebP/AVIF) — `next export` disables auto-optimization; images
      are the main Core Web Vitals risk.
- [ ] **Replace disclosed stock factory photos with real ones** (trust + originality signal).
- [ ] Ensure the `*.vercel.app` preview is **noindexed** so it doesn't duplicate production.
- [ ] Set up **Google Search Console + Bing Webmaster Tools**; submit sitemap.

---

## 4. Content / blog plan (2 posts/month; quality > frequency)

Each ~1,200–2,000 words, one spec table/checklist, real CTA, internal links to `/duty-free-sourcing`
+ product pages. Priority order:
1. **"Nepal vs. Bangladesh vs. India for knit basics: a sourcing comparison (2026)"**
2. **"How EU buyers save ~10–12% duty sourcing garments from Nepal (EBA + single transformation)"**
3. **"China Plus One for apparel: is Nepal your second sourcing country?"**
4. **"How to find & vet an overseas clothing manufacturer (without getting scammed)"** (trust play)
5. **"Low-MOQ t-shirt manufacturing: producing 300–500 pcs per style for small brands"**
6. **"What is a tech pack, and what does a factory need to quote your t-shirt?"** (offer a free template — Purnaa proves this converts)
7. **"Single vs. double transformation rules of origin, explained for importers"**
8. **"GSM, single jersey vs. pique: a t-shirt & polo fabric guide"**
9. **"Nepal LDC graduation 2026: lock in duty-free sourcing now"** (urgency/timely)
10. **"Incoterms for apparel imports: EXW, FOB, CIF from Nepal"**

**FAQ/PAA to answer with schema:** Is clothing from Nepal duty-free into the EU? Does Chinese
fabric disqualify duty-free origin? What's the MOQ? What Incoterms / how does landlocked Nepal ship?
Are you audited? What happens after LDC graduation in 2026?

---

## 5. Backlinks / Domain Rating growth (execute — real URLs)

**How DR works (Ahrefs' own docs):** 0–100 log scale of your *referring domains'* strength;
nonlinear (low end moves fast); **NOT a Google ranking factor** (~0.13 correlation) — a proxy, not
the goal. New links take days–weeks to count. Realistic pace for steady legit work: **DR 5–15 by
month 3, 15–25 by month 6, 25–35 by month 12.** Quality ≫ quantity.

### Phase 1 (weeks 1–4) — highest relevance/trust
- **Garment Association of Nepal (GAN)** — https://ganasso.org.np/general-members — member
  directory links out to member sites (verified). Join + request your URL. gan@ntc.net.np
- **TEPC exporter registration** (.gov.np) — https://tepc.gov.np (verify SSL/link-out)
- **FNCCI Associate Membership** — https://fncci.org/how-to-become-a-member--91.html
- **FEEN** — https://feennepalexports.org
- **Kompass** — https://us.kompass.com/register/company/ — **confirmed dofollow, free basic** (best-confidence link-equity win)
- **Google Business Profile** (done ✓) + **LinkedIn company page** (nofollow but essential for B2B)

### Phase 2 (weeks 2–8) — industry directories
- **Fibre2Fashion** — https://members.fibre2fashion.com/signup (largest textile B2B portal)
- **Sewport** factory profile — https://sewport.com/how-it-works-manufacturers
- **Apparel Search** — apparelsearch.com add-company · **FashionUnited** — fashionunited.com/companies

### Phase 3 (weeks 2–8) — sourcing marketplaces (leads > DR; likely nofollow)
Alibaba (register.alibaba.com), Global Sources, Go4WorldBusiness, ExportHub, EC21, Made-in-China,
Pepagora. Nepal B2B: Suchanaa (links out ✓), NepalB2B, B2BMAP, Yellow Pages Nepal, BizDire, NepalYP.
*(Skip IndiaMART/TEXPROCIL — India-only; Maker's Row — US-only.)*

### Phase 4 (months 2–6) — editorial links (highest DR value)
- **Fibre2Fashion "Write for Us"** — fibre2fashion.com/industry-article/submit-free-articles (800+ words, original)
- **Sourcing Journal guest editorial** — psadera@sourcingjournal.com (~750-word op-ed)
- **Just-Style / Apparel Resources / Fashionating World** — pitch as expert source
- **Nepal business media** — Kathmandu Post, Nepali Times, New Business Age (founder/scale-up story)

### Phase 5 (months 2–9) — linkable assets (natural magnets)
1. **"Nepal Apparel Sourcing Duty & Tariff Guide (2026–2029)"** (flagship, keep a "last verified" date)
2. **Nepal vs Bangladesh vs India comparison table** 3. **Original MOQ/lead-time benchmark data**
4. **Landed-cost calculator** (FOB + freight + EU duty-free vs US dutiable)

### AVOID (Google spam policies)
Paid links passing PageRank (use `rel="sponsored"`), PBNs, reciprocal-link schemes, bulk spammy
directory blasts, article spinning, exact-match anchor over-optimization, forum/comment spam.

---

## 6. Geo / international targeting
- **Fix the ccTLD first** (§0.5) — nothing else fully pays off while `.com.np` says "Nepal".
- Single English site → **hreflang NOT needed** yet. Use **market-framed content** instead of
  country sub-sites: "Duty-free to the **UK** (DCTS)", "to the **EU** (EBA)", "lowest **US** tariff".
- State target markets explicitly; show Incoterms/ports; keep `en`.

---

## 7. Pull REAL keyword volumes free (one afternoon)
1. **Google Keyword Planner** (ads.google.com, Expert mode, no ad spend needed) — paste seeds,
   set locations to EU/UK/US/CA, read Avg. monthly searches + Competition. Most authoritative.
2. **Google Trends** — relative interest + "Rising" related queries; screenshot the China-plus-one
   trend lines for blog proof.
3. **Google autocomplete / People-Also-Ask / Related searches** — real buyer phrasing.
4. **Ahrefs free Keyword Generator + Difficulty checker**, **Semrush free (10/day)**, **Ubersuggest (3/day)**.

---

## 8. Realistic timeline & expectations
- **Weeks 1–8:** indexing + first impressions for long-tail/branded terms; Phase 1–2 links; new pages live.
- **Months 3–6:** top-10 for many geo-qualified + duty-free long-tails; DR ~15–25.
- **Months 6–12:** competing for comparison/diversification terms; steady inquiry flow if content+links sustained.
- **Head terms:** likely never page-1 organically — normal; capture via directories/Alibaba.
- Anyone promising #1 for competitive head terms fast is selling snake oil.

---

## Sources (key)
Gartner B2B buying journey; McKinsey/BoF State of Fashion 2025; USFIA 2025 Benchmarking Study;
IISD & ITC (Nepal LDC/EBA); Ahrefs DR docs (help.ahrefs.com); Google Search Central spam policies;
EU Access2Markets (EBA), gov.uk (DCTS); live competitor fetches (Purnaa, Appareify, Billoomi,
Sewport, Alibaba, GAN, and Nepal SERP) 2026-07-13. Full citations in research transcripts.
