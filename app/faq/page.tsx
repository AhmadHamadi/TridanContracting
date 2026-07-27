import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import FAQAccordion from '@/components/FAQAccordion';
import { SectionHeader, CtaBanner, Breadcrumbs } from '@/components/sections';
import { buildMetadata } from '@/lib/seo';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';
import { globalFaqs } from '@/lib/content';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Frequently Asked Questions | Tridan Contracting',
  description:
    'Answers to common questions about Tridan Contracting, service areas, licensing & insurance, free quotes, permits, financing, warranty and timelines across the GTA.',
  path: '/faq',
});

export default function FaqPage() {
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'FAQ', href: '/faq' },
  ];
  return (
    <>
      <JsonLd data={[faqSchema(globalFaqs), breadcrumbSchema(crumbs)]} />

      <section className="border-b border-ink/10 bg-white">
        <div className="container-x py-12 lg:py-16">
          <Breadcrumbs items={crumbs} />
          <div className="mt-4">
            <SectionHeader
              as="h1"
              eyebrow="Questions & Answers"
              title="Frequently asked questions"
              intro="Everything you need to know about working with Tridan. Can’t find your answer? We’re a phone call away."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-ink/10 bg-ink p-6 text-white shadow-card">
              <h2 className="font-serif text-xl font-semibold">Still have questions?</h2>
              <p className="mt-2 text-sm text-silver-mut">
                Our team is happy to help, no pressure, no obligation.
              </p>
              <a href={site.phoneHref} className="btn-gold mt-5 w-full text-sm">
                <Icon name="phone" size={16} /> {site.phoneDisplay}
              </a>
              <a href={site.emailHref} className="btn-ghost-light mt-2 w-full text-sm">
                <Icon name="mail" size={16} /> Email Us
              </a>
              <Link href="/contact" className="mt-4 block text-center text-sm font-semibold text-gold hover:underline">
                Or request a free quote →
              </Link>
            </div>
          </div>
          <FAQAccordion items={globalFaqs} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
