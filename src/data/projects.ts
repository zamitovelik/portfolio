import type { Lang } from "../i18n/translations";

export type Project = {
  id: string;
  image: string;
  year: string;
  tags: string[];
  live: string;
  source?: string;
  /** Bento column span on md+ — the 7/5/5/7 rhythm from the design. */
  span: string;
  aspect: string;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
};

export const projects: Project[] = [
  {
    id: "apogee",
    image: "/projects/website.jpg",
    year: "2026",
    tags: ["React", "Landing", "Motion"],
    live: "https://website-murex-two-60.vercel.app/",
    span: "md:col-span-7",
    aspect: "aspect-[4/3] md:aspect-[16/11]",
    title: { en: "Apogee", ru: "Apogee" },
    text: {
      en: "Landing page for an AI analytics platform. Dark interface, scroll-driven reveals and a live revenue chart in the hero.",
      ru: "Лендинг для платформы AI-аналитики. Тёмный интерфейс, появления по скроллу и живой график выручки в первом экране.",
    },
  },
  {
    id: "reels",
    image: "/projects/reels.jpg",
    year: "2026",
    tags: ["React", "AI", "Product"],
    live: "https://reels-trends.vercel.app/",
    source: "https://github.com/zamitovelik/Reels",
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-[16/11]",
    title: { en: "Reels Trends", ru: "Reels Trends" },
    text: {
      en: "Drop in a TikTok, Reels or Shorts link and get a breakdown of why the video lands — hooks, first three seconds, format.",
      ru: "Кидаешь ссылку на TikTok, Reels или Shorts — получаешь разбор: почему ролик заходит, что чинить в первые 3 секунды.",
    },
  },
  {
    id: "notes",
    image: "/projects/todo.jpg",
    year: "2025",
    tags: ["React", "i18n", "localStorage"],
    live: "https://todo-list-ochre-eta.vercel.app/",
    span: "md:col-span-5",
    aspect: "aspect-[4/3] md:aspect-[16/11]",
    title: { en: "Notes", ru: "Notes" },
    text: {
      en: "A notes app with search, list and grid views, editing in place and a bilingual interface. State persists to localStorage.",
      ru: "Приложение для заметок: поиск, список и сетка, редактирование на месте и двуязычный интерфейс. Состояние в localStorage.",
    },
  },
];

export const explorations = [
  { src: "/projects/ex-1.jpg", rotate: -3 },
  { src: "/projects/ex-4.jpg", rotate: 2 },
  { src: "/projects/ex-2.jpg", rotate: 4 },
  { src: "/projects/ex-6.jpg", rotate: -2 },
  { src: "/projects/ex-3.jpg", rotate: 3 },
  { src: "/projects/ex-5.jpg", rotate: -4 },
];

export const SOCIALS = {
  telegram: "https://t.me/arima449",
  instagram: "https://www.instagram.com/xsidewlkid/",
  github: "https://github.com/zamitovelik",
  email: "zamitov123@gmail.com",
};

export const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
