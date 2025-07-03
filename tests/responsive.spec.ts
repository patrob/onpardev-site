import { test, expect } from '@playwright/test';

test.describe('Responsive layout', () => {
  test('mobile navigation toggles', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 375, height: 812 });
    const toggle = page.locator('.mobile-menu-toggle');
    await expect(toggle).toBeVisible();
    await toggle.click();
    await expect(page.locator('.mobile-nav.active')).toBeVisible();
  });

  test('desktop navigation visible', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.locator('.desktop-nav')).toBeVisible();
  });
});
