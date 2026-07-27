import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';

type Props = {
  variant?: 'dark' | 'light'; // context background: 'dark' bg -> light text
  showText?: boolean;
  className?: string;
};

export default function Logo({ variant = 'light', showText = true, className = '' }: Props) {
  const textColor = variant === 'dark' ? 'text-white' : 'text-ink';
  const subColor = variant === 'dark' ? 'text-silver-mut' : 'text-ink-600/70';

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-md ring-1 ring-white/10 sm:h-12 sm:w-12">
        <Image
          src="/tridan-logo.png"
          alt={`${site.name} logo`}
          fill
          sizes="48px"
          className="object-cover"
          priority
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif text-lg font-semibold tracking-[0.18em] sm:text-xl ${textColor}`}
          >
            TRIDAN
          </span>
          <span className={`mt-1 text-[0.6rem] font-medium uppercase tracking-[0.32em] ${subColor}`}>
            Contracting
          </span>
        </span>
      )}
    </Link>
  );
}
