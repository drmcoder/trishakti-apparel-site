import { seo, nav } from '@/lib/content';

// Generates a static sitemap.xml at build time (works with output: 'export').
export default function sitemap() {
  return nav.map((item) => ({
    url: `${seo.url}${item.href}`,
    changeFrequency: 'monthly',
    priority: item.href === '/' ? 1 : 0.8,
  }));
}
