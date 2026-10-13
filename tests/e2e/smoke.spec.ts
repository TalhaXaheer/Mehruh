import { test, expect } from '@playwright/test';
import { skipIntro } from './helpers';

const widths = [320, 375, 768, 1024, 1440, 1920];

test.describe('MEHRUH homepage smoke', () => {
  test('no console errors on load', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto('/');
    await skipIntro(page);
    expect(errors, errors.join('\n')).toEqual([]);
  });

  for (const w of widths) {
    test(`no horizontal overflow @${w}`, async ({ page }) => {
      await page.setViewportSize({ width: w, height: 900 });
      await page.goto('/');
      await skipIntro(page);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }

  test('h1 and images have alt', async ({ page }) => {
    await page.goto('/');
    await skipIntro(page);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toBeVisible();
    const missingAlt = await page.locator('img:not([alt])').count();
    expect(missingAlt).toBe(0);
  });

  test('hero video attributes', async ({ page }) => {
    await page.goto('/');
    await skipIntro(page);
    const v = page.locator('video').first();
    if (await v.count()) {
      await expect(v).toHaveJSProperty('muted', true);
      await expect(v).toHaveAttribute('playsinline', '');
      await expect(v).toHaveAttribute('poster', /.+/);
    }
  });

  test('nav links present', async ({ page }) => {
    await page.goto('/');
    await skipIntro(page);
    for (const label of ['Home', 'Collection', 'Our Story', 'Journal']) {
      await expect(page.getByRole('link', { name: new RegExp(`^${label}$`, 'i') }).first()).toBeVisible();
    }
  });

  test('cart drawer opens and closes', async ({ page }) => {
    await page.goto('/');
    await skipIntro(page);
    await page.getByRole('button', { name: /cart|shopping bag/i }).first().click();
    const drawer = page.getByRole('dialog');
    await expect(drawer).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(drawer).toBeHidden();
  });

  test('reduced motion does not break the page', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await skipIntro(page);
    await expect(page.locator('h1')).toBeVisible();
  });
});
