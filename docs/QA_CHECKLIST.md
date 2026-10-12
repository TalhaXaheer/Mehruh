# QA Checklist (check only the changed section, then full pass before each release)

## Layout
- [ ] Aligned to the shared container; left edge matches nav logo
- [ ] No horizontal scroll at 320, 375, 768, 1024, 1440, 1920
- [ ] Section padding follows tokens; no cramped or empty-looking areas
- [ ] No text overlapping a key subject in imagery

## Visual quality
- [ ] Only token colors/fonts used
- [ ] Images sharp (no upscaling blur) and not cropped awkwardly
- [ ] No baked-in cropped text in images
- [ ] Logo has no visible background box
- [ ] Gold used sparingly; one primary CTA per viewport

## Interaction
- [ ] Hover states smooth; touch devices have no hover-only information
- [ ] Nav theme correct over every section
- [ ] Cart drawer opens/closes, Esc works, focus trapped, scroll locked
- [ ] Newsletter validates email, shows success/error states

## Motion
- [ ] Reveals fire once; nothing fights the hero video
- [ ] Reduced-motion disables parallax/stagger
- [ ] Smooth under 4x CPU throttle

## Performance (Lighthouse mobile, production build)
- [ ] LCP < 2.5s (poster image), CLS < 0.05, TBT < 200ms
- [ ] Hero video not blocking; mobile gets lighter source or poster

## Accessibility
- [ ] One h1, heading order valid
- [ ] Contrast ≥ 4.5:1 body, ≥ 3:1 large text
- [ ] Focus rings visible; tab order logical
- [ ] Alt text correct

## Content
- [ ] Client copy verbatim
- [ ] All unconfirmed facts flagged TODO(client)
