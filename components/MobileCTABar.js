'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import { contact } from '@/lib/content';

// Persistent mobile action bar — always-visible "Get a Quote" + WhatsApp so a
// buyer browsing on a phone is never more than one tap from an inquiry.
// Mobile only (desktop keeps the header CTA + floating WhatsApp).
export default function MobileCTABar() {
  const pathname = usePathname();
  // On the contact page the form is already on screen — no need for the bar.
  if (pathname && pathname.startsWith('/contact')) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-white/95 backdrop-blur md:hidden">
      <Link
        href="/contact/"
        className="flex flex-1 items-center justify-center gap-2 bg-accent py-3.5 text-sm font-semibold text-white"
      >
        Get a Quote
        <Icon name="arrow" className="h-4 w-4" />
      </Link>
      <a
        href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
          "Hello Trishakti Apparel — I'd like to discuss a private-label order."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-whatsapp py-3.5 text-sm font-semibold text-white"
      >
        <Icon name="whatsapp" filled className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
