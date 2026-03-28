import { Page } from '@playwright/test';

export class InventoryPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async addToCart() {
        await this.page.locator('#add-to-cart-sauce-labs-backpack').first().click();
    }   

    async getCartCount() : Promise<string> {
        return await this.page.locator('.shopping_cart_badge').innerText();
    }
}