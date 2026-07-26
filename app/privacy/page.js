import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { contact } from '@/lib/content';
import { og } from '@/lib/seo';

export const metadata = {
  title: 'Privacy Notice',
  description: 'How Trishakti Apparel handles website enquiry information and third-party services.',
  alternates: { canonical: '/privacy' },
  openGraph: og({ title: 'Privacy Notice · Trishakti Apparel', path: '/privacy/' }),
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="How we handle website enquiries">
        This notice explains the information collected when you contact Trishakti Apparel through this website.
      </PageHero>

      <section className="section">
        <div className="container-x">
          <div className="measure space-y-10">
            <section>
              <h2 className="text-2xl">Information you provide</h2>
              <p className="mt-3">
                Our inquiry form may collect your name, company, email address, destination country,
                product interest, quantity range, message, and any optional attachment you choose to send.
                We use this information to respond to your request and prepare a quote.
              </p>
            </section>
            <section>
              <h2 className="text-2xl">Services used on this site</h2>
              <p className="mt-3">
                Website inquiries are delivered through the form provider configured for this site. The site also
                loads Microsoft Clarity and Ahrefs Web Analytics, embeds Google Maps on the contact page, and links
                to WhatsApp when you choose to contact us there. Those services process information under their own
                privacy terms.
              </p>
            </section>
            <section>
              <h2 className="text-2xl">Your choices</h2>
              <p className="mt-3">
                You can contact us directly to ask about, correct, or request deletion of the information you sent.
                You can also use email or WhatsApp instead of the website form.
              </p>
              <p className="mt-3">
                Email <a className="text-primary-700 underline" href={`mailto:${contact.email}`}>{contact.email}</a>{' '}
                or visit the <Link className="text-primary-700 underline" href="/contact/">contact page</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
