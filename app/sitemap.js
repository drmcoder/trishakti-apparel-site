import { seo, nav, products } from '@/lib/content';
import { posts } from '@/lib/posts';

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
    { url: `${seo.url}/sustainability/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${seo.url}/compliance/`, changeFrequency: 'monthly', priority: 0.7 },
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
  return [...pages, ...productPages, ...extra, ...blog];
}
