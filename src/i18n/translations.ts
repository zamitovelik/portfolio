export type Lang = "en" | "ru";

export const LANGS: Lang[] = ["en", "ru"];

/**
 * Role words and tech names deliberately stay in Latin script in both
 * languages: they read idiomatically to a Russian-speaking dev audience and,
 * practically, they are rendered in Instrument Serif italic, which ships no
 * Cyrillic glyphs.
 */
export const translations = {
  en: {
    htmlLang: "en",

    loading: {
      label: "Portfolio",
      words: ["Design", "Create", "Inspire"],
    },

    nav: {
      home: "Home",
      work: "Work",
      stack: "Stack",
      sayHi: "Say hi",
    },

    hero: {
      eyebrow: "Portfolio — 2026",
      name: "Elmurad Zamitov",
      rolePrefix: "A ",
      roleSuffix: " lives in Tashkent.",
      description:
        "Building seamless digital interactions by focusing on the small nuances that bring an interface to life.",
      ctaPrimary: "See works",
      ctaSecondary: "Reach out",
      scroll: "Scroll",
    },

    works: {
      eyebrow: "Selected work",
      headingLead: "Featured",
      headingItalic: "projects",
      subtext:
        "A selection of projects I've worked on, from concept to launch.",
      viewAll: "View all work",
      hoverLabel: "View",
      liveSite: "Open the live site",
      sourceCode: "Source",
      nextTitle: "Your project here",
      nextText:
        "I have room for one more build this season. Landing pages, web apps, motion-heavy interfaces.",
      nextCta: "Start a project",
    },

    stack: {
      eyebrow: "Toolkit",
      headingLead: "The",
      headingItalic: "stack",
      subtext: "What I reach for when building interfaces that have to feel fast and look considered.",
      viewAll: "GitHub",
      items: [
        {
          title: "Frontend",
          text: "React, TypeScript, Vite",
          meta: "Core",
        },
        {
          title: "Styling & motion",
          text: "Tailwind CSS, GSAP, Framer Motion",
          meta: "Craft",
        },
        {
          title: "Interfaces",
          text: "Responsive layouts, i18n, accessibility",
          meta: "Detail",
        },
        {
          title: "Delivery",
          text: "Git, Vercel, preview deployments",
          meta: "Ship",
        },
      ],
    },

    explorations: {
      eyebrow: "Explorations",
      headingLead: "Visual",
      headingItalic: "playground",
      subtext:
        "A visual scrapbook — frames, textures and compositions I keep coming back to.",
      cta: "See the code",
      close: "Close",
    },

    stats: [
      { value: "3", label: "Projects in production" },
      { value: "6+", label: "Technologies in the stack" },
      { value: "100%", label: "Responsive by default" },
    ],

    contact: {
      marquee: "Building the future",
      headingLead: "Let's build",
      headingItalic: "something",
      subtext: "Have a project in mind, or just want to say hi? The inbox is open.",
      emailCta: "Write to me",
      telegramCta: "Telegram",
      available: "Available for projects",
      rights: "All rights reserved.",
      builtWith: "Built with React, GSAP & Tailwind",
    },

    langToggle: "Switch to Russian",
  },

  ru: {
    htmlLang: "ru",

    loading: {
      label: "Портфолио",
      words: ["Дизайн", "Код", "Движение"],
    },

    nav: {
      home: "Главная",
      work: "Работы",
      stack: "Стек",
      sayHi: "Написать",
    },

    hero: {
      eyebrow: "Портфолио — 2026",
      name: "Эльмурад Замитов",
      rolePrefix: "",
      roleSuffix: " из Ташкента.",
      description:
        "Собираю цельные цифровые интерфейсы, уделяя внимание мелочам, которые и делают продукт живым.",
      ctaPrimary: "Смотреть работы",
      ctaSecondary: "Связаться",
      scroll: "Листайте",
    },

    works: {
      eyebrow: "Избранное",
      headingLead: "Мои",
      headingItalic: "проекты",
      subtext:
        "Подборка проектов, над которыми я работал — от идеи до запуска.",
      viewAll: "Все работы",
      hoverLabel: "Открыть",
      liveSite: "Открыть сайт",
      sourceCode: "Исходники",
      nextTitle: "Здесь может быть ваш проект",
      nextText:
        "В этом сезоне есть место ещё под один проект. Лендинги, веб-приложения, интерфейсы с анимацией.",
      nextCta: "Обсудить проект",
    },

    stack: {
      eyebrow: "Инструменты",
      headingLead: "Мой",
      headingItalic: "стек",
      subtext:
        "То, чем я собираю интерфейсы, которые должны быстро работать и хорошо выглядеть.",
      viewAll: "GitHub",
      items: [
        {
          title: "Фронтенд",
          text: "React, TypeScript, Vite",
          meta: "База",
        },
        {
          title: "Стили и анимация",
          text: "Tailwind CSS, GSAP, Framer Motion",
          meta: "Ремесло",
        },
        {
          title: "Интерфейсы",
          text: "Адаптивная вёрстка, локализация, доступность",
          meta: "Детали",
        },
        {
          title: "Доставка",
          text: "Git, Vercel, превью-деплои",
          meta: "Релиз",
        },
      ],
    },

    explorations: {
      eyebrow: "Исследования",
      headingLead: "Визуальная",
      headingItalic: "песочница",
      subtext:
        "Визуальный дневник — кадры, фактуры и композиции, к которым я возвращаюсь.",
      cta: "Смотреть код",
      close: "Закрыть",
    },

    stats: [
      { value: "3", label: "Проекта в продакшене" },
      { value: "6+", label: "Технологий в стеке" },
      { value: "100%", label: "Адаптивная вёрстка" },
    ],

    contact: {
      marquee: "Строим будущее",
      headingLead: "Давайте сделаем",
      headingItalic: "проект",
      subtext: "Есть идея или просто хотите поздороваться? Пишите — я на связи.",
      emailCta: "Написать на почту",
      telegramCta: "Telegram",
      available: "Открыт для проектов",
      rights: "Все права защищены.",
      builtWith: "Собрано на React, GSAP и Tailwind",
    },

    langToggle: "Переключить на английский",
  },
} as const;

export type Translation = (typeof translations)["en"];
