import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  headingLead: string;
  headingItalic: string;
  subtext: string;
  action?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  headingLead,
  headingItalic,
  subtext,
  action,
  align = "left",
}: Props) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`mb-12 flex flex-col gap-6 md:mb-16 ${
        centered
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={centered ? "flex flex-col items-center" : ""}>
        <div
          className={`mb-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        >
          <span className="h-px w-8 bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">
            {eyebrow}
          </span>
        </div>

        <h2 className="mb-4 text-4xl leading-[1.05] tracking-tight text-text-primary md:text-5xl lg:text-6xl">
          {headingLead} <span className="font-display italic">{headingItalic}</span>
        </h2>

        <p className="max-w-md text-sm text-muted md:text-base">{subtext}</p>
      </div>

      {action}
    </motion.div>
  );
}
