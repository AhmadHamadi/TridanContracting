import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { serviceSlugs } from '@/lib/services';
import { citySlugs, matrixCitySlugs } from '@/lib/areas';
import { postSlugs } from '@/lib/blog';
import { solutionSlugs } from '@/lib/solutions';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date('2026-07-20');

  const staticPages = [
    '',
    '/services',
    '/solutions',
    '/service-areas',
    '/about',
    '/blog',
    '/faq',
    '/financing',
    '/gallery',
    '/reviews',
    '/contact',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const servicePages = serviceSlugs.map((s) => ({
    url: `${base}/services/${s}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const cityPages = citySlugs.map((c) => ({
    url: `${base}/service-areas/${c}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const cityServicePages = matrixCitySlugs.flatMap((c) =>
    serviceSlugs.map((s) => ({
      url: `${base}/service-areas/${c}/${s}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  );

  const solutionPages = solutionSlugs.map((slug) => ({
    url: `${base}/solutions/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = postSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...solutionPages,
    ...cityPages,
    ...cityServicePages,
    ...blogPages,
  ];
}
