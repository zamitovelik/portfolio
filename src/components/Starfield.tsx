import { useMemo } from "react";

/**
 * Fixed cosmic backdrop that carries the hero's space video through the rest
 * of the page: drifting nebula glows plus three parallaxed star layers.
 * Sections above it must stay transparent (no `bg-bg`) for it to show.
 */
export default function Starfield() {
  const layers = useMemo(() => {
    // Seeded LCG so the sky is stable across re-renders instead of reshuffling.
    let seed = 20260827;
    const rnd = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    const make = (count: number, blur: number) =>
      Array.from(
        { length: count },
        () =>
          `${(rnd() * 100).toFixed(2)}vw ${(rnd() * 100).toFixed(2)}vh ${blur}px 0 currentColor`,
      ).join(", ");

    return {
      dust: make(140, 0),
      mid: make(50, 1),
      bright: make(16, 2),
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-bg"
    >
      {/* Nebula clouds */}
      <div className="absolute -left-[20%] top-[6%] h-[70vh] w-[70vh] rounded-full bg-[#4E85BF] opacity-[0.07] blur-[130px]" />
      <div className="absolute -right-[15%] top-[42%] h-[62vh] w-[62vh] rounded-full bg-[#89AACC] opacity-[0.06] blur-[130px]" />
      <div className="absolute left-[28%] top-[74%] h-[55vh] w-[55vh] rounded-full bg-[#5B54C7] opacity-[0.05] blur-[140px]" />

      {/* Star layers — a 1px node carrying the whole field as box-shadows. */}
      <span
        className="absolute left-0 top-0 h-px w-px rounded-full text-white opacity-40"
        style={{ boxShadow: layers.dust }}
      />
      <span
        className="absolute left-0 top-0 h-px w-px animate-twinkle rounded-full text-white opacity-70"
        style={{ boxShadow: layers.mid }}
      />
      <span
        className="absolute left-0 top-0 h-[2px] w-[2px] animate-twinkle-slow rounded-full text-[#cfe0f2]"
        style={{ boxShadow: layers.bright }}
      />

      {/* Vignette keeps the type off the brightest patches. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,hsl(var(--bg)/0.75)_100%)]" />
    </div>
  );
}
