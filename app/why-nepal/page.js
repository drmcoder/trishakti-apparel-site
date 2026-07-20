import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import { whyNepal, dutyFree, dutyComparison, dutyFaqs } from '@/lib/content';
import DutySavingsCalculator from '@/components/DutySavingsCalculator';

export const metadata = {
  title: 'Duty-Free Apparel Sourcing from Nepal (EU, UK & Canada) — Why Nepal',
  description:
    'Why source knit garments from Nepal: 0% import duty to the EU (EBA), UK (DCTS) and Canada (LDCT) under single-transformation rules — imported fabric qualifies. Lowest US tariff in South Asia. Low MOQ, ethical, export-ready.',
  alternates: { canonical: '/why-nepal' },
  keywords: [
    'Nepal garment duty free EU',
    'duty-free knitwear manufacturer Nepal',
    'GSP knitwear Nepal',
    'EBA Everything But Arms garments',
    'single transformation rule of origin',
    'alternative to Bangladesh garment sourcing',
    'China plus one apparel Nepal',
  ],
};

// FAQPage schema — eligible for FAQ rich results.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: dutyFaqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://trishaktiapparel.com.np/' },
    { '@type': 'ListItem', position: 2, name: 'Why Nepal', item: 'https://trishaktiapparel.com.np/why-nepal/' },
  ],
};

export default function WhyNepalPage() {
  return (
    <>
      <PageHero eyebrow="Why source from Nepal" title="Duty-free to the EU, UK & Canada — and the lowest US tariff in South Asia">
        Manufacturing your knit garments in Nepal isn’t just competitive on price. For most
        major markets it lands your goods <strong>duty-free</strong> — a direct saving on
        every unit — and it’s a smart way to de-risk your sourcing away from China, India,
        and Bangladesh.
      </PageHero>

      {/* Duty-free market breakdown */}
      <section className="section">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">The duty advantage</span>
            <h2 className="mt-2 h-section">0% import duty, market by market</h2>
            <p className="mt-4 lead measure">{dutyFree.intro}</p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[720px] border-separate border-spacing-0 text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-muted">
                  <th className="border-b border-line pb-3 pr-4 font-semibold">Market</th>
                  <th className="border-b border-line pb-3 pr-4 font-semibold">Scheme</th>
                  <th className="border-b border-line pb-3 pr-4 font-semibold">Rate</th>
                  <th className="border-b border-line pb-3 pr-4 font-semibold">Rule of origin</th>
                </tr>
              </thead>
              <tbody>
                {dutyFree.markets.map((m) => (
                  <tr key={m.market} className="align-top">
                    <td className="border-b border-line py-4 pr-4 font-semibold text-ink">{m.market}</td>
                    <td className="border-b border-line py-4 pr-4 text-body">{m.scheme}</td>
                    <td className="border-b border-line py-4 pr-4">
                      <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${m.strong ? 'bg-success/10 text-success' : 'bg-mist text-body'}`}>
                        {m.rate}
                      </span>
                    </td>
                    <td className="border-b border-line py-4 pr-4 text-body">
                      {m.rule}
                      <span className="mt-1 block text-xs text-muted">{m.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">{dutyFree.disclaimer}</p>
        </div>
      </section>

      {/* Interactive duty-savings calculator */}
      <section className="section bg-mist/60">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">See your saving</span>
            <h2 className="mt-2 h-section">Duty-savings calculator</h2>
            <p className="mt-4 lead measure">
              Pick your market and where you produce today — see what duty-free Nepal sourcing
              could save you, then get an exact quote. Honest: if you already source duty-free,
              it says so.
            </p>
          </div>
          <div className="mt-10">
            <DutySavingsCalculator />
          </div>
        </div>
      </section>

      {/* Nepal vs other origins — comparison table (anchoring on the duty gap) */}
      <section className="section bg-mist/60">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">How Nepal compares</span>
            <h2 className="mt-2 h-section">Nepal vs the other sourcing origins</h2>
            <p className="mt-4 lead measure">{dutyComparison.intro}</p>
          </div>

          <div className="mt-8 rounded-lg border-l-2 border-accent bg-canvas p-5">
            <p className="text-sm font-medium text-ink">{dutyComparison.hook}</p>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[720px] border-separate border-spacing-0 text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-muted">
                  <th className="border-b border-line pb-3 pr-4 font-semibold">Origin</th>
                  <th className="border-b border-line pb-3 pr-4 font-semibold">EU duty</th>
                  <th className="border-b border-line pb-3 pr-4 font-semibold">UK duty</th>
                  <th className="border-b border-line pb-3 pr-4 font-semibold">Basis / preference</th>
                </tr>
              </thead>
              <tbody>
                {dutyComparison.rows.map((r) => (
                  <tr key={r.origin} className={r.highlight ? 'bg-success/[0.06]' : undefined}>
                    <td className={`border-b border-line py-4 pr-4 font-semibold ${r.highlight ? 'text-success' : 'text-ink'}`}>
                      <span className="mr-2" aria-hidden="true">{r.flag}</span>{r.origin}
                    </td>
                    <td className="border-b border-line py-4 pr-4 font-semibold tabular-nums text-ink">{r.eu}</td>
                    <td className="border-b border-line py-4 pr-4 font-semibold tabular-nums text-ink">{r.uk}</td>
                    <td className="border-b border-line py-4 pr-4 text-body">{r.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-body/80">{dutyComparison.honestNote}</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body/80">{dutyComparison.usNote}</p>
          {dutyComparison.footnotes.map((f) => (
            <p key={f} className="mt-4 max-w-3xl text-xs leading-relaxed text-muted">{f}</p>
          ))}
          <p className="mt-2 max-w-3xl text-xs leading-relaxed text-muted">{dutyComparison.disclaimer}</p>
        </div>
      </section>

      {/* The saving, stated plainly */}
      <section className="section relative grain bg-navy text-white">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow text-primary-300">The math</span>
            <h2 className="mt-2 font-display text-4xl font-medium tracking-[-0.015em] text-white sm:text-5xl">
              Roughly a 12% head-start into Europe
            </h2>
            <p className="mt-4 text-lg text-white/75">
              On a cotton knit t-shirt, an EU importer pays the standard ~12% MFN duty when
              sourcing from most countries — but <strong className="text-white">0%</strong> from
              Nepal under EBA. That’s a direct landed-cost advantage before you’ve negotiated a
              single price, with the same duty-free access into the UK and Canada.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
              <span className="text-white/70">Standard EU duty (most countries)</span>
              <span className="font-display text-3xl font-medium tabular-nums text-white/65 line-through">~12%</span>
            </div>
            <div className="flex items-baseline justify-between pt-4">
              <span className="text-white">Duty from Nepal (EBA)</span>
              <span className="font-display text-4xl font-medium tabular-nums text-primary-300">0%</span>
            </div>
          </div>
        </div>
      </section>

      {/* LDC timeline / urgency */}
      <section className="section">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">The window</span>
          <h2 className="mt-2 h-section">Lock it in before the rules tighten</h2>
          <p className="mt-4 lead">{dutyFree.timeline}</p>
        </div>
      </section>

      {/* Why-Nepal advantages (reused cards) */}
      <section className="section bg-mist/60">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Beyond duty</span>
            <h2 className="mt-2 h-section">More reasons buyers choose Nepal</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyNepal.map((w) => (
              <div key={w.title} className="card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <Icon name={w.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body/80">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duty-free FAQ */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Duty-free FAQ</span>
            <h2 className="mt-2 h-section">What importers ask us</h2>
          </div>
          <div className="mt-10">
            <FAQ items={dutyFaqs} />
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <CTASection
        title="Tell us your market — we’ll confirm your duty"
        body="Share your destination country and product, and we’ll confirm exactly what duty applies and quote your program."
      />
    </>
  );
}
