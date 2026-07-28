import type { Metadata } from 'next';
import Link from 'next/link';
import Photo from '@/components/Photo';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import FAQAccordion from '@/components/FAQAccordion';
import { SectionHeader, Breadcrumbs } from '@/components/sections';
import { buildMetadata } from '@/lib/seo';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';
import { site } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Financing | Tridan Contracting, Pay Monthly, OAC',
  description:
    'Start your renovation or outdoor project now and pay over time. Tridan Contracting offers flexible financing with simple applications and competitive monthly payments (OAC).',
  path: '/financing',
  imageId: '1600585154340-be6161a56a0c',
});

const financingFaqs = [
  { q: 'How does contractor financing work?', a: 'After we scope your project and provide a fixed quote, you can apply for financing through our lending partners. Once approved, your project cost is spread into affordable monthly payments so you don’t have to pay everything upfront.' },
  { q: 'What credit is needed to qualify?', a: 'Financing is offered on approved credit (OAC). A range of options exist for different credit profiles, the quickest way to know your options is to apply, which takes just a few minutes.' },
  { q: 'Are there prepayment penalties?', a: 'Our preferred financing options have no prepayment penalties, so you can pay off your balance early and save on interest whenever you like.' },
  { q: 'What project sizes can be financed?', a: 'Financing works well for everything from mid-sized projects like decks, bathrooms and basements to large renovations and additions. Ask us and we’ll match you to the right option.' },
];

export default function FinancingPage() {
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Financing', href: '/financing' },
  ];
  return (
    <>
      <JsonLd data={[faqSchema(financingFaqs), breadcrumbSchema(crumbs)]} />

      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 opacity-90">
          <Photo id="1600585154340-be6161a56a0c" alt="" width={1920} className="h-full w-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/25" />
        </div>
        <div className="container-x relative py-14 lg:py-20">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-light mt-4">
            <Icon name="wallet" size={14} /> Financing Available
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold text-white sm:text-5xl text-balance">
            Renovate now, pay monthly
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-silver-light">
            Don’t let budget delay the home you want. With flexible financing (on approved credit),
            you can start your project right away and spread the cost into comfortable monthly payments.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-gold">
              Get a Free Quote <Icon name="arrow" size={18} />
            </Link>
            <a href={site.phoneHref} className="btn-ghost-light">
              <Icon name="phone" size={18} /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeader
            center
            eyebrow="Why Finance"
            title="Smart reasons to finance your project"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: 'clock' as const, t: 'Start immediately', d: 'No need to wait and save, begin your project now and enjoy it sooner.' },
              { icon: 'wallet' as const, t: 'Preserve your savings', d: 'Keep your cash and emergency fund intact while you invest in your home.' },
              { icon: 'award' as const, t: 'Add value now', d: 'Renovations increase your home’s value the day they’re done, not years later.' },
              { icon: 'shield' as const, t: 'Predictable payments', d: 'Fixed monthly payments make budgeting simple, with no surprises.' },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-gold">
                  <Icon name={b.icon} size={24} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{b.t}</h3>
                <p className="mt-2 text-sm text-ink-600">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-dark py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader light eyebrow="Simple Process" title="Financing in three easy steps" />
            <ol className="mt-8 space-y-6">
              {[
                { t: 'Get your free quote', d: 'We assess your project and provide a clear, fixed-price quote.' },
                { t: 'Apply in minutes', d: 'Complete a quick, simple application through our lending partners.' },
                { t: 'Start your project', d: 'Once approved, we get to work, and you pay over time in easy monthly payments.' },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold font-serif text-lg font-bold text-ink">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{s.t}</h3>
                    <p className="mt-1 text-silver-mut">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl border border-gold/25 bg-gold/[0.06] p-8">
            <h3 className="font-serif text-2xl text-ink">Ready to get started?</h3>
            <p className="mt-3 text-ink-600">
              Request your free quote and ask about financing, we’ll walk you through the options that
              fit your budget.
            </p>
            <ul className="mt-6 space-y-3">
              {['No prepayment penalties', 'Competitive rates (OAC)', 'Quick online application', 'Options for every budget'].map((b) => (
                <li key={b} className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white px-4 py-3">
                  <Icon name="check" size={18} className="text-gold-dark" />
                  <span className="text-sm font-medium text-ink">{b}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-gold mt-6 w-full">
              Get My Free Quote <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader eyebrow="FAQ" title="Financing questions" />
          <FAQAccordion items={financingFaqs} />
        </div>
      </section>

      <div className="container-x pb-16">
        <p className="rounded-xl border border-ink/10 bg-ink/[0.02] px-5 py-4 text-xs text-ink-600/70">
          Financing is provided by third-party lending partners and offered on approved credit (OAC).
          Rates and terms vary by applicant and lender. Contact us for current options and details.
        </p>
      </div>
    </>
  );
}
