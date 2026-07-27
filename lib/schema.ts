// ---------------------------------------------------------------------------
// JSON-LD builders. Centralized so structured data stays consistent and NAP
// matches everywhere (a key local-ranking signal).
// ---------------------------------------------------------------------------

import { site } from './site';
import { cities } from './areas';
import type { Service } from './services';
import type { City } from './areas';
import type { Post } from './blog';

const BUSINESS_ID = `${site.url}/#business`;
const WEBSITE_ID = `${site.url}/#website`;

const areaServed = cities.map((c) => ({
  '@type': 'City',
  name: `${c.name}, Ontario, Canada`,
}));

const openingHours = site.hours
  .filter((h) => h.open !== 'closed')
  .map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.day,
    opens: h.open,
    closes: h.close,
  }));

/** Core GeneralContractor / LocalBusiness entity — used site-wide. */
export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['GeneralContractor', 'HomeAndConstructionBusiness', 'LocalBusiness'],
    '@id': BUSINESS_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/tridan-logo.png`,
    logo: `${site.url}/tridan-logo.png`,
    description: site.description,
    priceRange: '$$–$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed,
    openingHoursSpecification: openingHours,
    knowsAbout: [
      'Deck building',
      'Interlocking and paver installation',
      'Kitchen renovations',
      'Bathroom renovations',
      'Basement finishing',
      'Home additions',
      'Interior and exterior painting',
      'Landscaping and hardscaping',
    ],
    slogan: site.tagline,
    founder: { '@type': 'Person', name: 'Dani' },
    sameAs: Object.values(site.social),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.stats.reviewRating,
      reviewCount: site.stats.reviewCount.replace('+', ''),
      bestRating: '5',
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.name,
    publisher: { '@id': BUSINESS_ID },
    inLanguage: 'en-CA',
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.href}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.name,
    description: service.excerpt,
    provider: { '@id': BUSINESS_ID },
    areaServed,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'CAD',
      description: `Typical range: ${service.priceRange}`,
      availability: 'https://schema.org/InStock',
    },
    url: `${site.url}/services/${service.slug}`,
  };
}

export function cityServiceSchema(city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `General Contracting in ${city.name}`,
    description: `Outdoor living, renovations and painting in ${city.name}, ${city.region} Region, Ontario.`,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: `${city.name}, Ontario, Canada` },
    url: `${site.url}/service-areas/${city.slug}`,
  };
}

export function solutionSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@id': BUSINESS_ID },
    areaServed,
    url: `${site.url}${url}`,
  };
}

export function articleSchema(post: Post, imageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: site.name, url: site.url },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: { '@type': 'ImageObject', url: `${site.url}/tridan-logo.png` },
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    inLanguage: 'en-CA',
  };
}
