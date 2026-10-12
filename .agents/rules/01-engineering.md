---
trigger: always_on
---
# Engineering Rules

**Stack:** Next.js (App Router), TypeScript strict, Tailwind. Check `package.json` for the installed animation library and use ONLY that one.

**Structure**
- Server Components by default. Add `"use client"` only for state, effects, or browser APIs, and keep client islands small.
- Sections live in `src/components/sections/`, primitives in `src/components/ui/`, layout in `src/components/layout/`.
- Content/copy/product data lives in `src/content/` and `src/data/`, never inline in JSX.
- One component per file, PascalCase, named props interface, no `any`.

**Performance**
- Images: `next/image` with explicit `sizes`, `priority` ONLY on the hero poster. No raw `<img>` for content.
- Video: `muted autoPlay loop playsInline preload="metadata"`, `poster` set, `<source>` webm + mp4. Hero video must not block LCP; the poster is the LCP element.
- No layout shift: reserve aspect ratios for every image/video.
- No scroll listeners without `requestAnimationFrame`/passive, prefer IntersectionObserver or the animation library's scroll tools.
- Do not animate `width/height/top/left`. Animate `transform` and `opacity` only.

**Accessibility**
- Exactly one `<h1>` per page. Heading order never skips.
- All interactive elements keyboard reachable with a visible gold focus ring.
- Decorative images `alt=""`; meaningful images descriptive alt.
- Contrast: body text ≥ 4.5:1 on its background (check gold-on-cream especially).
- Respect `prefers-reduced-motion`: disable parallax, stagger, and autoplay-heavy effects.
- Cart drawer: focus trap, `Esc` closes, scroll lock, `aria-modal`.

**Quality gates**
- `npm run verify` = `tsc --noEmit && next lint && next build`. Must pass before reporting done.
