# MEHRUH Design System (source of truth)

## Color tokens
| Token | Value | Use |
|---|---|---|
| --ink | #0B0809 | deepest background, footer |
| --ink-2 | #141012 | collection / newsletter |
| --wine | #2A0E18 | burgundy statement section |
| --wine-2 | #3A1220 | gradient end |
| --cream | #F1EADF | story section |
| --sand | #E6DCCB | featured section (light rhythm) |
| --gold | #C4A055 | primary accent |
| --gold-soft | #D9BE7E | headlines on dark |
| --gold-deep | #8F7236 | gold text on cream (contrast-safe) |
| --text-dark | #2B1B20 | text on cream |
| --text-light | #E9E0D2 | text on dark |
| --muted-dark | #9A8F84 | secondary on dark |
| --muted-light | #6B5A57 | secondary on cream |
| --hairline | rgba(196,160,85,.18) | borders/dividers |

## Type scale (fluid with clamp)
- Display XL (hero wordmark): clamp(56px, 11vw, 168px), tracking .18em, Cormorant 400
- Display L (section statement): clamp(48px, 9vw, 140px)
- H2: clamp(36px, 5vw, 72px), tracking .04em
- H3 (card name): 24–28px, caps, tracking .14em
- Quote/subtitle: Cormorant italic 22–32px
- Label: Inter 11–12px, caps, tracking .3em, weight 500
- Body: Inter 15–17px / 1.7, max 60ch

## Spacing & grid
- Container 1280px, padding-x clamp(20px, 5vw, 64px). 12 cols, gap 24–32px.
- Section padding-y: clamp(80px, 12vw, 200px)
- Spacing scale: 4 8 12 16 24 32 48 64 96 128 192

## Shape
Radius 0 (cards, buttons, images). Borders 1px hairline. Shadows: none at rest; hover lift `0 24px 60px -30px rgba(0,0,0,.6)` max.

## Components
- **Navbar:** fixed, height 88 → 68 on scroll. Hero state: transparent + top gradient. Scrolled state: `ink` at 72% + backdrop blur 12px + hairline bottom. **On cream sections it must NOT become a flat grey block**: use a tone-aware nav (switch to cream-translucent with dark text, driven by `data-nav-theme` on sections via IntersectionObserver).
- **Logo:** transparent monogram + wordmark. In the nav, show monogram + "MEHRUH" only (drop the tagline there, it already appears in the hero and footer).
- **Button primary:** 1px gold outline, 56px tall, label Inter caps; hover = gold fill sweeps from left, label shifts +4px, arrow +6px.
- **Button text-link:** label + arrow, 1px underline offset 8px.
- **Product card:** see `luxury-ui-design` skill.
- **Cart drawer:** 440px, `ink-2`, hairline left border, focus trap.

## Section rhythm
1 Hero (video, dark) → 2 Story (cream) → 3 Collection (ink-2) → 4 Statement (wine) → 5 Featured (sand, light) → 6 Newsletter (ink) → 7 Footer (ink-deep)

## Hero composition rules
- Remove the duplicate stacking: nav logo + big monogram + big wordmark + tagline + CTA is too many brand marks. Keep: big wordmark, tagline, CTA. Show the monogram only in the nav (small).
- Wordmark is positioned in the lower-middle third, tagline directly below, CTA below that. The bottle (focal point) stays unobstructed in the upper-middle.
- Scroll cue: thin 1px vertical line with moving dot, label "DISCOVER" at 10px.

## Implementation note
This project uses Tailwind v4, so there is no `tailwind.config` file. Design tokens live in CSS using `@theme` in `src/app/globals.css` (with token constants in `src/styles/tokens.ts`). When applying or configuring theme values, declare or reference them via `@theme` CSS custom properties or token imports rather than an external `tailwind.config.js`.
