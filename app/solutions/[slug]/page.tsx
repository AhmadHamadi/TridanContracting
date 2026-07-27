import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Photo from '@/components/Photo';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import QuoteForm from '@/components/QuoteForm';
import JsonLd from '@/components/JsonLd';
import {
  SectionHeader,
  Breadcrumbs,
  ServiceCard,
  PageFaqs,
  Stars,
} from '@/components/sections';
import { buildMetadata, metaTitle } from '@/lib/seo';
import { solutionSchema, breadcrumbSchema } from '@/lib/schema';
import { solutions, solutionSlugs, getSolution } from '@/lib/solutions';
import { getService } from '@/lib/services';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getSolution(params.slug);
  if (!s) return {};
  return buildMetadata({
    title: metaTitle(`${s.title} | Tridan Contracting`),
    description: `${s.excerpt} Serving the GTA with fixed pricing, a 5-year warranty and free estimates. Call ${site.phoneDisplay}.`,
    path: `/solutions/${s.slug}`,
    imageId: s.image,
  });
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const s = getSolution(params.slug);
  if (!s) notFound();
  const related = s.relatedServices.map(getService).filter(Boolean);
  const others = solutions.filter((x) => x.slug !== s.slug && x.group === s.group).slice(0, 3);

  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: s.navName, href: `/solutions/${s.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          solutionSchema(s.title, s.excerpt, `/solutions/${s.slug}`),
          breadcrumbSchema(crumbs),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Photo id={s.image} alt={`${s.title} by Tridan Contracting`} width={1920} priority className="h-full w-full object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
          <div className="absolute inset-0 bg-hero-fade" />
        </div>
        <div className="container-x relative grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div className="max-w-xl">
            <Breadcrumbs items={crumbs} />
            <span className="eyebrow-light mt-4">
              <Icon name="sparkle" size={14} /> {s.group}
            </span>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
              {s.heroHeadline}
            </h1>
            <p className="mt-5 text-lg text-silver-light">{s.excerpt}</p>
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
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Intro + approach */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <SectionHeader eyebrow="The Approach" title={`How we deliver ${s.navName.toLowerCase()}`} />
            <div className="prose-tridan mt-6">
              {s.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 space-y-4">
              {s.points.map((pt, i) => (
                <div key={pt.title} className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-5 shadow-card">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold font-serif text-lg font-bold text-ink">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ink">{pt.title}</h3>
                    <p className="mt-1 text-sm text-ink-600">{pt.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            {related.length > 0 && (
              <div className="rounded-2xl border border-ink/10 bg-ink p-6 text-white shadow-card">
                <h2 className="font-serif text-lg font-semibold">Services we use for this</h2>
                <ul className="mt-4 space-y-2">
                  {related.map((r) => r && (
                    <li key={r.slug}>
                      <Link href={`/services/${r.slug}`} className="flex items-center gap-2 text-sm text-silver-light hover:text-gold">
                        <Icon name="arrow" size={14} className="text-gold" /> {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="rounded-2xl border border-gold/30 bg-gold/[0.06] p-6">
              <div className="flex items-center gap-2">
                <Stars n={5} size={16} />
                <span className="text-sm font-semibold text-ink">{site.stats.reviewRating} rating</span>
              </div>
              <p className="mt-2 text-sm text-ink-600">
                One licensed, insured contractor to plan and build it all, backed by a {site.stats.warrantyYears}-year workmanship warranty.
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
          <SectionHeader light eyebrow="Inspiration" title={`${s.navName} we have built`} />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {s.gallery.map((g, i) => (
              <Reveal key={g} delay={i * 80}>
                <div className="overflow-hidden rounded-2xl">
                  <Photo
                    id={g}
                    alt={`${s.title} project by Tridan Contracting in the GTA`}
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

      {/* Related services cards */}
      {related.length > 0 && (
        <section className="section">
          <div className="container-x">
            <SectionHeader eyebrow="Where to Next" title="The services behind this solution" intro="Ready to get specific? These are the services we combine to make it happen." />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => r && <ServiceCard key={r.slug} service={r} />)}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <PageFaqs light eyebrow="FAQ" title={`${s.navName} questions`} items={s.faqs} />

      {/* Other solutions */}
      {others.length > 0 && (
        <section className="border-t border-ink/10 bg-white py-14">
          <div className="container-x">
            <h2 className="font-serif text-2xl text-ink">More {s.group.toLowerCase()} solutions</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/solutions/${o.slug}`}
                  className="rounded-full border border-ink/10 px-4 py-2 text-sm font-medium text-ink-600 transition hover:border-gold hover:text-gold-dark"
                >
                  {o.navName}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="surface-deep py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow-light">
              <Icon name="sparkle" size={14} /> Free Consultation
            </span>
            <h2 className="mt-3 text-3xl text-white sm:text-4xl text-balance">Let’s solve it together</h2>
            <p className="mt-4 max-w-lg text-silver-mut">
              Tell us what you are dealing with and we’ll walk you through the options and a fixed price. No pressure, no obligation.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
