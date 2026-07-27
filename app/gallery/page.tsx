import type { Metadata } from 'next';
import Photo from '@/components/Photo';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { SectionHeader, CtaBanner, Breadcrumbs, PageFaqs } from '@/components/sections';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { services } from '@/lib/services';
import { faqsFor } from '@/lib/faqbank';

export const metadata: Metadata = buildMetadata({
  title: 'Project Gallery | Tridan Contracting Portfolio',
  description:
    'Browse Tridan Contracting’s portfolio of outdoor living, renovation and painting projects across the GTA, decks, patios, kitchens, bathrooms, basements and more.',
  path: '/gallery',
  imageId: '1617228069096-4638a7ffc906',
});

// Compose a rich gallery from every service's hero + gallery images (de-duped).
const seen = new Set<string>();
const galleryItems = services.flatMap((s) =>
  [s.image, ...s.gallery]
    .filter((id) => {
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    })
    .map((id, i) => ({ id, label: s.name, key: `${s.slug}-${i}` })),
);

export default function GalleryPage() {
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="border-b border-ink/10 bg-white">
        <div className="container-x py-12 lg:py-16">
          <Breadcrumbs items={crumbs} />
          <div className="mt-4">
            <SectionHeader
              as="h1"
              eyebrow="Our Work"
              title="Project gallery"
              intro="A look at the outdoor living spaces, renovations and painting projects we’ve built for homeowners across the GTA. Real craftsmanship, built to last."
            />
          </div>
        </div>
      </section>

      {/* Masonry-ish grid */}
      <section className="section pb-20">
        <div className="container-x">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {galleryItems.map((item, i) => (
              <Reveal key={item.key} delay={(i % 6) * 60}>
                <figure className="group relative overflow-hidden rounded-2xl border border-ink/10">
                  <Photo
                    id={item.id}
                    alt={`${item.label} project by Tridan Contracting in the GTA`}
                    width={800}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end bg-card-fade p-4 opacity-0 transition group-hover:opacity-100">
                    <span className="text-sm font-semibold text-white">{item.label}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageFaqs
        eyebrow="Good to Know"
        title="Planning a project like these?"
        items={faqsFor(['outdoor', 'interior', 'cost'], 6)}
      />

      <CtaBanner
        title="Imagine what we could build for you"
        subtitle="Your project could be next. Get a free, no-obligation quote today."
      />
    </>
  );
}
