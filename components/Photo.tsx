'use client';

import { useState } from 'react';
import { unsplash } from '@/lib/content';

type Props = {
  id: string;
  alt: string;
  width?: number;
  quality?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Themed stock photo with a graceful branded fallback. Uses the Unsplash CDN
 * (auto AVIF/WebP). If an image ever fails to load, we fade in a dark
 * gold-tinted gradient instead of a broken image, so the design never breaks.
 */
export default function Photo({
  id,
  alt,
  width = 1600,
  quality = 68,
  className = '',
  sizes,
  priority = false,
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`bg-ink ${className}`}
        role="img"
        aria-label={alt}
        style={{
          backgroundImage:
            'radial-gradient(120% 120% at 20% 0%, rgba(201,162,39,0.22), rgba(10,10,10,1) 60%)',
        }}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={unsplash(id, width, quality)}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      sizes={sizes}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
