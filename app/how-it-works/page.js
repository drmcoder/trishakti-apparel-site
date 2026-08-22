import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import Icon from '@/components/Icon';
import { seo } from '@/lib/content';
import { og } from '@/lib/seo';

export const metadata = {
  title: 'How It Works — Inquiry to Delivery, With Real Numbers',
  description:
    'Our whole process with days per stage: 24-hour replies, quotes in 2 days, samples in 7–14 days, production on 150+ machines, freight in 4–6 weeks — plus a numeric buyer FAQ.',
  alternates: { canonical: '/how-it-works' },
  openGraph: og({ title: 'How It Works · Trishakti Apparel', path: '/how-it-works/' }),
  keywords: [
    'garment manufacturing process',
    'how to order from a clothing factory',
    'apparel production timeline Nepal',
  ],
};

const steps = [
  {
    n: '01',
    days: 'Within 24 hours',
    title: 'Inquiry',
    body:
      'Send a tech pack, a reference garment, or even a photo with a target price — plus quantities per style. We reply within 24 hours, Sunday to Friday, with any questions and a clear next step.',
  },
  {
    n: '02',
    days: '2 working days',
    title: 'Quote',
    body:
      'A line-item quote — fabric, trims, CMT, packing — at your Incoterm (EXW Gaindakot or FOB Kolkata), with MOQ, lead time, and landed-cost guidance for your market. No mystery numbers.',
  },
  {
    n: '03',
    days: '7–14 days + courier',
    title: 'Sampling',
    body:
      'We develop your pre-production sample: fabric, fit, and finish to your spec, with lab dips for colour approval. Samples and courier are charged and credited against your bulk order. Revise until it’s right.',
  },
  {
    n: '04',
    days: 'Same week',
    title: 'Approval & order',
    body:
      'You approve the PP sample in writing — it becomes the contract standard we keep on file. Standard terms: 30% deposit by bank transfer, balance against shipping documents; Letters of Credit accepted through our Nepali bank on larger orders.',
  },
  {
    n: '05',
    days: '6–10 weeks',
    title: 'Production',
    body:
      'Fabric is knitted and dyed to your approved lab dip (2–4 weeks), then cut, sewn, and finished on our 150+-machine floor (4–6 weeks) — capacity 26,000–30,000 pieces a month, one dye lot per order.',
  },
  {
    n: '06',
    days: 'Before anything ships',
    title: 'Quality control',
    body:
      'In-line checks during sewing and a final AQL inspection against your agreed standard. Buyer-appointed third-party inspection (typically ~$300 a day) is welcome — we’ll schedule it, not dodge it.',
  },
  {
    n: '07',
    days: 'Sea 4–6 wks · Air ~1 wk',
    title: 'Shipping & documents',
    body:
      'Sea freight routes via Kolkata — roughly 4–6 weeks to the UK/EU, 5–7 to North America. We supply the origin paperwork that clears your goods at 0% duty: UK DCTS origin declaration, EU REX statement, Canada Form B255, Japan Form A.',
  },
];

const faqs = [
  {
    q: 'What is your minimum order quantity?',
    a: '1,000 pieces per style, with colour splits agreed per program.',
  },
  {
    q: 'How long does a first order take, end to end?',
    a: 'Typically 12–16 weeks from inquiry to delivery, including sampling. Reorders run faster — around 8–10 weeks — because your patterns, lab dips, and approved sample are already on file.',
  },
  {
    q: 'What do samples cost?',
    a: 'Sample making and courier are charged at cost and credited against your bulk order. Couriered samples reach Europe or North America in 3–5 days.',
  },
  {
    q: 'What are your payment terms?',
    a: '30% deposit by bank transfer, 70% against a copy of the Bill of Lading. Letters of Credit accepted via our Nepali bank on larger orders. We never ask you to pay 100% upfront — and you shouldn’t accept that from any factory.',
  },
  {
    q: 'What duty will I pay?',
    a: '0% into the UK, EU, Canada, and Japan under LDC trade preferences — versus 12–18% for most large garment origins — with the proof-of-origin documents supplied. EU access is confirmed through a transition to at least 2029; ask us about the window for your market.',
  },
  {
    q: 'What capacity do you have?',
    a: '150+ sewing machines on a single knit floor, producing 26,000–30,000 pieces per month, confirmed per program.',
  },
  {
    q: 'Can you sew in my labels?',
    a: 'Yes — woven or printed labels, sewn in at the factory, with fibre-content labelling done compliantly for the EU, UK, and Canada (bilingual for Canada).',
  },
  {
    q: 'How do I verify you’re real before ordering?',
    a: 'Take a live, unscripted video walkthrough of the floor — you direct the camera — any working day. Or visit Gaindakot in person. Company registration and export documents available on request.',
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
    { '@type': 'ListItem', position: 2, name: 'How It Works', item: `${seo.url}/how-it-works/` },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="The process" title="How it works — with real numbers">
        First-time importers deserve a map, not a mystery. Here is our whole process, inquiry to
        delivery, with the days each stage actually takes — and a FAQ where every answer is a
        number, not “contact us.”
      </PageHero>

      <section className="section">
        <div className="container-x">
          <ol className="mx-auto max-w-3xl space-y-8">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <div className="shrink-0 text-right">
                  <span className="font-display text-3xl font-medium text-primary-500">{s.n}</span>
                </div>
                <div className="border-l border-line pl-5">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h2 className="font-display text-xl font-medium text-ink">{s.title}</h2>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">{s.days}</span>
                  </div>
                  <p className="mt-2 leading-relaxed text-body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-mist/50">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">Straight answers</span>
            <h2 className="mt-2 h-section">Buyer FAQ — numbers, not “contact us”</h2>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="font-medium text-ink">{f.q}</dt>
                  <dd className="mt-2 leading-relaxed text-body/90">{f.a}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 rounded-lg border border-line bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <h3 className="font-display text-lg font-medium text-ink">Researching, not ready to talk?</h3>
                <p className="mt-1 text-sm text-body/80">
                  Take our one-page factory profile into your sourcing discussion — capabilities,
                  capacity, compliance status, and the duty-free maths.
                </p>
              </div>
              <a
                href="/assets/Trishakti-Apparel-Company-Profile.pdf"
                className="btn-primary mt-4 shrink-0 sm:mt-0"
                download
              >
                Download company profile
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-8 text-sm text-body/70">
              Deeper reading: <Link href="/blog/how-to-import-clothing-from-nepal/" className="font-medium text-primary-700 hover:underline">the step-by-step import guide</Link>,{' '}
              <Link href="/blog/sample-to-bulk-what-to-expect-first-order/" className="font-medium text-primary-700 hover:underline">sample to bulk in detail</Link>, and{' '}
              <Link href="/blog/how-to-pay-a-garment-factory-safely-tt-vs-lc/" className="font-medium text-primary-700 hover:underline">paying a factory safely</Link>.
            </p>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <CTASection
        title="Start at step 01"
        body="Send designs, a reference, or just a photo and a target price — we’ll reply within 24 hours and tell you honestly what’s buildable."
      />
    </>
  );
}
