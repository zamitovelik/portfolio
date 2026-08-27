import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageProvider";
import { works, SOCIALS } from "../data/projects";
import SectionHeader from "./SectionHeader";
import { GradientRing } from "./GradientRing";

export default function Works() {
  const { t, lang } = useLanguage();

  return (
    <section id="work" className="scroll-mt-24 py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow={t.works.eyebrow}
          headingLead={t.works.headingLead}
          headingItalic={t.works.headingItalic}
          subtext={t.works.subtext}
          action={
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              className="group relative hidden shrink-0 rounded-full md:inline-flex"
            >
              <GradientRing />
              <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-surface/80 px-5 py-2.5 text-sm text-text-primary backdrop-blur-md transition-colors duration-300 group-hover:border-transparent">
                {t.works.viewAll}
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </span>
            </a>
          }
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {works.map((work, index) => (
            <motion.article
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-stroke bg-surface ${work.span} ${work.aspect}`}
              tabIndex={0}
            >
              <img
                src={work.image}
                alt={work.title[lang]}
                loading={index < 2 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <span
                aria-hidden
                className="halftone absolute inset-0 opacity-20 mix-blend-multiply"
              />

              {/* Hover veil */}
              <span
                aria-hidden
                className="absolute inset-0 bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
              />

              {/* Hover label */}
              <span className="pointer-events-none absolute inset-0 grid place-items-center px-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="gradient-ring rounded-full p-[2px]">
                  <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm text-black">
                    {t.works.hoverLabel} &mdash;{" "}
                    <span className="font-display italic">{work.title[lang]}</span>
                  </span>
                </span>
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
