/**
 * Animated gradient border that fades in on hover of the nearest `group`.
 * Sits behind a solid inner surface so only a 2px ring shows through.
 */
export function GradientRing({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-[-2px] rounded-full gradient-ring opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${className}`}
    />
  );
}
