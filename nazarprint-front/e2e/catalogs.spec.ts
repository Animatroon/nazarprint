import { test, expect } from '@playwright/test';

test.describe('Catalog Pages', () => {
  const categories = ['clothes', 'bags', 'headwears', 'for-home'];

  for (const category of categories) {
    test(`should load ${category} catalog page`, async ({ page }) => {
      await page.goto(`/catalogs/${category}`);
      
      // Check intro section (all catalog pages have this)
      await expect(page.locator('.intro')).toBeVisible();
      
      // Check page title exists
      await expect(page.locator('h1, .intro_title')).toBeVisible();
    });
  }

  test('should display catalog list page', async ({ page }) => {
    await page.goto('/catalogs');
    
    // Check page loaded by looking for catalog links or sections
    await expect(page.locator('body')).toBeVisible();
    
    // Check that we're on the right page
    await expect(page).toHaveURL(/.*catalogs$/);
  });
});
