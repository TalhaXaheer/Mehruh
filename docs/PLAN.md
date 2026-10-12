# MEHRUH — Architecture & Roadmap

**Current phase:** see docs/PROGRESS.md (single source of truth)

## 1. Audit of the current build (from screenshots)
| # | Problem | Fix lives in |
|---|---|---|
| 1 | Logo monogram shows a visible dark square box (nav, hero, intro, footer) | Phase 0: transparent SVG |
| 2 | Brand stacked 3x in hero (nav logo + big monogram + wordmark) and tagline repeats in nav | Phase 1 |
| 3 | Hero wordmark/tagline collides with the bottle label ("MEHRUH / SAANJH") | Phase 1 |
| 4 | Navbar turns into a flat grey block over the cream section | Phase 0: tone-aware nav |
| 5 | Story image is blurry/pixelated, with cropped baked-in "MEHRUH" text | Phase 2 (needs better asset) |
| 6 | Too many near-identical dark sections (collection, featured, newsletter, footer), so no rhythm | Phase 0 tokens + Phase 3 |
| 7 | Collection card: one permanently gold CTA, heavy "Add to bag" buttons, identical backgrounds | Phase 2 |
| 8 | Footer has invented facts (Mayfair London, DIFC Dubai, "complimentary insured dispatch") and is heavier than the brief asked | Phase 3 + content rules |
| 9 | Prices shown in $ with no confirmed currency | Phase 5 |
| 10 | Empty-space heavy statement section; sections not on one shared grid | Phase 0 / 3 |

## 2. Target architecture (Next.js App Router)
```
src/
  app/
    layout.tsx            fonts, metadata, providers
    page.tsx              composes homepage sections
    collection/page.tsx
    collection/[slug]/page.tsx
    our-story/page.tsx
    journal/page.tsx
  components/
    layout/   Navbar, Footer, CartDrawer, PageIntro
    sections/ Hero, BrandStory, CollectionIntro, ProductGrid, BrandStatement,
              FeaturedFragrance, Newsletter
    ui/       Button, TextLink, Eyebrow, Container, Section, Reveal, ProductCard, Logo
  content/    copy.ts, placeholders.ts   (TODO(client) flags)
  data/       products.ts
  lib/        motion.ts, media.ts, format.ts, cn.ts
  store/      cart.ts
  styles/     tokens.css (CSS variables from DESIGN_SYSTEM.md), globals.css
  types/      product.ts
public/       videos/ images/ brand/ fonts/
tests/        e2e/ screenshots/
```
**Principles:** tokens in one file · content separated from components · small client islands · `Section` primitive carries `data-nav-theme` and background tone · motion presets centralised.

## 3. Roadmap
Each phase = several small tasks, each task uses the task-brief template, each ends with /verify. Commit between tasks.

### Phase 0 — Foundations (do first, no visual redesign yet)
- 0.1 `tokens.css` + Tailwind theme mapped to tokens; fonts via `next/font`
- 0.2 `Container`, `Section` (tone + `data-nav-theme`), `Eyebrow`, `Button`, `TextLink`, `Logo` primitives
- 0.3 Transparent monogram SVG swapped everywhere (needs asset from you)
- 0.4 Navbar rebuilt: 3 states (hero-transparent, scrolled-dark, over-cream), aligned to container
- 0.5 Add `npm run verify`, `test:e2e`, `shots` scripts + Playwright config
**Exit:** verify green; nav correct over every section; no visual regressions elsewhere.

### Phase 1 — Hero
- 1.1 Video component with poster/fallback/mobile source (media-pipeline skill)
- 1.2 Overlay gradients tuned; wordmark repositioned away from bottle label
- 1.3 Remove duplicate brand stacking; refine CTA hover + scroll cue
- 1.4 Intro → hero handoff sequence (motion-restraint skill)
**Exit:** poster-only fallback works, LCP < 2.5s, text contrast passes at 3 viewports.

### Phase 2 — Story & Collection
- 2.1 Story: 5/7 asymmetric layout, framed image (new high-res asset), reveal
- 2.2 Collection intro + transition from cream
- 2.3 ProductCard redesign + grid, hover system
- 2.4 Replace "Add to bag" with quieter pattern (View + quick add on hover)
**Exit:** cards consistent, no pixelation, hover smooth on desktop and usable on touch.

### Phase 3 — Statement, Featured, Newsletter, Footer
- 3.1 Statement: scroll-linked type, reduced empty space
- 3.2 Featured: sand tone for rhythm, sticky image, notes block, size selector
- 3.3 Newsletter: validation, success state, minimal
- 3.4 Footer: slim down, remove invented claims, confirm contact/social with client
**Exit:** page rhythm reads dark → cream → dark → wine → sand → dark.

### Phase 4 — Motion & polish pass (whole page)
- Consistent reveal presets, one scroll-linked effect per section max, reduced-motion audit, CPU-throttle audit.

### Phase 5 — Commerce plumbing
- Product data layer, cart store + drawer wired, product detail pages, currency config, `formatPrice`.
- Payment/backend only after your decision (Shopify Storefront API / Stripe / custom). Not in scope until chosen.

### Phase 6 — Pages
- Collection page (filters by family), Our Story, Journal (MDX), 404, legal pages.

### Phase 7 — Release hardening
- Lighthouse mobile ≥ 90 perf / 100 a11y / 100 SEO, OG images, metadata, sitemap, favicon, analytics (if wanted), cross-browser (Safari iOS video autoplay!), final QA pass.

## 4. Decisions needed from you
1. Currency and market (USD? PKR? multi-currency?)
2. Real contact/location/social details for the footer
3. Transparent monogram SVG + wordmark SVG
4. Higher-res story image (≥ 1600px long edge, no baked-in text)
5. Whether the featured section goes light (sand) for rhythm (recommended)
6. Checkout path: Shopify headless, Stripe, or custom
7. Animation library already installed? (agent must report it, not add another)
