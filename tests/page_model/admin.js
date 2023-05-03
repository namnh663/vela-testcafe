import { t, Selector } from 'testcafe';
import { faker } from '@faker-js/faker';
import { userVariables } from 'testcafe';
import XPathSelector from '../helpers/xpath-selector';

class Admin {

    constructor() {
        this.userNameTxt = Selector('#UserName');
        this.emailTxt = Selector('#Email');
        this.searchTxt = Selector('[name="search"]');
        this.searchUserBtn = XPathSelector('//input[@value="Search"]');
        this.saveUserBtn = Selector('[type="submit"]');
        this.confirmDeleteUserBtn = XPathSelector('//button[text()="Delete User"]');
        this.emailConfirmedBtn = Selector('div').withAttribute('class', 'slider round bg-primary');
    }

    async findDeleteUserBtn(email) {
        return `//table/tbody/tr/td[text()="${email}"]/following-sibling::td/a[@class="btn btn-danger"]`;
    }

    async openAddUserPage() {
        await t.navigateTo(userVariables.STAG_ADMIN_URL + '/Identity/UserProfile');
    }

    async openUserPage() {
        await t.navigateTo(userVariables.STAG_ADMIN_URL + '/Identity/Users');
    }

    async generateFirstName() {
        return faker.name.firstName();
    }

    async searchUser(email) {
        await t
            .typeText(this.searchTxt, email)
            .click(this.searchUserBtn);
    }

    async addNewUser(userName, email) {
        await t
            .typeText(this.userNameTxt, userName)
            .typeText(this.emailTxt, email)
            .click(this.emailConfirmedBtn)
            .click(this.saveUserBtn);
    }

    async deleteUser(email) {
        const xpath = (await this.findDeleteUserBtn(email)).toString();
        await t
            .click(XPathSelector(xpath))
            .click(this.confirmDeleteUserBtn);
    }

    async getCurrentUrl() {
        return await t.eval(() => document.documentURI);
    }

}

export default new Admin();