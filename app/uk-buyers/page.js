import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import Icon from '@/components/Icon';
import { asset } from '@/lib/asset';
import { getEventImages } from '@/lib/events';
import { seo, contact } from '@/lib/content';
import { og } from '@/lib/seo';

export const metadata = {
  title: 'Duty-Free Knitwear for UK Buyers — 1,000 pcs Minimum',
  description:
    'Blank and private-label knitwear from Nepal for UK brands, schoolwear suppliers, decorators and uniform companies. 1,000 pcs per style, duty-free into the UK under DCTS, Certificate of Origin supplied.',
  alternates: { canonical: '/uk-buyers' },
  openGraph: og({ title: 'Duty-Free Knitwear for UK Buyers · Trishakti Apparel', path: '/uk-buyers/' }),
  keywords: [
    'blank knitwear supplier UK',
    'schoolwear blanks manufacturer',
    'duty free clothing DCTS Nepal',
    'low MOQ knitwear manufacturer UK',
    'private label hoodie manufacturer UK',
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${seo.url}/` },
    { '@type': 'ListItem', position: 2, name: 'UK Buyers', item: `${seo.url}/uk-buyers/` },
  ],
};

const facts = [
  { k: '1,000 pcs', v: 'Minimum per style', d: 'Test a fit or a colour without committing to a container.' },
  { k: '0%', v: 'UK import duty', d: 'Nepal ships duty-free under DCTS. We supply the Certificate of Origin.' },
  { k: '135–400', v: 'GSM range', d: 'Light jersey through to heavyweight French terry and fleece.' },
  { k: '26–30k', v: 'Pieces per month', d: 'Enough capacity to grow into, small enough that your order matters.' },
];

const makes = [
  'Poly-cotton polos — the schoolwear and corporate staple',
  'Crew-neck and V-neck sweatshirts, fleece-back or French terry',
  'PE tees, crew tees and long-sleeve jersey',
  'Hoodies in 300–400 GSM for streetwear weight',
  'Tank tops, sleeveless and knit shorts',
  'Poly-spandex activewear, graded in-house on Optitex',
];

export default function UkBuyersPage() {
  const photos = getEventImages().slice(0, 2);

  return (
    <>
      <PageHero eyebrow="For UK buyers" title="Blank and private-label knitwear, from 1,000 pieces">
        We make the knit garments behind UK schoolwear ranges, uniform programmes, decorated
        workwear and independent brands — to your own fits, colours and labels, not from a stock
        catalogue.
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
            <span className="eyebrow">The duty position</span>
            <h2 className="mt-2 h-section">0% into the UK — with a scheme built for the long term</h2>
            <div className="prose-custom mt-5 space-y-4 text-body/85">
              <p>
                Nepal ships duty-free into the UK under the Developing Countries Trading Scheme,
                against a standard rate of up to 12% on knitwear. We supply the Certificate of
                Origin with every shipment.
              </p>
              <p>
                The UK has also improved its garment rules of origin so that clothing exporters
                keep that access as their country develops through the scheme. We are glad to set out our exact origin
                position in writing for your compliance team.
              </p>
              <p className="border-l-2 border-primary-500 pl-4 text-body/70">
                One honest note: if you currently buy from Bangladesh, Pakistan, Sri Lanka or India,
                those also enter the UK at 0% — so duty is not the reason to move. Minimum order
                quantity and getting a straight answer the same day usually are.
              </p>
            </div>
          </div>
          <div>
            <span className="eyebrow">What we make</span>
            <h2 className="mt-2 h-section">Knit, and only knit</h2>
            <ul className="mt-5 space-y-3">
              {makes.map((m) => (
                <li key={m} className="flex gap-3 text-body/85">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-primary-600" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <Link href="/products/" className="mt-6 inline-flex font-medium text-primary-700 hover:underline">
              See the full line card →
            </Link>
          </div>
        </div>
      </section>

      {photos.length > 0 && (
        <section className="section">
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="eyebrow">The actual floor</span>
              <h2 className="mt-2 h-section">Our own photographs, not stock images</h2>
              <p className="mt-4 lead">
                A 150+-machine knit floor in Gaindakot — 80% women, all local and permanent.
                You are welcome to visit, or to see the line live on a video call.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {photos.map((img) => (
                <figure key={img.src} className="overflow-hidden rounded-lg border border-line bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image src={asset(img.src)} alt={img.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                  </div>
                  {img.caption && <figcaption className="px-4 py-3 text-sm text-body/80">{img.caption}</figcaption>}
                </figure>
              ))}
            </div>
            <p className="mt-8">
              <Link href="/gallery/" className="font-medium text-primary-700 hover:underline">
                More from the factory and the team →
              </Link>
            </p>
          </div>
        </section>
      )}

      <section className="section bg-mist/50">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Where we stand</span>
          <h2 className="mt-2 h-section">What we hold today — and what we don’t</h2>
          <div className="prose-custom mt-5 space-y-4 text-body/85">
            <p>
              We are a young factory and we would rather tell you plainly than have you find out on
              email three. We hold an <strong className="text-ink">EXIM code</strong> as a registered
              exporter and supply the <strong className="text-ink">Certificate of Origin</strong>.
              Every order is inspected to <strong className="text-ink">AQL 2.5</strong>, or to your
              specified level, and buyer-appointed third-party inspection is welcome.
            </p>
            <p>
              We do <strong className="text-ink">not</strong> yet hold BSCI, SMETA or GOTS. A social
              audit is being arranged. If certification is a hard requirement for your first order,
              tell us and we will say honestly whether we can meet your timeline.
            </p>
            <p>
              Payment is on staged terms, and we work with L/C for larger orders — balances against
              inspection and shipping documents, so your money tracks real progress.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact/" className="btn-primary">
              Request a quote
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <Icon name="whatsapp" filled className="h-4 w-4" />
              WhatsApp {contact.whatsappDisplay}
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <CTASection
        title="Send us a spec and we’ll price it"
        body="A tech pack, a sample garment, or even a photo and a target price. We’ll come back with MOQ, price and lead time — and tell you honestly if we’re not the right factory."
      />
    </>
  );
}
