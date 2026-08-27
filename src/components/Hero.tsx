import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLanguage } from "../i18n/LanguageProvider";
import { useHlsVideo } from "../hooks/useHlsVideo";
import { HLS_SRC } from "../data/projects";
import { GradientRing } from "./GradientRing";

const ROLES = ["Fullstack", "Frontend", "Creative", "Founder"];

export default function Hero() {
  const { t } = useLanguage();
  const videoRef = useHlsVideo(HLS_SRC);
  const rootRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2000,
    );
    return () => window.clearInterval(id);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // fromTo (not from) so the end state is explicit: under StrictMode the
      // effect runs twice, and a bare .from() re-reads the already-zeroed
      // opacity as its target and leaves the copy invisible.
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 },
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          stagger: 0.1,
        },
        0.3,
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-black/20" />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent"
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <span className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted">
          {t.hero.eyebrow}
        </span>

        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
          {t.hero.name}
        </h1>

        <p className="blur-in mb-5 text-lg text-muted md:text-xl">
          {t.hero.rolePrefix}
          <span
            key={roleIndex}
            className="inline-block animate-role-fade-in font-display italic text-text-primary"
          >
            {ROLES[roleIndex]}
          </span>
          {t.hero.roleSuffix}
        </p>

        <p className="blur-in mb-12 max-w-md text-sm text-muted md:text-base">
          {t.hero.description}
        </p>

        <div className="blur-in inline-flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#work"
            onClick={scrollTo("work")}
            className="group relative inline-flex rounded-full transition-transform duration-300 hover:scale-105"
          >
            <GradientRing />
            <span className="relative rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
              {t.hero.ctaPrimary}
            </span>
          </a>

          <a
            href="#contact"
            onClick={scrollTo("contact")}
            className="group relative inline-flex rounded-full transition-transform duration-300 hover:scale-105"
          >
            <GradientRing />
            <span className="relative rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm text-text-primary transition-colors duration-300 group-hover:border-transparent">
              {t.hero.ctaSecondary}
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          {t.hero.scroll}
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-stroke">
          <span className="accent-gradient absolute inset-0 animate-scroll-down" />
        </span>
      </div>
    </section>
  );
}
