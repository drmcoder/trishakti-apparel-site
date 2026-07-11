// Wordmark + mark. Swap the SVG mark for the real logo when Santosh provides it.
export default function Logo({ variant = 'dark', className = '' }) {
  const text = variant === 'light' ? 'text-white' : 'text-navy';
  const sub = variant === 'light' ? 'text-white/70' : 'text-body/70';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark variant={variant} />
      <span className="leading-none">
        <span className={`block text-[17px] font-bold tracking-tight ${text}`}>
          Trishakti <span className="font-medium">Apparel</span>
        </span>
        <span className={`block text-[10px] font-medium uppercase tracking-[0.16em] ${sub}`}>
          Cut &amp; Sew · Nepal
        </span>
      </span>
    </span>
  );
}

// Three intertwined pillars = quality, innovation, sustainability (per logo meaning).
function Mark({ variant }) {
  const navy = variant === 'light' ? '#ffffff' : '#1a3e73';
  const green = variant === 'light' ? '#bfe6bf' : '#228b22';
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <rect width="34" height="34" rx="8" fill={navy} />
      <path d="M11 24V13.5C11 11.6 12.5 10 14.5 10S18 11.6 18 13.5V24" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M17 24V15.5C17 13.6 18.5 12 20.5 12S24 13.6 24 15.5V24" stroke={green} strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
