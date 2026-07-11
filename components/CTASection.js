import Link from 'next/link';
import Icon from './Icon';
import { contact } from '@/lib/content';

// Reusable closing CTA band. Used at the bottom of most pages.
export default function CTASection({
  title = 'Ready to make your line in Nepal?',
  body = 'Send us your designs, tech pack, or a reference — we’ll come back with MOQ, pricing, and lead time for your program.',
}) {
  return (
    <section className="section bg-navy text-white">
      <div className="container-x flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-lg text-white/80">{body}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact/" className="btn-accent">
            Request a Quote
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-light"
          >
            <Icon name="whatsapp" filled className="h-4 w-4" />
            WhatsApp {contact.whatsappDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
