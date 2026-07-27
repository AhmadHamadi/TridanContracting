'use client';

import { useRef, useState } from 'react';
import { unsplash } from '@/lib/content';

/**
 * Drag-to-reveal before/after slider. Uses two Unsplash images to simulate a
 * project transformation (swap for real project photos when available).
 */
export default function BeforeAfter({
  beforeId,
  afterId,
  caption,
}: {
  beforeId: string;
  afterId: string;
  caption?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function move(clientX: number) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  }

  return (
    <figure className="overflow-hidden rounded-2xl border border-ink/10 shadow-card">
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none touch-none"
        onMouseDown={(e) => {
          dragging.current = true;
          move(e.clientX);
        }}
        onMouseMove={(e) => dragging.current && move(e.clientX)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => move(e.touches[0].clientX)}
        onTouchMove={(e) => move(e.touches[0].clientX)}
      >
        {/* After (base) */}
        <img
          src={unsplash(afterId, 1200, 65)}
          alt="After"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute right-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white">
          After
        </span>
        {/* Before (clipped with clip-path — full-size, no width math) */}
        <img
          src={unsplash(beforeId, 1200, 60)}
          alt="Before"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover grayscale"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />
        <span
          className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white"
          style={{ opacity: pos > 12 ? 1 : 0 }}
        >
          Before
        </span>
        {/* Handle */}
        <div className="absolute inset-y-0 z-10 w-0.5 bg-gold" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-gold bg-white text-ink shadow-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
      {caption && (
        <figcaption className="bg-white px-4 py-3 text-sm text-ink-600">{caption}</figcaption>
      )}
    </figure>
  );
}
