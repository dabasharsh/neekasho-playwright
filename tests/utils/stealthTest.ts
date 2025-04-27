import { test as base } from '@playwright/test';
import stealthChromium from '../../stealth.browser'; // path to your stealth setup
import { Browser, Page } from 'playwright-core';

type MyFixtures = {
  browser: Browser;
  page: Page;
};

const test = base.extend<MyFixtures>({
  browser: async ({}, use) => {
    const browser = await stealthChromium.launch({ headless: true, slowMo: 500 }); // set to true for CI
    await use(browser);
    await browser.close();
  },

  page: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await use(page);
    await context.close();
  }
});

export { test };
