import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { getAllTags, getPostsByTagSlug } from '@/lib/posts';
import { seo } from '@/lib/content';
import { og } from '@/lib/seo';

export function generateStaticParams() {
  return getAllTags().map((t) => ({ tag: t.slug }));
}

function tagName(slug) {
  const hit = getAllTags().find((t) => t.slug === slug);
  return hit ? hit.tag : null;
}

export function generateMetadata({ params }) {
  const name = tagName(params.tag);
  if (!name) return {};
  const count = getPostsByTagSlug(params.tag).length;
  return {
    title: `${name} — Sourcing Guides`,
    description: `${count} practical guides on ${name.toLowerCase()} for brands and importers sourcing knit garments from Nepal.`,
    alternates: { canonical: `/blog/tag/${params.tag}` },
    openGraph: og({ title: `${name} — Sourcing Guides · Trishakti Apparel`, path: `/blog/tag/${params.tag}/` }),
  };
}

export default function TagPage({ params }) {
  const name = tagName(params.tag);
  if (!name) notFound();
  const tagged = getPostsByTagSlug(params.tag).sort((a, b) => (a.date < b.date ? 1 : -1));

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${seo.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${seo.url}/blog/` },
      { '@type': 'ListItem', position: 3, name: name, item: `${seo.url}/blog/tag/${params.tag}/` },
    ],
  };

  return (
    <>
      <PageHero eyebrow="Guides by topic" title={name}>
        {tagged.length} guide{tagged.length === 1 ? '' : 's'} tagged “{name}” — part of our
        buyer library on sourcing knit garments from Nepal.
      </PageHero>

      <section className="section">
        <div className="container-x">
          <p className="mb-8 text-sm">
            <Link href="/blog/" className="font-medium text-primary-700 hover:underline">← All guides</Link>
            <span className="px-2 text-muted">·</span>
            {getAllTags().filter((t) => t.slug !== params.tag).slice(0, 8).map((t, i) => (
              <span key={t.slug}>
                {i > 0 && <span className="px-1 text-muted">·</span>}
                <Link href={`/blog/tag/${t.slug}/`} className="text-body/80 hover:text-primary-700">{t.tag}</Link>
              </span>
            ))}
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {tagged.map((p) => (
              <article key={p.slug} className="card flex flex-col p-7">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                  <span className="text-muted">· {p.readMins} min read</span>
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
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <CTASection />
    </>
  );
}
