import type { SVGProps } from 'react';

type IconName =
  | 'outdoor'
  | 'reno'
  | 'paint'
  | 'landscape'
  | 'phone'
  | 'mail'
  | 'sms'
  | 'check'
  | 'star'
  | 'arrow'
  | 'chevron'
  | 'shield'
  | 'clock'
  | 'award'
  | 'wallet'
  | 'pin'
  | 'menu'
  | 'close'
  | 'quote'
  | 'sparkle'
  | 'hammer'
  | 'bolt'
  | 'tile';

const paths: Record<IconName, JSX.Element> = {
  outdoor: (
    <>
      <path d="M3 21h18M5 21v-8l7-5 7 5v8M9 21v-5h6v5" />
      <path d="M12 3v3" />
    </>
  ),
  reno: (
    <>
      <path d="M3 21h18M6 21V9l6-4 6 4v12" />
      <path d="M10 21v-6h4v6M9 12h.01M15 12h.01" />
    </>
  ),
  paint: (
    <>
      <path d="M3 5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8" />
      <path d="M8 11v3a2 2 0 0 0 2 2h1v3a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-1" />
    </>
  ),
  landscape: (
    <>
      <path d="M12 22V12" />
      <path d="M12 12c0-3 2-5 5-5-1 3-2 5-5 5Z" />
      <path d="M12 14c0-3-2-5-5-5 1 3 2 5 5 5Z" />
      <path d="M4 22h16" />
    </>
  ),
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </>
  ),
  sms: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />,
  check: <path d="M20 6 9 17l-5-5" />,
  star: <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="6" />
      <path d="m8.5 13-1.5 8 5-3 5 3-1.5-8" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 6a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2" />
      <path d="M3 6v12a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-3" />
      <path d="M21 12v3h-4a2 2 0 0 1 0-4h4a0 0 0 0 1 0 0Z" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  quote: <path d="M7 7h4v4c0 2.2-1.3 3.7-3.5 4.5L7 14c1.2-.5 1.8-1.2 1.9-2.2H7V7Zm8 0h4v4c0 2.2-1.3 3.7-3.5 4.5L15 14c1.2-.5 1.8-1.2 1.9-2.2H15V7Z" />,
  sparkle: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />,
  hammer: (
    <>
      <path d="m15 12-8.5 8.5a2.1 2.1 0 0 1-3-3L12 9" />
      <path d="M17.6 6.4 14 10l-2-2 3.6-3.6a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8Z" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  tile: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
};

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
  filled?: boolean;
};

export default function Icon({ name, size = 24, filled = false, ...rest }: Props) {
  const solid = filled || name === 'star' || name === 'quote';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={solid ? 'currentColor' : 'none'}
      stroke={solid ? 'none' : 'currentColor'}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
