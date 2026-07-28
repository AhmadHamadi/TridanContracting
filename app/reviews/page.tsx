import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { SectionHeader, Testimonials, Stars, CtaBanner, Breadcrumbs, PageFaqs } from '@/components/sections';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { faqsFor } from '@/lib/faqbank';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Reviews | What GTA Homeowners Say About Tridan',
  description:
    'Read reviews from homeowners across the GTA who trusted Tridan Contracting for their outdoor living and renovation projects. Rated 5 stars.',
  path: '/reviews',
});

export default function ReviewsPage() {
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Reviews', href: '/reviews' },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="surface-dark py-14 lg:py-20">
        <div className="container-x text-center">
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 flex flex-col items-center">
            <Stars n={5} size={26} />
            <h1 className="mt-4 font-serif text-4xl font-semibold text-white sm:text-5xl">
              {site.stats.reviewRating} stars from {site.stats.reviewCount} homeowners
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-silver-mut">
              We’ve earned our reputation one project at a time. Here’s what homeowners across the
              Greater Toronto Area say about working with Tridan Contracting.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Testimonials limit={6} />
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white py-12">
        <div className="container-x flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink">Worked with us? We’d love your review.</h2>
            <p className="mt-2 text-ink-600">Your feedback helps other GTA homeowners choose with confidence.</p>
          </div>
          <a href={site.social.google} target="_blank" rel="noopener noreferrer" className="btn-dark shrink-0">
            <Icon name="star" size={18} /> Leave a Google Review
          </a>
        </div>
      </section>

      <PageFaqs
        eyebrow="Good to Know"
        title="Choosing a contractor you can trust"
        items={faqsFor(['hiring', 'warranty'], 6)}
      />

      <CtaBanner
        title="Join hundreds of happy homeowners"
        subtitle="Experience the Tridan difference on your next project. Free quotes, always."
      />
    </>
  );
}
