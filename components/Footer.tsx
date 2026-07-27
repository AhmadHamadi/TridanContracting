import Link from 'next/link';
import Logo from './Logo';
import Icon from './Icon';
import { site } from '@/lib/site';
import { categories } from '@/lib/services';
import { solutions } from '@/lib/solutions';
import { cities } from '@/lib/areas';

const popularServices = [
  { slug: 'deck-building', name: 'Deck Building' },
  { slug: 'interlocking-patios', name: 'Interlock & Patios' },
  { slug: 'kitchen-renovations', name: 'Kitchen Renovations' },
  { slug: 'bathroom-renovations', name: 'Bathroom Renovations' },
  { slug: 'basement-finishing', name: 'Basement Finishing' },
  { slug: 'interior-painting', name: 'Interior Painting' },
];

function SocialIcon({ kind }: { kind: 'instagram' | 'facebook' | 'houzz' }) {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'currentColor' } as const;
  if (kind === 'instagram')
    return (
      <svg {...common} aria-hidden="true">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.86.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.31-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.27.8-.31 1.7C3.43 8.5 3.43 8.85 3.43 12s0 3.5.07 4.74c.04.9.19 1.38.31 1.7.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.8.27 1.7.31 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.7-.31.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.27-.8.31-1.7.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.19-1.38-.31-1.7a2.9 2.9 0 0 0-.69-1.06 2.9 2.9 0 0 0-1.06-.69c-.32-.12-.8-.27-1.7-.31C15.5 4 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-.9a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
      </svg>
    );
  if (kind === 'facebook')
    return (
      <svg {...common} aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
      </svg>
    );
  return (
    <svg {...common} aria-hidden="true">
      <path d="M4 3v18l6-3.3V9.6L20 15V3l-6 3.3v8.1L4 3Z" />
    </svg>
  );
}

export default function Footer() {
  const year = 2026; // static build; update annually or wire to build-time env

  return (
    <footer className="surface-deep text-silver-light">
      {/* CTA strip */}
      <div className="border-b border-white/10 bg-grain">
        <div className="container-x flex flex-col items-center justify-between gap-6 py-12 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl text-white sm:text-3xl">Ready to build something better?</h2>
            <p className="mt-2 text-silver-mut">
              Free, no-obligation on-site quotes across the GTA, usually within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneHref} className="btn-ghost-light">
              <Icon name="phone" size={18} /> {site.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-gold">
              Get Your Free Quote <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust badge row */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6 text-center">
          {site.badges.map((b) => (
            <span key={b} className="inline-flex items-center gap-2 text-sm text-silver-mut">
              <Icon name="check" size={15} className="text-gold" />
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Logo variant="dark" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-silver-mut">
            {site.tagline}. Licensed, insured general contractors serving homeowners across the Greater Toronto Area.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={site.phoneHref} className="flex items-center gap-2.5 hover:text-gold">
              <Icon name="phone" size={16} className="text-gold" /> {site.phoneDisplay}
            </a>
            <a href={site.emailHref} className="flex items-center gap-2.5 hover:text-gold">
              <Icon name="mail" size={16} className="text-gold" /> {site.email}
            </a>
            <p className="flex items-center gap-2.5 text-silver-mut">
              <Icon name="pin" size={16} className="text-gold" /> Serving the Greater Toronto Area
            </p>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-silver-light transition hover:border-gold hover:text-gold">
              <SocialIcon kind="instagram" />
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-silver-light transition hover:border-gold hover:text-gold">
              <SocialIcon kind="facebook" />
            </a>
            <a href={site.social.houzz} target="_blank" rel="noopener noreferrer" aria-label="Houzz" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-silver-light transition hover:border-gold hover:text-gold">
              <SocialIcon kind="houzz" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <FooterHeading>Services</FooterHeading>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/services#${c.slug}`} className="text-silver-mut hover:text-gold">
                  {c.name}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link href="/services" className="font-medium text-gold hover:underline">
                All services →
              </Link>
            </li>
          </ul>

          <FooterHeading className="mt-8">Popular</FooterHeading>
          <ul className="space-y-2 text-sm">
            {popularServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-silver-mut hover:text-gold">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <FooterHeading>Solutions</FooterHeading>
          <ul className="space-y-2 text-sm">
            {solutions.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="text-silver-mut hover:text-gold">
                  {s.navName}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link href="/solutions" className="font-medium text-gold hover:underline">
                All solutions →
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <FooterHeading>Company</FooterHeading>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/about', label: 'About Us' },
              { href: '/gallery', label: 'Project Gallery' },
              { href: '/reviews', label: 'Reviews' },
              { href: '/financing', label: 'Financing' },
              { href: '/blog', label: 'Blog & Cost Guides' },
              { href: '/faq', label: 'FAQ' },
              { href: '/contact', label: 'Contact' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-silver-mut hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterHeading>Service Areas</FooterHeading>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/service-areas/${c.slug}`} className="text-silver-mut hover:text-gold">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/service-areas" className="mt-3 inline-block text-sm font-medium text-gold hover:underline">
            All service areas →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-silver-dark sm:flex-row">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p className="text-silver-dark/80">
            Licensed &amp; Insured · WSIB · {site.stats.liabilityInsured} Liability · {site.stats.warrantyYears}-Year Workmanship Warranty
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`mb-4 font-serif text-sm font-semibold uppercase tracking-widest text-white ${className}`}>
      {children}
    </h3>
  );
}
