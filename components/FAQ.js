'use client';

import { useState } from 'react';
import { faqs as defaultFaqs } from '@/lib/content';

export default function FAQ({ items }) {
  const faqs = items || defaultFaqs;
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-black/[0.08] rounded-lg border border-line">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="font-medium text-ink">{f.q}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-navy transition-transform ${isOpen ? 'rotate-45' : ''}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 -mt-1 text-sm leading-relaxed text-body/80">{f.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
