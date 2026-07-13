import Link from 'next/link';
import Logo from './Logo';
import Icon from './Icon';
import { company, contact, nav, products } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900 text-white/80">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Private-label knit garments — cut, sewn, and finished to your spec in
            Gaindakot, Nepal.
          </p>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-5"
          >
            <Icon name="whatsapp" filled className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/70 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog/" className="text-white/70 transition hover:text-white">Insights</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">What we make</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {products.map((p) => (
              <li key={p.key} className="text-white/70">{p.name}</li>
            ))}
            <li>
              <Link href="/products/" className="font-medium text-white/90 hover:text-white">
                View line card →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <span className="text-white/70">{contact.address.full}</span>
            </li>
            <li className="flex gap-2.5">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <a href={`tel:${contact.phones[1].replace(/[^+\d]/g, '')}`} className="text-white/70 hover:text-white">
                {contact.phones[1]}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <a href={`mailto:${contact.email}`} className="text-white/70 hover:text-white">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
              <span className="text-white/70">{contact.hours.office}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.founded}–2026 {company.name}. All rights reserved.</p>
          <p>{company.taglinePoetic}</p>
        </div>
      </div>
    </footer>
  );
}
