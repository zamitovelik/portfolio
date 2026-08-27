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

**HLS probing order.** Chrome answers
`canPlayType("application/vnd.apple.mpegurl")` with `"maybe"` — a truthy string
— while being unable to play HLS natively. So `useHlsVideo` reaches for
hls.js/MSE first and keeps the native `<video src>` path for iOS Safari, which
has real HLS support and no `MediaSource`. Probing native support first leaves
the background video permanently black everywhere but Safari.

## Adding a card

Append an entry to `works` in `src/data/projects.ts` — `title` takes
`{ en, ru }`. Drop the image in `public/work/`. The bento grid follows a
7/5/5/7 column rhythm via each entry's `span`. Gallery images live in
`public/gallery/` and are listed in `explorations`.

Card imagery is decorative stock photography (Lorem Picsum, Unsplash licence).

## Deploying

Vercel, building from this repo. `vercel.json` rewrites all routes to
`index.html` so client-side routing works on refresh.
