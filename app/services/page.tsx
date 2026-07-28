import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import Photo from '@/components/Photo';
import JsonLd from '@/components/JsonLd';
import {
  SectionHeader,
  ServiceCard,
  ProcessSteps,
  CtaBanner,
  Breadcrumbs,
  PageFaqs,
} from '@/components/sections';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { categories, servicesByCategory, defaultProcess } from '@/lib/services';
import { faqsFor } from '@/lib/faqbank';

export const metadata: Metadata = buildMetadata({
  title: 'Our Services | Tridan Contracting',
  description:
    'Outdoor living, home renovations across the GTA. Decks, patios, kitchens, bathrooms, basements, additions & more, one licensed contractor for your whole property.',
  path: '/services',
});

const iconMap = { outdoor: 'outdoor', reno: 'reno', paint: 'paint', landscape: 'landscape', bolt: 'bolt' } as const;

export default function ServicesPage() {
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-90">
          <Photo id="1556911220-bff31c812dba" alt="" width={1920} className="h-full w-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/25" />
        </div>
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold text-white sm:text-5xl text-balance">
            One contractor for outdoor living & renovations
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-silver-light">
            From backyard to basement, Tridan designs and builds it all, to code, on budget, and
            backed by our 5-year workmanship warranty. Explore our full range of services across the GTA.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-gold hover:text-gold"
              >
                <Icon name={iconMap[c.icon]} size={16} className="text-gold" />
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category sections */}
      {categories.map((cat, idx) => (
        <section
          key={cat.slug}
          id={cat.slug}
          className={`scroll-mt-24 py-16 sm:py-20 ${idx % 2 === 1 ? 'surface-dark' : ''}`}
        >
          <div className="container-x">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-gold">
                <Icon name={iconMap[cat.icon]} size={22} />
              </span>
              <div>
                <span className={idx % 2 === 1 ? 'eyebrow-light' : 'eyebrow'}>{cat.name}</span>
              </div>
            </div>
            <div className="mt-3 max-w-2xl">
              <h2 className={`text-3xl sm:text-4xl ${idx % 2 === 1 ? 'text-white' : 'text-ink'}`}>
                {cat.name}
              </h2>
              <p className={`mt-3 text-lg ${idx % 2 === 1 ? 'text-silver-mut' : 'text-ink-600'}`}>
                {cat.blurb}
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicesByCategory(cat.slug).map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            center
            eyebrow="How We Work"
            title="The same proven process on every project"
            intro="Whatever we’re building, you get the same clarity, communication and craftsmanship."
          />
          <div className="mt-12">
            <ProcessSteps steps={defaultProcess} />
          </div>
        </div>
      </section>

      <PageFaqs
        light
        eyebrow="Good to Know"
        title="Questions homeowners ask before they start"
        items={faqsFor(['cost', 'permits', 'warranty'], 6)}
      />

      <CtaBanner />
    </>
  );
}
