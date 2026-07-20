import { sourcing } from '@/lib/content';

// Full sourcing-facts grid (used on Products & Capabilities). Confirmed rows show
// a hard value; draft rows show a soft "on request"-style value, never a fake number.
export default function SourcingFacts() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-black/[0.06] sm:grid-cols-4">
      {sourcing.map((s) => (
        <div key={s.key} className="bg-white p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted">
            {s.label}
          </div>
          <div className="mt-1.5 text-lg font-semibold text-ink">{s.value}</div>
          <div className="mt-0.5 text-xs text-body/70">{s.detail}</div>
        </div>
      ))}
    </div>
  );
}
