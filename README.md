# Ghaniya Usmani — Portfolio

A premium, futuristic, interactive 3D personal portfolio built with React, TypeScript, Tailwind CSS, React Three Fiber (Three.js), and Framer Motion.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

Requires Node.js 18+.

## Project structure

```
src/
  assets/            # logo assets (extracted from the provided brand image)
  components/        # Navbar, Hero, HeroScene (3D), About, Skills, Projects,
                      # Experience, Education, Contact, Footer, Reveal, icons
  data/
    content.ts       # ALL editable copy lives here — see below
  hooks/
    useReducedMotion.ts
  index.css          # design tokens, fonts, glass utilities
  App.tsx
  main.tsx
tailwind.config.js   # color palette, fonts, glow/shadow tokens
```

## Editing your content

Almost everything you'll want to update lives in **`src/data/content.ts`**:

- `SOCIALS` — replace the placeholder GitHub URL, LinkedIn URL, and email.
- `EXPERIENCE` — replace the placeholder internship entry (`Company Name`,
  dates, description) once you have real details. Do not leave fabricated
  achievements — the placeholder is intentionally generic.
- `EDUCATION` — replace `University Name` and the date range.
- `PROJECTS` — update descriptions, tech tags, or add real GitHub/demo links
  (extend the `Project` type with a `url` field and wire it into
  `Projects.tsx` when you have live links or screenshots).
- `SKILL_GROUPS` / `ABOUT_CARDS` — tweak wording as your skills grow.

The contact form in `Contact.tsx` is UI-only right now (it doesn't send
anywhere) — connect it to a service like Formspree, EmailJS, or your own
backend endpoint when you're ready.

## The 3D hero scene

`src/components/HeroScene.tsx` renders the laptop/orbital/particle scene
using `@react-three/fiber` + `@react-three/drei`. It's lazy-loaded and skips
rendering entirely when the visitor has `prefers-reduced-motion` enabled
(see `Hero.tsx`). If you want to swap in a real 3D model later (e.g. a
`.glb` laptop), that component is the place to do it.

## Design tokens

Colors, fonts, glow shadows, and animation keyframes are defined in
`tailwind.config.js` and `src/index.css`. The palette:

- Background: near-black / deep navy (`void-950` … `void-600`)
- Text: silver/white (`silver-50` … `silver-500`)
- Accents: violet (`violet-400/500/600`), electric blue (`electric-400/500/600`),
  cyan highlight (`cyan-300/400`)
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (code)

## Notes

- No placeholder/lorem-ipsum content — every unfinished detail (company
  name, university, dates, contact info, GitHub/LinkedIn URLs) is a clearly
  marked `TODO` in `content.ts` or a labelled placeholder in the UI.
- Respects `prefers-reduced-motion` throughout (3D scene, scroll reveals,
  scroll indicator).
- Production build bundles the 3D hero scene as its own ~245KB (gzip)
  lazy-loaded chunk, separate from the main bundle, so it never blocks
  first paint of the rest of the page.
