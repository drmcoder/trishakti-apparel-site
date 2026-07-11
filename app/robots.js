import { seo } from '@/lib/content';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${seo.url}/sitemap.xml`,
  };
}
