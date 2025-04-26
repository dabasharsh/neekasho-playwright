import { Page } from "@playwright/test"

export class HomePage {
    page: Page;

    constructor(page) {
        this.page = page
    }

    private get myAccount(){
        return this.page.locator('[title="My account"]').nth(0);
    }

    private get wishlistIcon(){
        return this.page.locator('[title="Wishlist products"]').nth(0);
    }

    private get wishlistCount(){
        return this.page.locator('[title="Wishlist products"]').nth(0).locator('.wd-tools-count');
    }

    private get home() {
        return this.page.locator('#menu-item-734');
    }

    private get bedSheet() {
        return this.page.locator('#menu-item-735');
    }

    private get bedCover() {
        return this.page.locator('#menu-item-7221');
    }

    private get beddingSet() {
        return this.page.locator('#menu-item-12593');
    }

    private get quilts() {
        return this.page.locator('#menu-item-7223');
    }

    private get curtains() {
        return this.page.locator('#menu-item-7354');
    }

    private get dohar() {
        return this.page.locator('#menu-item-7222');
    }

    private get throws() {
        return this.page.locator('#menu-item-736');
    }

    private get tableLinen() {
        return this.page.locator('#menu-item-8476');
    }

    private get diwanSet() {
        return this.page.locator('#menu-item-10631');
    }

    private get aboutUs() {
        return this.page.locator('#menu-item-737');
    }

    private get contactUs() {
        return this.page.locator('#menu-item-738');
    }

    async clickHome() {
        await this.home.click();
    }

    async clickBedSheet() {
        await this.bedSheet.click();
    }
    async clickBedCover() {
        await this.bedCover.click();
    }
    async clickBeddingSet() {
        await this.beddingSet.click();
    }
    async clickQuilts() {
        await this.quilts.click();
    }
    async clickCurtains() {
        await this.curtains.click();
    }
    async clickDohar() {
        await this.dohar.click();
    }
    async clickThrows() {
        await this.throws.click();
    }
    async clickTableLinen() {
        await this.tableLinen.click();
    }
    async clickDiwanSet() {
        await this.diwanSet.click();
    }
    async clickAboutUs() {
        await this.aboutUs.click();
    }
    async clickContactUs() {
        await this.contactUs.click();
    }

    async clickMyAccount() {
        await this.myAccount.click();           
    }

    async clickMyWishlist() {
        await this.wishlistIcon.waitFor({ state: 'visible' }); // Add this line
        await this.wishlistIcon.click();           
    }

    async getWishlistCount() {
        return await this.wishlistCount.innerText();
    }
}