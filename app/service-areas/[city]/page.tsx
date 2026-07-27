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
  ServiceCard,
  ProcessSteps,
  Testimonials,
  Breadcrumbs,
  Stars,
} from '@/components/sections';
import { buildMetadata, metaTitle } from '@/lib/seo';
import { cityServiceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { cities, citySlugs, getCity, hasServiceMatrix } from '@/lib/areas';
import { services, defaultProcess } from '@/lib/services';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return citySlugs.map((city) => ({ city }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const c = getCity(params.city);
  if (!c) return {};
  return buildMetadata({
    title: metaTitle(`${c.name} General Contractor | Tridan Contracting`),
    description: `Tridan Contracting serves ${c.name} with outdoor living, renovations & painting. Local projects, free estimates, licensed & insured. Call ${site.phoneDisplay}.`,
    path: `/service-areas/${c.slug}`,
    imageId: c.image,
  });
}

export default function CityPage({ params }: { params: { city: string } }) {
  const c = getCity(params.city);
  if (!c) notFound();
  const nearby = c.nearby.map(getCity).filter(Boolean);
  const matrix = hasServiceMatrix(c);
  const serviceHref = (slug: string) =>
    matrix ? `/service-areas/${c.slug}/${slug}` : `/services/${slug}`;

  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: c.name, href: `/service-areas/${c.slug}` },
  ];

  return (
    <>
      <JsonLd data={[cityServiceSchema(c), faqSchema(c.faqs), breadcrumbSchema(crumbs)]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Photo id={c.image} alt={`Contracting services in ${c.name}, Ontario`} width={1920} priority className="h-full w-full object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
          <div className="absolute inset-0 bg-hero-fade" />
        </div>
        <div className="container-x relative grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div className="max-w-xl">
            <Breadcrumbs items={crumbs} />
            <span className="eyebrow-light mt-4">
              <Icon name="pin" size={14} /> {c.region}{c.region === 'Toronto' ? '' : ' Region'} · Ontario
            </span>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              {c.name} General Contractor
            </h1>
            <p className="mt-3 text-lg text-gold">{c.tagline}</p>
            <p className="mt-4 text-silver-light">
              Outdoor living, renovations & painting for {c.name} homeowners, one licensed, insured
              contractor for your whole property.
            </p>
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
            <QuoteForm defaultCity={c.name} />
          </div>
        </div>
      </section>

      {/* Local intro + neighbourhoods */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <SectionHeader eyebrow="Local Contracting" title={`Your trusted contractor in ${c.name}`} />
            <div className="prose-tridan mt-6">
              {c.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gold/25 bg-gold/[0.05] p-6">
              <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-ink">
                <Icon name="shield" size={18} className="text-gold-dark" />
                {c.name} permits, bylaws & local know-how
              </h3>
              <p className="mt-3 text-[0.95rem] leading-7 text-ink-700">{c.localNote}</p>
            </div>

            <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
              <h3 className="font-serif text-lg font-semibold text-ink">Typical project costs in {c.name}</h3>
              <p className="mt-3 text-[0.95rem] leading-7 text-ink-700">{c.priceNote}</p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-ink/10 bg-ink p-6 text-white shadow-card">
              <h3 className="flex items-center gap-2 font-serif text-lg font-semibold">
                <Icon name="pin" size={18} className="text-gold" /> {c.name} neighbourhoods we serve
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {c.neighbourhoods.map((n) => (
                  <li key={n} className="flex items-center gap-2 text-sm text-silver-light">
                    <Icon name="check" size={15} className="shrink-0 text-gold" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gold/30 bg-gold/[0.06] p-6">
              <div className="flex items-center gap-2">
                <Stars n={5} size={16} />
                <span className="text-sm font-semibold text-ink">Trusted across {c.region}</span>
              </div>
              <p className="mt-2 text-sm text-ink-600">
                Licensed & insured, {site.stats.liabilityInsured} liability, and a {site.stats.warrantyYears}-year workmanship warranty on every {c.name} project.
              </p>
              <a href={site.phoneHref} className="btn-gold mt-4 w-full text-sm">
                <Icon name="phone" size={16} /> {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Services in this city (city × service links) */}
      <section className="surface-dark py-16 sm:py-20">
        <div className="container-x">
          <SectionHeader
            light
            eyebrow="Our Services"
            title={`What we build in ${c.name}`}
            intro={`From backyard to basement, here’s how Tridan helps ${c.name} homeowners. Tap any service for local details.`}
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={serviceHref(s.slug)}
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-ink-800 px-4 py-3.5 text-white transition hover:border-gold"
              >
                <span className="flex items-center gap-3">
                  <Icon name="check" size={17} className="text-gold" />
                  <span className="text-sm font-medium">{s.name} in {c.name}</span>
                </span>
                <Icon name="arrow" size={16} className="text-silver-mut transition group-hover:translate-x-1 group-hover:text-gold" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-x">
          <SectionHeader center eyebrow="How It Works" title={`Building in ${c.name}, made simple`} />
          <div className="mt-12">
            <ProcessSteps steps={defaultProcess} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="surface-dark py-16">
        <div className="container-x">
          <SectionHeader light center eyebrow="Reviews" title={`${c.region} homeowners trust Tridan`} />
          <div className="mt-12">
            <Testimonials limit={3} />
          </div>
        </div>
      </section>

      {/* City FAQ */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="FAQ"
            title={`${c.name} contracting questions`}
            intro={`Answers to what ${c.name} homeowners ask us most.`}
          />
          <FAQAccordion items={c.faqs} />
        </div>
      </section>

      {/* Nearby cities */}
      {nearby.length > 0 && (
        <section className="border-t border-ink/10 bg-white py-14">
          <div className="container-x">
            <h2 className="font-serif text-2xl text-ink">Nearby areas we serve</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {nearby.map((n) => n && (
                <Link
                  key={n.slug}
                  href={`/service-areas/${n.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-sm font-medium text-ink-600 transition hover:border-gold hover:text-gold-dark"
                >
                  <Icon name="pin" size={15} className="text-gold-dark" /> {n.name}
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-sm font-medium text-ink-600 transition hover:border-gold hover:text-gold-dark"
              >
                All Service Areas <Icon name="arrow" size={15} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="surface-deep py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow-light">
              <Icon name="sparkle" size={14} /> {c.name} · Free Consultation
            </span>
            <h2 className="mt-3 text-3xl text-white sm:text-4xl text-balance">
              Start your {c.name} project with Tridan
            </h2>
            <p className="mt-4 max-w-lg text-silver-mut">
              Book a free, no-obligation on-site quote. We’ll assess your project, talk through
              options, and get back to you within 24 hours.
            </p>
          </div>
          <QuoteForm defaultCity={c.name} />
        </div>
      </section>
    </>
  );
}
