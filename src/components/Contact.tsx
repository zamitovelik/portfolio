import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../i18n/LanguageProvider";
import { useHlsVideo } from "../hooks/useHlsVideo";
import { HLS_SRC, SOCIALS } from "../data/projects";
import { GradientRing } from "./GradientRing";
import { GithubIcon, InstagramIcon, TelegramIcon } from "./SocialIcons";

const MARQUEE_REPEATS = 10;

export default function Contact() {
  const { t } = useLanguage();
  const videoRef = useHlsVideo(HLS_SRC);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  // Two identical halves so the -50% loop lands back where it started.
  const marqueeItems = Array.from({ length: MARQUEE_REPEATS * 2 }, (_, i) => i);

  const socials = [
    { href: SOCIALS.telegram, label: "Telegram", Icon: TelegramIcon },
    { href: SOCIALS.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: SOCIALS.github, label: "GitHub", Icon: GithubIcon },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-y-[-1] object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-black/60" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-bg to-transparent"
      />

      <div className="relative z-10">
        <div className="mb-14 overflow-hidden md:mb-20">
          <div ref={marqueeRef} className="flex w-max whitespace-nowrap">
            {marqueeItems.map((i) => (
              <span
                key={i}
                className="font-display text-4xl uppercase italic tracking-tight text-text-primary/20 md:text-6xl lg:text-7xl"
              >
                {t.contact.marquee}
                <span aria-hidden className="px-6 not-italic">
                  &bull;
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-4 text-4xl leading-[1.05] tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              {t.contact.headingLead}{" "}
              <span className="font-display italic">
                {t.contact.headingItalic}
              </span>
            </h2>
            <p className="mb-10 max-w-md text-sm text-muted md:text-base">
              {t.contact.subtext}
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a
                href={`mailto:${SOCIALS.email}`}
                className="group relative inline-flex rounded-full transition-transform duration-300 hover:scale-105"
              >
                <GradientRing />
                <span className="relative inline-flex items-center gap-2 rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
                  {t.contact.emailCta}
                  <span aria-hidden>&#8599;</span>
                </span>
              </a>

              <a
                href={SOCIALS.telegram}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex rounded-full transition-transform duration-300 hover:scale-105"
              >
                <GradientRing />
                <span className="relative inline-flex items-center gap-2 rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm text-text-primary transition-colors duration-300 group-hover:border-transparent">
                  <TelegramIcon />
                  {t.contact.telegramCta}
                </span>
              </a>
            </div>

            <a
              href={`mailto:${SOCIALS.email}`}
              className="mt-6 text-sm text-muted underline-offset-4 transition-colors hover:text-text-primary hover:underline"
            >
              {SOCIALS.email}
            </a>
          </div>

          <div className="mt-16 flex flex-col items-center gap-6 border-t border-stroke pt-8 md:mt-20 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-stroke text-muted transition-colors duration-300 hover:border-white/25 hover:text-text-primary"
                >
                  <Icon />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted">
                {t.contact.available}
              </span>
            </div>

            <p className="text-center text-xs text-muted md:text-right">
              &copy; {new Date().getFullYear()} Elmurad Zamitov. {t.contact.rights}
              <br className="hidden md:block" />
              <span className="opacity-60">{t.contact.builtWith}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
