import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/NazarPrint/i);
    await expect(page.locator('app-header')).toBeVisible();
    await expect(page.locator('app-footer')).toBeVisible();
  });

  test('should display main intro section', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.intro')).toBeVisible();
  });

  test('should display catalog section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('.catalogs')).toBeVisible();
  });

  test('should display services section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('.services')).toBeVisible();
  });

  test('should display FAQ section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('app-faq')).toBeVisible();
  });
});
