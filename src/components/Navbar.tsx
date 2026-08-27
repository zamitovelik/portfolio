import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import { LANGS } from "../i18n/translations";
import { SOCIALS } from "../data/projects";
import { GradientRing } from "./GradientRing";

const SECTION_IDS = ["home", "work", "stack", "explorations", "contact"] as const;

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);

      // The section whose top has most recently passed the navbar wins.
      let current = SECTION_IDS[0] as string;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: t.nav.home, hideOnMobile: false },
    { id: "work", label: t.nav.work, hideOnMobile: false },
    { id: "stack", label: t.nav.stack, hideOnMobile: true },
  ];

  const go = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        <a
          href="#home"
          onClick={go("home")}
          aria-label={t.nav.home}
          className="group relative grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform duration-300 hover:scale-110"
        >
          <span className="accent-gradient absolute inset-0 rounded-full transition-opacity duration-300 group-hover:opacity-0" />
          <span className="accent-gradient-reverse absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative grid h-[calc(100%-2px)] w-[calc(100%-2px)] place-items-center rounded-full bg-bg font-display text-[13px] italic">
            EZ
          </span>
        </a>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={go(link.id)}
            className={`rounded-full px-3 py-1.5 text-xs transition-colors duration-200 sm:px-4 sm:py-2 sm:text-sm ${
              link.hideOnMobile ? "hidden sm:inline-block" : ""
            } ${
              active === link.id
                ? "bg-stroke/50 text-text-primary"
                : "text-muted hover:bg-stroke/50 hover:text-text-primary"
            }`}
          >
            {link.label}
          </a>
        ))}

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <div
          className="flex items-center rounded-full bg-stroke/40 p-0.5"
          role="group"
          aria-label={t.langToggle}
        >
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={`rounded-full px-2 py-1 text-[11px] uppercase tracking-wider transition-colors duration-200 sm:px-2.5 sm:text-xs ${
                lang === code
                  ? "bg-text-primary text-bg"
                  : "text-muted hover:text-text-primary"
              }`}
            >
              {code}
            </button>
          ))}
        </div>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <a
          href={`mailto:${SOCIALS.email}`}
          className="group relative ml-1 inline-flex rounded-full"
        >
          <GradientRing />
          <span className="relative inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1.5 text-xs text-text-primary backdrop-blur-md transition-colors duration-200 sm:px-4 sm:py-2 sm:text-sm">
            {t.nav.sayHi}
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </span>
        </a>
      </nav>
    </header>
  );
}
