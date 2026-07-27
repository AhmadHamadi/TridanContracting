'use client';

/**
 * Subtle entrance animation. Deliberately CSS-only and visible-by-default:
 * the end state is always fully visible, so content is never hidden for
 * crawlers, no-JS visitors, or if hydration is delayed. The fade-up plays
 * once on mount via the Tailwind `animate-fade-up` keyframe.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const Comp = Tag as any;
  return (
    <Comp
      className={`motion-safe:animate-fade-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}
