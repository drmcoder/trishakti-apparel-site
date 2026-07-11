import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { seo, company, contact } from '@/lib/content';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-display', display: 'swap' });

export const metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.titleDefault,
    template: `%s · ${seo.siteName}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    type: 'website',
    siteName: seo.siteName,
    title: seo.titleDefault,
    description: seo.description,
    url: seo.url,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.titleDefault,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#1a3e73',
  width: 'device-width',
  initialScale: 1,
};

// Organization structured data — helps buyers find the factory in search.
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  description: seo.description,
  url: seo.url,
  foundingDate: company.founded,
  email: contact.email,
  telephone: contact.phones[0],
  address: {
    '@type': 'PostalAddress',
    streetAddress: contact.address.line1,
    addressLocality: 'Gaidakot',
    addressRegion: 'Gandaki Province',
    addressCountry: 'NP',
  },
  sameAs: [contact.facebook],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
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
        <WhatsAppFloat />
      </body>
    </html>
  );
}
