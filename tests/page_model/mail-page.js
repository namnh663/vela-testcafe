import { t, Selector } from "testcafe";
import XPathSelector from '../helpers/xpath-selector';

class TempMailPage {

    constructor() {
        this.firstMail = XPathSelector('//div[@class="pb-4 border-b border-dashed lg:border-0"]/div[1]');
        this.clickHereLink = XPathSelector('//a[text()="clicking here"]');
    }

    async open() {
        await t.navigateTo('https://mailpoof.com/mailbox/namnh@explodemail.com');
    }

    async clickTextLink() {
        await t.click(this.clickHereLink);
    }

    async openUrl(url) {
        await t.navigateTo(url);
    }

    async viewFirstMail() {
        await t.click(this.firstMail);
    }

}

export default new TempMailPage();