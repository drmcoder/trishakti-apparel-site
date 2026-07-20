import Icon from './Icon';
import { homeStats } from '@/lib/content';

// "By the numbers" credibility strip — sits directly below the hero, the first
// thing a self-researching buyer scans. Each stat pairs a specific figure with a
// short qualifier that reframes a modest-but-real number as credible.
export default function StatStrip() {
  return (
    <section aria-label="Trishakti Apparel by the numbers" className="border-b border-line bg-canvas">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-9 py-12 sm:grid-cols-4 md:gap-x-5 md:py-14">
        {homeStats.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <Icon name={s.icon} className="mx-auto h-5 w-5 text-primary-500 lg:mx-0" />
            <div className="mt-3 font-display text-3xl font-medium tabular-nums tracking-[-0.02em] text-navy sm:text-[2.1rem]">
              {s.value}
            </div>
            <div className="mt-1 text-sm font-semibold text-ink">{s.label}</div>
            <div className="mt-1.5 text-xs leading-snug text-muted">{s.qualifier}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
