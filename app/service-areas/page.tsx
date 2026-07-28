import type { Metadata } from 'next';
import Link from 'next/link';
import Photo from '@/components/Photo';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { SectionHeader, CtaBanner, Breadcrumbs, PageFaqs } from '@/components/sections';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { cities, regionOrder, citiesByRegion } from '@/lib/areas';
import { faqsFor } from '@/lib/faqbank';

export const metadata: Metadata = buildMetadata({
  title: 'Service Areas | Tridan Contracting Across the GTA',
  description:
    'Tridan Contracting serves the Greater Toronto Area, Toronto, Mississauga, Oakville, Burlington, Whitby, Oshawa & more. Find your city for local outdoor living & renovations.',
  path: '/service-areas',
});

export default function ServiceAreasPage() {
  const areaGroups = citiesByRegion();
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Service Areas', href: '/service-areas' },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-90">
          <Photo id="1517090504586-fde19ea6066f" alt="" width={1920} className="h-full w-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/25" />
        </div>
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold text-white sm:text-5xl text-balance">
            Serving homeowners across the Greater Toronto Area
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-silver-light">
            From Toronto’s core to Halton, Peel and Durham, Tridan brings premium outdoor living,
            renovations to your neighbourhood, with local knowledge of permits, bylaws
            and the way GTA properties are built. Find your city below.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x space-y-14">
          {regionOrder.map((region) => (
            <div key={region}>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-gold">
                  <Icon name="pin" size={20} />
                </span>
                <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                  {region}
                  {region === 'Toronto' ? '' : ' Region'}
                </h2>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {(areaGroups[region] ?? []).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-areas/${c.slug}`}
                    className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-gold"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <Photo
                        id={c.image}
                        alt={`Contracting services in ${c.name}`}
                        width={500}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-card-fade" />
                      <h3 className="absolute bottom-3 left-4 font-serif text-lg font-semibold text-white">
                        {c.name}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3">
                      <span className="text-xs text-ink-600/70">{c.neighbourhoods.length}+ neighbourhoods</span>
                      <Icon name="arrow" size={16} className="text-gold-dark transition group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageFaqs
        eyebrow="Good to Know"
        title="Working with a GTA contractor"
        items={faqsFor(['hiring', 'permits', 'cost'], 6)}
      />

      <CtaBanner
        title="Don’t see your city? We may still serve you."
        subtitle="We work throughout the GTA. Call us and we’ll let you know how soon we can be at your door."
      />
    </>
  );
}
