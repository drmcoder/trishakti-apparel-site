'use client';

import { useState } from 'react';
import Icon from './Icon';
import { inquiry, contact } from '@/lib/content';

const FIELDS = [
  { name: 'name', label: 'Your name', type: 'text', required: true, half: true },
  { name: 'company', label: 'Company / brand', type: 'text', required: true, half: true },
  { name: 'email', label: 'Email', type: 'email', required: true, half: true },
  { name: 'country', label: 'Destination country', type: 'text', required: false, half: true },
];

const QUANTITY_RANGES = [
  'Under 500 pcs',
  '500 – 2,000 pcs',
  '2,000 – 10,000 pcs',
  '10,000+ pcs',
  'Not sure yet',
];

export default function InquiryForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const hasEndpoint = Boolean(inquiry.endpoint);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // No backend configured yet -> open the user's email client pre-filled.
    if (!hasEndpoint) {
      const body = [
        `Name: ${data.name}`,
        `Company: ${data.company}`,
        `Email: ${data.email}`,
        `Destination country: ${data.country}`,
        `Buyer type: ${data.buyerType}`,
        `Product: ${data.product}`,
        `Target quantity: ${data.quantity || '—'}`,
        '',
        data.message || '',
        '',
        '(If you have a tech pack or artwork, please attach it to this email.)',
      ].join('\n');
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        `Quote request — ${data.company || data.name}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      return;
    }

    try {
      setStatus('sending');
      const res = await fetch(inquiry.endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="card flex flex-col items-center gap-3 p-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success">
          <Icon name="check" className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-ink">Thank you — we’ll be in touch</h3>
        <p className="max-w-sm text-sm text-body/70">
          {hasEndpoint
            ? 'Your inquiry has been sent. Our team typically replies within one business day.'
            : 'Your email draft is ready to send. Prefer instant contact? Message us on WhatsApp.'}
        </p>
        <a
          href={`https://wa.me/${contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-1"
        >
          <Icon name="whatsapp" filled className="h-4 w-4" />
          WhatsApp us
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <div key={f.name} className={f.half ? '' : 'sm:col-span-2'}>
            <label htmlFor={f.name} className="mb-1 block text-sm font-medium text-ink">
              {f.label} {f.required && <span className="text-error">*</span>}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required={f.required}
              className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/20"
            />
          </div>
        ))}

        <div>
          <label htmlFor="buyerType" className="mb-1 block text-sm font-medium text-ink">
            You are a… <span className="font-normal text-body/50">(optional)</span>
          </label>
          <select
            id="buyerType"
            name="buyerType"
            defaultValue=""
            className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/20"
          >
            <option value="" disabled>Select…</option>
            {inquiry.buyerTypes.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="product" className="mb-1 block text-sm font-medium text-ink">
            Product of interest <span className="text-error">*</span>
          </label>
          <select
            id="product"
            name="product"
            required
            defaultValue=""
            className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/20"
          >
            <option value="" disabled>Select a product…</option>
            {inquiry.productOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quantity" className="mb-1 block text-sm font-medium text-ink">
            Target quantity <span className="font-normal text-body/50">(optional)</span>
          </label>
          <select
            id="quantity"
            name="quantity"
            defaultValue=""
            className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/20"
          >
            <option value="" disabled>Select a range…</option>
            {QUANTITY_RANGES.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
            Tell us about your program
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Designs / tech pack, fabric, timeline, and anything else we should know."
            className="w-full rounded-lg border border-black/10 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/20"
          />
        </div>

        {hasEndpoint && (
          <div className="sm:col-span-2">
            <label htmlFor="attachment" className="mb-1 block text-sm font-medium text-ink">
              Tech pack / artwork <span className="font-normal text-body/50">(optional)</span>
            </label>
            <input
              id="attachment"
              name="attachment"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,.xlsx,.ai,.zip"
              className="w-full rounded-lg border border-dashed border-black/15 bg-white px-3.5 py-2.5 text-sm text-body/80 file:mr-3 file:rounded-md file:border-0 file:bg-navy/5 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-navy"
            />
          </div>
        )}
      </div>

      {status === 'error' && (
        <p className="mt-4 rounded-lg bg-error/10 px-3 py-2 text-sm text-error">
          Something went wrong. Please email {contact.email} or message us on WhatsApp.
        </p>
      )}

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send inquiry'}
        {status !== 'sending' && <Icon name="arrow" className="h-4 w-4" />}
      </button>
      <p className="mt-3 text-xs text-body/60">
        We typically reply within one business day. We’ll only use your details to
        respond to this inquiry — no spam, ever.
      </p>
    </form>
  );
}
