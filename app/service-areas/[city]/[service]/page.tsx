import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Photo from '@/components/Photo';
import Icon from '@/components/Icon';
import QuoteForm from '@/components/QuoteForm';
import JsonLd from '@/components/JsonLd';
import FAQAccordion from '@/components/FAQAccordion';
import {
  SectionHeader,
  ProcessSteps,
  Testimonials,
  Breadcrumbs,
  Stars,
} from '@/components/sections';
import { buildMetadata, metaTitle } from '@/lib/seo';
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { cities, matrixCitySlugs, getCity } from '@/lib/areas';
import { services, serviceSlugs, getService, getCategory, processFor } from '@/lib/services';
import { cityServiceParagraphs, cityServiceMeta } from '@/lib/local';
import { site } from '@/lib/site';

// Do not render on-demand permutations outside the generated matrix; tier 3
// city×service URLs 404 rather than creating thin pages.
export const dynamicParams = false;

export function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  // Only tier 1 & 2 cities get the matrix; tier 3 is consolidated to the hub.
  for (const city of matrixCitySlugs) {
    for (const service of serviceSlugs) {
      params.push({ city, service });
    }
  }
  return params;
}

export function generateMetadata({
  params,
}: {
  params: { city: string; service: string };
}): Metadata {
  const c = getCity(params.city);
  const s = getService(params.service);
  if (!c || !s) return {};
  return buildMetadata({
    title: metaTitle(`${s.name} in ${c.name} | Tridan Contracting`),
    description: cityServiceMeta(c, s, site.phoneDisplay),
    path: `/service-areas/${c.slug}/${s.slug}`,
    imageId: s.image,
  });
}

export default function CityServicePage({
  params,
}: {
  params: { city: string; service: string };
}) {
  const c = getCity(params.city);
  const s = getService(params.service);
  if (!c || !s) notFound();
  const cat = getCategory(s.category);
  const steps = processFor(s);
  const localParagraphs = cityServiceParagraphs(c, s);

  // Combined, locally-relevant FAQ (service + city specific), unique per page.
  const localFaqs = [
    {
      q: `Do you provide ${s.navName.toLowerCase()} throughout ${c.name}?`,
      a: `Yes. Tridan provides ${s.name.toLowerCase()} across all of ${c.name}, including ${c.neighbourhoods
        .slice(0, 4)
        .join(', ')} and the surrounding neighbourhoods. We are licensed, insured, and back every project with a ${site.stats.warrantyYears}-year workmanship warranty.`,
    },
    {
      q: `How much does ${s.navName.toLowerCase()} cost in ${c.name}?`,
      a: `Every project is different, but ${s.name.toLowerCase()} usually ranges from ${s.priceRange}. Your exact price depends on size, materials and site conditions, so we provide a free, fixed-price on-site quote for your ${c.name} property.`,
    },
    {
      q: `Do you handle permits for ${s.navName.toLowerCase()} in ${c.name}?`,
      a: c.localNote,
    },
    ...s.faqs.slice(0, 2),
  ];

  const otherServices = services.filter((x) => x.slug !== s.slug).slice(0, 6);

  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: c.name, href: `/service-areas/${c.slug}` },
    { name: s.navName, href: `/service-areas/${c.slug}/${s.slug}` },
  ];

  return (
    <>
      <JsonLd data={[serviceSchema(s), faqSchema(localFaqs), breadcrumbSchema(crumbs)]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Photo id={s.image} alt={`${s.name} in ${c.name}, Ontario by Tridan Contracting`} width={1920} priority className="h-full w-full object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
          <div className="absolute inset-0 bg-hero-fade" />
        </div>
        <div className="container-x relative grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div className="max-w-xl">
            <Breadcrumbs items={crumbs} />
            <span className="eyebrow-light mt-4">
              <Icon name="pin" size={14} /> {c.name} · {cat?.name}
            </span>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              {s.name} in {c.name}
            </h1>
            <p className="mt-5 text-lg text-silver-light">
              {s.excerpt} Proudly serving {c.name} and the {c.region}
              {c.region === 'Toronto' ? ' area' : ' Region'}.
            </p>
            <div className="mt-7 flex flex-wrap gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-silver-mut">Typical Investment</p>
                <p className="font-serif text-xl font-semibold text-gold">{s.priceRange}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-silver-mut">Typical Timeline</p>
                <p className="font-serif text-xl font-semibold text-white">{s.timeline}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-gold">
                Get a Free Quote <Icon name="arrow" size={18} />
              </Link>
              <a href={site.phoneHref} className="btn-ghost-light">
                <Icon name="phone" size={18} /> {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <QuoteForm defaultService={cat?.name} defaultCity={c.name} />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <SectionHeader
              eyebrow={`${s.navName} · ${c.name}`}
              title={`${s.name} for ${c.name} homeowners`}
            />
            <div className="prose-tridan mt-6">
              {localParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <h3 className="mt-10 font-serif text-2xl text-ink">
              Why {c.name} chooses Tridan for {s.navName.toLowerCase()}
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.benefits.map((b) => (
                <li key={b} className="flex gap-3 rounded-xl border border-ink/10 bg-white p-4">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-gold-dark" />
                  <span className="text-sm text-ink-700">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-gold/25 bg-gold/[0.05] p-6">
              <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-ink">
                <Icon name="shield" size={18} className="text-gold-dark" />
                Permits & local requirements in {c.name}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-7 text-ink-700">{c.localNote}</p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-ink/10 bg-ink p-6 text-white shadow-card">
              <h3 className="font-serif text-xl font-semibold">{s.navName} in {c.name} at a glance</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
                  <dt className="text-silver-mut">Typical investment</dt>
                  <dd className="text-right font-semibold text-gold">{s.priceRange}</dd>
                </div>
                <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
                  <dt className="text-silver-mut">Typical timeline</dt>
                  <dd className="text-right font-semibold text-white">{s.timeline}</dd>
                </div>
                <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
                  <dt className="text-silver-mut">Serving</dt>
                  <dd className="text-right font-semibold text-white">{c.name}, {c.region === 'Toronto' ? 'ON' : `${c.region}, ON`}</dd>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <dt className="text-silver-mut">Warranty</dt>
                  <dd className="text-right font-semibold text-white">{site.stats.warrantyYears}-year workmanship</dd>
                </div>
              </dl>
              <Link href={`/services/${s.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:gap-2.5">
                Full {s.navName.toLowerCase()} details <Icon name="arrow" size={15} />
              </Link>
            </div>
            <div className="rounded-2xl border border-gold/30 bg-gold/[0.06] p-6">
              <div className="flex items-center gap-2">
                <Stars n={5} size={16} />
                <span className="text-sm font-semibold text-ink">{site.stats.reviewRating} rating</span>
              </div>
              <p className="mt-2 text-sm text-ink-600">
                {site.stats.projectsCompleted} projects completed across the GTA, backed by a {site.stats.warrantyYears}-year workmanship warranty.
              </p>
              <Link href="/contact" className="btn-gold mt-4 w-full text-sm">
                Book Free Consultation
              </Link>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
              <h3 className="font-serif text-base font-semibold text-ink">{c.name} neighbourhoods served</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {c.neighbourhoods.map((n) => (
                  <span key={n} className="rounded-full bg-ink/[0.04] px-3 py-1 text-xs text-ink-600">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="surface-dark py-16">
        <div className="container-x">
          <SectionHeader light eyebrow="Our Work" title={`${s.navName} projects near ${c.name}`} />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {s.gallery.map((g, i) => (
              <div key={g} className="overflow-hidden rounded-2xl">
                <Photo
                  id={g}
                  alt={`${s.name} project in ${c.name} by Tridan Contracting`}
                  width={800}
                  className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-x">
          <SectionHeader center eyebrow="Our Process" title={`Your ${c.name} project, step by step`} />
          <div className="mt-12">
            <ProcessSteps steps={steps} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-dark py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            light
            eyebrow="FAQ"
            title={`${s.navName} in ${c.name}: your questions`}
          />
          <FAQAccordion items={localFaqs} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-x">
          <SectionHeader center eyebrow="Reviews" title="What our clients say" />
          <div className="mt-12">
            <Testimonials limit={3} />
          </div>
        </div>
      </section>

      {/* Other services in this city */}
      <section className="border-y border-ink/10 bg-white py-14">
        <div className="container-x">
          <h2 className="font-serif text-2xl text-ink">More services in {c.name}</h2>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {otherServices.map((o) => (
              <Link
                key={o.slug}
                href={`/service-areas/${c.slug}/${o.slug}`}
                className="rounded-full border border-ink/10 px-3.5 py-1.5 text-sm font-medium text-ink-600 transition hover:border-gold hover:text-gold-dark"
              >
                {o.navName} in {c.name}
              </Link>
            ))}
            <Link
              href={`/service-areas/${c.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 px-3.5 py-1.5 text-sm font-medium text-gold-dark"
            >
              All {c.name} services <Icon name="arrow" size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="surface-deep py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow-light">
              <Icon name="sparkle" size={14} /> {c.name} · Free Quote
            </span>
            <h2 className="mt-3 text-3xl text-white sm:text-4xl text-balance">
              Get {s.navName.toLowerCase()} in {c.name} done right
            </h2>
            <p className="mt-4 max-w-lg text-silver-mut">
              Tell us about your project and we’ll get back to you within 24 hours with a free,
              no-obligation quote for your {c.name} home.
            </p>
          </div>
          <QuoteForm defaultService={cat?.name} defaultCity={c.name} />
        </div>
      </section>
    </>
  );
}
