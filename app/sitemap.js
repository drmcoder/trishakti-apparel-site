import { seo, nav, products } from '@/lib/content';
import { posts, getAllTags } from '@/lib/posts';

// Generates a static sitemap.xml at build time (works with output: 'export').
export default function sitemap() {
  const pages = nav.map((item) => ({
    url: `${seo.url}${item.href}`,
    changeFrequency: 'monthly',
    priority: item.href === '/' ? 1 : 0.8,
  }));
  const productPages = products.map((p) => ({
    url: `${seo.url}/products/${p.slug}/`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  const extra = [
    { url: `${seo.url}/uk-buyers/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${seo.url}/how-it-works/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${seo.url}/garment-manufacturer-nepal/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${seo.url}/readymade-garment-exporter-nepal/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${seo.url}/low-moq-clothing-manufacturer/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${seo.url}/sustainability/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${seo.url}/compliance/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${seo.url}/gallery/`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${seo.url}/privacy/`, changeFrequency: 'yearly', priority: 0.3 },
  ];
  const blog = [
    // /blog/ index is already emitted via `nav`; only per-post URLs here.
    ...posts.map((p) => ({
      url: `${seo.url}/blog/${p.slug}/`,
      lastModified: p.date,
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ];
  const tags = getAllTags().map((t) => ({
    url: `${seo.url}/blog/tag/${t.slug}/`,
    changeFrequency: 'monthly',
    priority: 0.4,
  }));
  return [...pages, ...productPages, ...extra, ...blog, ...tags];
}
