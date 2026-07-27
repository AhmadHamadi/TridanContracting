import Link from 'next/link';
import Photo from '@/components/Photo';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import QuoteForm from '@/components/QuoteForm';
import JsonLd from '@/components/JsonLd';
import {
  SectionHeader,
  TrustBar,
  Stats,
  ServicesOverview,
  ProcessSteps,
  Testimonials,
  CtaBanner,
  Stars,
} from '@/components/sections';
import FAQAccordion from '@/components/FAQAccordion';
import { site } from '@/lib/site';
import { defaultProcess } from '@/lib/services';
import { cities, regionOrder, citiesByRegion } from '@/lib/areas';
import { globalFaqs } from '@/lib/content';
import { faqSchema } from '@/lib/schema';

export default function HomePage() {
  const areaGroups = citiesByRegion();
  const homeFaqs = globalFaqs.slice(0, 6);

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* ------------------------------- HERO ------------------------------- */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Photo
            id="1617228069096-4638a7ffc906"
            alt="Custom renovated kitchen by Tridan Contracting in the GTA"
            width={1920}
            priority
            className="h-full w-full object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gold/[0.08] to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-grain opacity-40 mix-blend-overlay" />
        </div>

        <div className="container-x relative grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <Stars n={5} size={16} />
              <span className="text-sm text-silver-light">
                {site.stats.reviewRating} · {site.stats.reviewCount} homeowner reviews
              </span>
            </div>
            <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.03] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl text-balance">
              Building Better Spaces Across the{' '}
              <span className="text-gold-sheen">GTA</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-silver-light">
              One trusted contractor for your whole property, custom{' '}
              <strong className="font-semibold text-white">outdoor living</strong>,{' '}
              <strong className="font-semibold text-white">renovations</strong> and{' '}
              <strong className="font-semibold text-white">painting</strong>. Licensed, insured, and
              backed by a {site.stats.warrantyYears}-year workmanship warranty.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-gold text-base">
                Get Your Free Quote <Icon name="arrow" size={18} />
              </Link>
              <a href={site.phoneHref} className="btn-ghost-light text-base">
                <Icon name="phone" size={18} /> {site.phoneDisplay}
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {['Licensed & Insured', 'Free On-Site Quotes', 'Financing Available', 'Permits Handled'].map(
                (b) => (
                  <li key={b} className="inline-flex items-center gap-2 text-sm text-silver-light">
                    <Icon name="check" size={16} className="text-gold" />
                    {b}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:pl-4">
            <QuoteForm />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ------------------------------ SERVICES ---------------------------- */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="What We Do"
              title="Everything your property needs, under one roof"
              intro="Most contractors do one thing. Tridan designs and builds across your entire property, so you get one accountable team, one standard of quality, and one point of contact from backyard to basement."
            />
            <Link href="/services" className="btn-outline shrink-0">
              View All Services <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div className="mt-12">
            <ServicesOverview />
          </div>
        </div>
      </section>

      {/* ---------------------------- WHY TRIDAN ---------------------------- */}
      <section className="surface-dark py-16 sm:py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <Photo
                  id="1600607687939-ce8a6c25118c"
                  alt="Tridan Contracting craftsmanship on a GTA renovation"
                  width={1000}
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-white/10 bg-ink p-5 shadow-gold sm:block">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gold text-ink">
                    <Icon name="shield" size={24} />
                  </span>
                  <div>
                    <p className="font-serif text-2xl font-semibold text-white">
                      {site.stats.warrantyYears}-Year
                    </p>
                    <p className="text-xs text-silver-mut">Workmanship warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeader
              eyebrow="Why Homeowners Choose Tridan"
              title="Premium craftsmanship, without the runaround"
              light
            />
            <ul className="mt-8 space-y-6">
              {[
                {
                  icon: 'hammer' as const,
                  t: 'One contractor, whole property',
                  d: 'Deck, kitchen, basement and paint, managed by one team. No juggling trades or finger-pointing.',
                },
                {
                  icon: 'shield' as const,
                  t: 'Licensed, insured & to code',
                  d: `${site.stats.liabilityInsured} liability, WSIB, and every project built to the Ontario Building Code with permits handled for you.`,
                },
                {
                  icon: 'wallet' as const,
                  t: 'Fixed pricing & financing',
                  d: 'Detailed quotes with no hidden change orders, plus financing so you can start now and pay monthly.',
                },
                {
                  icon: 'award' as const,
                  t: 'Built to last, backed in writing',
                  d: `Proper footings, bases and prep, and a ${site.stats.warrantyYears}-year workmanship warranty behind it all.`,
                },
              ].map((f) => (
                <li key={f.t} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink-700 text-gold">
                    <Icon name={f.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{f.t}</h3>
                    <p className="mt-1 text-silver-mut">{f.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------- STATS ------------------------------ */}
      <section className="surface-dark py-14">
        <div className="container-x">
          <Stats />
        </div>
      </section>

      {/* --------------------------- FEATURED WORK -------------------------- */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            center
            eyebrow="Our Work"
            title="Built to last, across the GTA"
            intro="A look at the outdoor living spaces, renovations and finishes we build for homeowners every day."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { id: '1600489000022-c2086d79f9d4', label: 'Kitchen renovation, Oakville' },
              { id: '1623195372782-57a1486af9a9', label: 'Composite deck, Mississauga' },
              { id: '1584622650111-993a426fbf0a', label: 'Bathroom renovation, Milton' },
              { id: '1780838446281-9394772d07a8', label: 'Interlock patio, Burlington' },
              { id: '1765959617888-30837a158667', label: 'Finished basement, Toronto' },
              { id: '1779565145536-ccdf57517151', label: 'Backyard landscape, Hamilton' },
            ].map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 70}>
                <figure className="group relative overflow-hidden rounded-2xl border border-ink/10">
                  <Photo
                    id={p.id}
                    alt={`${p.label} by Tridan Contracting`}
                    width={700}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-card-fade p-4 text-sm font-medium text-white">
                    {p.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery" className="btn-outline">
              View Our Project Gallery <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------ PROCESS ----------------------------- */}
      <section className="section border-t border-ink/10">
        <div className="container-x">
          <SectionHeader
            center
            eyebrow="How It Works"
            title="A clear, proven process, start to finish"
            intro="No surprises, no chaos. Here’s exactly what working with Tridan looks like."
          />
          <div className="mt-12">
            <ProcessSteps steps={defaultProcess} />
          </div>
        </div>
      </section>

      {/* --------------------------- SERVICE AREAS -------------------------- */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionHeader
              eyebrow="Where We Work"
              title="Proudly serving the Greater Toronto Area"
              intro="From Toronto to Halton, Peel and Durham, we bring premium contracting to homeowners across the GTA. Find your city below."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {regionOrder.map((region) => (
                <div key={region} className="rounded-2xl border border-ink/10 bg-white p-5 shadow-card">
                  <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-ink">
                    <Icon name="pin" size={18} className="text-gold-dark" />
                    {region}
                    {region === 'Toronto' ? '' : ' Region'}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(areaGroups[region] ?? []).map((c) => (
                      <Link
                        key={c.slug}
                        href={`/service-areas/${c.slug}`}
                        className="rounded-full border border-ink/10 px-3 py-1 text-xs font-medium text-ink-600 transition hover:border-gold hover:text-gold-dark"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- TESTIMONIALS --------------------------- */}
      <section className="section border-t border-ink/10 bg-silver-light/20">
        <div className="container-x">
          <SectionHeader
            center
            eyebrow="Reviews"
            title="Homeowners across the GTA trust Tridan"
            intro={`Rated ${site.stats.reviewRating} stars by ${site.stats.reviewCount} homeowners. Here’s what a few of them had to say.`}
          />
          <div className="mt-12">
            <Testimonials limit={6} />
          </div>
          <div className="mt-10 text-center">
            <Link href="/reviews" className="btn-outline">
              Read More Reviews <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------------------- FINANCING ---------------------------- */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-ink-radial shadow-gold-lg ring-1 ring-gold/25">
            <div className="pointer-events-none absolute inset-0 bg-grain opacity-50 mix-blend-soft-light" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px rule-gold opacity-60" />
            <div className="relative grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="eyebrow-light">
                  <Icon name="wallet" size={14} /> Financing Available
                </span>
                <h2 className="mt-3 text-3xl text-white sm:text-4xl text-balance">
                  Start your project now, pay over time
                </h2>
                <p className="mt-4 max-w-lg text-lg text-silver-mut">
                  Don’t put your dream project on hold. With flexible financing (on approved credit),
                  you can break your investment into affordable monthly payments and get started right away.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="/financing" className="btn-gold">
                    Explore Financing <Icon name="arrow" size={18} />
                  </Link>
                  <Link href="/contact" className="btn-ghost-light">
                    Get a Free Quote
                  </Link>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Flexible monthly payment plans',
                  'Quick, simple application',
                  'Competitive rates (OAC)',
                  'No prepayment penalties',
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <Icon name="check" size={18} className="text-gold" />
                    <span className="text-sm font-medium text-white">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------- FAQ ------------------------------- */}
      <section className="section border-t border-ink/10">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Questions & Answers"
              title="Everything you need to know"
              intro="Can’t find your answer? Call us at any time, we’re happy to help."
            />
            <Link href="/faq" className="btn-outline mt-6">
              View All FAQs <Icon name="arrow" size={18} />
            </Link>
          </div>
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
