import { test } from '@playwright/test';
import { skipIntro } from './helpers';

// Give each homepage section a stable id or data-section attribute, e.g. <section data-section="hero">
const sections = ['hero', 'story', 'collection', 'statement', 'featured', 'newsletter', 'footer'];
const widths = [375, 768, 1440];
const shotsDir = process.env.SHOTS_DIR || 'tests/screenshots';

for (const w of widths) {
  test(`screenshots @${w}`, async ({ page }) => {
    await page.setViewportSize({ width: w, height: 900 });
    await page.goto('/');
    await skipIntro(page);

    // Full viewport capture
    await page.screenshot({ path: `${shotsDir}/full-${w}.png`, fullPage: true });

    for (const s of sections) {
      const el = page.locator(`[data-section="${s}"], #${s}`).first();
      if (await el.count()) {
        await el.scrollIntoViewIfNeeded();
        await page.waitForTimeout(1200); // let reveals finish
        await el.screenshot({ path: `${shotsDir}/${s}-${w}.png` });
      }
    }
  });
}
