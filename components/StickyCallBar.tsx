'use client';

import Link from 'next/link';
import Icon from './Icon';
import { site } from '@/lib/site';

/** Persistent mobile conversion bar: Call · Text · Quote. Hidden on desktop. */
export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <a href={site.phoneHref} className="flex flex-col items-center gap-0.5 py-2.5 text-white">
          <Icon name="phone" size={19} className="text-gold" />
          <span className="text-[0.7rem] font-semibold">Call</span>
        </a>
        <a href={site.sms} className="flex flex-col items-center gap-0.5 py-2.5 text-white">
          <Icon name="sms" size={19} className="text-gold" />
          <span className="text-[0.7rem] font-semibold">Text</span>
        </a>
        <Link href="/contact" className="flex flex-col items-center gap-0.5 bg-gold py-2.5 text-ink">
          <Icon name="quote" size={19} />
          <span className="text-[0.7rem] font-bold">Free Quote</span>
        </Link>
      </div>
    </div>
  );
}
