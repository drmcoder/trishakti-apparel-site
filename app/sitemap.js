import { seo, nav, products } from '@/lib/content';

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
  return [...pages, ...productPages];
}
