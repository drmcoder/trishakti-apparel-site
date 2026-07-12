import Icon from './Icon';
import { contact } from '@/lib/content';

// Persistent WhatsApp entry point — every page needs a fast path to inquiry.
export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
        "Hello Trishakti Apparel — I'd like to discuss a private-label order."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition hover:scale-105 hover:brightness-95"
    >
      <Icon name="whatsapp" filled className="h-7 w-7" />
    </a>
  );
}
