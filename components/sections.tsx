import Link from 'next/link';
import Icon from './Icon';
import type { IconName } from './Icon';
import Photo from './Photo';
import Reveal from './Reveal';
import FAQAccordion from './FAQAccordion';
import JsonLd from './JsonLd';
import { site } from '@/lib/site';
import { testimonials, type FaqItem } from '@/lib/content';
import { faqSchema } from '@/lib/schema';
import { categories, servicesByCategory, type Service } from '@/lib/services';

// ------------------------------- Star rating -------------------------------
export function Stars({ n = 5, size = 16 }: { n?: number; size?: number }) {
  return (
    <span className="inline-flex text-gold" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Icon key={i} name="star" size={size} />
      ))}
    </span>
  );
}

// ------------------------------ Section header -----------------------------
export function SectionHeader({
  eyebrow,
  title,
  intro,
  center = false,
  light = false,
  as = 'h2',
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  light?: boolean;
  as?: 'h1' | 'h2';
}) {
  const Heading = as;
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && <span className={light ? 'eyebrow-light' : 'eyebrow'}>{eyebrow}</span>}
      <Heading
        className={`mt-4 font-serif text-3xl font-medium leading-[1.1] tracking-[-0.015em] sm:text-[2.6rem] ${light ? 'text-white' : 'text-ink'} text-balance`}
      >
        {title}
      </Heading>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-silver-mut' : 'text-ink-600'}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

// ------------------------------- Trust badges ------------------------------
export function TrustBar() {
  const items: { icon: IconName; label: string; sub: string }[] = [
    { icon: 'shield', label: 'Licensed & Insured', sub: `${site.stats.liabilityInsured} liability · WSIB` },
    { icon: 'award', label: `${site.stats.warrantyYears}-Year Warranty`, sub: 'Written workmanship' },
    { icon: 'star', label: `${site.stats.reviewRating}★ Rated`, sub: `${site.stats.reviewCount} reviews` },
    { icon: 'wallet', label: 'Financing Available', sub: 'Pay monthly, OAC' },
    { icon: 'clock', label: '24-Hour Response', sub: 'Fast, free quotes' },
  ];
  return (
    <div className="border-y border-ink/10 bg-white">
      <div className="container-x grid grid-cols-2 gap-x-4 gap-y-6 py-8 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-gold">
              <Icon name={it.icon} size={20} />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-ink">{it.label}</span>
              <span className="text-xs text-ink-600/70">{it.sub}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --------------------------------- Stats -----------------------------------
export function Stats({ dark = true }: { dark?: boolean }) {
  const items = [
    { n: site.stats.yearsInBusiness, l: 'Years of Experience' },
    { n: site.stats.projectsCompleted, l: 'Projects Completed' },
    { n: site.stats.homeownersServed, l: 'GTA Homeowners Served' },
    { n: `${site.stats.reviewRating}★`, l: 'Average Rating' },
  ];
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {items.map((s) => (
        <div key={s.l} className="text-center">
          <div
            className={`font-serif text-4xl font-semibold sm:text-5xl ${dark ? 'text-gold-sheen' : 'text-gold-dark'}`}
          >
            {s.n}
          </div>
          <div className={`mt-1 text-sm ${dark ? 'text-silver-mut' : 'text-ink-600'}`}>{s.l}</div>
        </div>
      ))}
    </div>
  );
}

// ------------------------------ Service card -------------------------------
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-gold"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Photo
          id={service.image}
          alt={`${service.name} — Tridan Contracting`}
          width={800}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-card-fade" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-ink">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{service.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark transition group-hover:gap-2.5">
          Learn more <Icon name="arrow" size={16} />
        </span>
      </div>
    </Link>
  );
}

// --------------------------- Services overview -----------------------------
export function ServicesOverview() {
  const iconMap = { outdoor: 'outdoor', reno: 'reno', paint: 'paint', landscape: 'landscape', bolt: 'bolt' } as const;
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {categories.map((cat, i) => (
        <Reveal key={cat.slug} delay={i * 80}>
          <div className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card">
            <div className="relative h-48 overflow-hidden">
              <Photo
                id={cat.image}
                alt={`${cat.name} across the GTA`}
                width={900}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-hero-fade" />
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold-sheen text-ink-900 shadow-coin ring-1 ring-gold-dark/40">
                  <Icon name={iconMap[cat.icon]} size={20} />
                </span>
                <h3 className="text-xl font-semibold text-white">{cat.name}</h3>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-ink-600">{cat.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {servicesByCategory(cat.slug).slice(0, 6).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-full border border-ink/10 px-3 py-1 text-xs font-medium text-ink-600 transition hover:border-gold hover:text-gold-dark"
                  >
                    {s.navName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ------------------------------ Process steps ------------------------------
export function ProcessSteps({
  steps,
  light = false,
}: {
  steps: { title: string; body: string }[];
  light?: boolean;
}) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={i} className="relative">
          <div
            className={`flex h-full flex-col rounded-2xl border p-6 ${
              light ? 'border-white/10 bg-ink-800' : 'border-ink/10 bg-white shadow-card'
            }`}
          >
            <span className="coin mb-4 h-11 w-11 font-serif text-lg font-bold">
              {i + 1}
            </span>
            <h3 className={`text-lg font-semibold ${light ? 'text-white' : 'text-ink'}`}>{s.title}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${light ? 'text-silver-mut' : 'text-ink-600'}`}>
              {s.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

// ------------------------------ Testimonials -------------------------------
export function Testimonials({ limit = 6 }: { limit?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.slice(0, limit).map((t, i) => (
        <Reveal key={t.name} delay={i * 70}>
          <figure className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
            <Icon name="quote" size={30} className="text-gold/50" />
            <blockquote className="mt-3 flex-1 text-[0.95rem] leading-7 text-ink-700">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 border-t border-ink/10 pt-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-ink">{t.name}</span>
                <Stars n={t.rating} size={14} />
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-ink-600/70">
                <Icon name="pin" size={13} className="text-gold-dark" />
                {t.location} · {t.service}
              </div>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

// ------------------------------- CTA banner --------------------------------
export function CtaBanner({
  title = 'Let’s bring your project to life',
  subtitle = 'Book your free, no-obligation on-site quote today — most estimates within 24 hours.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 opacity-30">
        <Photo id="1600585154340-be6161a56a0c" alt="" width={1600} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/70" />
      <div className="container-x relative py-16 text-center sm:py-20">
        <span className="eyebrow-light justify-center">
          <Icon name="sparkle" size={14} /> Free Consultation
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl text-white sm:text-4xl text-balance">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-silver-mut">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-gold">
            Get Your Free Quote <Icon name="arrow" size={18} />
          </Link>
          <a href={site.phoneHref} className="btn-ghost-light">
            <Icon name="phone" size={18} /> {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

// ------------------------------- Page FAQ ----------------------------------
// Research-driven FAQ block for the bottom of pages, with FAQPage schema.
export function PageFaqs({
  items,
  title = 'Frequently asked questions',
  eyebrow = 'Good to Know',
  intro,
  light = false,
  withSchema = true,
}: {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  intro?: string;
  light?: boolean;
  withSchema?: boolean;
}) {
  if (!items?.length) return null;
  return (
    <section className={light ? 'surface-dark py-16 sm:py-20' : 'section'}>
      {withSchema && <JsonLd data={faqSchema(items)} />}
      <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeader eyebrow={eyebrow} title={title} intro={intro} light={light} />
          <div className="mt-6">
            <Link href="/faq" className={light ? 'btn-ghost-light' : 'btn-outline'}>
              See all FAQs <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
        <FAQAccordion items={items} />
      </div>
    </section>
  );
}

// ------------------------------- Breadcrumbs -------------------------------
export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-silver-mut">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-silver-dark">/</span>}
            {i < items.length - 1 ? (
              <Link href={it.href} className="hover:text-gold">
                {it.name}
              </Link>
            ) : (
              <span className="text-silver-light">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
