import { t, Selector } from 'testcafe';

class NewPasswordPage {

    constructor() {
        this.newPasswordTxt = Selector('#Password');
        this.confirmPasswordTxt = Selector('#ConfirmPassword');
        this.title = Selector('h3').withAttribute('class', 'login-main-label');
        this.subTitle = Selector('label').withAttribute('class', 'login-sub-label');
        this.saveBtn = Selector('[name="button"]');
    }

    async setPassword(password) {
        await t
            .typeText(this.newPasswordTxt, password)
            .typeText(this.confirmPasswordTxt, password)
            .click(this.saveBtn);
    }

    async getCurrentUrl() {
        return await t.eval(() => document.documentURI);
    }

}

export default new NewPasswordPage();