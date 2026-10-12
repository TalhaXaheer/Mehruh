---
name: motion-restraint
description: Use for any animation, scroll effect, parallax, hover interaction, page intro/transition or video behavior on MEHRUH. Trigger on words like animate, reveal, parallax, scroll, stagger, hover, transition, intro, marquee. Enforces subtle, performant, reduced-motion-safe luxury motion.
---
# Motion Restraint

**Principle:** the hero video is the main motion. Everything else is quiet.

## Allowed vocabulary
- Reveal: opacity 0→1 + translateY 24–40px, 0.9–1.2s, ease `cubic-bezier(0.22, 1, 0.36, 1)`.
- Stagger: 80–120ms between siblings, max 5 siblings.
- Image hover: scale 1.04–1.06 over 1.2s + 4–8px translate. Text nudge ≤ 6px.
- Gold reveal: `scaleX` or `clip-path` fill from left, 500–700ms.
- Scroll: parallax ≤ 8% of element height; statement text translate/letter-spacing tied to scroll progress, subtle.
- Nav: background/blur transition 400ms after ~40px scroll.

## Forbidden
Bounce/spring on luxury elements, rotating things, infinite loops (except hero video and scroll cue), animating layout properties, more than one scroll-linked effect per section, autoplay sound.

## Required
- Reveals trigger once, not on every scroll pass.
- `prefers-reduced-motion: reduce` → no parallax/stagger; instant or simple fade.
- Smooth under 4x CPU throttle in DevTools.
- Use the already-installed animation library only. Shared presets live in `src/lib/motion.ts`; no per-component magic numbers.
- Intro → hero handoff: hero elements stay hidden until a single shared `introDone` state flips, then one orchestrated sequence plays.

## Verification
Test (1) reduced-motion on, (2) 4x CPU throttle. Report any section that fails.
