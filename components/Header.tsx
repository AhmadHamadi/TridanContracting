'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Icon from './Icon';
import { site } from '@/lib/site';
import { categories, servicesByCategory } from '@/lib/services';
import { cities, regionOrder, citiesByRegion } from '@/lib/areas';
import { solutions, solutionGroupOrder, solutionsByGroup } from '@/lib/solutions';

const iconFor = { outdoor: 'outdoor', reno: 'reno', paint: 'paint', landscape: 'landscape', bolt: 'bolt' } as const;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | 'services' | 'solutions' | 'areas'>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const areaGroups = citiesByRegion();
  const solGroups = solutionsByGroup();

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-ink text-silver-light lg:block">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-silver-mut">
              <Icon name="pin" size={14} className="text-gold" />
              Serving the Greater Toronto Area
            </span>
            <span className="inline-flex items-center gap-2 text-silver-mut">
              <Icon name="clock" size={14} className="text-gold" />
              Mon–Fri 7am–7pm · Sat 8am–5pm
            </span>
          </div>
          <div className="flex items-center gap-5">
            {site.badges.slice(0, 3).map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 text-silver-mut">
                <Icon name="check" size={13} className="text-gold" />
                {b}
              </span>
            ))}
            <a href={site.emailHref} className="inline-flex items-center gap-1.5 hover:text-gold">
              <Icon name="mail" size={13} className="text-gold" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'border-ink/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80'
            : 'border-transparent bg-white'
        }`}
      >
        <div className="container-x flex h-[68px] items-center justify-between gap-4">
          <Logo variant="light" />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <NavLink href="/" label="Home" active={pathname === '/'} />

            <MegaTrigger
              label="Services"
              open={openMenu === 'services'}
              onEnter={() => setOpenMenu('services')}
              onLeave={() => setOpenMenu(null)}
              active={pathname.startsWith('/services')}
            >
              <div className="grid grid-cols-5 gap-x-5 gap-y-6">
                {categories.map((cat) => (
                  <div key={cat.slug}>
                    <Link
                      href={`/services#${cat.slug}`}
                      className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink"
                    >
                      <span className="grid h-7 w-7 place-items-center rounded-md bg-ink text-gold">
                        <Icon name={iconFor[cat.icon]} size={16} />
                      </span>
                      {cat.name}
                    </Link>
                    <ul className="space-y-1.5">
                      {servicesByCategory(cat.slug).map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="block rounded px-2 py-1 text-[0.8rem] text-ink-600/80 hover:bg-gold/10 hover:text-ink"
                          >
                            {s.navName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <MegaFooter
                href="/services"
                label="View all services"
                note="One contractor for outdoor living, renovations & painting."
              />
            </MegaTrigger>

            <MegaTrigger
              label="Solutions"
              open={openMenu === 'solutions'}
              onEnter={() => setOpenMenu('solutions')}
              onLeave={() => setOpenMenu(null)}
              active={pathname.startsWith('/solutions')}
            >
              <div className="grid grid-cols-3 gap-6">
                {solutionGroupOrder.map((group) => (
                  <div key={group}>
                    <p className="mb-3 text-sm font-semibold text-ink">{group}</p>
                    <ul className="space-y-1.5">
                      {(solGroups[group] ?? []).map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/solutions/${s.slug}`}
                            className="block rounded px-2 py-1 text-[0.8rem] text-ink-600/80 hover:bg-gold/10 hover:text-ink"
                          >
                            {s.navName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <MegaFooter
                href="/solutions"
                label="View all solutions"
                note="Start with the outcome. We handle the how."
              />
            </MegaTrigger>

            <MegaTrigger
              label="Service Areas"
              open={openMenu === 'areas'}
              onEnter={() => setOpenMenu('areas')}
              onLeave={() => setOpenMenu(null)}
              active={pathname.startsWith('/service-areas')}
            >
              <div className="grid grid-cols-5 gap-x-5 gap-y-5">
                {regionOrder.map((region) => (
                  <div key={region}>
                    <p className="mb-3 text-sm font-semibold text-ink">{region}</p>
                    <ul className="space-y-1.5">
                      {(areaGroups[region] ?? []).map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={`/service-areas/${c.slug}`}
                            className="block rounded px-2 py-1 text-[0.8rem] text-ink-600/80 hover:bg-gold/10 hover:text-ink"
                          >
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <MegaFooter
                href="/service-areas"
                label="View all service areas"
                note="Proudly serving homeowners across the GTA."
              />
            </MegaTrigger>

            <NavLink href="/about" label="About" active={pathname === '/about'} />
            <NavLink href="/blog" label="Blog" active={pathname.startsWith('/blog')} />
            <NavLink href="/faq" label="FAQ" active={pathname === '/faq'} />
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 whitespace-nowrap rounded-full border border-ink/10 px-3.5 py-2 text-sm font-semibold text-ink transition hover:border-gold hover:text-gold-dark xl:inline-flex"
            >
              <Icon name="phone" size={16} className="text-gold-dark" />
              {site.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-gold hidden whitespace-nowrap text-sm sm:inline-flex">
              Get a Free Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-md border border-ink/10 text-ink lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <Icon name={mobileOpen ? 'close' : 'menu'} size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-40 h-[100dvh] overflow-y-auto bg-white lg:hidden">
          <div className="container-x flex h-[68px] items-center justify-between border-b border-ink/10">
            <Logo variant="light" />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-md border border-ink/10"
              aria-label="Close menu"
            >
              <Icon name="close" size={22} />
            </button>
          </div>
          <div className="container-x space-y-6 py-6">
            <a href={site.phoneHref} className="btn-dark w-full">
              <Icon name="phone" size={18} /> Call {site.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-gold w-full">
              Get a Free Quote
            </Link>

            <MobileGroup title="Services" links={[{ href: '/services', label: 'All Services' }, ...categories.flatMap((c) => servicesByCategory(c.slug).map((s) => ({ href: `/services/${s.slug}`, label: s.name })))]} />
            <MobileGroup title="Solutions" links={[{ href: '/solutions', label: 'All Solutions' }, ...solutions.map((s) => ({ href: `/solutions/${s.slug}`, label: s.navName }))]} />
            <MobileGroup title="Service Areas" links={[{ href: '/service-areas', label: 'All Service Areas' }, ...cities.map((c) => ({ href: `/service-areas/${c.slug}`, label: c.name }))]} />

            <nav className="flex flex-col divide-y divide-ink/10 border-t border-ink/10">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/blog', label: 'Blog' },
                { href: '/faq', label: 'FAQ' },
                { href: '/financing', label: 'Financing' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="py-3.5 font-medium text-ink">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition ${
        active ? 'text-gold-dark' : 'text-ink-700 hover:text-ink'
      }`}
    >
      {label}
    </Link>
  );
}

function MegaTrigger({
  label,
  open,
  onEnter,
  onLeave,
  active,
  children,
}: {
  label: string;
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="static" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        type="button"
        className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition ${
          active || open ? 'text-gold-dark' : 'text-ink-700 hover:text-ink'
        }`}
        aria-expanded={open}
      >
        {label}
        <Icon name="chevron" size={15} className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute inset-x-0 top-full">
          <div className="container-x">
            <div className="mt-1 animate-fade-up overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MegaFooter({ href, label, note }: { href: string; label: string; note: string }) {
  return (
    <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
      <p className="text-xs text-ink-600/70">{note}</p>
      <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:gap-2.5">
        {label} <Icon name="arrow" size={16} />
      </Link>
    </div>
  );
}

function MobileGroup({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <details className="group border-b border-ink/10 pb-2">
      <summary className="flex cursor-pointer list-none items-center justify-between py-3 font-semibold text-ink">
        {title}
        <Icon name="chevron" size={18} className="transition group-open:rotate-180" />
      </summary>
      <div className="grid grid-cols-2 gap-1 pb-2">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="rounded px-2 py-1.5 text-sm text-ink-600/80">
            {l.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
