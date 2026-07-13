import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import SourcingFacts from '@/components/SourcingFacts';
import CTASection from '@/components/CTASection';
import { asset } from '@/lib/asset';
import { products, seo } from '@/lib/content';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function generateMetadata({ params }) {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: p.h1,
    description: p.seoDescription,
    alternates: { canonical: `/products/${p.slug}` },
    keywords: p.keywords,
    openGraph: {
      title: `${p.h1} · ${seo.siteName}`,
      description: p.seoDescription,
      images: [{ url: p.image }],
    },
  };
}

export default function ProductPage({ params }) {
  const p = getProduct(params.slug);
  if (!p) notFound();
  const related = products.filter((x) => x.slug !== p.slug);

  // NOTE: no Product schema here on purpose — Google's Product rich result
  // requires offers(price)/review/aggregateRating, which a quote-based B2B
  // manufacturer can't provide honestly. Breadcrumb schema is the valid signal.
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${seo.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${seo.url}/products/` },
      { '@type': 'ListItem', position: 3, name: p.name, item: `${seo.url}/products/${p.slug}/` },
    ],
  };

  return (
    <>
      {/* Breadcrumb + hero */}
      <section className="border-b border-line bg-mist/70">
        <div className="container-x py-12 sm:py-16">
          <nav className="text-xs text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary-700">Home</Link>
            <span className="px-1.5">/</span>
            <Link href="/products/" className="hover:text-primary-700">Products</Link>
            <span className="px-1.5">/</span>
            <span className="text-ink">{p.name}</span>
          </nav>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">{p.tag}</span>
              <h1 className="mt-3 font-display text-4xl font-medium tracking-[-0.02em] text-ink sm:text-5xl">
                {p.h1}
              </h1>
              <p className="mt-5 lead measure">{p.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact/" className="btn-primary">
                  Request a quote
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link href="/why-nepal/" className="btn-outline">Duty-free advantage</Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line">
              <Image src={asset(p.image)} alt={p.alt} fill sizes="(max-width:1024px) 90vw, 560px" className="graded object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Specs + details */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <span className="eyebrow">What we make</span>
            <h2 className="mt-2 h-section">Built to your spec</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {p.details.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-body">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <aside>
            <div className="card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Specification</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <Row label="Fabric" value={p.fabric} />
                <Row label="GSM range" value={p.gsm.confirmed && p.gsm.value ? p.gsm.value : 'Confirmed per order'} />
                <Row label="Sizes" value={p.sizes} />
                <Row label="MOQ" value="From ~300 pcs / style" />
                <Row label="Lead time" value="Sample 7–14d · Bulk 30–45d" />
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Sourcing facts */}
      <section className="section bg-mist/50">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Sourcing at a glance</span>
            <h2 className="mt-2 h-section">The facts buyers ask for first</h2>
          </div>
          <div className="mt-10"><SourcingFacts /></div>
        </div>
      </section>

      {/* Related products */}
      <section className="section">
        <div className="container-x">
          <span className="eyebrow">Also in our line</span>
          <h2 className="mt-2 h-section">More knit &amp; woven basics</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/products/${r.slug}/`} className="card group overflow-hidden transition-[transform,border-color] duration-300 ease-premium hover:-translate-y-1 hover:border-ink/15">
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image src={asset(r.image)} alt={r.alt} fill sizes="(max-width:1024px) 45vw, 360px" className="graded object-cover transition duration-700 ease-premium group-hover:scale-[1.04]" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-medium text-ink">{r.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body/80">{r.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <CTASection
        title={`Ready to price your ${p.name.toLowerCase()} program?`}
        body="Send your designs or tech pack and target quantities — we’ll confirm fabric, MOQ, price, and lead time."
      />
    </>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right font-medium text-ink">{value}</dd>
    </div>
  );
}
