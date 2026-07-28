import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import QuoteForm from '@/components/QuoteForm';
import JsonLd from '@/components/JsonLd';
import { Stars, Breadcrumbs } from '@/components/sections';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Contact & Free Quote | Tridan Contracting GTA',
  description:
    'Get your free, no-obligation quote from Tridan Contracting. Call 416-700-4230 or request a quote online. Outdoor living, renovations across the GTA.',
  path: '/contact',
});

export default function ContactPage() {
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <section className="surface-dark py-14 lg:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left: info */}
          <div>
            <Breadcrumbs items={crumbs} />
            <div className="mt-4 flex items-center gap-3">
              <Stars n={5} size={16} />
              <span className="text-sm text-silver-light">
                {site.stats.reviewRating} · {site.stats.reviewCount} reviews
              </span>
            </div>
            <h1 className="mt-4 font-serif text-4xl font-semibold text-white sm:text-5xl text-balance">
              Let’s build something better
            </h1>
            <p className="mt-5 max-w-md text-lg text-silver-mut">
              Ready to start? Request your free, no-obligation quote and we’ll get back to you within
              24 hours. Prefer to talk? Call or text us anytime.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-800 p-4 transition hover:border-gold"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-ink">
                  <Icon name="phone" size={22} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-silver-mut">Call or text</span>
                  <span className="block text-lg font-semibold text-white">{site.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-800 p-4 transition hover:border-gold"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-ink">
                  <Icon name="mail" size={22} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-silver-mut">Email</span>
                  <span className="block text-lg font-semibold text-white">{site.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-800 p-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-ink">
                  <Icon name="pin" size={22} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-silver-mut">Service area</span>
                  <span className="block text-lg font-semibold text-white">Greater Toronto Area</span>
                </span>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-800 p-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-ink">
                  <Icon name="clock" size={22} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-silver-mut">Hours</span>
                  <span className="block text-sm font-semibold text-white">
                    Mon–Fri 7am–7pm · Sat 8am–5pm · Sun closed
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {site.badges.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5 text-xs text-silver-light">
                  <Icon name="check" size={14} className="text-gold" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div id="quote">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
