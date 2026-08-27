import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 border-t border-stroke pt-12 sm:grid-cols-3 md:gap-6">
          {t.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <span className="font-display text-5xl leading-none text-text-primary md:text-6xl lg:text-7xl">
                {stat.value}
              </span>
              <span className="mt-3 max-w-[180px] text-xs uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
