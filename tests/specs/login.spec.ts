import { LoginPage } from '../screenobjects/login.page';
import { test, expect } from '@playwright/test';
import { HomePage } from '../screenobjects/home.page';
import { MyAccount } from '../screenobjects/my-account/myAccount.page';
import dotenv from 'dotenv';
dotenv.config();


test.describe('Login Tests', () => {
    let loginPage: LoginPage;
    let homePage: HomePage;
    let myAccount: MyAccount

    test.beforeEach(async ({ page }) => {
        await page.goto('https://nekasho.com/');
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        myAccount = new MyAccount(page);
        await homePage.clickMyAccount();
    });

    test('Login with valid credentials - Email', async ({ page }) => {
        await loginPage.enterEmail(process.env.EMAIL as string);
        await loginPage.enterPassword(process.env.PASSWORD as string);
        await loginPage.clickSignInBtn();
        expect(myAccount.isDashboardVisible).toBeTruthy();
    })

    test('Login with valid credentials - Username', async ({ page }) => {
        await loginPage.enterEmail(process.env.USERNAME as string);
        await loginPage.enterPassword(process.env.PASSWORD as string);
        await loginPage.clickSignInBtn();
        expect(myAccount.isDashboardVisible).toBeTruthy();
    })

    test.skip('Validate error message for invalid credentials', async ({ page }) => {
        const ERROR_MESSAGE = 'ERROR: The username or password you entered is incorrect. Lost your password?';
        await loginPage.enterEmail('nekasho007@gmail.com');
        await loginPage.enterPassword('1234567');
        await loginPage.clickSignInBtn();
        expect(await loginPage.getInvalidCredentialsText()).toBe(ERROR_MESSAGE);
    })

})