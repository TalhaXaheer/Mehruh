import { Page } from '@playwright/test';

/** Gets past the brand intro. Adjust the selector if the Skip button label changes. */
export async function skipIntro(page: Page) {
  const skip = page.getByRole('button', { name: /skip intro/i }).or(page.getByText(/skip intro/i));
  if (await skip.first().isVisible().catch(() => false)) {
    await skip.first().click();
  }
  await page.waitForTimeout(1500);
}
