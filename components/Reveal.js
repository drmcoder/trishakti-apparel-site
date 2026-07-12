'use client';

import { useEffect } from 'react';

// Tasteful, safe scroll-reveal. Only hides sections that are BELOW the fold at
// load (so no-JS and above-the-fold content are never hidden), then fades them
// up on scroll. Respects prefers-reduced-motion.
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = Array.from(document.querySelectorAll('main section'));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) return; // already visible → leave alone
      el.classList.add('reveal');
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
