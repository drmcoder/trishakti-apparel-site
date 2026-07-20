import Image from 'next/image';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { capabilities, process, compliance, factory, contact } from '@/lib/content';
import { asset } from '@/lib/asset';

import { og } from '@/lib/seo';

export const metadata = {
  title: 'Capabilities',
  description:
    'Trishakti Apparel capabilities: design & development, in-house Optitex CAD pattern making, cut & sew, private-label finishing, quality control, and fabric/trims sourcing with duty management.',
  alternates: { canonical: '/capabilities' },
  openGraph: og({ title: 'Capabilities · Trishakti Apparel', path: '/capabilities/' }),
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Capabilities" title="Everything from pattern to packing">
        We’re a sewing-focused factory with in-house design and CAD — so your program
        moves from concept to retail-ready garments with fewer hand-offs and tighter
        quality control.
      </PageHero>

      {/* Capability cards */}
      <section className="section">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.key} className="card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <Icon name={c.icon} className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-ink">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-body/80">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inside the factory (illustrative, honestly framed) */}
      <section className="section relative grain bg-navy text-white">
        <div className="container-x relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow text-primary-300">{factory.eyebrow}</span>
            <h2 className="mt-2 font-display text-4xl font-medium tracking-[-0.015em] text-white sm:text-5xl">
              {factory.title}
            </h2>
            <p className="mt-4 text-lg text-white/75">{factory.body}</p>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6"
            >
              <Icon name="whatsapp" filled className="h-4 w-4" />
              Book a video walkthrough
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {factory.images.map((im) => (
              <div key={im.src} className="relative aspect-[3/4] overflow-hidden rounded-lg border border-white/10">
                <Image src={asset(im.src)} alt={im.alt} fill sizes="(max-width: 1024px) 45vw, 280px" className="object-cover" />
              </div>
            ))}
            <p className="col-span-2 text-xs text-white/70">{factory.caption}</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-mist/50">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">How we work</span>
            <h2 className="mt-2 h-section">A clear path from inquiry to reorder</h2>
            <p className="mt-4 lead">
              Transparent communication at every step — you always know where your order
              stands.
            </p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((p) => (
              <li key={p.step} className="card flex gap-4 p-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-semibold text-white">
                  {p.step}
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-body/80">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Compliance / export posture */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Compliance &amp; export</span>
            <h2 className="mt-2 h-section">{compliance.headline}</h2>
            <p className="mt-4 lead">
              Fabric and trims are sourced flexibly — primarily from China — and the
              garment is made in Nepal. We handle export documentation and duty
              management, and ship worldwide by air or sea.
            </p>
            <p className="mt-4 text-sm text-body/80">
              <strong className="font-semibold text-ink">Duty advantage:</strong> under
              Nepal’s LDC single-transformation rules, our knit t-shirts and polos qualify
              as Nepal-made — and land <strong className="font-semibold text-ink">duty-free
              in the EU, UK, and Canada</strong> — even though the fabric is imported, with
              a Certificate of Origin supplied. For the US, Nepal carries the lowest tariff
              in South Asia. Tell us your market and we’ll confirm what applies.
            </p>
            <p className="mt-4 text-sm text-body/70">
              We state our compliance posture honestly: what we hold today, and what’s
              in progress. No cert claims we can’t back up.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {compliance.points.map((c) => (
              <div key={c.label} className="rounded-lg border border-line p-5">
                <div className="text-sm font-semibold text-navy">{c.value}</div>
                <div className="mt-0.5 text-sm font-medium text-ink">{c.label}</div>
                <div className="mt-1 text-xs text-body/70">{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a program in mind?"
        body="Whether it’s a first sample run or a repeat bulk order, tell us the spec and we’ll map it to our floor."
      />
    </>
  );
}
