'use client';

import { useState } from 'react';
import Icon from './Icon';
import type { FaqItem } from '@/lib/content';

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base font-semibold text-ink sm:text-lg">{item.q}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition ${
                  isOpen ? 'border-gold bg-gold text-ink' : 'border-ink/15 text-ink-600'
                }`}
              >
                <Icon name="chevron" size={18} className={`transition ${isOpen ? 'rotate-180' : ''}`} />
              </span>
            </button>
            <div
              className={`grid overflow-hidden px-5 transition-all duration-300 sm:px-6 ${
                isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="min-h-0">
                <p className="max-w-prose text-[0.95rem] leading-7 text-ink-600">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
