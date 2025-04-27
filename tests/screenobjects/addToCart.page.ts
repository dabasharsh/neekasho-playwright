import { Page } from "@playwright/test";


export class AddToCartPage {
    page: Page
    constructor(page) {
        this.page = page;
    }

    private get title() {
        return this.page.locator('.cart-info span').nth(0);
    }

    private get actualPrice() {
        return this.page.locator('.cart-info bdi');
    }

    private get quantity() {
        return this.page.locator('.cart-info > .quantity');
    }

    private get subtotalPrice() {
        return this.page.locator('.woocommerce-mini-cart__total bdi');
    }

    private get viewCartBtn() {
        return this.page.getByRole('button', { name: 'View cart' });
    }

    private get checkoutBtn() {
        return this.page.getByRole('button', { name: 'Checkout' });
    }

    async fetchTitle() {
        return await this.title.innerText();
    }

    async fetchQuantity() {
        return (await this.quantity.innerText()).split('×')[0].trim();
    }

    async fetchPrice() {
        return await this.actualPrice.innerText()
    }

    async fetchSubtotal() {
        return await this.subtotalPrice.innerText();
    }

    async clickViewCart() {
        await this.viewCartBtn.click();
    }

    async clickCheckout() {
        await this.checkoutBtn.click();
    }

}
