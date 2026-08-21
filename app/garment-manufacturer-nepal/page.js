import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import Icon from '@/components/Icon';
import { seo, contact } from '@/lib/content';
import { og } from '@/lib/seo';

export const metadata = {
  title: 'Garment Manufacturer in Nepal — Actually in Nepal',
  description:
    'Trishakti Apparel is a registered knit garment factory in Gaindakot, Nepal — 150+ machines, 26–30k pieces/month, MOQ 1,000 pcs/style, 0% duty to the UK, EU, Canada and Japan. Visit us, or verify us live on video.',
  alternates: { canonical: '/garment-manufacturer-nepal' },
  openGraph: og({ title: 'Garment Manufacturer in Nepal · Trishakti Apparel', path: '/garment-manufacturer-nepal/' }),
  keywords: [
    'garment manufacturer Nepal',
    'clothing manufacturers in Nepal',
    't-shirt manufacturer Nepal',
    'knitwear factory Nepal',
    'private label clothing manufacturer Nepal',
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${seo.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Garment Manufacturer in Nepal', item: `${seo.url}/garment-manufacturer-nepal/` },
  ],
};

const facts = [
  { k: '150+', v: 'Sewing machines', d: 'A dedicated single-floor knit line in Gaindakot, Gandaki Province.' },
  { k: '26–30k', v: 'Pieces per month', d: 'Confirmed per program — capacity to grow into, small enough to care.' },
  { k: '1,000 pcs', v: 'MOQ per style', d: 'Colour splits agreed per program. Built for first orders.' },
  { k: '0%', v: 'Duty to UK · EU · CA · JP', d: 'LDC trade preference, origin paperwork supplied with every shipment.' },
];

const proofs = [
  'A registered Nepali exporter with an EXIM code — company documents available on request.',
  'A physical factory at Gaida Chowk, Ward-6, Gaidakot — visit in person, any working day.',
  'Live, unscripted video walkthroughs where you direct the camera — no appointment theatre.',
  'Named ownership: you deal directly with the founder, not a sales layer.',
];

export default function GarmentManufacturerNepalPage() {
  return (
    <>
      <PageHero eyebrow="Made in Nepal — verifiably" title="A garment manufacturer actually in Nepal">
        Search “garment manufacturer Nepal” and much of what ranks is foreign factories marketing
        at Nepal’s name. We are the other kind: a registered knit factory in Gaindakot you can
        visit, video-call, and verify — making private-label tees, polos, fleece and kidswear for
        export.
      </PageHero>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.k} className="card p-6">
                <p className="font-display text-3xl font-medium text-navy">{f.k}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{f.v}</p>
                <p className="mt-2 text-sm leading-relaxed text-body/75">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist/50">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Why Nepal</span>
            <h2 className="mt-2 h-section">The honest case for a Nepali factory</h2>
            <div className="prose-custom mt-5 space-y-4 text-body/85">
              <p>
                Nepal-made knitwear enters the <strong className="text-ink">UK, EU, Canada and Japan at 0%
                import duty</strong> under least-developed-country trade preferences — with
                single-transformation rules, so imported fabric still qualifies. Against China
                that’s a 12–18 point landed-cost gap; we supply the origin documents that claim it.
              </p>
              <p>
                And the honest part: Bangladesh enjoys the same 0%. Our case against the mega-hubs
                isn’t duty — it’s a <strong className="text-ink">1,000-piece MOQ</strong> they won’t touch,
                dedicated rather than overbooked capacity, an <strong className="text-ink">80% women</strong>{' '}
                workforce paid fairly, and a factory that answers within 24 hours.{' '}
                <Link href="/why-nepal/" className="font-medium text-primary-700 hover:underline">The full duty breakdown →</Link>
              </p>
            </div>
          </div>
          <div>
            <span className="eyebrow">Verify, don’t trust</span>
            <h2 className="mt-2 h-section">How buyers check we’re real</h2>
            <ul className="mt-5 space-y-3">
              {proofs.map((p) => (
                <li key={p} className="flex gap-3 text-body/85">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-primary-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link href="/blog/how-to-verify-overseas-factory-remotely/" className="mt-6 inline-flex font-medium text-primary-700 hover:underline">
              Our guide to verifying any factory remotely →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">What we make</span>
          <h2 className="mt-2 h-section">Knit garments, full package</h2>
          <p className="mt-4 lead">
            Crew-neck tees (160–240 gsm), piqué and jersey polos, sweatshirts and hoodies in
            fleece or French terry (280–450 gsm), long-sleeve jersey, tanks, poly-spandex
            activewear, knit shorts, and children’s co-ord sets — cut and sewn to your tech pack,
            with your labels, from fabric to finished export carton.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/products/" className="btn-primary">
              See the line card
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href="/how-it-works/" className="btn-outline">
              How ordering works, step by step
            </Link>
          </div>
          <p className="mt-8 text-sm text-body/70">
            Buying from the UK? <Link href="/uk-buyers/" className="font-medium text-primary-700 hover:underline">Our UK buyer page</Link> covers DCTS paperwork.
            New to importing? Start with <Link href="/blog/how-to-import-clothing-from-nepal/" className="font-medium text-primary-700 hover:underline">the step-by-step import guide</Link>.
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <CTASection
        title="Talk to the factory itself"
        body="Send a spec, a reference garment, or a photo with a target price — we reply within 24 hours, Sunday to Friday, from Gaindakot."
      />
    </>
  );
}
