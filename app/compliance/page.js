import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { compliance, seo } from '@/lib/content';

export const metadata = {
  title: 'Compliance & Transparency — Ethical Garment Sourcing from Nepal',
  description:
    'Exactly where Trishakti Apparel stands on compliance: EXIM & Certificate of Origin held, REX and social audits (Sedex/SMETA, BSCI) in progress. Honest status, no borrowed badges — plus a plain-English guide to what each standard means.',
  alternates: { canonical: '/compliance' },
  keywords: [
    'ethical garment manufacturer Nepal',
    'social compliance garment factory Nepal',
    'BSCI Sedex SMETA Nepal factory',
    'audit-ready clothing manufacturer',
    'OEKO-TEX fabric Nepal',
    'transparent apparel supplier',
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${seo.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Compliance & Transparency', item: `${seo.url}/compliance/` },
  ],
};

// Visual treatment per honest status state.
const STATE = {
  held: { label: 'Held', className: 'bg-success/10 text-success' },
  progress: { label: 'In progress', className: 'bg-amber-100 text-amber-800' },
  onrequest: { label: 'On request', className: 'bg-primary-50 text-primary-700' },
  planned: { label: 'Planned', className: 'bg-mist text-body' },
};

export default function CompliancePage() {
  return (
    <>
      <PageHero eyebrow="Compliance & transparency" title="Where we stand — in full">
        {compliance.posture}
      </PageHero>

      {/* Status table — the centerpiece. Reads as a fact sheet, not a pitch. */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Where we stand today</span>
            <h2 className="mt-2 h-section">What we hold, and what we’re building</h2>
            <p className="mt-4 lead measure">
              Three honest states — held, in progress, or planned. We won’t show a badge we
              haven’t earned, and we won’t hide a gap. That’s the whole point.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-0 text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-muted">
                  <th className="border-b border-line pb-3 pr-4 font-semibold">Item</th>
                  <th className="border-b border-line pb-3 pr-4 font-semibold">Status</th>
                  <th className="border-b border-line pb-3 font-semibold">Detail</th>
                </tr>
              </thead>
              <tbody>
                {compliance.status.map((s) => {
                  const st = STATE[s.state] || STATE.planned;
                  return (
                    <tr key={s.item} className="align-top">
                      <td className="border-b border-line py-4 pr-4 font-semibold text-ink">{s.item}</td>
                      <td className="border-b border-line py-4 pr-4">
                        <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${st.className}`}>
                          {st.label}
                        </span>
                      </td>
                      <td className="border-b border-line py-4 text-body">{s.detail}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What you get right now — bridges the gap while certs are earned */}
      <section className="section relative grain bg-navy text-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow text-primary-300">While the certificates are earned</span>
            <h2 className="mt-2 font-display text-4xl font-medium tracking-[-0.015em] text-white sm:text-5xl">
              What you can rely on from us right now
            </h2>
            <p className="mt-4 text-lg text-white/75">
              A compliance manager isn’t buying t-shirts — they’re buying audit-readiness and
              reputational safety. Here’s how we de-risk working with a young supplier today.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {compliance.nowOffer.map((o) => (
              <div key={o.title} className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-500/15 text-primary-300">
                  <Icon name={o.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary — positions us as knowledgeable, helps the buyer's internal case */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">What the standards mean</span>
            <h2 className="mt-2 h-section">A plain-English guide for buyers</h2>
            <p className="mt-4 lead measure">
              The certifications sourcing teams ask about — what each one actually is, and
              which matter most for EU and UK private-label programs.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {compliance.glossary.map((g) => (
              <div key={g.term} className="card p-6">
                <h3 className="font-display text-xl font-medium text-ink">{g.term}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body/85">{g.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 max-w-3xl rounded-lg border-l-2 border-primary-500 bg-primary-50/60 p-6">
            <p className="text-sm leading-relaxed text-body/85">{compliance.glossaryNote}</p>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <CTASection
        title="Bring your compliance checklist — we’ll answer it straight"
        body="Send us your audit or onboarding requirements, or book an open-door visit. No dodging, no vague promises."
      />
    </>
  );
}
