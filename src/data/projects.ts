import type { Lang } from "../i18n/translations";

export type Work = {
  id: string;
  image: string;
  title: Record<Lang, string>;
  /** Bento column span on md+ — the 7/5/5/7 rhythm from the design. */
  span: string;
  aspect: string;
};

const BENTO_ASPECT = "aspect-[4/3] md:aspect-[16/11]";

export const works: Work[] = [
  {
    id: "motion",
    image: "/work/motion.jpg",
    span: "md:col-span-7",
    aspect: BENTO_ASPECT,
    title: { en: "Automotive Motion", ru: "Динамика движения" },
  },
  {
    id: "architecture",
    image: "/work/architecture.jpg",
    span: "md:col-span-5",
    aspect: BENTO_ASPECT,
    title: { en: "Urban Architecture", ru: "Городская архитектура" },
  },
  {
    id: "perspective",
    image: "/work/perspective.jpg",
    span: "md:col-span-5",
    aspect: BENTO_ASPECT,
    title: { en: "Human Perspective", ru: "Человеческий взгляд" },
  },
  {
    id: "identity",
    image: "/work/identity.jpg",
    span: "md:col-span-7",
    aspect: BENTO_ASPECT,
    title: { en: "Brand Identity", ru: "Фирменный стиль" },
  },
];

export const explorations = [
  { src: "/gallery/g1.jpg", rotate: -3 },
  { src: "/gallery/g2.jpg", rotate: 2 },
  { src: "/gallery/g3.jpg", rotate: 4 },
  { src: "/gallery/g4.jpg", rotate: -2 },
  { src: "/gallery/g5.jpg", rotate: 3 },
  { src: "/gallery/g6.jpg", rotate: -4 },
];

export const SOCIALS = {
  telegram: "https://t.me/arima449",
  instagram: "https://www.instagram.com/xsidewlkid/",
  github: "https://github.com/zamitovelik",
  email: "zamitov123@gmail.com",
};

export const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
