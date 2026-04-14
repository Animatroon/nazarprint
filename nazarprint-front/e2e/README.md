# Playwright E2E Tests

This directory contains end-to-end tests for the Nazarprint application using Playwright.

## Running Tests

### Prerequisites
Make sure both backend and frontend servers are running:
```bash
# Terminal 1 - Backend
cd nazarprint-back
npm run dev

# Terminal 2 - Frontend  
cd nazarprint-front
npm start
```

### Run All Tests
```bash
npm run test:e2e
```

### Run Tests in UI Mode (Interactive)
```bash
npm run test:e2e:ui
```

### Run Tests in Headed Mode (See Browser)
```bash
npm run test:e2e:headed
```

### View Test Report
```bash
npm run test:e2e:report
```

## Test Structure

- **homepage.spec.ts** - Tests for homepage sections, layout, and content
- **navigation.spec.ts** - Tests for navigation between pages
- **catalogs.spec.ts** - Tests for catalog pages and product listings

## Writing New Tests

1. Create a new `.spec.ts` file in the `e2e/` directory
2. Import test and expect from `@playwright/test`
3. Use `test.describe()` to group related tests
4. Write individual tests with `test()`

Example:
```typescript
import { test, expect } from '@playwright/test';

test.describe('My Feature', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/my-page');
    await expect(page.locator('.my-element')).toBeVisible();
  });
});
```

## Configuration

Playwright configuration is in `playwright.config.ts`:
- Tests run on Chromium by default
- Screenshots captured on failure
- Trace recorded on first retry
- Automatic dev server startup

## CI/CD

Tests are configured to run with retries in CI environments. Set `CI=true` environment variable to enable CI mode.
