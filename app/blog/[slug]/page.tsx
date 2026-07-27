import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Photo from '@/components/Photo';
import Icon from '@/components/Icon';
import QuoteForm from '@/components/QuoteForm';
import JsonLd from '@/components/JsonLd';
import { Breadcrumbs, PageFaqs } from '@/components/sections';
import { buildMetadata, metaTitle } from '@/lib/seo';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { postSlugs, getPost, postsByDate } from '@/lib/blog';
import { faqsFor } from '@/lib/faqbank';
import { getService } from '@/lib/services';
import { unsplash } from '@/lib/content';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  return buildMetadata({
    title: p.title,
    description: p.excerpt,
    path: `/blog/${p.slug}`,
    imageId: p.image,
    type: 'article',
    publishedTime: p.date,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  if (!p) notFound();
  const related = p.related.map(getService).filter(Boolean);
  const more = postsByDate.filter((x) => x.slug !== p.slug).slice(0, 3);

  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: p.title, href: `/blog/${p.slug}` },
  ];

  return (
    <>
      <JsonLd data={[articleSchema(p, unsplash(p.image, 1200, 70)), breadcrumbSchema(crumbs)]} />

      {/* Header */}
      <section className="border-b border-ink/10 bg-white">
        <div className="container-x max-w-3xl py-12 lg:py-16">
          <Breadcrumbs items={crumbs.map((c, i) => (i === crumbs.length - 1 ? { ...c, name: 'Article' } : c))} />
          <span className="eyebrow mt-4">{p.category}</span>
          <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl text-balance">
            {p.title}
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-ink-600/70">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="award" size={15} className="text-gold-dark" /> {p.author}
            </span>
            <span>{p.dateLabel}</span>
            <span className="inline-flex items-center gap-1">
              <Icon name="clock" size={14} /> {p.readMinutes} min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover */}
      <div className="container-x max-w-4xl">
        <div className="-mt-0 overflow-hidden rounded-2xl md:rounded-3xl">
          <Photo
            id={p.image}
            alt={p.title}
            width={1200}
            priority
            className="aspect-[16/9] w-full object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      </div>

      {/* Body + sidebar */}
      <section className="section">
        <div className="container-x grid max-w-6xl gap-12 lg:grid-cols-[1fr_320px]">
          <article
            className="prose-tridan"
            dangerouslySetInnerHTML={{ __html: p.body }}
          />
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-gold/30 bg-gold/[0.06] p-6">
              <h2 className="font-serif text-lg font-semibold text-ink">Get a free quote</h2>
              <p className="mt-2 text-sm text-ink-600">
                Planning this project? Get a free, fixed-price estimate from Tridan.
              </p>
              <Link href="/contact" className="btn-gold mt-4 w-full text-sm">
                Start My Quote <Icon name="arrow" size={16} />
              </Link>
              <a href={site.phoneHref} className="btn-outline mt-2 w-full text-sm">
                <Icon name="phone" size={16} /> {site.phoneDisplay}
              </a>
            </div>
            {related.length > 0 && (
              <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
                <h2 className="font-serif text-base font-semibold text-ink">Related services</h2>
                <ul className="mt-3 space-y-2">
                  {related.map((r) => r && (
                    <li key={r.slug}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="flex items-center gap-2 text-sm text-ink-600 hover:text-gold-dark"
                      >
                        <Icon name="arrow" size={14} className="text-gold-dark" /> {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <PageFaqs
        eyebrow="Good to Know"
        title="Related questions"
        items={faqsFor(
          p.category === 'Cost Guides' ? ['cost', 'permits'] : ['outdoor', 'interior', 'cost'],
          5,
        )}
      />

      {/* More posts */}
      <section className="surface-dark py-16">
        <div className="container-x">
          <h2 className="font-serif text-2xl font-semibold text-white">Keep reading</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {more.map((m) => (
              <Link
                key={m.slug}
                href={`/blog/${m.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-800 transition hover:border-gold"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Photo id={m.image} alt={m.title} width={600} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" sizes="33vw" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold">{m.category}</span>
                  <h3 className="mt-2 font-serif text-base font-semibold text-white">{m.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
