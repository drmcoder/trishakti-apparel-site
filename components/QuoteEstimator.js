'use client';

// Buyer-facing feasibility + instant-quote estimator. No guessed prices (protects margin);
// confirms feasibility + duty-free status, captures the full spec via a pre-filled WhatsApp quote.
import { useState, useMemo } from 'react';

const DUTY = {
  'European Union': { free: true, note: 'duty-free (EBA, single transformation — imported fabric OK)' },
  'United Kingdom': { free: true, note: 'duty-free (DCTS, single transformation)' },
  Canada: { free: true, note: 'duty-free (LDCT — cut & sew confers origin since Jan 2025)' },
  Japan: { free: true, note: 'duty-free (LDC single-stage rule)' },
  Australia: { free: 'cond', note: 'LDC duty-free is conditional (≥50% local content) — we verify per product' },
  'United States': { free: false, note: 'not duty-free to the US (we compete on quality, ethics & MOQ)' },
  Other: { free: 'ask', note: "tell us the country and we'll confirm your duty treatment" },
};
const MOQ = 500;
const WA = 'https://wa.me/9779863618347';

export default function QuoteEstimator() {
  const [product, setProduct] = useState('T-shirts');
  const [fabric, setFabric] = useState('Cotton jersey');
  const [qty, setQty] = useState(1000);
  const [dest, setDest] = useState('European Union');

  const { head, checks, waHref } = useMemo(() => {
    const D = DUTY[dest];
    const q = parseInt(qty) || 0;
    const meetsMoq = q >= MOQ;
    const dutyOk = D.free === true;
    const rows = [
      { cls: meetsMoq ? 'ok' : 'warn', i: meetsMoq ? '✓' : '!',
        t: meetsMoq
          ? `Meets our MOQ — ${q.toLocaleString()} pcs is fine (min 500/style).`
          : "Below our 500/style MOQ — ask us; we're often flexible for growing brands." },
      { cls: 'ok', i: '✓',
        t: `We make ${product.toLowerCase()} in ${fabric.toLowerCase()} — all knit fabrics, your designs, in-house CAD.` },
      { cls: dutyOk ? 'ok' : 'warn', i: dutyOk ? '✓' : '!', t: `${dest}: ${D.note}.` },
      { cls: 'ok', i: '✓', t: 'Lead time: samples ~1–2 weeks · bulk ~40–50 days after sample approval.' },
    ];
    const msg = `Hi Trishakti, I'd like a quote: ${q.toLocaleString()} x ${product} in ${fabric}, for ${dest}. Please send your exact price.`;
    return {
      head: meetsMoq ? 'Yes — we can make this' : "Let's talk — likely yes",
      checks: rows,
      waHref: `${WA}?text=${encodeURIComponent(msg)}`,
    };
  }, [product, fabric, qty, dest]);

  const sel = 'w-full rounded-lg border border-line bg-white px-3 py-2.5 text-base text-ink focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200';

  return (
    <div className="mx-auto max-w-xl">
      <div className="rounded-2xl border border-line bg-canvas p-6 shadow-card">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Product</span>
            <select value={product} onChange={(e) => setProduct(e.target.value)} className={sel}>
              {['T-shirts', 'Tanks', 'Long-sleeve tees', 'Polo shirts', 'Sweatshirts', 'Hoodies'].map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Fabric</span>
            <select value={fabric} onChange={(e) => setFabric(e.target.value)} className={sel}>
              {['Cotton jersey', 'Cotton/CVC blend', 'Polyester / poly-blend', 'Performance / athleisure', 'Modal / viscose blend', 'Fleece / French terry'].map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Quantity (per style)</span>
            <input type="number" step="100" value={qty} onChange={(e) => setQty(e.target.value)}
              className={`${sel} tabular-nums`} />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink">Your market</span>
            <select value={dest} onChange={(e) => setDest(e.target.value)} className={sel}>
              {Object.keys(DUTY).map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-line shadow-card">
        <div className="bg-navy px-6 py-4 text-white">
          <div className="text-xs uppercase tracking-[0.08em] opacity-85">Your instant check</div>
          <div className="mt-1 font-display text-xl font-semibold">{head}</div>
        </div>
        <div className="bg-canvas px-6 py-5">
          <ul className="space-y-2.5">
            {checks.map((c, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <span className={`w-5 flex-none font-extrabold ${c.cls === 'ok' ? 'text-success' : 'text-warning'}`}>{c.i}</span>
                <span className="text-body">{c.t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-line pt-4">
            <a href={waHref} target="_blank" rel="noopener noreferrer"
              className="block rounded-lg bg-whatsapp px-4 py-3.5 text-center text-base font-semibold text-white transition hover:opacity-90">
              Get my exact price on WhatsApp &rarr;
            </a>
            <p className="mt-2 text-center text-xs text-muted">Sends your spec to our team — a real quote, not a guess.</p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        Feasibility and duty status are indicative; final price, lead time and duty-free eligibility
        depend on your exact design, fabric and destination rules of origin — confirmed on quote. We
        don't publish prices: every quote is costed to your real specs.
      </p>
    </div>
  );
}
