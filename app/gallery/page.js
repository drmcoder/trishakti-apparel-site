import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { asset } from '@/lib/asset';
import { getEventImages } from '@/lib/events';
import { seo } from '@/lib/content';

export const metadata = {
  title: 'Life at Trishakti — Our Team, Factory & Events',
  description:
    'Real photos from inside Trishakti Apparel — our people, our production floor in Gaindakot, and life at a women-led knit garment factory in Nepal.',
  alternates: { canonical: '/gallery' },
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
        We’d rather show you than tell you. Real moments from inside our factory in
        Gaindakot — the team behind your garments, the floor they’re made on, and the life
        of a women-led knit factory in Nepal.
      </PageHero>

      <section className="section">
        <div className="container-x">
          {images.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-lg border border-line bg-mist/50 p-8 text-center">
              <p className="text-body/80">
                Photos are on their way — we’re gathering real shots of the team and floor.
                In the meantime, <a href="/contact/" className="font-medium text-primary-700 hover:underline">book a live video walkthrough</a> and see it in real time.
              </p>
            </div>
          ) : (
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
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
