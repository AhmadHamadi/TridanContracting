'use client';

import { useState } from 'react';
import Icon from './Icon';
import { site } from '@/lib/site';
import { categories } from '@/lib/services';

type Props = {
  compact?: boolean;
  defaultService?: string;
  defaultCity?: string;
};

/**
 * Short, direct lead form. Research on home-services forms is consistent:
 * fewer fields convert better, so we ask only for what's needed to make contact.
 * If a form endpoint is set (site.formEndpoint or NEXT_PUBLIC_FORM_ENDPOINT), the
 * lead is POSTed as JSON to that backend (built for Basin; also works with
 * Formspree/Formsubmit). Otherwise it opens the visitor's email client with the
 * details pre-filled (a mailto fallback so a lead is never lost).
 */
// Leads go to the configured form service (Basin) if set, otherwise to our own
// serverless SMTP route (app/api/quote). Either way, a mailto fallback runs if
// the request fails, so a lead is never lost.
const ENDPOINT = site.formEndpoint || '/api/quote';

export default function QuoteForm({ compact = false, defaultService, defaultCity }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService ?? '',
    message: '',
    company: '', // honeypot (kept empty by real users)
  });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const canSubmit = form.name.trim() && form.phone.trim() && form.email.trim() && form.message.trim();

  function mailtoFallback() {
    const body = encodeURIComponent(
      `New quote request\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n` +
        `Service: ${form.service || 'Not specified'}\n${defaultCity ? `City: ${defaultCity}\n` : ''}` +
        `\nMessage:\n${form.message}`,
    );
    window.location.href = `${site.emailHref}?subject=${encodeURIComponent(
      'Free Quote Request' + (form.service ? ' — ' + form.service : ''),
    )}&body=${body}`;
    setSubmitted(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || sending) return;

    setSending(true);
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service || 'Not specified',
          ...(defaultCity ? { city: defaultCity } : {}),
          message: form.message,
          company: form.company, // honeypot
        }),
      });
      setSending(false);
      if (res.ok) {
        setSubmitted(true);
      } else {
        // SMTP not configured yet, or send failed -> open the email app instead.
        mailtoFallback();
      }
    } catch {
      setSending(false);
      mailtoFallback();
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-white p-8 text-center shadow-card">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold-dark">
          <Icon name="check" size={30} />
        </div>
        <h3 className="text-2xl text-ink">Thank you!</h3>
        <p className="mx-auto mt-2 max-w-sm text-ink-600">
          Your request is on its way. We’ll reply within 24 hours. Prefer to talk now?
        </p>
        <a href={site.phoneHref} className="btn-gold mt-5">
          <Icon name="phone" size={18} /> Call {site.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card">
      <div className="border-b border-ink/10 bg-ink px-5 py-4 text-white">
        <p className="font-serif text-lg font-semibold">Get Your Free Quote</p>
        <p className="text-xs text-silver-mut">Fast, free & no obligation — we reply within 24 hours</p>
      </div>

      <div className={`space-y-3 ${compact ? 'p-5' : 'p-6'}`}>
        {/* Honeypot: hidden from real users, catches bots. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(e) => set('company', e.target.value)}
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          aria-hidden="true"
        />
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">
            Name <span className="text-gold-dark">*</span>
          </span>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            className="input"
            placeholder="Your name"
          />
        </label>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-ink">
              Phone <span className="text-gold-dark">*</span>
            </span>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => set('phone', e.target.value)}
              className="input"
              placeholder="(416) 000-0000"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-ink">
              Email <span className="text-gold-dark">*</span>
            </span>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              className="input"
              placeholder="you@email.com"
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">How can we help?</span>
          <select
            value={form.service}
            onChange={(e) => set('service', e.target.value)}
            className="input"
          >
            <option value="">Select a service (optional)</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Multiple / Not sure">Multiple / Not sure yet</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-ink">
            Message <span className="text-gold-dark">*</span>
          </span>
          <textarea
            rows={2}
            required
            value={form.message}
            onChange={(e) => set('message', e.target.value)}
            className="input resize-none"
            placeholder="Tell us briefly about your project…"
          />
        </label>

        <button
          type="submit"
          disabled={!canSubmit || sending}
          className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-40"
        >
          {sending ? 'Sending…' : (
            <>
              Get My Free Quote <Icon name="arrow" size={18} />
            </>
          )}
        </button>
        <p className="text-center text-[0.7rem] text-ink-600/60">
          No obligation. Your details are only used to prepare your quote.
        </p>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(10, 10, 10, 0.15);
          padding: 0.625rem 0.75rem;
          font-size: 0.875rem;
          color: #0a0a0a;
          background: #fff;
        }
        .input:focus {
          outline: none;
          border-color: #c9a227;
          box-shadow: 0 0 0 3px rgba(201, 162, 39, 0.15);
        }
      `}</style>
    </form>
  );
}
