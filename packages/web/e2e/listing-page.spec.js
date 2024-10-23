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

test('listing page first page test at different widths', async ({ page }) => {
  await page.goto('http://localhost:8000/buying-online');

  for (const size of screenWidths) {
    // Set viewport width
    await page.setViewportSize({ width: size.width, height: 900 });

    // Take screenshot
    await expect(page).toHaveScreenshot(`listing-first-${size.name}.png`, {
      fullPage: true,
      animations: 'disabled',
      timeout: 40000,
    });
  }
});

test('listing page second page test at different widths', async ({ page }) => {
  await page.goto('http://localhost:8000/buying-online/2');

  for (const size of screenWidths) {
    // Set viewport width
    await page.setViewportSize({ width: size.width, height: 900 });

    // Take screenshot
    await expect(page).toHaveScreenshot(`listing-second-${size.name}.png`, {
      fullPage: true,
      animations: 'disabled',
      timeout: 40000,
    });
  }
});

test('listing page last page test at different widths', async ({ page }) => {
  await page.goto('http://localhost:8000/buying-online/4');

  for (const size of screenWidths) {
    // Set viewport width
    await page.setViewportSize({ width: size.width, height: 900 });

    // Take screenshot
    await expect(page).toHaveScreenshot(`listing-last-${size.name}.png`, {
      fullPage: true,
      animations: 'disabled',
      timeout: 40000,
    });
  }
});
