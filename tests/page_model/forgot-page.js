import { t, Selector } from 'testcafe';
import { userVariables } from 'testcafe';

class ForgotPage {

    constructor() {
        this.emailTxt = Selector('#Email');
        this.resetPasswordBtn = Selector('[value="login"]');
        this.backToLoginTln = Selector('label').withAttribute('class', 'forgot-form-button-backtologin');
        this.mainTitle = Selector('label').withAttribute('class', 'forgot-pass-tab-main-label');
        this.subTitle = Selector('label').withAttribute('class', 'forgot-pass-tab-sub-label');
        this.successMsg = Selector('label').withAttribute('class', 'forgot-con-label-email');
    }

    async open() {
        await t.navigateTo(userVariables.STAG_SSO_URL + 'Account/ForgotPassword');
    }

    async resetPassword(email) {
        await t
            .typeText(this.emailTxt, email)
            .click(this.resetPasswordBtn);
    }

    async backToLogin() {
        await t.click(this.backToLoginTln);
    }

    async clickResetPassword() {
        await t.click(this.resetPasswordBtn);
    }

    async getCurrentUrl() {
        return await t.eval(() => document.documentURI);
    }

}

export default new ForgotPage();