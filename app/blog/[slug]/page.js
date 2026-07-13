import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';
import { posts, getPost } from '@/lib/posts';
import { seo } from '@/lib/content';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: 'article', title: p.title, description: p.description, publishedTime: p.date },
  };
}

export default function BlogPost({ params }) {
  const p = getPost(params.slug);
  if (!p) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.date,
    author: { '@type': 'Organization', name: seo.siteName },
    publisher: { '@type': 'Organization', name: seo.siteName, logo: { '@type': 'ImageObject', url: `${seo.url}/assets/logo-mark.png` } },
    mainEntityOfPage: `${seo.url}/blog/${p.slug}/`,
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${seo.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${seo.url}/blog/` },
      { '@type': 'ListItem', position: 3, name: p.title, item: `${seo.url}/blog/${p.slug}/` },
    ],
  };

  return (
    <>
      <article>
        <header className="border-b border-line bg-mist/70">
          <div className="container-x py-12 sm:py-16">
            <nav className="text-xs text-muted" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary-700">Home</Link>
              <span className="px-1.5">/</span>
              <Link href="/blog/" className="hover:text-primary-700">Insights</Link>
            </nav>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              {p.tags.map((t) => <span key={t}>{t}</span>)}
              <span className="text-muted/60">· {p.readMins} min read</span>
            </div>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-tight tracking-[-0.02em] text-ink sm:text-5xl">
              {p.title}
            </h1>
          </div>
        </header>

        <div className="section">
          <div className="container-x">
            <div className="mx-auto max-w-2xl space-y-5">
              {p.body.map((b, i) => <Block key={i} b={b} />)}
            </div>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <CTASection />
    </>
  );
}

function Block({ b }) {
  if (b.type === 'h2') return <h2 className="!mt-10 font-display text-2xl font-medium text-ink">{b.text}</h2>;
  if (b.type === 'p') return <p className="text-lg leading-relaxed text-body" dangerouslySetInnerHTML={{ __html: b.text }} />;
  if (b.type === 'ul')
    return (
      <ul className="space-y-2">
        {b.items.map((it) => (
          <li key={it} className="flex gap-3 text-body"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />{it}</li>
        ))}
      </ul>
    );
  if (b.type === 'quote')
    return <blockquote className="border-l-2 border-primary-500 bg-mist/60 p-5 text-sm italic leading-relaxed text-body/80">{b.text}</blockquote>;
  if (b.type === 'table')
    return (
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-0 text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-muted">
              {b.head.map((h) => <th key={h} className="border-b border-line pb-2 pr-4 font-semibold">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {b.rows.map((r, ri) => (
              <tr key={ri}>{r.map((c, ci) => <td key={ci} className={`border-b border-line py-3 pr-4 ${ci === 0 ? 'font-medium text-ink' : 'text-body'}`}>{c}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  return null;
}
