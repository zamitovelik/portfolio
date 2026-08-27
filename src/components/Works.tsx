import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageProvider";
import { projects, SOCIALS } from "../data/projects";
import SectionHeader from "./SectionHeader";
import { GradientRing } from "./GradientRing";

export default function Works() {
  const { t, lang } = useLanguage();

  return (
    <section id="work" className="scroll-mt-24 bg-bg py-12 md:py-16">
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
              <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-5 py-2.5 text-sm text-text-primary transition-colors duration-300 group-hover:border-transparent">
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
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`group relative overflow-hidden rounded-3xl border border-stroke bg-surface ${project.span} ${project.aspect}`}
            >
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`${project.title[lang]} - ${t.works.liveSite}`}
              />

              <img
                src={project.image}
                alt={project.title[lang]}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              <span
                aria-hidden
                className="halftone absolute inset-0 opacity-20 mix-blend-multiply"
              />

              {/* The cards are screenshots of text-heavy sites, so the caption
                  needs a hard scrim to win against the type underneath.
                  Persistent, not hover-only: touch devices get no hover. */}
              <span aria-hidden className="absolute inset-0 bg-bg/40" />
              <span
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--bg))_0%,hsl(var(--bg))_38%,hsl(var(--bg)/0.9)_60%,transparent_100%)]"
              />

              <div className="absolute inset-x-0 bottom-0 z-[5] p-5 md:p-6">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-stroke bg-bg px-2.5 py-1 text-[10px] uppercase tracking-wider text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-[10px] uppercase tracking-wider text-muted">
                    {project.year}
                  </span>
                </div>

                <h3 className="mb-1.5 text-xl text-text-primary md:text-2xl">
                  {project.title[lang]}
                </h3>
                <p className="line-clamp-3 max-w-sm text-xs leading-relaxed text-muted md:text-sm">
                  {project.text[lang]}
                </p>

                {project.source && (
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-20 mt-3 inline-flex items-center gap-1.5 text-xs text-muted underline-offset-4 transition-colors hover:text-text-primary hover:underline"
                  >
                    {t.works.sourceCode}
                    <span aria-hidden>&#8599;</span>
                  </a>
                )}
              </div>

              {/* Hover veil + label */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="pointer-events-none absolute inset-0 z-[6] grid place-items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="gradient-ring rounded-full p-[2px]">
                  <span className="flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm text-black">
                    {t.works.hoverLabel} &mdash;{" "}
                    <span className="font-display italic">
                      {project.title[lang]}
                    </span>
                  </span>
                </span>
              </span>
            </motion.article>
          ))}

          {/* Open slot - the roster is meant to grow. */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-dashed border-stroke bg-surface p-6 md:col-span-7 md:aspect-[16/11] md:p-10"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#4E85BF]/10 blur-3xl"
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
