import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;

test.beforeEach(async ({ page}) => {    
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
});

test('verify cart and checkout' , async ({page}) => {

    await inventoryPage.addToCart();
    await cartPage.goToCart();
    await cartPage.verifyCheckoutButtonVisible();
});