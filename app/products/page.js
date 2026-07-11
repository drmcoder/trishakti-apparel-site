import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import SourcingFacts from '@/components/SourcingFacts';
import CTASection from '@/components/CTASection';
import { products } from '@/lib/content';

export const metadata = {
  title: 'Products & Line Card',
  description:
    'Private-label knit basics from Trishakti Apparel — crew-neck t-shirts, polo shirts, and jersey/pique garments. Fabric, sizes, and MOQ made to your tech pack.',
};

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Products" title="Our line card">
        We specialise in quality knit basics, produced to your designs and spec charts.
        Fabric weights and per-style minimums are confirmed for your program — send a
        tech pack or reference and we’ll quote it.
      </PageHero>

      <section className="section">
        <div className="container-x space-y-8">
          {products.map((p) => (
            <article
              key={p.key}
              className="card grid gap-0 overflow-hidden md:grid-cols-5"
            >
              <div className="photo-ph flex min-h-[220px] items-center justify-center md:col-span-2">
                <div className="relative z-10 flex flex-col items-center gap-2 text-navy/30">
                  <Icon name="tag" className="h-9 w-9" />
                  <span className="text-xs font-medium uppercase tracking-widest">Product photo</span>
                </div>
              </div>
              <div className="p-6 md:col-span-3 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-semibold text-ink">{p.name}</h2>
                  <span className="rounded-full bg-brand-green/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-green">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-3 max-w-prose leading-relaxed text-body/80">{p.blurb}</p>

                <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-3">
                  <Spec label="Fabric" value={p.fabric} />
                  <Spec
                    label="GSM range"
                    value={p.gsm.confirmed && p.gsm.value ? p.gsm.value : 'Confirmed per order'}
                  />
                  <Spec label="Size range" value={p.sizes} />
                </dl>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact/" className="btn-primary">
                    Request a quote
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                  <Link href="/capabilities/" className="btn-outline">
                    How we build it
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {/* Honest note about specs we don't publish as hard numbers yet */}
          <p className="rounded-lg border border-black/[0.06] bg-mist/60 p-4 text-sm text-body/70">
            <strong className="font-semibold text-ink">Don’t see your exact product?</strong>{' '}
            If it’s a knit garment, we can likely make it. GSM, MOQ, and pricing are
            confirmed against your tech pack rather than listed as fixed catalog specs —
            it keeps every quote accurate to what you actually need.
          </p>
        </div>
      </section>

      {/* Sourcing facts */}
      <section className="section bg-mist/50">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Sourcing at a glance</span>
            <h2 className="mt-2 h-section">The facts buyers ask for first</h2>
            <p className="mt-4 lead">
              Confirmed capabilities are shown as-is. Figures marked “on request” are
              quoted precisely for your order — we’d rather give you a real number than a
              rounded one.
            </p>
          </div>
          <div className="mt-10">
            <SourcingFacts />
          </div>
        </div>
      </section>

      <CTASection
        title="Tell us what you’re building"
        body="Share your designs or a sample reference and target quantities — we’ll confirm fabric, MOQ, price, and lead time."
      />
    </>
  );
}

function Spec({ label, value }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-body/50">{label}</dt>
      <dd className="mt-1 font-medium text-ink">{value}</dd>
    </div>
  );
}
