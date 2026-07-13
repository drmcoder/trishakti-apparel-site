import './globals.css';
import Script from 'next/script';
import { Inter, Fraunces } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import MobileCTABar from '@/components/MobileCTABar';
import Reveal from '@/components/Reveal';
import { seo, company, contact } from '@/lib/content';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
// Fraunces: an old-style display serif — heritage, editorial, "crafted".
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.titleDefault,
    template: `%s · ${seo.siteName}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: seo.siteName,
    title: seo.titleDefault,
    description: seo.description,
    url: seo.url,
    locale: 'en_US',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630, alt: seo.siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.titleDefault,
    description: seo.description,
    images: ['/assets/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport = {
  themeColor: '#1e2a44',
  width: 'device-width',
  initialScale: 1,
};

// Structured data — helps buyers (and AI/search) understand the factory.
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': `${seo.url}/#organization`,
  name: company.name,
  legalName: company.name,
  description: seo.description,
  url: seo.url,
  logo: `${seo.url}/assets/logo-mark.png`,
  image: `${seo.url}/assets/og-image.jpg`,
  foundingDate: company.founded,
  email: contact.email,
  telephone: contact.phones[0],
  knowsLanguage: 'en',
  areaServed: ['European Union', 'United Kingdom', 'Canada', 'United States', 'Australia', 'Japan', 'Worldwide'],
  slogan: company.tagline,
  foundingDate: company.founded,
  knowsAbout: [
    'Private-label knit garment manufacturing',
    'Cut and sew apparel production',
    'T-shirt, polo, sweatshirt and hoodie manufacturing',
    'Duty-free apparel sourcing from Nepal (EBA, DCTS, LDCT)',
    'Low-MOQ clothing manufacturing for brands and importers',
    'Rules of origin and Certificate of Origin for garment exports',
    'Ethical and women-led garment production',
  ],
  naics: '315220', // Men's & boys' cut and sew apparel manufacturing
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
    addressLocality: 'Gaidakot',
    addressRegion: 'Gandaki Province',
    addressCountry: 'NP',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: contact.email,
    telephone: contact.phones[1],
    availableLanguage: 'en',
    areaServed: 'Worldwide',
  },
  makesOffer: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'Private-label knit garment manufacturing (cut & sew)',
    },
  },
  sameAs: [contact.facebook],
};

// WebSite entity — helps engines and AI assistants model the site itself.
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${seo.url}/#website`,
  name: seo.siteName,
  url: seo.url,
  inLanguage: 'en',
  publisher: { '@id': `${seo.url}/#organization` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        {/* Microsoft Clarity — analytics & heatmaps */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "xlxbid90s0");`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {/* Spacer so the fixed mobile action bar never covers footer content */}
        <div className="h-14 md:hidden" aria-hidden="true" />
        <WhatsAppFloat />
        <MobileCTABar />
        <Reveal />
      </body>
    </html>
  );
}
