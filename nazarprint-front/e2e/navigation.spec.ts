import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to catalog page', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav a', { hasText: 'Каталог' }).click();
    await expect(page).toHaveURL(/.*catalogs/);
  });

  test('should navigate to services page', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav a', { hasText: 'Услуги' }).click();
    await expect(page).toHaveURL(/.*services/);
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav a', { hasText: 'Контакты' }).click();
    await expect(page).toHaveURL(/.*contact/);
  });
});
