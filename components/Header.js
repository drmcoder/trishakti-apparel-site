'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { nav, contact } from '@/lib/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  const norm = (s) => (s !== '/' && s.endsWith('/') ? s.slice(0, -1) : s);
  const isActive = (href) => norm(pathname) === norm(href);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" aria-label="Trishakti Apparel — home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.slice(0, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`rounded-md px-3 py-2 text-sm font-medium transition hover:bg-navy/5 hover:text-navy ${
                isActive(item.href) ? 'bg-navy/5 text-navy' : 'text-body'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact/" className="btn-primary ml-2">
            Request a Quote
          </Link>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-navy md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white md:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`rounded-md px-3 py-3 text-base font-medium hover:bg-navy/5 hover:text-navy ${
                  isActive(item.href) ? 'bg-navy/5 text-navy' : 'text-body'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-2"
            >
              WhatsApp us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
