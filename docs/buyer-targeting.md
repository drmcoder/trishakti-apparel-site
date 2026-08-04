# Buyer targeting — what the customs data actually says (3 Aug 2026)

Built from two Pakistan export-data pulls (sweatshirts/hoodies and sportswear, May 2026),
verified against current tariff schedules. Read this **before** the next outreach round —
it corrects two things the site and `buyer-master-list.md` currently get wrong.

---

## 0. The three findings that change what we do

1. **The duty-free pitch does not work on most competitors.** Pakistan, Bangladesh, Sri Lanka,
   Cambodia and (since 15 July 2026) India all land at 0% in the UK. Our duty edge is real only
   against **China** and **Indonesia**. Lead with duty only when the buyer sources from China.
2. **Our published MOQ locks us out of the best-fit market.** ~80% of the sportswear shipments are
   under 500 pcs — the least price-sensitive, least audit-gated segment — and our site says 500–1,000.
3. **Every bulk and retail-chain buyer requires a social audit we don't have.** Sedex SAQ is at 0%.
   This gates the entire volume strategy. Nothing else on this page matters until it's booked.

---

## 1. Corrected duty positioning

| Our duty edge is… | UK | EU |
|---|---|---|
| vs **China** | ✅ ~12% | ✅ ~12% |
| vs **Indonesia** | ✅ (DCTS graduation, Jan 2026) | — |
| vs **India** | ❌ 0% since UK–India CETA, 15 Jul 2026 | ✅ ~9.6% |
| vs Bangladesh / Pakistan / Sri Lanka / Cambodia | ❌ tied at 0% | ❌ tied at 0% |
| vs **Canada (any dutiable origin)** | — | ✅ 18% MFN — our biggest single saving |

**Implication for the website and the pitch:** "duty-free to the EU/UK/Canada" is true but not
differentiating against our actual competition. Against a South Asian incumbent, lead with
**MOQ, flexibility, and attention**. Against a China incumbent, lead with duty — it's worth ~12%.

⚠️ India had lost UK preference on 1 Jan 2026 and paid up to 12% for six months. That window
**closed on 15 July 2026**. Don't build a pitch on it.

---

## 2. The two markets in the data

The two files describe entirely different businesses:

| | Retail-brand knitwear | Teamwear / uniform / niche |
|---|---|---|
| Typical order | **3,000–10,600 pcs** | **under 500 pcs** |
| Share under 500 pcs | ~30% | **~80%** |
| Unit price | $2.10–8.69 | $4–39 |
| Buyers | Inditex, Mango, Woolworth, Fashion Nova | Vixn Fit, PL Schoolwear, Grip Racewear, fight/race/hockey brands |
| Gate | Full audit, price | Responsiveness, small runs |

**Small + repeat beats big + once.** Urban Couture Group placed six orders in ten days
(150/200/200/400/540/560) — ~2,000 pcs/yr from one buyer, at 3× the unit price of a Woolworth bulk run.

### Prices in this data are NOT a benchmark
- Rows tagged **"EFS SRO 957"** are under Pakistan's Export Facilitation Scheme — inputs imported
  under bond. Where fabric is buyer-supplied, the declared value is the **making charge only**.
- Sanity check: Woolworth, 9,018 pcs, $19,824 = **$2.20/pc** for a printed 41/59 hooded sweatshirt.
  A hoodie needs 0.6–0.8 kg of fleece; even at $3/kg that's ~$2 of fabric before a stitch.
  **That's a CMT charge or a data error, not a garment price.**
- The UNIT column mixes **per-kg and per-piece**. Mango's "$13.34" is per kilo (~$3/pc).
- Only trust rows where Incoterm, fabric inclusion and spec are known. In this dataset that's
  **PL Schoolwear $5.10–5.80** and **Vixn Fit $13.37** — both per piece, both UK.

**Price our work bottom-up:** `fabric consumption × fabric price + trims + CMT + overhead + margin`.

---

## 3. MOQ — the constraint to solve

Our positioning claims flexible MOQ at **300–500**. The site publishes **500–1,000**. The data says
the gap is where the market is.

**Diagnose the real floor first.** 100 machines will happily run 300 pcs — the binding constraint is
almost certainly **fabric**: Chinese mills typically hold 300–500 kg minimums per colour. If so:

- **Hold core fabric** in 4–6 staple weights/colours so small orders cut from stock (ties up cash,
  turns MOQ into a real weapon)
- **Buy from a stockist**, not a mill, for small runs
- ⭐ **Offer a 300-pc trial tier at +20–25%.** Buyers accept a premium on a first order; nobody gives
  a 5,000-pc first order to an unaudited factory they've never met. The trial converts; the reorder
  is the business.

---

## 4. Target segments, in priority order

### A. Importers / wholesalers / trading houses — **best route to bulk**
Buy volume, vet far less strictly than retail brands, resell to many end clients. **Start here.**

| Buyer | Country | Qty seen | Notes |
|---|---|---|---|
| **PL SCHOOLWEAR LTD** ⭐⭐ | 🇬🇧 | 115 · 216 · 683 · **5,050** | Schoolwear, 65/35 poly-cotton, $5.10–5.80/pc. Orders both small **and** bulk, annual repeating cycle. Best single target: start small, grow into volume. UK = our durable duty market. |
| **IMAGINE DESIGN INC** | 🇺🇸 | 10,598 | Ladies 3-terry sweatshirt |
| **BLUE STAR IMPORTS L P** | 🇺🇸 | 1,555 · 7,176 · 3,941 | Repeat; 450 GSM (above our 400 max — check) |
| **STITCHMATE LTD** | 🇬🇧 | 3,749 | $4.48 |
| **J AND J APPAREL INC** | 🇺🇸 | 3,040 | Mens sweatshirts/hoodies |
| **INNO KNITS LLC** | 🇨🇦 | 434 · 1,000 | Canada = 18% MFN saving vs dutiable origins |
| **5 STAR TRADEX LTD** | 🇬🇧 | 500 | "tshirts hoodies sweatshirts" — our whole range |

### B. Niche activewear / uniform brands — **best margin**
| **VIXN FIT LTD** ⭐⭐ | 🇬🇧 | 1,099 | **$13.37/pc**, 90% poly / 10% spandex — our exact activewear capability, our exact MOQ, at a workable price |
|---|---|---|---|
| **TRADEWIND GMBH** | 🇩🇪 | 1,571 kg | |
| **GRIP RACEWEAR** | 🇬🇧 | 1,000 | |
| **TGS FIGHTGEAR SRO** | 🇨🇿 | 424 | |
| **PROCHEER UNIFORMS** | 🇨🇦 | 104 | |

### C. Retail chains / department stores ("mall type") — **highest volume, hardest gate**
Ahlens (🇸🇪), Woolworth (🇩🇪), Mango (🇪🇸), Inditex (🇪🇸), Fashion Nova (🇺🇸).

**Understand how they actually buy before targeting them:**
- **Audit is mandatory and pre-qualifying** — BSCI, SMETA, or their own code. No audit, no PO. Ever.
- **They rarely onboard factories direct.** Most source through **buying agents / sourcing offices**.
  One agent relationship routes chain orders — that's the realistic door, not a cold email to HQ.
- **They buy to a calendar**, 6–9 months ahead. To land AW27 you must be in front of buyers by
  **early 2027** — which is exactly what the January shows are for.
- **Vendor onboarding** needs a DUNS number (free), bank details, factory profile, and usually a
  physical audit visit.
- **Tier realistically.** Inditex/Mango/H&M are not a 12-month target. Regional department stores,
  discount chains, supermarket clothing lines, and catalogue/online retailers are.
- ⚠️ **Woolworth at $2.10/pc for 9,000 pcs is not our customer.** We cannot make that and shouldn't
  try. It is the clearest evidence in the file for "don't chase commodity bulk."

### D. Deprioritise
Individual US buyers ordering 1–100 pcs of team kit (Tommy L Harville, Richie Sunga, Brandon Eaton…)
— below MOQ, no duty advantage. And the sub-300 custom-jersey segment runs on **dye-sublimation
printing**, a capability we don't have; those Sialkot/Faisalabad sellers are purpose-built for it.

---

## 5. The next data pulls

### ⭐ Pull #1 — who already imports from Nepal
The highest-probability list available anywhere. These buyers have **already solved** Nepali
documentation, LDC origin paperwork, Kolkata transit and lead times. If they buy knit from another
Nepali factory, they can buy from us.

- Seller country: **Nepal**
- HS: **6109, 6110, 6105, 6106, 6111, 6103, 6104**
- Destination: **UK, EU, Canada** (skip US — no duty advantage)
- Range: **last 12 months**, sort by **quantity desc**

Then **reverse-lookup**: take each Nepali exporter that appears and pull *their* buyer list —
competitors' customers, buying our product, from our country, at volume.

### Pull #2 — where our duty edge is worth 12%
- Seller: **China** · Destination: **UK / EU** · HS **6110 / 6109** · Qty **3,000–20,000**
- These buyers pay ~12%. We're the only origin on the list where switching saves real money.

### The standing filter
**Qty 300–5,000 · unit price ≥ $4 · destination UK/EU/Canada.** That band is where we win.

---

## 6. Vetting a buyer (fraud screen)

Outbound is self-verifying — when *we* pick a real brand, legitimacy is largely settled. Fraud
arrives through **inbound** marketplace leads (Alibaba, TradeKey, ExportHub, Go4WorldBusiness).

**10-minute free checks:** EU **VIES** (VAT number must match the name) · UK **Companies House** ·
DE Handelsregister / NL KvK / DK CVR / SE Bolagsverket · LinkedIn history of the person ·
domain age and a company-domain email (not gmail) · can we find their product in real shops?

**Payment structure matters more than vetting:**
- 30% advance TT, 70% against copy of B/L
- **Never release the original B/L before payment** — whoever holds it controls the cargo
- **L/C only when advised through our own Nepali bank.** Never accept a PDF from the buyer —
  forged L/Cs are the most common large-value export fraud and look perfect to an untrained eye
- Never ship open account / DA to a new buyer
- **Charge for samples and freight** — filters more time-wasters than any other single rule

**Walk away if:** they ask *us* to pay any fee (registration, agent, certification, customs —
always a scam) · huge first order with no spec questions and no price negotiation · bank in a
different country from the company · sudden bank-detail change mid-deal (confirm by phone on a
number we already had) · **they ask for an under-declared invoice.**

> **On under-invoicing:** it's customs fraud in the buyer's country and a foreign-exchange offence
> here; export proceeds are reconciled against the export declaration, so a $2-declared / $9-received
> mismatch is exactly what that system detects. It also risks the **origin privilege the whole
> business depends on**, kills L/C access, and — decisively — **saves nothing**, because most target
> buyers are already at 0% duty. A buyer who wants a false invoice will also dispute quality to
> avoid the balance payment.

---

## 7. Sequence

| | Action | Blocks |
|---|---|---|
| **Now** | **Book SMETA** ($2–4k, 1–3 months). Complete the free Sedex SAQ + Environment SAQ today. | Everything in §4A and all of §4C |
| **Now** | Confirm whether fabric or sewing sets our MOQ floor; decide the 300-pc trial tier | §3 |
| Week 1 | Pull #1 (Nepal export data) + reverse-lookup | — |
| Week 2 | Contact PL Schoolwear and Vixn Fit — named people, not `info@` | — |
| Week 3 | Apply via TEPC for **Source Fashion London (19–21 Jan 2027)** and **PSI Cologne (12–14 Jan 2027)** — consecutive weeks, one trip | — |
| Ongoing | 50 touches/week, LinkedIn first | — |

**Scoreboard:** touches · replies · samples requested · quotes issued.

See also: [growth-plan-2026.md](growth-plan-2026.md) (channels, SEO, the 24-Nov clock) and
[customs-data-playbook.md](customs-data-playbook.md) (ImportYeti technique).
