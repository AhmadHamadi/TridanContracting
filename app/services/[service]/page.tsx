import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Photo from '@/components/Photo';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import QuoteForm from '@/components/QuoteForm';
import JsonLd from '@/components/JsonLd';
import FAQAccordion from '@/components/FAQAccordion';
import {
  SectionHeader,
  ProcessSteps,
  Testimonials,
  Breadcrumbs,
  ServiceCard,
  Stars,
} from '@/components/sections';
import { buildMetadata, metaTitle } from '@/lib/seo';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import {
  services,
  serviceSlugs,
  getService,
  getCategory,
  processFor,
} from '@/lib/services';
import { cities, hasServiceMatrix } from '@/lib/areas';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export function generateMetadata({ params }: { params: { service: string } }): Metadata {
  const s = getService(params.service);
  if (!s) return {};
  return buildMetadata({
    title: metaTitle(`${s.name} in the GTA | Tridan Contracting`),
    description: `${s.excerpt} Licensed, insured & warrantied. Free on-site quotes across the GTA. Call ${site.phoneDisplay}.`,
    path: `/services/${s.slug}`,
    imageId: s.image,
  });
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const s = getService(params.service);
  if (!s) notFound();
  const cat = getCategory(s.category);
  const steps = processFor(s);
  const related = s.related.map(getService).filter(Boolean);
  const topCities = cities.filter((c) => c.tier === 1).slice(0, 8);

  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: s.name, href: `/services/${s.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[serviceSchema(s), faqSchema(s.faqs), breadcrumbSchema(crumbs)]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Photo id={s.image} alt={`${s.name} by Tridan Contracting`} width={1920} priority className="h-full w-full object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
          <div className="absolute inset-0 bg-hero-fade" />
        </div>
        <div className="container-x relative grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div className="max-w-xl">
            <Breadcrumbs items={crumbs} />
            {cat && (
              <span className="eyebrow-light mt-4">
                <Icon name="sparkle" size={14} /> {cat.name}
              </span>
            )}
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              {s.heroHeadline}
            </h1>
            <p className="mt-5 text-lg text-silver-light">{s.excerpt}</p>
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
            <QuoteForm defaultService={cat?.name} />
          </div>
        </div>
      </section>

      {/* Intro + benefits */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <SectionHeader eyebrow="Overview" title={`Professional ${s.name.toLowerCase()} across the GTA`} />
            <div className="prose-tridan mt-6">
              {s.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h3 className="mt-10 font-serif text-2xl text-ink">Why choose Tridan for {s.navName.toLowerCase()}</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.benefits.map((b) => (
                <li key={b} className="flex gap-3 rounded-xl border border-ink/10 bg-white p-4">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-gold-dark" />
                  <span className="text-sm text-ink-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-ink/10 bg-ink p-6 text-white shadow-card">
              <h3 className="font-serif text-xl font-semibold">What’s included</h3>
              <ul className="mt-4 space-y-2.5">
                {s.inclusions.map((inc) => (
                  <li key={inc} className="flex gap-2.5 text-sm text-silver-light">
                    <Icon name="check" size={17} className="mt-0.5 shrink-0 text-gold" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
            {s.materials && (
              <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
                <h3 className="font-serif text-lg font-semibold text-ink">Materials & brands</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.materials.map((m) => (
                    <span key={m} className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-ink-700">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="rounded-2xl border border-gold/30 bg-gold/[0.06] p-6">
              <div className="flex items-center gap-2">
                <Stars n={5} size={16} />
                <span className="text-sm font-semibold text-ink">{site.stats.reviewRating} rating</span>
              </div>
              <p className="mt-2 text-sm text-ink-600">
                Backed by a written {site.stats.warrantyYears}-year workmanship warranty and {site.stats.liabilityInsured} liability insurance.
              </p>
              <Link href="/contact" className="btn-gold mt-4 w-full text-sm">
                Book Free Consultation
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="surface-dark py-16">
        <div className="container-x">
          <SectionHeader light eyebrow="Our Work" title={`Recent ${s.navName.toLowerCase()} projects`} />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {s.gallery.map((g, i) => (
              <Reveal key={g} delay={i * 80}>
                <div className="overflow-hidden rounded-2xl">
                  <Photo
                    id={g}
                    alt={`${s.name} project ${i + 1} by Tridan Contracting in the GTA`}
                    width={800}
                    className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-x">
          <SectionHeader center eyebrow="Our Process" title="How your project comes together" />
          <div className="mt-12">
            <ProcessSteps steps={steps} />
          </div>
        </div>
      </section>

      {/* City links (city × service internal linking) */}
      <section className="border-y border-ink/10 bg-white py-14">
        <div className="container-x">
          <h2 className="font-serif text-2xl text-ink">
            {s.name} in your city
          </h2>
          <p className="mt-2 max-w-2xl text-ink-600">
            We provide {s.navName.toLowerCase()} throughout the Greater Toronto Area. Explore your local page:
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={hasServiceMatrix(c) ? `/service-areas/${c.slug}/${s.slug}` : `/service-areas/${c.slug}`}
                className="rounded-full border border-ink/10 px-3.5 py-1.5 text-sm font-medium text-ink-600 transition hover:border-gold hover:text-gold-dark"
              >
                {s.navName} in {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-dark py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            light
            eyebrow="FAQ"
            title={`${s.navName} questions, answered`}
            intro="Straight answers to the questions homeowners ask us most."
          />
          <FAQAccordion items={s.faqs} />
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

      {/* Related services */}
      {related.length > 0 && (
        <section className="surface-dark py-16">
          <div className="container-x">
            <SectionHeader light eyebrow="Explore More" title="Related services" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => r && <ServiceCard key={r.slug} service={r} />)}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA with form */}
      <section className="surface-deep py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow-light">
              <Icon name="sparkle" size={14} /> Free Consultation
            </span>
            <h2 className="mt-3 text-3xl text-white sm:text-4xl text-balance">
              Ready to start your {s.navName.toLowerCase()} project?
            </h2>
            <p className="mt-4 max-w-lg text-silver-mut">
              Tell us about your project and we’ll get back to you within 24 hours with next steps and a free, no-obligation quote.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-silver-light">
              <span className="inline-flex items-center gap-2">
                <Icon name="check" size={16} className="text-gold" /> Free quote
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" size={16} className="text-gold" /> Financing available
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon name="check" size={16} className="text-gold" /> Permits handled
              </span>
            </div>
          </div>
          <QuoteForm defaultService={cat?.name} />
        </div>
      </section>
    </>
  );
}
