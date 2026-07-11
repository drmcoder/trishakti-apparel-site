import Icon from '@/components/Icon';
import InquiryForm from '@/components/InquiryForm';
import { contact } from '@/lib/content';

export const metadata = {
  title: 'Get a Quote',
  description:
    'Request a quote from Trishakti Apparel — private-label knitwear manufacturer in Gaindakot, Nepal. Share your designs and quantities, or reach us on WhatsApp, phone, or email.',
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-black/[0.06] bg-navy text-white">
        <div className="container-x py-14 sm:py-20">
          <span className="eyebrow text-brand-green">Get a quote</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Let’s price your program
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Tell us what you want to make and how many. We’ll come back with fabric
            options, MOQ, pricing, and lead time — usually within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <InquiryForm />
          </div>

          {/* Contact rail */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-brand-green/30 bg-brand-green/5 p-5 transition hover:bg-brand-green/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-green text-white">
                  <Icon name="whatsapp" filled className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-ink">WhatsApp (fastest)</div>
                  <div className="text-sm text-body/70">{contact.whatsappDisplay}</div>
                </div>
              </a>

              <ContactRow icon="mail" label="Email">
                <a href={`mailto:${contact.email}`} className="hover:text-navy">{contact.email}</a>
              </ContactRow>

              <ContactRow icon="phone" label="Phone">
                <div className="space-y-0.5">
                  {contact.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/[^+\d]/g, '')}`} className="block hover:text-navy">
                      {p}
                    </a>
                  ))}
                </div>
              </ContactRow>

              <ContactRow icon="pin" label="Factory & office">
                {contact.address.full}
              </ContactRow>

              <ContactRow icon="clock" label="Hours">
                <div className="space-y-0.5">
                  <div>{contact.hours.factory}</div>
                  <div>{contact.hours.office}</div>
                </div>
              </ContactRow>
            </div>

            {/* Map */}
            <div className="mt-4 overflow-hidden rounded-xl border border-black/[0.06]">
              <iframe
                title="Trishakti Apparel location"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-black/[0.06] p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-body/50">{label}</div>
        <div className="mt-0.5 text-sm text-body/85">{children}</div>
      </div>
    </div>
  );
}
