import {test, expect} from '@playwright/test';

test('verify text on inventory page', async ({ page }) => {

  // Step 1: Login
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Step 2: Verify text on page
  await expect(page.getByText('Swag Labs')).toBeVisible();
  console.log('Swag Labs text found');

  await page.waitForTimeout(3000);

});


