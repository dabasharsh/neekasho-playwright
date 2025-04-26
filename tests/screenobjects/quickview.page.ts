import { Page } from "@playwright/test";


export class QuickViewPage{
    page: Page
    constructor(page) {
        this.page = page;
    }   

    private get title(){
        return this.page.locator('.wd-popup.popup-quick-view h1');
    }

    private get deletedPrice(){
        return this.page.locator('.wd-popup.popup-quick-view del bdi');
    }

    private get actualPrice(){
        return this.page.locator('.wd-popup.popup-quick-view ins bdi');
    }

    private get priceRange(){
        return this.page.locator('.wd-popup.popup-quick-view').locator('.price');
    }

    private get addToCartBtn(){
        return this.page.getByRole('button', { name: 'add-to-cart' });
    }

    private get buyNowBtn(){
        return this.page.getByRole('button', { name: 'wd-add-to-cart' });
    }

    async fetchTitle(){
        return await this.title.innerText();
    }

    async fetchDeletedPrice(){
        return await this.deletedPrice.innerText();
    }

    async fetchActualPrice(){
        return await this.actualPrice.innerText();
    }

    async clickAddToCart(){
        await this.addToCartBtn.click();
    }   

    async clickBuyNow(){
        await this.buyNowBtn.click();
    }   

    async fetchPriceRange(){
        return await this.priceRange.innerText();
    }

}