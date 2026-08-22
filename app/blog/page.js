import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { posts, slugifyTag } from '@/lib/posts';

import { og } from '@/lib/seo';

export const metadata = {
  title: 'Sourcing Insights — Buyer Guides for Apparel Importers',
  description:
    'Practical, fact-based guides for brands and importers sourcing knit garments from Nepal — duty-free access, sourcing comparisons, MOQ, and more.',
  alternates: { canonical: '/blog' },
  openGraph: og({ title: 'Sourcing Insights — Trishakti Apparel', path: '/blog/' }),
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <PageHero eyebrow="Insights" title="Sourcing guides for apparel buyers">
        Practical, honest guidance on sourcing knit garments from Nepal — duty-free access,
        cost comparisons, and how to work with a manufacturing partner.
      </PageHero>

      <section className="section pb-0">
        <div className="container-x">
          <div className="rounded-lg border border-line bg-mist/50 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Start here</h2>
            <ul className="mt-3 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              {[
                ['/how-it-works/', 'How ordering works — the process with real numbers'],
                ['/blog/how-to-import-clothing-from-nepal/', 'How to import clothing from Nepal, step by step'],
                ['/blog/nepal-duty-free-apparel-eu-uk-canada/', 'The duty-free maths for EU, UK & Canadian buyers'],
                ['/blog/first-time-importer-guide-working-with-garment-factory/', 'The first-time importer’s guide'],
                ['/blog/garment-sourcing-glossary-terms-explained/', 'FOB, CMT, MOQ, AQL — the sourcing glossary'],
                ['/blog/how-to-verify-overseas-factory-remotely/', 'How to verify a factory you’ll never visit'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="font-medium text-primary-700 hover:underline">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {sorted.map((p) => (
            <article key={p.slug} className="card flex flex-col p-7">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                {p.tags.map((t) => (
                  <Link key={t} href={`/blog/tag/${slugifyTag(t)}/`} className="hover:text-primary-700">{t}</Link>
                ))}
                <span className="text-muted">· {p.readMins} min read · <time dateTime={p.date}>{new Date(p.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</time></span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-ink">
                <Link href={`/blog/${p.slug}/`} className="hover:text-primary-700">{p.title}</Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-body/80">{p.description}</p>
              <Link href={`/blog/${p.slug}/`} className="btn-outline mt-6 self-start">
                Read guide
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
