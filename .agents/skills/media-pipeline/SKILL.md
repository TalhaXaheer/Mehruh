---
name: media-pipeline
description: Use when adding, replacing, optimizing or referencing any video, image, logo or font in MEHRUH, including the hero video, product photos, story image, favicon and OG image. Trigger on hero video, poster, compress, webp, asset, public folder, placeholder image.
---
# Media Pipeline

## Folder contract
```
public/
  videos/mehruh-hero.mp4         (client-provided, H.264)
  videos/mehruh-hero.webm        (optional)
  videos/mehruh-hero-mobile.mp4  (optional, ≤720p, ≤3MB)
  images/hero-poster.jpg         (first frame, 1920w)
  images/products/<slug>-1.webp  (4:5, ≥1600px long edge)
  images/story/atelier.webp
  brand/mehruh-monogram.svg      (TRANSPARENT)
  brand/mehruh-wordmark.svg
```
Components read paths from `src/lib/media.ts`. Do not hard-code paths in JSX.

## Hero video contract
- `<video muted autoPlay loop playsInline preload="metadata" poster=...>`
- Sources: webm then mp4. On mobile use the mobile source, or show the poster only when `saveData` or reduced-motion is on.
- Missing/failed video → poster shows, no error UI, no console error.
- Overlay: layered gradients (top for nav, bottom for text), tuned so text contrast ≥ 4.5:1 where text sits. Do not flatten the whole video to near-black.
- **Text vs subject collision:** the wordmark must not sit on the bottle label. Position text around the video focal point, check at 3 viewports, and report if it collides.

## Rules
- Never generate or download a substitute video or product photo.
- Report resolution problems instead of stretching images.
- ffmpeg compression commands go in `docs/ASSETS.md`; do not run them unprompted.
