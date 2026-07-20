'use client';

// Buyer-facing duty-savings calculator. Data verified 2026-07 incl. rules of origin.
// See docs/tariff-data-verified.md. Honest: Australia flagged conditional, US not duty-free.
import { useState, useMemo } from 'react';

// MFN duty on knit tees (HS 6109) + Nepal status per destination.
const DEST = {
  'European Union': { mfn: 12, nepal: 0, note: 'EBA — single transformation, imported fabric OK, to ~2029' },
  'United Kingdom': { mfn: 12, nepal: 0, note: 'DCTS — single transformation, imported fabric OK' },
  Canada: { mfn: 18, nepal: 0, note: 'LDCT — since Jan 2025 cut & sew confers origin, any fabric' },
  Japan: { mfn: 9.2, nepal: 0, note: 'LDC single-stage rule — imported fabric OK' },
  Australia: { mfn: 5, nepal: 0, conditional: true, note: 'LDC scheme needs ≥50% local content — imported-fabric garments may not qualify' },
  'United States': { mfn: 26.5, nepal: null, note: 'not duty-free; ~26.5% like India/Bangladesh; China ~34%' },
};
// Origins already duty-free into a destination (=> no duty saving vs Nepal).
const FREE = {
  China: {},
  India: { Australia: 1 },
  Bangladesh: { 'European Union': 1, 'United Kingdom': 1, Canada: 1, Australia: 1, Japan: 1 },
  Vietnam: { 'European Union': 1, 'United Kingdom': 1 },
  Turkey: { 'European Union': 1 },
  Pakistan: { 'European Union': 1, 'United Kingdom': 1 },
  Cambodia: { 'European Union': 1, 'United Kingdom': 1, Canada: 1, Australia: 1, Japan: 1 },
  'Other / non-preferential': {},
};
const WA = 'https://wa.me/9779863618347';
const money = (n) => '$' + Math.round(n).toLocaleString();

export default function DutySavingsCalculator() {
  const [dest, setDest] = useState('European Union');
  const [origin, setOrigin] = useState('China');
  const [value, setValue] = useState(500000);

  const r = useMemo(() => {
    const D = DEST[dest];
    const oShort = origin.split(' /')[0];
    if (D.nepal === null) {
      return { kind: 'us', cur: D.mfn + '%', nep: '~26.5%',
        head: 'Nepal is not duty-free to the US', big: '—',
        cap: "But Nepal's tariff (~26.5%) matches India & Bangladesh; only China is higher (~34%).",
        msg: 'The US grants Nepal no duty-free entry (NTPP expired Dec 2025). Choose Nepal for quality, ethics and flexible MOQ — not US duty savings.', warn: true };
    }
    if (D.conditional) {
      return { kind: 'cond', cur: D.mfn + '%', nep: '0% if it qualifies',
        head: 'Duty-free to Australia is conditional', big: 'Verify origin',
        cap: "Australia's LDC rule needs ≥50% local content — hard to meet with imported fabric.",
        msg: 'Australia grants LDCs duty-free, but only if ≥50% of factory cost is local. Because your fabric is imported (usually most of the cost), garments may not qualify. Australia’s duty is only 5% anyway — confirm eligibility first.', warn: true };
    }
    const free = FREE[origin] && FREE[origin][dest];
    const cur = free ? 0 : D.mfn;
    const saving = ((cur - D.nepal) / 100) * (Number(value) || 0);
    if (free) {
      return { kind: 'free', cur: cur + '%', nep: '0%',
        head: `You're already duty-free from ${oShort}`, big: '$0 duty saving',
        cap: 'Nepal matches 0% — and adds flexibility + a hedge.',
        msg: `${oShort} already enters ${dest} duty-free, and so does Nepal. The reason to add Nepal: low/flexible MOQ, all knit fabrics, ethical production — plus a duty-free hedge if ${oShort} loses its preference.` };
    }
    return { kind: 'save', cur: cur + '%', nep: '0%',
      head: 'Estimated annual duty saving', big: money(saving),
      cap: `vs. ${cur}% duty from ${oShort} into ${dest} (${D.note.split(' —')[0]}).`,
      msg: `Sourcing from ${oShort} into ${dest} you pay ${cur}% duty. Made in Nepal, the same garments enter at 0% — even with imported fabric, under single-transformation rules. That's ${money(saving)}/yr back in your margin.`,
      saving };
  }, [dest, origin, value]);

  const waHref = `${WA}?text=${encodeURIComponent(
    `Hi Trishakti, I sell into ${dest}, currently source from ${origin.split(' /')[0]}, ~$${Number(value).toLocaleString()}/yr. I'd like a duty-free quote.`
  )}`;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Inputs */}
      <div className="rounded-2xl border border-line bg-canvas p-6 shadow-card">
        <label className="block text-sm font-medium text-ink">Where do you sell / import into?</label>
        <select value={dest} onChange={(e) => setDest(e.target.value)}
          className="mt-2 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-base text-ink focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200">
          {Object.keys(DEST).map((k) => <option key={k}>{k}</option>)}
        </select>

        <label className="mt-5 block text-sm font-medium text-ink">Where do you currently produce?</label>
        <select value={origin} onChange={(e) => setOrigin(e.target.value)}
          className="mt-2 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-base text-ink focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200">
          {Object.keys(FREE).map((k) => <option key={k}>{k}</option>)}
        </select>

        <label className="mt-5 block text-sm font-medium text-ink">Annual sourcing spend (USD)</label>
        <input type="number" step="10000" value={value} onChange={(e) => setValue(e.target.value)}
          className="mt-2 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-base tabular-nums text-ink focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200" />
      </div>

      {/* Result */}
      <div className="overflow-hidden rounded-2xl border border-line shadow-card">
        <div className="bg-navy px-6 py-6 text-white">
          <div className="text-xs uppercase tracking-[0.1em] opacity-85">{r.head}</div>
          <div className="mt-1 font-display text-4xl font-semibold leading-none tabular-nums">{r.big}</div>
          <div className="mt-2 text-sm opacity-90">{r.cap}</div>
        </div>
        <div className="bg-canvas px-6 py-5">
          <div className="mb-4 flex items-stretch gap-3">
            <div className="flex-1 rounded-xl border border-line p-3">
              <div className="text-[11px] uppercase tracking-wide text-muted">Current duty ({origin.split(' /')[0]})</div>
              <div className="font-display text-2xl font-semibold text-ink tabular-nums">{r.cur}</div>
            </div>
            <div className="self-center text-xl text-muted">&rarr;</div>
            <div className="flex-1 rounded-xl border p-3" style={{ borderColor: '#15803d', background: '#f0f7f1' }}>
              <div className="text-[11px] uppercase tracking-wide" style={{ color: '#15803d' }}>From Nepal</div>
              <div className="font-display text-2xl font-semibold tabular-nums" style={{ color: '#15803d' }}>{r.nep}</div>
            </div>
          </div>
          <p className={`rounded-lg border-l-4 px-3 py-2.5 text-sm ${r.warn ? 'border-warning bg-amber-50 text-warning' : 'border-success bg-emerald-50 text-ink'}`}>
            {r.msg}
          </p>
          <div className="mt-4 border-t border-line pt-4">
            <p className="mb-2 text-sm text-muted">Want the exact landed-cost breakdown for your styles?</p>
            <a href={waHref} target="_blank" rel="noopener noreferrer"
              className="block rounded-lg bg-whatsapp px-4 py-3 text-center text-base font-semibold text-white transition hover:opacity-90">
              Get a quote on WhatsApp &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
