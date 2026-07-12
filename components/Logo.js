import Image from 'next/image';
import { asset } from '@/lib/asset';

// Real brand lockup: the hexagonal monogram mark + wordmark.
// `variant="light"` uses the white mark for dark backgrounds.
export default function Logo({ variant = 'dark', className = '' }) {
  const light = variant === 'light';
  const text = light ? 'text-white' : 'text-navy';
  const sub = light ? 'text-white/70' : 'text-body/70';
  const src = light ? '/assets/logo-mark-white.png' : '/assets/logo-mark.png';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* next/image so the src respects basePath/assetPrefix on subpath deploys */}
      <Image src={asset(src)} alt="Trishakti Apparel logo" width={34} height={40} className="h-9 w-auto" />
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
