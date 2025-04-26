import { Page } from "@playwright/test"

export class LoginPage{
    page: Page;

    constructor(page){
        this.page = page;
    }

    private get email(){
        return this.page.locator('#username');
    }

    private get password(){
        return this.page.locator('#password');
    }

    private get signInBtn(){
        return this.page.getByRole('button', { name: 'Log in' });
    }

    private get invalidCredentialsPrompt(){
        return this.page.locator('[role="alert"]');
    }

    async enterEmail(email: string){
        await this.email.fill(email);
    }

    async enterPassword(password: string){
        await this.password.fill(password);
    }   

    async clickSignInBtn(){
        await this.signInBtn.click();
    }

    async getInvalidCredentialsText(){
        return await this.invalidCredentialsPrompt.innerText();
    }
}