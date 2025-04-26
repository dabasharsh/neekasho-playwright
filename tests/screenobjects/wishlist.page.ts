import { Page } from "@playwright/test";


export class WishlistPage{
    page: Page
    constructor(page) {
        this.page = page;
    }   

    private get products(){
        return this.page.locator('.products.wd-products');
    }

    private title(i: number){
        return this.page.locator('.products.wd-products div').nth(i).locator('h3');
    }

    private deletedPrice(i: number){
        return this.page.locator('.products.wd-products div').nth(i).locator('del bdi');
    }

    private actualPrice(i: number){
        return this.page.locator('.products.wd-products div').nth(i).locator('ins bdi');
    }

    private priceRange(i: number){
        return this.page.locator('.products.wd-products div').nth(i).locator('.price');
    }

    async fetchTotalProducts(){
        return await this.products.count();
    }

    async fetchTitle(i: number){
        return await this.title(i).textContent();
    }

    async fetchDeletedPrice(i: number){
        return await this.deletedPrice(i).textContent();
    }

    async fetchActualPrice(i: number){
        return await this.actualPrice(i).textContent();
    }

    async fetchPriceRange(i: number){
        return await this.priceRange(i).textContent();
    }

}