---
name: visual-qa
description: Use at the end of EVERY task that changes UI, and whenever the user asks to check, test, verify, review or audit the site. Runs the verification gate, captures screenshots at 375/768/1440, checks overflow, console errors, accessibility and motion preferences, and produces the standard report.
---
# Visual QA

1. `npm run verify`
2. `npm run test:e2e` (Playwright: overflow, console errors, h1, alt text, video attributes, nav, cart drawer)
3. `npm run shots` → `tests/screenshots/<name>-<width>.png`
4. Open the screenshots for the changed section and judge against `docs/QA_CHECKLIST.md`.
5. Manual checks tests can't catch (state each as checked / not checked):
   - Nav over the cream section is legible, not a heavy grey block
   - No text on top of the bottle label in the hero
   - Product images not pixelated, no baked-in cropped text
   - Gold on ≤ 1 primary CTA per viewport
   - Tab through the page: focus ring visible, order logical
   - Reduced-motion on: nothing parallaxes
6. Output the mandatory report from `.agent/rules/04-verification.md`.

If a screenshot looks off, say so plainly. Never mark a section done because the code compiles.
