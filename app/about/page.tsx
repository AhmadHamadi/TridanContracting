import type { Metadata } from 'next';
import Link from 'next/link';
import Photo from '@/components/Photo';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import {
  SectionHeader,
  Stats,
  ProcessSteps,
  Testimonials,
  CtaBanner,
  Breadcrumbs,
  PageFaqs,
} from '@/components/sections';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { defaultProcess } from '@/lib/services';
import { faqsFor } from '@/lib/faqbank';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'About Tridan Contracting | Licensed GTA General Contractor',
  description:
    'Meet Tridan Contracting, a licensed, insured GTA general contractor delivering outdoor living, renovations & painting with craftsmanship, transparency and a 5-year warranty.',
  path: '/about',
  imageId: '1600607687939-ce8a6c25118c',
});

const values = [
  { icon: 'shield' as const, t: 'Integrity first', d: 'Fixed pricing, honest advice, and no surprise change orders. If it’s not right for you, we’ll tell you.' },
  { icon: 'hammer' as const, t: 'Craftsmanship that lasts', d: 'We build the parts you never see, footings, bases, waterproofing, to the same standard as the finishes you do.' },
  { icon: 'clock' as const, t: 'Respect for your time', d: 'Clear schedules, daily communication, and clean job sites. We show up and we finish.' },
  { icon: 'award' as const, t: 'Accountable, always', d: 'One contractor responsible for the whole project, backed by a written 5-year workmanship warranty.' },
];

export default function AboutPage() {
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-90">
          <Photo id="1600607687939-ce8a6c25118c" alt="" width={1920} className="h-full w-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/25" />
        </div>
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold text-white sm:text-5xl text-balance">
            One contractor. Your whole property. Built better.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-silver-light">
            Tridan Contracting was built on a simple idea: homeowners deserve one trusted team that can
            handle it all, outdoor living, renovations and painting, with the craftsmanship, honesty
            and accountability the trades are too often missing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl">
            <Photo
              id="1503387762-592deb58ef4e"
              alt="The Tridan Contracting team at work in the GTA"
              width={1000}
              className="aspect-[4/3] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <SectionHeader eyebrow="Our Story" title="Craftsmanship you can count on across the GTA" />
            <div className="prose-tridan mt-6">
              <p>
                For over {site.stats.yearsInBusiness.replace('+', '')} years, Tridan Contracting has helped
                homeowners across the Greater Toronto Area transform their properties, from custom decks
                and interlock patios to kitchen and basement renovations to flawless interior and exterior
                painting.
              </p>
              <p>
                What sets us apart isn’t just what we build, it’s <strong>how</strong> we build. We treat
                every project like it’s our own home: proper footings and bases, real waterproofing, honest
                fixed pricing, and a clean, respectful job site. And because we handle outdoor living,
                renovations and painting under one roof, you get one accountable team instead of juggling
                three different trades.
              </p>
              <p>
                We’re fully licensed and insured, carry {site.stats.liabilityInsured} in liability coverage
                and WSIB, and back every project with a written {site.stats.warrantyYears}-year workmanship
                warranty. That’s the Tridan standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-dark py-14">
        <div className="container-x">
          <Stats />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader center eyebrow="What We Stand For" title="The values behind every project" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-gold">
                  <Icon name={v.icon} size={24} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{v.t}</h3>
                <p className="mt-2 text-sm text-ink-600">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-dark py-16 sm:py-20">
        <div className="container-x">
          <SectionHeader center light eyebrow="How We Work" title="A process built on clarity" />
          <div className="mt-12">
            <ProcessSteps steps={defaultProcess} light />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader center eyebrow="Reviews" title="Trusted by homeowners across the GTA" />
          <div className="mt-12">
            <Testimonials limit={6} />
          </div>
        </div>
      </section>

      <PageFaqs
        light
        eyebrow="Good to Know"
        title="What homeowners ask us"
        items={faqsFor(['hiring', 'warranty'], 6)}
      />

      <CtaBanner />
    </>
  );
}
