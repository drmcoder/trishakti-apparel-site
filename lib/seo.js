import { seo } from './content';

// Full per-page Open Graph. Next.js App Router does NOT merge a child route's
// `openGraph` sub-fields with the parent's — the closest one wins entirely — so
// any page that sets openGraph must set ALL of it, or previews fall back to the
// homepage's title/url/image. This helper builds a complete, self-referential
// OG block whose `url` matches the page's canonical (with trailing slash, to
// match the served URL under trailingSlash:true).
//
// Fixes Ahrefs "Open Graph tags incomplete" + "Open Graph URL not matching
// canonical", and gives correct WhatsApp/LinkedIn/Facebook link previews.
export function og({ title, description, path, type = 'website', images }) {
  return {
    type,
    title: title || seo.titleDefault,
    description: description || seo.description,
    url: `${seo.url}${path}`,
    images:
      images || [
        { url: `${seo.url}/assets/og-image.jpg`, width: 1200, height: 630, alt: seo.siteName },
      ],
  };
}
