import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import SourcingFacts from '@/components/SourcingFacts';
import CTASection from '@/components/CTASection';
import { products, offerings, gallery, seo } from '@/lib/content';
import { asset } from '@/lib/asset';

export const metadata = {
  title: 'Products & Line Card',
  description:
    'Private-label knit basics from Trishakti Apparel — crew-neck t-shirts, polo shirts, jersey & long-sleeve, plus woven shirts. Buy custom to your tech pack or import our ready-made designs.',
  alternates: { canonical: '/products' },
};

// Product structured data for search / AI discovery.
const productsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: p.name,
      image: `${seo.url}${p.image}`,
      description: p.blurb,
      material: p.fabric,
      brand: { '@type': 'Brand', name: seo.siteName },
    },
  })),
};

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Products" title="Our line card">
        We specialise in quality knit basics — t-shirts, polos, and jersey — and also run
        woven shirts. Buy it your way: built to your own tech pack, or imported from our
        ready-made designs.
      </PageHero>

      {/* Two ways to buy */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Two ways to buy</span>
            <h2 className="mt-2 h-section">Custom-made, or ready to import</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {offerings.map((o) => (
              <div key={o.key} className="card flex flex-col p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <Icon name={o.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-ink">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body/80">{o.body}</p>
                <ul className="mt-4 space-y-2">
                  {o.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-body">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-primary-600" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link href="/contact/" className="btn-outline mt-6 self-start">
                  {o.cta}
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Line card */}
      <section className="section bg-mist/50">
        <div className="container-x space-y-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Line card</span>
            <h2 className="mt-2 h-section">What we make</h2>
          </div>
          {products.map((p) => (
            <article key={p.key} className="card grid gap-0 overflow-hidden md:grid-cols-5">
              <div className="relative aspect-[4/3] md:col-span-2 md:aspect-auto">
                <Image
                  src={asset(p.image)}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:col-span-3 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-medium text-ink">{p.name}</h3>
                  <span className="rounded-full border border-line px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
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
                  <Link href={`/products/${p.slug}/`} className="btn-primary">
                    View {p.name.toLowerCase()}
                    <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                  <Link href="/contact/" className="btn-outline">
                    Request a quote
                  </Link>
                </div>
              </div>
            </article>
          ))}

          <p className="rounded-lg border border-line bg-white p-4 text-sm text-body/70">
            <strong className="font-semibold text-ink">Don’t see your exact product?</strong>{' '}
            If it’s a knit garment, we can likely make it — and we run woven shirts too. GSM,
            MOQ, and pricing are confirmed against your tech pack rather than listed as fixed
            catalog specs, so every quote stays accurate to what you actually need.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Gallery</span>
            <h2 className="mt-2 h-section">A look at our work</h2>
            <p className="mt-4 lead">Real product photography from our own runs.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {gallery.map((g) => (
              <div key={g.src} className="relative aspect-square overflow-hidden rounded-lg border border-line">
                <Image
                  src={asset(g.src)}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />

      <CTASection
        title="Tell us what you’re building"
        body="Share your designs or ask about our ready-made styles and target quantities — we’ll confirm fabric, MOQ, price, and lead time."
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
