import {Page} from '@playwright/test';

export class CurtainPage{
    page: Page;
    constructor(page: Page){
        this.page = page;
    }

    private get scrollableWindow(){
        return  this.page.locator('.quick-shop-wrapper .wd-scroll-content');
    }  

    private get addToCartBtn(){
        return this.page.getByRole('button', { name: 'Add to cart' });
    }

    private Seven_ft_CurtainPrice(i: number){
        return this.page.locator('[data-source="main_loop"] > div').nth(i).locator('.woocommerce-Price-amount').nth(0);
    }

    private Nine_ft_CurtainPrice(i: number){
        return this.page.locator('[data-source="main_loop"] > div').nth(i).locator('.woocommerce-Price-amount').nth(1);
    }

    async select7Ftcurtain(){
        return await this.page.selectOption('#pa_size', '7ft');
    }

    async select9Ftcurtain(){
        return await this.page.selectOption('#pa_size', '9ft');
    }

    async Seven_ft_CurtainActualPrice(i: number){
        return await this.Seven_ft_CurtainPrice(i).innerText();
    }

    async Nine_ft_CurtainActualPrice(i: number){
        return await this.Nine_ft_CurtainPrice(i).innerText();
    }

    async clickAddToCart(){
        await this.page.waitForTimeout(1000);
        await this.addToCartBtn.click({force: true});
    }

    async scrollToBottom(){
    await this.scrollableWindow.evaluate(node => node.scrollTo(0, node.scrollHeight));
    }

}