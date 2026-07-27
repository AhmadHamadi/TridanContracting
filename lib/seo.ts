// ---------------------------------------------------------------------------
// Metadata helpers, consistent titles, descriptions, canonicals, OG/Twitter.
// ---------------------------------------------------------------------------

import type { Metadata } from 'next';
import { site } from './site';
import { unsplash } from './content';

type BuildArgs = {
  title: string; // full <title>, brand included (we render it absolute)
  description: string;
  path: string; // e.g. '/services/deck-building' (no domain, no trailing slash)
  imageId?: string; // Unsplash id for OG image
  type?: 'website' | 'article';
  publishedTime?: string;
};

/**
 * Keep titles within the ~60 char SERP limit without truncating mid-word.
 * If a title with the full brand is too long, first drop to the short brand,
 * then, only if still too long, trim the descriptive part cleanly.
 */
export function metaTitle(s: string): string {
  if (s.length <= 60) return s;
  const shortened = s.replace(' | Tridan Contracting', ' | Tridan');
  if (shortened.length <= 60) return shortened;
  // Trim the part before the brand separator, keep the brand intact.
  const sep = ' | Tridan';
  if (shortened.includes(sep)) {
    const [head, ...rest] = shortened.split(sep);
    const brand = sep + rest.join(sep);
    const room = 60 - brand.length - 1;
    if (room > 8) return head.slice(0, room).trimEnd() + brand;
  }
  return shortened.slice(0, 59).trimEnd();
}

export function buildMetadata({
  title,
  description,
  path,
  imageId = '1600585154340-be6161a56a0c',
  type = 'website',
  publishedTime,
}: BuildArgs): Metadata {
  const url = `${site.url}${path === '/' ? '' : path}`;
  const ogImage = unsplash(imageId, 1200, 70);
  const finalTitle = metaTitle(title);

  return {
    // `absolute` bypasses the root layout title template so the brand is not
    // appended a second time (our titles already include it).
    title: { absolute: finalTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: finalTitle,
      description,
      url,
      siteName: site.name,
      locale: 'en_CA',
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: ogImage, width: 1200, height: 630, alt: finalTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description,
      images: [ogImage],
    },
  };
}
