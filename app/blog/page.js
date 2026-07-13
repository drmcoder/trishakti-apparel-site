import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { posts } from '@/lib/posts';

export const metadata = {
  title: 'Sourcing Insights — Buyer Guides for Apparel Importers',
  description:
    'Practical, fact-based guides for brands and importers sourcing knit garments from Nepal — duty-free access, sourcing comparisons, MOQ, and more.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      <PageHero eyebrow="Insights" title="Sourcing guides for apparel buyers">
        Practical, honest guidance on sourcing knit garments from Nepal — duty-free access,
        cost comparisons, and how to work with a manufacturing partner.
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {sorted.map((p) => (
            <article key={p.slug} className="card flex flex-col p-7">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
                <span className="text-muted/60">· {p.readMins} min read</span>
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
