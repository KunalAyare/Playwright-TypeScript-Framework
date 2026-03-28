import { test, expect } from '@playwright/test';

test('open google', async ({ page }) => {

  // Step 1: Open Google
  await page.goto('https://www.google.com');
  console.log('Google opened successfully');

  // Step 2: Verify page title contains "Google"
  await expect(page).toHaveTitle(/Google/);
  console.log('Title verified');

  // Step 3: Type in search box
  await page.locator('textarea[name="q"]').fill('Playwright testing');
  console.log('Typed in search box');

  // Step 4: Press Enter to search
  await page.keyboard.press('Enter');

  // Step 5: Verify URL changed to search results
  await expect(page).toHaveURL(/search/);
  console.log('Search results loaded');

  // Wait 3 seconds to see the result
  await page.waitForTimeout(3000);

});