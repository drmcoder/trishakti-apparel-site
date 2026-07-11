import Link from 'next/link';
import Icon from '@/components/Icon';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import {
  company,
  trustBar,
  products,
  capabilities,
  differentiators,
  process,
  compliance,
  stats,
  heroSpecs,
  faqs,
} from '@/lib/content';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #228b22 0, transparent 45%), radial-gradient(circle at 85% 30%, #1e73be 0, transparent 40%)' }}
        />
        <div className="container-x relative grid gap-10 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              Cut &amp; sew manufacturer · Gaindakot, Nepal
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Your designs,<br />made in Nepal.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Trishakti Apparel is an export-ready private-label manufacturer of knit
              basics — t-shirts, polos, and jersey garments — cut, sewn, and finished
              to your spec, with in-house CAD pattern making and small-MOQ flexibility.
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-white/70">
              {heroSpecs.map((s, i) => (
                <li key={s} className="flex items-center gap-3">
                  {i > 0 && <span className="text-white/25" aria-hidden="true">|</span>}
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact/" className="btn-accent">
                Request a Quote
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/products/" className="btn-ghost-light">
                View the line card
              </Link>
            </div>
          </div>

          {/* Hero visual — placeholder until real factory photography arrives */}
          <div className="lg:col-span-5">
            <div className="photo-ph aspect-[4/3] rounded-2xl border border-white/10 lg:aspect-[3/4]">
              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2 text-center text-navy/40">
                <Icon name="scissors" className="h-9 w-9" />
                <span className="text-xs font-medium uppercase tracking-widest">
                  Factory photo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar — CONFIRMED facts only */}
        <div className="relative border-t border-white/10 bg-navy-900/60">
          <div className="container-x grid grid-cols-2 divide-x divide-white/10 py-6 sm:grid-cols-4">
            {trustBar.map((s) => (
              <div key={s.key} className="px-4 text-center sm:text-left">
                <div className="text-xl font-semibold text-white">{s.value}</div>
                <div className="text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- What we make ---------- */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">What we make</span>
              <h2 className="mt-2 h-section">Knit basics, built to your tech pack</h2>
            </div>
            <Link href="/products/" className="btn-outline">
              Full line card
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.key} className="card overflow-hidden">
                <div className="photo-ph flex aspect-[4/3] items-center justify-center">
                  <Icon name="tag" className="relative z-10 h-8 w-8 text-navy/25" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
                    <span className="rounded-full bg-brand-green/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-green">
                      {p.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-body/80">{p.blurb}</p>
                  <dl className="mt-4 space-y-1 border-t border-black/[0.06] pt-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-body/60">Fabric</dt>
                      <dd className="font-medium text-ink">{p.fabric}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-body/60">Sizes</dt>
                      <dd className="font-medium text-ink">{p.sizes}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Capabilities ---------- */}
      <section className="section bg-mist/50">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Capabilities</span>
            <h2 className="mt-2 h-section">A development partner, not just a sewing line</h2>
            <p className="mt-4 lead">
              From pattern to packing, we handle the steps that turn your idea into
              retail-ready garments.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.key} className="card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy">
                  <Icon name={c.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body/80">{c.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/capabilities/" className="btn-outline">
              Explore capabilities
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Why Trishakti ---------- */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Why Trishakti</span>
            <h2 className="mt-2 h-section">Small enough to care, built to deliver</h2>
            <p className="mt-4 lead">
              We grew out of {`Trishakti Stores`} and 33 years of family experience in
              fashion. Today we run a focused cut-and-sew floor for brands that want a
              responsive partner — not a faceless mega-factory.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-semibold text-navy">{s.value}</div>
                  <div className="mt-1 text-sm text-body/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {differentiators.map((d) => (
              <div key={d.title} className="flex gap-4 rounded-xl border border-black/[0.06] p-5">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <Icon name="check" className="h-4 w-4" />
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

      {/* ---------- How we work ---------- */}
      <section className="section bg-navy text-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">How we work</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              From first sketch to repeat order
            </h2>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p) => (
              <li key={p.step} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green font-semibold text-white">
                  {p.step}
                </div>
                <h3 className="mt-4 font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Compliance ---------- */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Compliance &amp; export</span>
            <h2 className="mt-2 h-section">{compliance.headline}</h2>
            <p className="mt-4 lead">
              We’re a young factory and we say so plainly — we state what we hold today
              and what’s in progress, never certifications we haven’t earned.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {compliance.points.map((c) => (
              <div key={c.label} className="rounded-xl border border-black/[0.06] p-5">
                <div className="text-sm font-semibold text-navy">{c.value}</div>
                <div className="mt-0.5 text-sm font-medium text-ink">{c.label}</div>
                <div className="mt-1 text-xs text-body/70">{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section bg-mist/50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-2 h-section">Questions buyers ask us</h2>
            <p className="mt-4 lead">
              Straight answers on MOQ, lead time, sourcing, and compliance.
            </p>
          </div>
          <div className="mt-10">
            <FAQ />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <CTASection />
    </>
  );
}
