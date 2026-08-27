import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageProvider";
import { SOCIALS } from "../data/projects";
import SectionHeader from "./SectionHeader";
import { GradientRing } from "./GradientRing";

export default function Stack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="scroll-mt-24 bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow={t.stack.eyebrow}
          headingLead={t.stack.headingLead}
          headingItalic={t.stack.headingItalic}
          subtext={t.stack.subtext}
          action={
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              className="group relative hidden shrink-0 rounded-full md:inline-flex"
            >
              <GradientRing />
              <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-5 py-2.5 text-sm text-text-primary transition-colors duration-300 group-hover:border-transparent">
                {t.stack.viewAll}
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

        <ul className="flex flex-col gap-3">
          {t.stack.items.map((item, index) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group flex items-center gap-4 rounded-[32px] border border-stroke bg-surface/30 p-4 transition-colors duration-300 hover:bg-surface sm:gap-6 sm:rounded-full"
            >
              <span className="relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-3xl sm:h-20 sm:w-20 sm:rounded-full">
                <span className="accent-gradient absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative font-display text-2xl italic text-bg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="mb-1 text-base text-text-primary sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-xs text-muted sm:text-sm">{item.text}</p>
              </div>

              <span className="hidden shrink-0 rounded-full border border-stroke px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted sm:inline-block">
                {item.meta}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
