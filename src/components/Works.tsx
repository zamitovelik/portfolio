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

        <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-12 md:gap-x-6 md:gap-y-10">
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
              className={`group flex flex-col ${work.span}`}
            >
              {/* The artwork stays clean — nothing is drawn over it but the
                  hover veil, exactly as the brief describes. */}
              <a
                href={work.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${work.title[lang]} - ${t.works.liveSite}`}
                className={`relative block overflow-hidden rounded-3xl border border-stroke bg-surface ${work.aspect}`}
              >
                <img
                  src={work.image}
                  alt={work.title[lang]}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <span
                  aria-hidden
                  className="halftone absolute inset-0 opacity-[0.12] mix-blend-multiply"
                />

                <span
                  aria-hidden
                  className="absolute inset-0 bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
                />

                <span className="pointer-events-none absolute inset-0 grid place-items-center px-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100">
                  <span className="gradient-ring rounded-full p-[2px]">
                    <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm text-black">
                      {t.works.hoverLabel} &mdash;{" "}
                      <span className="font-display italic">
                        {work.title[lang]}
                      </span>
                    </span>
                  </span>
                </span>
              </a>

              {/* One quiet line under the artwork, so the links are reachable
                  without a hover and without covering the image. */}
              <div className="mt-4 flex items-center justify-between gap-4 px-1">
                <h3 className="text-lg text-text-primary md:text-xl">
                  {work.title[lang]}
                </h3>

                <div className="flex shrink-0 items-center gap-4 text-xs text-muted">
                  {work.source && (
                    <a
                      href={work.source}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 underline-offset-4 transition-colors hover:text-text-primary hover:underline"
                    >
                      {t.works.sourceCode}
                      <span aria-hidden>&#8599;</span>
                    </a>
                  )}
                  <span className="uppercase tracking-[0.2em]">{work.year}</span>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Open slot - the roster is meant to grow. */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-dashed border-stroke bg-surface/50 p-6 backdrop-blur-sm md:col-span-7 md:aspect-[16/11] md:p-10"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#4E85BF]/15 blur-3xl"
            />
            <div className="relative">
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                {t.works.eyebrow}
              </span>
              <h3 className="mt-5 max-w-sm font-display text-3xl italic leading-tight text-text-primary md:text-4xl">
                {t.works.nextTitle}
              </h3>
              <p className="mt-4 max-w-sm text-sm text-muted">{t.works.nextText}</p>
            </div>

            <a
              href={`mailto:${SOCIALS.email}`}
              className="relative mt-8 inline-flex w-fit rounded-full"
            >
              <GradientRing />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-text-primary px-6 py-3 text-sm text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
                {t.works.nextCta}
                <span aria-hidden>&#8599;</span>
              </span>
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
