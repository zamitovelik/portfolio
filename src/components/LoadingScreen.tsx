import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageProvider";

const DURATION = 2700;
const WORD_INTERVAL = 900;

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const { t } = useLanguage();
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(onComplete, 400);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  useEffect(() => {
    const id = window.setInterval(
      () => setWordIndex((i) => (i + 1) % t.loading.words.length),
      WORD_INTERVAL,
    );
    return () => window.clearInterval(id);
  }, [t.loading.words.length]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.span
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-6 top-6 text-xs uppercase tracking-[0.3em] text-muted md:left-10 md:top-10"
      >
        {t.loading.label}
      </motion.span>

      <div className="flex h-full items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="font-display text-4xl italic text-text-primary/80 md:text-6xl lg:text-7xl"
          >
            {t.loading.words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.span
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-10 right-6 font-display tabular-nums text-6xl text-text-primary md:bottom-14 md:right-10 md:text-8xl lg:text-9xl"
      >
        {String(count).padStart(3, "0")}
      </motion.span>

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left transition-transform duration-150 ease-out"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
        />
      </div>
    </motion.div>
  );
}
