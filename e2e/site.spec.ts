import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const pages = ['/', '/work/ebanguka/', '/work/meet/', '/work/telehealth/', '/work/platform/'];

for (const path of pages) {
  test(`${path} renders and passes WCAG 2.1 AA checks`, async ({ page }) => {
    const res = await page.goto(path);
    expect(res?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);

    const { violations } = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(violations.map((v) => `${v.id}: ${v.help}`)).toEqual([]);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow).toBe(false);
  });
}

test('status board lists every system with a dated check', async ({ page }) => {
  await page.goto('/');
  const board = page.getByRole('table');
  await expect(board.getByRole('row')).toHaveCount(7); // header + 6 systems
  await expect(page.locator('time[datetime]')).toHaveCount(1);
});

test('the CV download is served and is a PDF', async ({ request }) => {
  const res = await request.get('/cv.pdf');
  expect(res.status()).toBe(200);
  expect((await res.body()).subarray(0, 5).toString()).toBe('%PDF-');
});

test('unknown pages return the custom 404', async ({ page }) => {
  await page.goto('/does-not-exist/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('This page doesn’t exist');
});
