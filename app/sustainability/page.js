import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { sustainability, seo } from '@/lib/content';

export const metadata = {
  title: 'Sustainability & Ethics — Ethical Garment Manufacturing in Nepal',
  description:
    'How Trishakti Apparel makes garments responsibly: 87% women workforce, fair wages, made on Nepal’s hydro-electric renewable power, and honest, audit-ready compliance.',
  alternates: { canonical: '/sustainability' },
  keywords: [
    'ethical clothing manufacturer Nepal',
    'sustainable t-shirt manufacturer',
    'women-owned garment factory Nepal',
    'ethical garment manufacturing',
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${seo.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Sustainability', item: `${seo.url}/sustainability/` },
  ],
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero eyebrow="Sustainability & ethics" title="Made responsibly, told honestly">
        {sustainability.intro}
      </PageHero>

      {/* Headline highlights */}
      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2">
          {sustainability.highlights.map((h) => (
            <div key={h.label} className="rounded-lg border border-line bg-mist/50 p-8 text-center sm:p-10">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                <Icon name={h.icon} className="h-6 w-6" />
              </div>
              <div className="mt-4 font-display text-4xl font-medium tracking-[-0.02em] text-primary-700 sm:text-5xl">
                {h.value}
              </div>
              <div className="mt-2 text-base leading-relaxed text-body">{h.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Four pillars */}
      <section className="section pt-0">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {sustainability.pillars.map((p) => (
            <div key={p.key} className="card p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                <Icon name={p.icon} className="h-6 w-6" />
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium text-ink">{p.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed text-body">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Honest note */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="mx-auto max-w-3xl rounded-lg border-l-2 border-primary-500 bg-primary-50/60 p-6">
            <p className="text-sm leading-relaxed text-body/85">{sustainability.note}</p>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <CTASection
        title="Source responsibly, without the greenwashing"
        body="Ask us anything about how we make your garments — or book a visit and see for yourself."
      />
    </>
  );
}
