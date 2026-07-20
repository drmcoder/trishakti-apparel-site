import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { company, leadership, team, stats, differentiators } from '@/lib/content';

import { og } from '@/lib/seo';

export const metadata = {
  title: 'About',
  description:
    'Trishakti Apparel grew out of Trishakti Stores and 33 years of family fashion experience. A cut-and-sew garment factory in Gaindakot, Nepal, founded in 2023.',
  alternates: { canonical: '/about' },
  openGraph: og({ title: 'About · Trishakti Apparel', path: '/about/' }),
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A young factory on a deep foundation">
        {company.nameMeaning}
      </PageHero>

      {/* Story */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="prose-custom space-y-5 text-body/85">
              <p className="lead text-body">
                Trishakti Apparel was established in {company.founded}, growing out of{' '}
                <strong className="text-ink">Trishakti Stores</strong> — a fashion-trade
                business founded in {company.parentFounded}. It builds on{' '}
                {company.legacyYears} years of family experience in the industry.
              </p>
              <p>
                Our factory in Gaindakot runs a dedicated cut-and-sew line focused on
                quality knit basics — t-shirts, polos, and similar jersey and pique
                garments — produced to each brand’s own designs and spec charts. In-house
                Optitex CAD handles pattern making, marking, and on-site resizing, so fits
                stay consistent and fabric is used efficiently.
              </p>
              <p>
                We built Trishakti Apparel to be the kind of partner emerging brands
                actually want: flexible minimums, a top-notch finish on the garments we
                specialise in, and honest, transparent communication from first
                consultation to final delivery.
              </p>
              <p className="border-l-2 border-primary-500 pl-4 text-body/70">
                {company.taglinePoetic}
              </p>
            </div>
          </div>

          {/* Stats sidebar */}
          <aside className="lg:col-span-1">
            <div className="card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                At a glance
              </h2>
              <dl className="mt-4 space-y-4">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                    <dt className="text-sm text-body/70">{s.label}</dt>
                    <dd className="text-lg font-semibold text-navy">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Values / differentiators */}
      <section className="section bg-mist/50">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">What we value</span>
            <h2 className="mt-2 h-section">How we choose to work</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d.title} className="flex gap-4 rounded-lg border border-line bg-white p-6">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                  <Icon name="spark" className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{d.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-body/80">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-2 h-section">The people behind Trishakti</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {leadership.map((m) => (
              <div key={m.name} className="card p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy/5 text-xl font-semibold text-navy">
                  {initials(m.name)}
                </div>
                <h3 className="mt-4 font-semibold text-ink">{m.name}</h3>
                <p className="mt-0.5 text-sm text-primary-600">{m.role}</p>
              </div>
            ))}
          </div>

          {/* Wider team */}
          <div className="mt-10 rounded-lg border border-line p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Production &amp; operations team
            </h3>
            <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m) => (
                <li key={m.name} className="flex justify-between gap-4 border-b border-black/[0.04] py-1.5 text-sm">
                  <span className="font-medium text-ink">{m.name}</span>
                  <span className="text-right text-muted">{m.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Let’s build something together"
        body="We’d love to hear what you’re working on. Reach out and we’ll tell you honestly whether we’re the right fit."
      />
    </>
  );
}

function initials(name) {
  return name.split(' ').slice(0, 2).map((n) => n[0]).join('');
}
