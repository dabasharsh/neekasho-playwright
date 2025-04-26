import { expect, test } from '@playwright/test';
import { HomePage } from '../screenobjects/home.page';

test.describe('Nekasho Navigation Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://nekasho.com/');
        homePage = new HomePage(page);
    });

    test('Home', async ({ page }) => {
        await homePage.clickHome();
        await expect(await page.url()).toBe('https://nekasho.com/');
    })

    test('Bedsheet', async ({ page }) => {
        await homePage.clickBedSheet();
        await expect(await page.url()).toBe('https://nekasho.com/product-category/bed-sheets/');
    })

    test('Bedcover', async ({ page }) => {
        await homePage.clickBedCover();
        await expect(await page.url()).toBe('https://nekasho.com/product-category/bedcovers/');
    })

    test('Bedding Set', async ({ page }) => {
        await homePage.clickBeddingSet();
        await expect(await page.url()).toBe('https://nekasho.com/product-category/bedding-set/');
    })

    test('Quilts', async ({ page }) => {
        await homePage.clickQuilts();
        await expect(await page.url()).toBe('https://nekasho.com/product-category/quilts/');
    })

    test('Curtains', async ({ page }) => {
        await homePage.clickCurtains();
        await expect(await page.url()).toBe('https://nekasho.com/product-category/curtains/');
    })

    test('Dohar', async ({ page }) => {
        await homePage.clickDohar();
        await expect(await page.url()).toBe('https://nekasho.com/product-category/dohars/');
    })

    test('Throws', async ({ page }) => {
        await homePage.clickThrows();
        await expect(await page.url()).toBe('https://nekasho.com/product-category/sofa-throws-handwoven/');
    })

    test('Table Linen', async ({ page }) => {
        await homePage.clickTableLinen();
        await expect(await page.url()).toBe('https://nekasho.com/product-category/table-linen/');
    })

    test('Diwan Set', async ({ page }) => {
        await homePage.clickDiwanSet();
        await expect(await page.url()).toBe('https://nekasho.com/product-category/diwan-set/');
    })

    test('About Us', async ({ page }) => {
        await homePage.clickAboutUs();
        expect(await page.url()).toBe('https://nekasho.com/about-us/');
    })

    test('Contact Us', async ({ page }) => {
        await homePage.clickContactUs();
        expect(await page.url()).toBe('https://nekasho.com/contact-us/');
    })
})