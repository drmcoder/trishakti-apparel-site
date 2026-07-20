import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';
import StatStrip from '@/components/StatStrip';
import { asset } from '@/lib/asset';
import {
  products,
  offerings,
  termsAtAGlance,
  capabilities,
  whyNepal,
  trust,
  heritage,
  process,
  compliance,
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
        <div className="grain pointer-events-none absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(60% 60% at 20% 15%, rgba(56,136,208,0.10) 0, transparent 60%), radial-gradient(50% 50% at 90% 25%, rgba(255,255,255,0.05) 0, transparent 55%)' }}
        />
        <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
              Cut &amp; sew manufacturer · Gaindakot, Nepal
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,4.5rem)] font-medium leading-[1.03] tracking-[-0.02em] text-white">
              Your designs,<br />made in Nepal.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Trishakti Apparel is an export-ready manufacturer of knit basics — t-shirts,
              polos, and jersey garments. Make it to your own spec, or import our ready-made
              designs to sell. Serving <strong className="font-medium text-white">brands,
              importers, wholesalers &amp; resellers worldwide</strong>, with low MOQs and
              duty-free access to the EU, UK &amp; Canada.
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
              <Link href="/contact/" className="btn-primary">
                Request a Quote
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/products/" className="btn-ghost-light">
                View the line card
              </Link>
            </div>
          </div>

          {/* Hero visual — real product photography */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src={asset("/assets/products/hero-polo.jpg")}
                alt="Private-label knit polo shirt made by Trishakti Apparel"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </section>

      {/* ---------- By the numbers (credibility strip) ---------- */}
      <StatStrip />

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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article
                key={p.key}
                className="card group overflow-hidden transition-[transform,border-color] duration-300 ease-premium hover:-translate-y-1 hover:border-ink/15"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                  <Image
                    src={asset(p.image)}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="graded object-cover transition duration-700 ease-premium group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium text-ink">{p.name}</h3>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {p.tag}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-body/80">{p.blurb}</p>
                  <p className="mt-4 border-t border-line pt-3 text-xs text-muted">
                    {p.fabric} · {p.sizes}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Two ways to buy ---------- */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Two ways to buy</span>
            <h2 className="mt-2 h-section">Custom-made, or ready to import</h2>
            <p className="mt-4 lead">
              Build it to your own spec, or import our proven ready-made designs and sell
              with minimal lead time — ideal for importers and resellers.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {offerings.map((o) => (
              <div key={o.key} className="card flex flex-col p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <Icon name={o.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-ink">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body/80">{o.body}</p>
                <ul className="mt-4 space-y-2">
                  {o.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-body/85">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Terms at a glance ---------- */}
      <section className="border-y border-line bg-mist/50">
        <div className="container-x grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4">
          {termsAtAGlance.map((t) => (
            <div key={t.label}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{t.label}</div>
              <div className="mt-1.5 font-display text-lg font-medium leading-snug text-navy">{t.value}</div>
              <div className="mt-1 text-xs leading-snug text-muted">{t.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Why source from Nepal (duty-free centerpiece) ---------- */}
      <section className="section relative grain bg-navy text-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow text-primary-300">Why source from Nepal</span>
            <h2 className="mt-2 font-display text-4xl font-medium tracking-[-0.015em] text-white sm:text-5xl">
              A real cost &amp; duty advantage — for importers worldwide
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Manufacturing in Nepal isn’t just competitive on price. For many markets it
              lands your goods duty-free, and it’s a smart way to de-risk your sourcing.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyNepal.map((w) => (
              <div key={w.title} className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-500/15 text-primary-300">
                  <Icon name={w.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{w.body}</p>
                {w.note && (
                  <p className="mt-3 border-t border-white/10 pt-3 text-xs text-white/65">{w.note}</p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/70">
            Duty rates depend on your market and product’s rule of origin, and LDC duty-free
            access runs through a transition window — tell us your destination country and
            we’ll confirm exactly what applies to your order.
          </p>
        </div>
      </section>

      {/* ---------- Capabilities ---------- */}
      <section className="section">
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
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
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

      {/* ---------- Buyer confidence / trust ---------- */}
      <section className="section bg-mist/60">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Buyer confidence</span>
            <h2 className="mt-2 h-section">{trust.headline}</h2>
            <p className="mt-4 lead">{trust.intro}</p>
            <div className="mt-6 rounded-lg border-l-2 border-primary-500 bg-primary-50/60 p-5">
              <h3 className="text-sm font-semibold text-primary-800">{trust.culture.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body/85">{trust.culture.body}</p>
            </div>
            <div className="mt-4 rounded-lg border border-primary-200 bg-primary-50 p-5">
              <p className="text-sm font-medium text-primary-800">“{trust.pledge}”</p>
            </div>
            <div className="mt-6 border-t border-line pt-6">
              <p className="text-sm leading-relaxed text-body/80">{heritage.statement}</p>
              <dl className="mt-5 grid grid-cols-3 gap-4">
                {heritage.proof.map((h) => (
                  <div key={h.label}>
                    <dt className="text-2xl font-semibold text-navy">{h.value}</dt>
                    <dd className="mt-0.5 text-xs leading-snug text-muted">{h.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {trust.points.map((t) => (
              <div key={t.title} className="card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <Icon name={t.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-ink">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body/80">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How we work ---------- */}
      <section className="section relative grain bg-navy text-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow text-primary-300">How we work</span>
            <h2 className="mt-2 font-display text-4xl font-medium tracking-[-0.015em] text-white sm:text-5xl">
              From first sketch to repeat order
            </h2>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p) => (
              <li key={p.step} className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 font-semibold text-white">
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
            <Link href="/compliance/" className="btn-outline mt-6">
              Full compliance &amp; transparency
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {compliance.points.map((c) => (
              <div key={c.label} className="rounded-lg border border-line p-5">
                <div className="text-sm font-semibold text-primary-700">{c.value}</div>
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
