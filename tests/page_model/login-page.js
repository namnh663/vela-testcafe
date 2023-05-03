import { t, Selector } from 'testcafe';

class LoginPage {

    constructor() {
        this.emailTxt = Selector('#Username');
        this.passwordTxt = Selector('#Password');
        this.formTitle = Selector('h3');
        this.subTitle = Selector('label').withAttribute('class', 'login-sub-label');
        this.loginBtn = Selector('[value="login"]');
        this.forgotTln = Selector('[value="forgot"]');
        this.emailWarnMsg = Selector('#Username-error');
        this.passwordWarnMsg = Selector('#Password-error');
        this.languageSelect = Selector('[type="button"]');
        this.languageOption = Selector('#languageSelect').find('a');
        this.firstLanguageOption = Selector('#languageSelect').find('a').nth(0);
        this.secondLanguageOption = Selector('#languageSelect').find('a').nth(1);
    }

    async openDashboard() {
        await t.navigateTo('');
    }

    async inputEmail(email) {
        await t.typeText(this.emailTxt, email);
    }

    async inputPassword(password) {
        await t.typeText(this.passwordTxt, password);
    }

    async clickLogin() {
        await t.click(this.loginBtn);
    }

    async login(email, password) {
        await t
            .typeText(this.emailTxt, email)
            .typeText(this.passwordTxt, password)
            .click(this.loginBtn);
    }

    async clickForgot() {
        await t.click(this.forgotTln);
    }

    async switchLanguage(language) {
        await t
            .click(this.languageSelect)
            .click(this.languageOption.withText(language));
    }

    async getCurrentUrl() {
        return await t.eval(() => document.documentURI);
    }

    //#region network
    async openPortInternationalPage() {
        await t.navigateTo('');
    }

    async openPortVietnamPage() {
        await t.navigateTo('');
    }

    async openCountryUnitInternationalPage() {
        await t.navigateTo('');
    }

    async openCountryVietnamPage() {
        await t.navigateTo('');
    }

    async openAirlinePage() {
        await t.navigateTo('');
    }

    async openShippingLinePage() {
        await t.navigateTo('');
    }

    async openCustomSubDepartmentPage() {
        await t.navigateTo('');
    }
    //#endregion

    //#region services
    async openProductPage() {
        await t.navigateTo('');
    }

    async openVolumePage() {
        await t.navigateTo('');
    }

    async openChargePage() {
        await t.navigateTo('');
    }

    async openCommodityPage() {
        await t.navigateTo('');
    }

    async openCapacityPage() {
        await t.navigateTo('');
    }

    async openUnitPage() {
        await t.navigateTo('');
    }

    async openIcotermsPage() {
        await t.navigateTo('');
    }
    
    async openCustomsProcedurePage() {
        await t.navigateTo('');
    }
    //#endregion

    //#region industry
    async openMarketSegmentPage() {
        await t.navigateTo('');
    }
    //#endregion

}

export default new LoginPage();