---
name: luxury-ui-design
description: Use whenever designing, rebuilding, polishing or reviewing any MEHRUH layout, section, card, navbar, footer or typography. Apply even for "small tweaks" to spacing, color or text, since the luxury feel depends on strict consistency. Covers grid, whitespace, type scale, section rhythm, image framing and anti-generic rules.
---
# Luxury UI Design (MEHRUH)

## Process
1. Open `docs/DESIGN_SYSTEM.md`. Use its tokens only.
2. Identify the section's role in the page rhythm (dark / cream / burgundy / sand).
3. Build the static layout first, no animation. Check 375/768/1440.
4. Only then request motion.

## Layout laws
- **One grid.** Container max 1280px, 12 columns, gutter 24–32px. Nav, section content and footer share the same left/right edges.
- **Asymmetry over symmetry.** Editorial sections: 5/7 or 7/5 split with an offset image (shifted 40–80px vertically), not a 6/6 box.
- **Whitespace is the luxury.** If it feels "full", remove an element before shrinking spacing.
- **Hierarchy per section:** one eyebrow (small caps, gold, tracking .3em) → one headline → one supporting line → one CTA. Nothing else competes.
- **Hairlines:** 1px at 12–20% gold/cream opacity for dividers and card borders.

## Type
- Display: Cormorant Garamond, weights 300–500; tracking .02–.12em for caps wordmarks; line-height 1.05–1.15 for large headlines.
- UI/labels: Inter 11–13px, uppercase, tracking .22–.32em, weight 500.
- Body: Inter 15–17px, line-height 1.7, max 60ch, muted tone (never pure white/black).
- Italic Cormorant for quotes/subtitles only.

## Product cards
- Image 4:5, radius 0–2px, hairline border, no shadow at rest.
- Info: name (serif caps) + price on one baseline row, category label, 2-line clamp description, CTA.
- CTA is outlined at rest; gold fill reveals on hover via transform/clip, not a color flash.
- Never leave one card permanently gold-filled.

## Section rhythm (default)
Hero dark video → Story cream → Collection ink → Statement burgundy → Featured sand → Newsletter ink → Footer deep black.
Never put three near-identical dark sections in a row.

## Images
- Never upscale low-res images. If the source is under 1600px on the long edge for a full-width slot, flag it under Observations.
- Frame editorial images with an inner border offset 12–16px, not a heavy white mat.
- Remove baked-in text from images or crop it out intentionally.

## Logo
Monogram must be a transparent SVG. If only a PNG with a dark box exists, STOP and ask for the transparent asset. Do not mask or hack it.

## Anti-patterns (instant fail)
Pill buttons, large radius, neon glows, Bootstrap-looking buttons, centered-everything, emoji, logo + wordmark + tagline stacked three times in one viewport.
