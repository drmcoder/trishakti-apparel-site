import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import Icon from '@/components/Icon';
import { seo } from '@/lib/content';
import { og } from '@/lib/seo';

export const metadata = {
  title: 'Readymade Garment Exporter in Nepal — RMG Knitwear',
  description:
    'Trishakti Apparel is a registered readymade garment (RMG) exporter in Gaindakot, Nepal — knit t-shirts, polos, sweatshirts, hoodies and kidswear, exported duty-free to the UK, EU, Canada and Japan. MOQ 1,000 pcs/style, full export documentation.',
  alternates: { canonical: '/readymade-garment-exporter-nepal' },
  openGraph: og({ title: 'Readymade Garment Exporter in Nepal · Trishakti Apparel', path: '/readymade-garment-exporter-nepal/' }),
  keywords: [
    'readymade garment exporter in Nepal',
    'readymade garment manufacturer Nepal',
    'RMG exporter Nepal',
    'Nepal garment export',
    'readymade garment exporter in nepal contact number',
  ],
};

const faqs = [
  {
    q: 'Does Nepal export readymade garments?',
    a: 'Yes — readymade garments are one of Nepal’s most established export sectors, shipping to the EU, UK, USA, Canada, Japan and Australia. Nepal-made garments enter the UK, EU, Canada and Japan at 0% import duty under least-developed-country trade preferences.',
  },
  {
    q: 'How do I import readymade garments from Nepal?',
    a: 'Choose a registered exporter (company registration + EXIM code), approve a pre-production sample, agree staged payment terms, and the exporter handles export documentation including the certificate or statement of origin for duty-free clearance. Sea freight routes via Indian ports in roughly 4–6 weeks to Europe; samples fly in under a week.',
  },
  {
    q: 'What garments does Nepal export?',
    a: 'Knitwear (t-shirts, polos, sweatshirts, hoodies), woven garments, hand-knitted woollens, pashmina, and felt products. Trishakti Apparel specialises in knit readymade garments — cut-and-sew jersey, piqué and fleece — made to buyers’ own designs and labels.',
  },
  {
    q: 'How do I verify a Nepali garment exporter?',
    a: 'Ask for the company registration and EXIM code, check trade bodies like the Garment Association Nepal (GAN) and the TEPC exporter directory, request references and past shipping documents, and take a live video walkthrough of the factory floor before ordering.',
  },
  {
    q: 'What is the minimum order from a Nepali garment factory?',
    a: 'It varies by factory. At Trishakti Apparel the minimum is 1,000 pieces per style with colour splits agreed per program — smaller than the 3,000–10,000-piece minimums common at large export hubs.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${seo.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Readymade Garment Exporter in Nepal', item: `${seo.url}/readymade-garment-exporter-nepal/` },
  ],
};

const facts = [
  { k: 'RMG', v: 'Registered exporter', d: 'Company registration and EXIM code — documents available on request.' },
  { k: '0%', v: 'Duty to UK · EU · CA · JP', d: 'LDC trade preference; origin paperwork supplied with every shipment.' },
  { k: '1,000 pcs', v: 'MOQ per style', d: 'Colour splits agreed per program — built for first orders.' },
  { k: '150+', v: 'Machines · 26–30k pcs/mo', d: 'A dedicated single-floor knit line in Gaindakot.' },
];

export default function RmgExporterPage() {
  return (
    <>
      <PageHero eyebrow="Nepal RMG export" title="A readymade garment exporter in Nepal — for knitwear">
        A readymade garment (RMG) exporter manufactures finished clothing and ships it internationally with the customs documentation buyers need. Nepal’s RMG industry exports worldwide, and knitwear is our corner of
        it: t-shirts, polos, sweatshirts, hoodies, and kids’ knits, cut and sewn in Gaindakot to
        your designs and labels, shipped with full export documentation.
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
            <span className="eyebrow">The export side, handled</span>
            <h2 className="mt-2 h-section">What a buyer gets from a registered RMG exporter</h2>
            <ul className="mt-5 space-y-3">
              {[
                'Export documentation done for you: commercial invoice, packing list, and the certificate or statement of origin that clears your goods at 0% duty.',
                'UK DCTS origin declarations, EU REX statements, Canada Form B255, Japan Form A — the right paper for each market.',
                'Sea freight via Indian ports (roughly 4–6 weeks to Europe) or air ex-Kathmandu in under a week for samples.',
                'Payment on standard exporter terms: staged bank transfer or Letter of Credit through our Nepali bank.',
              ].map((m) => (
                <li key={m} className="flex gap-3 text-body/85">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-primary-600" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-body/80">
              New to importing? Start with <Link href="/how-it-works/" className="font-medium text-primary-700 hover:underline">our process, step by step with real numbers</Link>,
              or <Link href="/blog/how-to-import-clothing-from-nepal/" className="font-medium text-primary-700 hover:underline">the full import guide</Link>.
            </p>
          </div>
          <div>
            <span className="eyebrow">Verify before you buy</span>
            <h2 className="mt-2 h-section">How to vet any Nepali exporter — including us</h2>
            <p className="mt-4 leading-relaxed text-body/85">
              Nepal’s RMG sector has real trade institutions — the{' '}
              <a href="https://ganasso.org.np" target="_blank" rel="noopener noreferrer" className="font-medium text-primary-700 hover:underline">Garment Association Nepal (GAN)</a>{' '}
              and the{' '}
              <a href="https://tepc.gov.np" target="_blank" rel="noopener noreferrer" className="font-medium text-primary-700 hover:underline">Trade and Export Promotion Centre (TEPC)</a>{' '}
              — and any serious exporter will hold a company registration and EXIM code and show
              them without hesitation. We go further: a live, unscripted video walkthrough of the
              floor where you direct the camera, references, and samples before any bulk order.
            </p>
            <Link href="/blog/how-to-verify-overseas-factory-remotely/" className="mt-5 inline-flex font-medium text-primary-700 hover:underline">
              Our full guide to verifying a factory remotely →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">Common questions</span>
            <h2 className="mt-2 h-section">Nepal RMG export, answered</h2>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="font-medium text-ink">{f.q}</dt>
                  <dd className="mt-2 leading-relaxed text-body/90">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <CTASection
        title="Talk to the exporter directly"
        body="Send your styles, quantities and destination market — we reply within 24 hours with MOQ, price, lead time, and the duty position for your country."
      />
    </>
  );
}
