import Link from 'next/link';
import Icon from '@/components/Icon';
import { categories } from '@/lib/services';
import { site } from '@/lib/site';

export default function NotFound() {
  return (
    <section className="bg-ink py-24">
      <div className="container-x text-center">
        <p className="font-serif text-7xl font-semibold text-gold sm:text-8xl">404</p>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl">
          This page took a detour
        </h1>
        <p className="mx-auto mt-4 max-w-md text-silver-mut">
          The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-gold">
            Back to Home <Icon name="arrow" size={18} />
          </Link>
          <a href={site.phoneHref} className="btn-ghost-light">
            <Icon name="phone" size={18} /> {site.phoneDisplay}
          </a>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/services#${c.slug}`}
              className="rounded-xl border border-white/10 bg-ink-800 px-4 py-3 text-sm font-medium text-white transition hover:border-gold hover:text-gold"
            >
              {c.name}
            </Link>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-silver-mut">
          <Link href="/services" className="hover:text-gold">All Services</Link>
          <Link href="/service-areas" className="hover:text-gold">Service Areas</Link>
          <Link href="/blog" className="hover:text-gold">Blog</Link>
          <Link href="/faq" className="hover:text-gold">FAQ</Link>
          <Link href="/contact" className="hover:text-gold">Contact</Link>
        </div>
      </div>
    </section>
  );
}
