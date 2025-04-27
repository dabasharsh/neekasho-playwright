import { expect } from '@playwright/test';
import { test } from '../utils/stealthTest';

import { HomePage } from '../screenobjects/home.page';
import { ProductPage } from '../screenobjects/product.page';
import { WishlistPage } from '../screenobjects/wishlist.page';
import { QuickViewPage } from '../screenobjects/quickview.page';
import { AddToCartPage } from '../screenobjects/addToCart.page';
import { CurtainPage } from '../screenobjects/curtain.page';

test.describe('Validate Curtains', () => {
    let homePage: HomePage;
    let productPage: ProductPage;
    let wishlistPage: WishlistPage;
    let quickViewPage: QuickViewPage;
    let addToCartPage: AddToCartPage;
    let curtainPage: CurtainPage;
    let title: string;
    const INDEX = 3;
    let priceRange: string;
    let seven_ft_curtainPrice: string;
    let nine_ft_CurtainPrice: string;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://nekasho.com/', {timeout: 60000});
        homePage = new HomePage(page);
        productPage = new ProductPage(page);
        wishlistPage = new WishlistPage(page);
        quickViewPage = new QuickViewPage(page);
        addToCartPage = new AddToCartPage(page);
        curtainPage = new CurtainPage(page);
        await homePage.clickCurtains();
        await page.waitForLoadState('networkidle');
        title = await productPage.fetchTitle(INDEX);
        console.log(`Title: ${title}`);
        priceRange = await productPage.fetchPriceRange(INDEX);
        seven_ft_curtainPrice = await curtainPage.Seven_ft_CurtainActualPrice(INDEX);
        nine_ft_CurtainPrice = await curtainPage.Nine_ft_CurtainActualPrice(INDEX);
        console.log(`Price Range: ${priceRange}`);
        await productPage.hoverOnProduct(INDEX);
        await page.waitForTimeout(1000);
    })

    test('Wishlist Curtains', async ({ }) => {
        await productPage.addProductToWishlist(INDEX);
        expect(await homePage.getWishlistCount()).toBe('1');
        await homePage.clickMyWishlist();
        expect(await wishlistPage.fetchTitle(0)).toBe(title);
        expect(await wishlistPage.fetchPriceRange(0)).toBe(priceRange);
    })

    test('Quick View Curtains', async ({ }) => {
        await productPage.productQuickView(INDEX);
        expect(await quickViewPage.fetchTitle()).toBe(title);
        expect(await quickViewPage.fetchPriceRange()).toBe(priceRange);
    })

    test('Add to Cart - 7ft Curtain', async ({ }) => {
        await productPage.addProductToCart(INDEX);
        await curtainPage.select7Ftcurtain();
        await curtainPage.clickAddToCart();
        expect(await addToCartPage.fetchTitle()).toBe(`${title} - 7ft`);
        expect(await addToCartPage.fetchPrice()).toBe(seven_ft_curtainPrice);
        expect(await addToCartPage.fetchSubtotal()).toBe(seven_ft_curtainPrice);
        expect(await addToCartPage.fetchQuantity()).toBe('1');
    })

    test('Add to Cart - 9ft Curtain', async ({ }) => {
        await productPage.addProductToCart(INDEX);
        await curtainPage.select9Ftcurtain();
        await curtainPage.clickAddToCart();
        expect(await addToCartPage.fetchTitle()).toBe(`${title} - 9ft`);
        expect(await addToCartPage.fetchPrice()).toBe(nine_ft_CurtainPrice);
        expect(await addToCartPage.fetchSubtotal()).toBe(nine_ft_CurtainPrice);
        expect(await addToCartPage.fetchQuantity()).toBe('1');
    })
})