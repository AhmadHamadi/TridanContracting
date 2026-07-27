import type { Metadata } from 'next';
import Link from 'next/link';
import Photo from '@/components/Photo';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { SectionHeader, CtaBanner, Breadcrumbs, PageFaqs } from '@/components/sections';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { solutions, solutionGroupOrder, solutionsByGroup } from '@/lib/solutions';
import { faqsFor } from '@/lib/faqbank';

export const metadata: Metadata = buildMetadata({
  title: 'Solutions | Tridan Contracting',
  description:
    'Real solutions for GTA homes: backyard transformations, privacy, outdoor entertaining, drainage fixes, income suites, aging-in-place and more. One contractor, start to finish.',
  path: '/solutions',
  imageId: '1589939705384-5185137a7f0f',
});

export default function SolutionsPage() {
  const groups = solutionsByGroup();
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-90">
          <Photo id="1589939705384-5185137a7f0f" alt="" width={1920} className="h-full w-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/25" />
        </div>
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold text-white sm:text-5xl text-balance">
            Solutions for real homes and real problems
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-silver-light">
            Sometimes you know exactly what you want built. Other times you just know the problem:
            a soggy yard, no privacy, a cramped kitchen, a basement doing nothing. These pages start
            with the outcome, then show how we get you there.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x space-y-14">
          {solutionGroupOrder.map((group) => (
            <div key={group}>
              <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">{group}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {(groups[group] ?? []).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/solutions/${s.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-gold"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Photo
                        id={s.image}
                        alt={s.title}
                        width={700}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-card-fade" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-serif text-lg font-semibold text-ink">{s.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{s.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark transition group-hover:gap-2.5">
                        Explore <Icon name="arrow" size={16} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageFaqs
        light
        eyebrow="Questions"
        title="Common questions about our solutions"
        items={faqsFor(['cost', 'permits', 'hiring'], 6)}
      />

      <CtaBanner
        title="Not sure where to start?"
        subtitle="Tell us the problem and we’ll tell you the options. Free, no-obligation consultations across the GTA."
      />
    </>
  );
}
