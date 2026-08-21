import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { asset } from '@/lib/asset';
import { getEventImages } from '@/lib/events';
import { gallery, seo } from '@/lib/content';

import { og } from '@/lib/seo';

export const metadata = {
  title: 'Product Work & Factory Updates',
  description:
    'Selected product photography and verified factory updates from Trishakti Apparel in Gaindakot, Nepal.',
  alternates: { canonical: '/gallery' },
  openGraph: og({ title: 'Product Work & Factory Updates · Trishakti Apparel', path: '/gallery/' }),
  keywords: [
    'Trishakti Apparel factory photos',
    'women-led garment factory Nepal',
    'inside a Nepal clothing factory',
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${seo.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${seo.url}/gallery/` },
  ],
};

export default function GalleryPage() {
  const images = getEventImages();

  return (
    <>
      <PageHero eyebrow="Life at Trishakti" title="Our people, our floor, our story">
        We publish approved, verifiable visual updates here. Browse selected product work now,
        then book a live video walkthrough or factory visit to see the current production floor.
      </PageHero>

      <section className="section">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Product work</span>
            <h2 className="mt-2 h-section">A look at the product range</h2>
            <p className="mt-4 lead">Selected knit and woven product photography from our line card.</p>
            <p className="mt-4 text-body/80">
              Everything shown here was cut and sewn on our own floor in Gaindakot — crew-neck tees,
              piqué and jersey polos, fleece sweatshirts and hoodies, henleys, tanks, women’s fits,
              and kids’ co-ord sets. These are the same constructions we quote for private-label
              buyers: your fabric weight, your fit, your label. If a garment here is close to what
              you need, mention it in your inquiry and we’ll spec from it.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {gallery.map((image) => (
              <figure key={image.src} className="relative aspect-square overflow-hidden rounded-lg border border-line bg-mist">
                <Image
                  src={asset(image.src)}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist/50">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Factory updates</span>
            <h2 className="mt-2 h-section">Approved photos from the floor</h2>
            <p className="mt-4 text-body/80">
              Real photographs from a real factory: the cutting tables, sewing lines, and finishing
              section of a women-majority production floor in Gaindakot, Nepal. We publish only
              approved, current images — and for anything a photo can’t prove, we offer every buyer
              a live, unscripted video walkthrough where you direct the camera.
            </p>
          </div>
          {images.length === 0 ? (
            <div className="mt-8 max-w-2xl rounded-lg border border-line bg-white p-8">
              <p className="text-body/80">
                We are gathering approved, current photography of the team and production floor.
                Until it is published, <a href="/contact/" className="font-medium text-primary-700 hover:underline">book a live video walkthrough</a> or factory visit to see the operation directly.
              </p>
            </div>
          ) : (
            <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
              {images.map((img) => (
                <figure key={img.src} className="break-inside-avoid overflow-hidden rounded-lg border border-line bg-mist">
                  <div className="relative">
                    <Image
                      src={asset(img.src)}
                      alt={img.alt}
                      width={800}
                      height={1000}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="px-4 py-3 text-sm text-body/80">{img.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <CTASection
        title="Come see it for yourself"
        body="Photos tell part of the story. Book a factory visit or a live video walkthrough and meet the team behind your order."
      />
    </>
  );
}
