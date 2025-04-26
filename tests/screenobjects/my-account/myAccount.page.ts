import { Page } from "@playwright/test"

export class MyAccount{
    page: Page;

    constructor(page){
        this.page = page;
    }

    private get dashboard(){
        return this.page.getByRole('link', { name: 'Dashboard' })
    }

    isDashboardVisible(){
        return this.dashboard.isVisible()
    }
}