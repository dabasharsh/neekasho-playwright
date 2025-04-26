import {Page} from '@playwright/test';

export class ProductPage{
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    private get products(){
        return this.page.locator('[data-source="main_loop"]');
    }

    private product(i: number){
        return this.page.locator('[data-source="main_loop"] > div').nth(i);
    }

    private title(i: number){
        return this.page.locator('[data-source="main_loop"] > div').nth(i).locator('h3');
    }

    private deletedPrice(i: number){
        return this.page.locator('[data-source="main_loop"] > div').nth(i).locator('del bdi');
    }

    private actualPrice(i: number){
        return this.page.locator('[data-source="main_loop"] > div').nth(i).locator('ins bdi');
    }

    private priceRange(i: number){
        return this.page.locator('[data-source="main_loop"] > div').nth(i).locator('.price');
    }

    private addToCartBtn(i: number){
        return this.page.locator('[data-source="main_loop"] > div').nth(i).locator('.wd-buttons > div').nth(0);
    }

    private quickViewBtn(i: number){
        return this.page.locator('[data-source="main_loop"] > div').nth(i).locator('.wd-buttons > div').nth(1);
    }

    private addToWishlistBtn(i: number){
        return this.page.locator('[data-source="main_loop"] > div').nth(i).locator('.wd-buttons > div').nth(2);
    }

    async selectProduct(i: number){
        await this.product(i).click();
    }

    async hoverOnProduct(i: number){
        await this.page.waitForTimeout(500); // Give time for hover animation
        await this.product(i).hover();
    }

    async addProductToCart(i: number){
        await this.addToCartBtn(i).click();
    }

    async productQuickView(i: number){
        await this.quickViewBtn(i).click();
    }

    async addProductToWishlist(i: number){
        await this.addToWishlistBtn(i).waitFor({ state: 'visible' });
        await this.addToWishlistBtn(i).click();
    }

    async fetchTitle(i: number){
        return (await this.title(i).innerText()) ?? '';
    }

    async fetchDeletedPrice(i: number){
        return (await this.deletedPrice(i).textContent()) ?? '';
    }

    async fetchActualPrice(i: number){
        return (await this.actualPrice(i).textContent()) ?? '';
    }

    async fetchPriceRange(i: number){
        return (await this.priceRange(i).textContent()) ?? '';  
    }

    async fetchTotalProducts(){
        return await this.products.count();
    }
}