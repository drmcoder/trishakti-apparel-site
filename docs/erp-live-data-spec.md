# Live ERP data → website: integration spec

Goal: show **real, live production/quality data** from the Scan-ERP on the marketing site,
as a trust signal ("a real, active factory with a modern quality system") — safely, with no
customer/pricing/personal data exposed, and in a way that works with a **static export site**.

---

## 1. The architecture (why it's built this way)

The website is a **static export** (Next.js `output: 'export'` on Vercel) — no server at runtime.
So the ERP does the aggregation and **publishes one small, safe JSON**; the website consumes it.

```
  Scan-ERP (Firebase)                         Website (static, Vercel)
  ┌───────────────────┐                        ┌────────────────────────┐
  │ Cloud Function     │   writes nightly       │ GitHub Action (cron)   │
  │ aggregatePublic    │ ─────────────────────► │ pulls stats.json into  │
  │ Stats()            │   public-stats.json    │ repo → Vercel rebuild  │
  └───────────────────┘   (public URL)          └──────────┬─────────────┘
                                                            │ numbers baked into
                                                            ▼ static HTML
                                                   <LiveStats/> on homepage
```

**Chosen pattern: build-time bake (recommended).** The website's daily GitHub Action fetches the
JSON and commits it; Vercel rebuilds; the numbers end up **in the static HTML**. Why this over a
live client-side fetch:
- The figures appear in the HTML, so **Google and AI answer engines can read and cite them** (AEO win).
- No Firebase SDK or API keys shipped to the marketing site.
- Daily freshness is plenty for "produced this month" style metrics.
- If the feed is ever unreachable, the site falls back to the static confirmed stats and never breaks.

(Alternative: client-side fetch of the same JSON for a real-time "as of now" number. Fine, but
build-time is safer and better for SEO/AEO. We can add client-side later if wanted.)

---

## 2. The DATA CONTRACT — what the ERP must publish

The ERP exposes **exactly one** aggregated JSON, at a stable public URL (Firebase Hosting,
Firebase Storage public object, or an HTTPS Cloud Function). **Only these aggregate fields —
never raw records.**

```jsonc
{
  "updatedAt": "2026-07-18T02:00:00Z",   // ISO; site shows "as of 18 Jul 2026"
  "period": "rolling-30-days",            // what the volume metrics cover

  // --- QUALITY & SYSTEM (show these first — strong at any scale) ---
  "firstPassQualityPct": 97.8,            // 100 - rework rate; 1 decimal
  "reworkRatePct": 2.2,                   // from rework-tally ÷ pieces produced
  "defectTrackingDigital": true,          // per-operator/operation logging = true
  "finalInspection": "100%",              // or "AQL 2.5" once confirmed

  // --- ACTIVITY (proof it's a live, working floor) ---
  "activeLotsInProduction": 7,
  "operationsTracked": 24,
  "machinesActive": 98,

  // --- VOLUME (OPTIONAL — only enable if the numbers flatter honestly) ---
  "piecesProducedThisMonth": null,        // null = hide on site
  "piecesProducedYTD": null
}
```

### HARD RULES for the ERP side (privacy + honesty)
- **Aggregates only.** Never expose: customer/buyer names, order or article details, prices/costs,
  operator personal names, individual defect records, or anything per-person.
- **Recompute on a schedule** (nightly is fine) from Firestore: rework-tally (defects), the
  lot-pipeline-ledger / dispatch (pieces produced), workPool/machines (active counts).
- **Lock security rules** so only this one aggregate doc/file is publicly readable; all raw
  collections stay private.
- **Round sensibly** and use rolling windows (e.g. "this month", "rolling 30 days"), never
  instantaneous "today" counts (a slow day showing 0 lots reads as "dead").
- If a metric isn't ready or shouldn't show, send `null` — the site hides null fields.

### How `reworkRatePct` maps to a claim (from the AQL discussion)
`reworkRatePct = total rework pieces ÷ total pieces produced × 100`
- ≤ ~2–3% → can honestly state **AQL 2.5 (2.5 major / 4.0 minor)**; set `finalInspection: "AQL 2.5"`.
- ~3–5% → keep `finalInspection: "100%"` and the "to your specified AQL" wording.
- \> 5% → don't publish an AQL claim yet.

---

## 3. What the website will render (site side — I build this)

A **"Live from our floor"** section (homepage or /about), e.g.:

> **Live from our floor** · as of 18 Jul 2026
> **97.8%** first-pass quality  ·  **100%** final inspection  ·  **Digital** defect tracking
> **7** lots in production  ·  **~98** machines active
> *Every defect is logged to the operation and operator in our own ERP — quality is managed, not hoped for.*

- Null fields are omitted automatically.
- Always carries an **"as of [date]"** stamp so it reads as real data, not marketing.
- Falls back to the static confirmed stats (≈100 machines, 80% women) if the feed is missing.
- The quality/system framing beats a competitor's bare "AQL 2.5" — it shows a modern system.

Optional, high-impact and zero-risk: an **anonymised screenshot or short screen-capture of the
rework-tally dashboard** (operator names blurred) as visual proof of the digital quality system.

---

## 4. Copy-paste brief for the ERP project

> Build a scheduled Firebase Cloud Function `aggregatePublicStats` that runs nightly and writes a
> single public JSON (to Firebase Hosting/Storage at a stable URL, publicly readable) matching the
> data contract in the website repo's `docs/erp-live-data-spec.md` §2. Compute: firstPassQualityPct
> and reworkRatePct from rework-tally vs pieces-produced over a rolling 30 days; activeLotsInProduction,
> operationsTracked, machinesActive from current state. Expose AGGREGATES ONLY — no customer, order,
> price, or operator-personal data — and lock Firestore/Storage rules so only this one file is public.
> Set volume fields to null for now. Return the final public URL.

Once the ERP returns that public URL, the website adds a daily GitHub Action to pull it + a
`<LiveStats/>` component to render it. Site work is ~1 hour; nothing ships until the feed is live.
