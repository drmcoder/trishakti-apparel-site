import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import Icon from '@/components/Icon';
import { seo } from '@/lib/content';
import { og } from '@/lib/seo';

export const metadata = {
  title: 'Low-MOQ Clothing Manufacturer — 1,000 pcs, Honestly',
  description:
    'What “low MOQ” really means in export garment manufacturing: mega-hubs want 3,000–10,000 pieces, “50-piece factories” are usually workshops or middlemen. We run real full-package production from 1,000 pieces per style, duty-free to the UK, EU, Canada and Japan.',
  alternates: { canonical: '/low-moq-clothing-manufacturer' },
  openGraph: og({ title: 'Low-MOQ Clothing Manufacturer · Trishakti Apparel', path: '/low-moq-clothing-manufacturer/' }),
  keywords: [
    'low MOQ clothing manufacturer',
    'low minimum order clothing factory',
    'small batch clothing manufacturer',
    '1000 piece clothing manufacturer',
    'low MOQ knitwear manufacturer',
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${seo.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Low-MOQ Clothing Manufacturer', item: `${seo.url}/low-moq-clothing-manufacturer/` },
  ],
};

const tiers = [
  {
    range: '10–100 pieces',
    who: 'Print-on-demand, local studios, sample rooms',
    truth:
      'Real — but at 2–4× the unit cost, usually on catalogue blanks, and “factories” advertising this are often trading companies or workshops. Fine for testing designs; not production.',
  },
  {
    range: '≈1,000 pieces',
    who: 'Genuine low-MOQ export factories — this is us',
    truth:
      'The honest floor where real production economics start: dedicated fabric knitted and dyed to your lab dip, your labels, proper QC, export paperwork. Small enough to test a style, real enough to build a brand on.',
  },
  {
    range: '3,000–10,000+ pieces',
    who: 'The mega-hubs of Bangladesh, China, Pakistan',
    truth:
      'The best unit prices in the world — if you can cash-flow a container per colourway and accept being a small fish. Where you graduate to, not where you start.',
  },
];

const keeps = [
  'Consolidate colours — minimums apply per colour, so one hero colour keeps a test at 1,000 pieces, not 3,000.',
  'Use fabrics we already run — stock qualities avoid mill minimums that quietly drive MOQs up.',
  'Start with 1–2 hero styles, prove sell-through, then widen the range on reorders.',
  'Plan the calendar: first orders run ~12–16 weeks end to end; reorders ~8–10. See the full timeline on our How It Works page.',
];

export default function LowMoqPage() {
  return (
    <>
      <PageHero eyebrow="Small runs, real production" title="A low-MOQ clothing manufacturer, honestly defined">
        “Low MOQ” is the most abused phrase in garment sourcing — from 50-piece promises that turn
        out to be middlemen, to “flexible minimums” that mean 5,000. Here’s the truth about
        minimums, and exactly where we sit: <strong>1,000 pieces per style</strong>, full-package,
        duty-free to the UK, EU, Canada and Japan.
      </PageHero>

      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">The honest map</span>
            <h2 className="mt-2 h-section">What MOQ claims actually mean</h2>
            <div className="mt-8 space-y-6">
              {tiers.map((t) => (
                <div key={t.range} className="card p-6">
                  <div className="flex flex-wrap items-baseline gap-x-4">
                    <p className="font-display text-2xl font-medium text-navy">{t.range}</p>
                    <p className="text-sm font-semibold text-primary-700">{t.who}</p>
                  </div>
                  <p className="mt-3 leading-relaxed text-body/85">{t.truth}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-primary-500 pl-4 text-body/70">
              Why minimums exist at all: every style carries fixed costs — patterns, markers, fabric
              minimums per colour, machine changeover, sampling. A factory quoting far below its real
              floor is either not a factory, or planning to recover the difference somewhere you
              won’t see until it’s too late.{' '}
              <Link href="/blog/low-moq-clothing-manufacturing-small-brands/" className="font-medium text-primary-700 hover:underline">
                The full explainer →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-mist/50">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">What 1,000 pieces buys you here</span>
            <h2 className="mt-2 h-section">Real production, scaled to a first order</h2>
            <ul className="mt-5 space-y-3">
              {[
                'Your fabric, knitted and dyed to an approved lab dip — one dye lot per order.',
                'Your fit and your labels sewn in, compliant for the EU, UK and Canada.',
                'In-line QC plus final AQL inspection; third-party inspectors welcome.',
                '0% import duty into the UK, EU, Canada and Japan, origin paperwork included.',
                'A pre-production sample you approve in writing before anything is cut.',
              ].map((m) => (
                <li key={m} className="flex gap-3 text-body/85">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-primary-600" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Keep it lean</span>
            <h2 className="mt-2 h-section">How to keep a first order affordable</h2>
            <ul className="mt-5 space-y-3">
              {keeps.map((m) => (
                <li key={m} className="flex gap-3 text-body/85">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-primary-600" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/how-it-works/" className="btn-primary">
                See the whole process
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/products/" className="btn-outline">
                What we make
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <CTASection
        title="Test us with one style"
        body="Send your best style with a target quantity and price. We’ll quote it landed within two working days — and tell you honestly if the maths doesn’t work at your volume."
      />
    </>
  );
}
