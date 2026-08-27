# Portfolio — Elmurad Zamitov

Single-page dark portfolio. React + Vite + TypeScript + Tailwind CSS, with GSAP
and Framer Motion for motion and hls.js for the streaming background video.

Live: https://github.com/zamitovelik/portfolio

## Running it

```bash
npm install
npm run dev
```

```bash
npm run build   # tsc -b + vite build
npm run preview # serve the production build
```

## Layout

```
src/
  components/     LoadingScreen, Navbar, Hero, Works, Stack,
                  Explorations, Stats, Contact + shared bits
  i18n/           LanguageProvider + all RU/EN copy in translations.ts
  data/           projects.ts — project list, gallery, socials, video source
  hooks/          useHlsVideo — HLS attach with native-Safari fallback
public/projects/  Screenshots of the live projects
```

## Two things worth knowing

**Fonts.** Instrument Serif ships no Cyrillic glyphs, so `--font-display` is
`"Instrument Serif", "Playfair Display", Georgia, serif`. Latin renders in
Instrument Serif exactly as designed; Cyrillic falls through to Playfair
Display Italic, which matches its high-contrast character. Role words and tech
names stay in Latin in both languages, which keeps them on Instrument Serif.

**GSAP under StrictMode.** Entrance animations use `gsap.fromTo`, not
`gsap.from`. StrictMode runs effects twice, and a bare `.from()` re-reads the
already-zeroed opacity as its target on the second pass, leaving the copy
permanently invisible.

## Adding a project

Append an entry to `projects` in `src/data/projects.ts` — `title` and `text`
each take `{ en, ru }`. Drop the screenshot in `public/projects/`. The bento
grid follows a 7/5/5/7 column rhythm via each entry's `span`.

## Deploying

Vercel, building from this repo. `vercel.json` rewrites all routes to
`index.html` so client-side routing works on refresh.
