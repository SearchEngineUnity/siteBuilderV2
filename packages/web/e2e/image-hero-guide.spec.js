/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { test, expect } from '@playwright/test';

const screenWidths = [
  { width: 1920, name: 'desktop' },
  { width: 1400, name: 'desktop-tablet' },
  { width: 1024, name: 'tablet' },
  { width: 900, name: 'tablet-mobile' },
  { width: 375, name: 'mobile' },
];

test('image hero guide test at different widths', async ({ page }) => {
  await page.goto('http://localhost:8000/what-is-care-com');

  for (const size of screenWidths) {
    // Set viewport width
    await page.setViewportSize({ width: size.width, height: 900 });

    // Take screenshot
    await expect(page).toHaveScreenshot(`image-guide-${size.name}.png`, {
      fullPage: true,
      animations: 'disabled',
      timeout: 40000,
    });
  }
});
