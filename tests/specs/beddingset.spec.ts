import { test } from '../utils/stealthTest';
import { HomePage } from '../screenobjects/home.page';
import { ProductPage } from '../screenobjects/product.page';
import { WishlistPage } from '../screenobjects/wishlist.page';
import { QuickViewPage } from '../screenobjects/quickview.page';
import { AddToCartPage } from '../screenobjects/addToCart.page';
import { validateWishlist, validateQuickView, validateAddToCart } from '../utils/workflows.helper';

test.describe('Validate Bedding Sets', () => {
    let homePage: HomePage;
    let productPage: ProductPage;
    let wishlistPage: WishlistPage;
    let quickViewPage: QuickViewPage;
    let addToCartPage: AddToCartPage;
    let title: string;
    const INDEX = 0;
    let actualPrice: string;
    let deletedPrice: string;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://nekasho.com/', {timeout: 60000});
        homePage = new HomePage(page);
        productPage = new ProductPage(page);
        wishlistPage = new WishlistPage(page);
        quickViewPage = new QuickViewPage(page);
        addToCartPage = new AddToCartPage(page);
        await homePage.clickBeddingSet();
        await page.waitForLoadState('networkidle');
        title = await productPage.fetchTitle(INDEX);
        actualPrice = await productPage.fetchActualPrice(INDEX);
        deletedPrice = await productPage.fetchDeletedPrice(INDEX);
        console.log(`Actual Price: ${actualPrice}, Deleted Price: ${deletedPrice}`);
        await productPage.hoverOnProduct(INDEX);
        await page.waitForTimeout(1000);
    })

    test('Wishlist Bedding Set', async ({  }) => {
        await productPage.addProductToWishlist(INDEX);
        await validateWishlist(homePage, wishlistPage, title, deletedPrice, actualPrice);
    })

    test('Quick View Bedding Set', async ({  }) => {
        await productPage.productQuickView(INDEX);
        await validateQuickView(quickViewPage, title, deletedPrice, actualPrice)
    })

    test('Add to Cart Bedding Set', async ({  }) => {
        await productPage.addProductToCart(INDEX);
        await validateAddToCart(addToCartPage, title, actualPrice);       
    })
})