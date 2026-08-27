import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../i18n/LanguageProvider";
import { explorations, SOCIALS } from "../data/projects";
import { GradientRing } from "./GradientRing";
import { GithubIcon } from "./SocialIcons";

gsap.registerPlugin(ScrollTrigger);

export default function Explorations() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeLightbox();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      const scrub = {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      };

      // The two columns drift at different rates, which is what sells the depth.
      gsap.fromTo(
        leftRef.current,
        { yPercent: 6 },
        { yPercent: -14, ease: "none", scrollTrigger: scrub },
      );
      gsap.fromTo(
        rightRef.current,
        { yPercent: -8 },
        { yPercent: 16, ease: "none", scrollTrigger: scrub },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const columns = [
    explorations.filter((_, i) => i % 2 === 0),
    explorations.filter((_, i) => i % 2 === 1),
  ];

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative min-h-[300vh] scroll-mt-24 bg-bg"
    >
      {/* Layer 1 - pinned message */}
      <div
        ref={contentRef}
        className="pointer-events-none relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center"
      >
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            {t.explorations.eyebrow}
          </span>
          <span className="h-px w-8 bg-stroke" />
        </div>

        <h2 className="mb-4 text-4xl leading-[1.05] tracking-tight text-text-primary md:text-5xl lg:text-6xl">
          {t.explorations.headingLead}{" "}
          <span className="font-display italic">
            {t.explorations.headingItalic}
          </span>
        </h2>

        <p className="mb-8 max-w-md text-sm text-muted md:text-base">
          {t.explorations.subtext}
        </p>

        <a
          href={SOCIALS.github}
          target="_blank"
          rel="noreferrer"
          className="group pointer-events-auto relative inline-flex rounded-full"
        >
          <GradientRing />
          <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-5 py-2.5 text-sm text-text-primary transition-colors duration-300 group-hover:border-transparent">
            <GithubIcon />
            {t.explorations.cta}
          </span>
        </a>
      </div>

      {/* Layer 2 - parallax columns */}
      <div className="absolute inset-0 z-20 flex justify-center px-4 md:px-10">
        <div className="grid w-full max-w-[1400px] grid-cols-2 gap-12 md:gap-40">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              ref={columnIndex === 0 ? leftRef : rightRef}
              className={`flex flex-col gap-16 md:gap-32 ${
                columnIndex === 0 ? "items-start pt-[20vh]" : "items-end pt-[55vh]"
              }`}
            >
              {column.map((item) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setLightbox(item.src)}
                  style={{ rotate: `${item.rotate}deg` }}
                  className="group w-full max-w-[320px] overflow-hidden rounded-2xl border border-stroke bg-surface shadow-2xl shadow-black/40 transition-transform duration-500 hover:!rotate-0 hover:scale-[1.03]"
                >
                  <span className="block aspect-square overflow-hidden">
                    <img
                      src={item.src}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] grid place-items-center bg-bg/90 p-6 backdrop-blur-xl"
          >
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              src={lightbox}
              alt=""
              className="max-h-[85vh] max-w-[85vw] rounded-2xl border border-stroke object-contain"
            />
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-6 top-6 rounded-full border border-stroke bg-surface px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-text-primary"
            >
              {t.explorations.close}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
