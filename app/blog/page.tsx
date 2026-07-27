import type { Metadata } from 'next';
import Link from 'next/link';
import Photo from '@/components/Photo';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { SectionHeader, CtaBanner, Breadcrumbs, PageFaqs } from '@/components/sections';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { postsByDate } from '@/lib/blog';
import { faqsFor } from '@/lib/faqbank';

export const metadata: Metadata = buildMetadata({
  title: 'Blog & Cost Guides | Tridan Contracting',
  description:
    'Expert GTA contracting advice, deck & renovation cost guides, material comparisons, permits and maintenance tips from the pros at Tridan Contracting.',
  path: '/blog',
  imageId: '1416339306562-f3d12fefd36f',
});

export default function BlogPage() {
  const [featured, ...rest] = postsByDate;
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="border-b border-ink/10 bg-white">
        <div className="container-x py-12 lg:py-16">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]} />
          <div className="mt-4">
            <SectionHeader
              as="h1"
              eyebrow="Advice & Cost Guides"
              title="The Tridan knowledge base"
              intro="Straight-talking guides on what projects cost, which materials to choose, and how to get renovations and outdoor builds done right in the GTA."
            />
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="section">
        <div className="container-x">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-card lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Photo
                id={featured.image}
                alt={featured.title}
                width={1000}
                priority
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <span className="eyebrow">{featured.category}</span>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-ink sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-ink-600">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-sm text-ink-600/70">
                <span>{featured.dateLabel}</span>
                <span className="inline-flex items-center gap-1">
                  <Icon name="clock" size={14} /> {featured.readMinutes} min read
                </span>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-gold-dark transition group-hover:gap-2.5">
                Read the guide <Icon name="arrow" size={16} />
              </span>
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-gold"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Photo
                    id={p.image}
                    alt={p.title}
                    width={700}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink-600">{p.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-ink-600/70">
                    <span>{p.dateLabel}</span>
                    <span className="inline-flex items-center gap-1">
                      <Icon name="clock" size={13} /> {p.readMinutes} min
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageFaqs
        eyebrow="Good to Know"
        title="Quick answers to common questions"
        items={faqsFor(['cost', 'outdoor', 'interior'], 6)}
      />

      <CtaBanner
        title="Have a project in mind?"
        subtitle="Skip the research, get a free, no-obligation quote and honest advice from our team."
      />
    </>
  );
}
