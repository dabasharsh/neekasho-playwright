import { HomePage } from '../screenobjects/home.page';
import { WishlistPage } from '../screenobjects/wishlist.page';
import { expect } from '@playwright/test';
import { QuickViewPage } from '../screenobjects/quickview.page';
import { AddToCartPage } from '../screenobjects/addToCart.page';

export async function validateWishlist(homePage: HomePage, wishlistPage: WishlistPage, title: string, deletedPrice: string, actualPrice: string) {
    expect(await homePage.getWishlistCount()).toBe('1');
    await homePage.clickMyWishlist();
    expect(await wishlistPage.fetchTitle(0)).toBe(title);
    expect(await wishlistPage.fetchDeletedPrice(0)).toBe(deletedPrice);
    expect(await wishlistPage.fetchActualPrice(0)).toBe(actualPrice);
}

export async function validateQuickView(quickViewPage: QuickViewPage, title: string, deletedPrice: string, actualPrice: string) {
    expect(await quickViewPage.fetchTitle()).toBe(title);
    expect(await quickViewPage.fetchDeletedPrice()).toBe(deletedPrice);
    expect(await quickViewPage.fetchActualPrice()).toBe(actualPrice);
}

export async function validateAddToCart(addToCartPage: AddToCartPage, title: string, actualPrice: string) {
    expect(await addToCartPage.fetchTitle()).toBe(title);
    expect(await addToCartPage.fetchPrice()).toBe(actualPrice);
    expect(await addToCartPage.fetchSubtotal()).toBe(actualPrice);
    expect(await addToCartPage.fetchQuantity()).toBe('1');
}
