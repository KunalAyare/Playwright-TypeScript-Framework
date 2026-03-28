import { Page, expect } from '@playwright/test';

export class CartPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }  

    async goToCart() {
        await this.page.locator('.shopping_cart_link').click();
    }

    async clickCheckout() {
        await this.page.locator('#checkout').click();
    }

    async verifyCheckoutButtonVisible() {
        await expect(this.page.locator('#checkout')).toBeVisible();
    }
} 