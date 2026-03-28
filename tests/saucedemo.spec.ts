import {test, expect} from '@playwright/test';

test('login using getByRole', async ({page}) => {

     // Step 1: Open saucedemo
    await page.goto('https://www.saucedemo.com/');

     // Step 2: Fill username and password
    await page.getByPlaceholder('username').fill('standard_user');
    await page.getByPlaceholder('password').fill('secret_sauce');

     // Step 3:  Click login button by role
    await page.getByRole('button' , {name: 'Login'}).click();

        // Step 4: Verify login
    await expect(page).toHaveURL(/inventory/);
    console.log('Login successful using getByRole');

});

