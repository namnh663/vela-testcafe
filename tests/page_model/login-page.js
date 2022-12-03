import { t, Selector } from 'testcafe';

class LoginPage {
    constructor() {
        this.usernameTxt = Selector('#user-name');
        this.passwordTxt = Selector('#password');
        this.loginBtn = Selector('#login-button');
        this.errorMsg = Selector('[data-test="error"]');
    }

    async openHomePage() {
        await t.navigateTo('https://www.saucedemo.com/inventory.html');
    }

    async openCartPage() {
        await t.navigateTo('https://www.saucedemo.com/cart.html');
    }

    async inputUsername(username) {
        await t.typeText(this.usernameTxt, username);
    }

    async inputPassword(password) {
        await t.typeText(this.passwordTxt, password);
    }

    async clickLogin() {
        await t.click(this.loginBtn);
    }

    async login(username, password) {
        await t
            .typeText(this.usernameTxt, username)
            .typeText(this.passwordTxt, password)
            .click(this.loginBtn);
    }

    async getCurrentUrl() {
        return await t.eval(() => document.documentURI);
    }
}

export default new LoginPage();