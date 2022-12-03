import { t, Selector, ClientFunction } from 'testcafe';

class HomePage {
    constructor() {
        this.menu = Selector('#react-burger-menu-btn');
        this.allItemsMenu = Selector('#inventory_sidebar_link');
        this.logoutMenu = Selector('#logout_sidebar_link');
        this.resetAppMenu = Selector('#reset_sidebar_link');
        this.productSelect = Selector('.product_sort_container');
        this.productOption = Selector('.product_sort_container').find('option');
        this.activeOption = Selector('.active_option');
        this.productNameList = Selector('.inventory_item_name');
        this.productPriceList = Selector('.inventory_item_price');
        this.priceBar = Selector('.pricebar');
        this.addButton = Selector('button').withAttribute('class', 'btn btn_primary btn_small btn_inventory');
        this.addSLOtoCartBtn = Selector('#add-to-cart-sauce-labs-onesie');
        this.totalInCart = Selector('.shopping_cart_badge');
    }

    async open() {
        await t.navigateTo('https://www.saucedemo.com/inventory.html');
    }

    async filterBy(option) {
        await t
            .click(this.productSelect)
            .click(this.productOption.withText(option));
    }

    async addFirstItem() {
        await t.click(this.priceBar.child('button').nth(0));
    }

    async removeFirstItem() {
        await t.click(this.priceBar.child('button').nth(0));
    }

    async addLastItem() {
        const count = await this.addButton.count;
        var lastItem = count - 1;
        await t.click(this.priceBar.child('button').nth(lastItem));
    }

    async addAll() {
        const count = await this.addButton.count;
        var i = 0;
        while (i < count) {
            await t.click(this.priceBar.child('button').nth(i));
            i++;
        }
    }

    async getCurrentUrl() {
        return await t.eval(() => document.documentURI);
    }

    async getProductListByNameOnUI() {
        const array = new Array();
        const count = await this.productNameList.count;
        for (var i = 0; i < count; i++) {
            const item = await this.productNameList.nth(i).innerText;
            array.push(item);
        }
        return array;
    }

    async getProductListByPriceOnUI() {
        const array = new Array();
        const count = await this.productNameList.count;
        for (var i = 0; i < count; i++) {
            const item = parseFloat((await this.productPriceList.nth(i).innerText).replace('$', ''));
            array.push(item);
        }
        return array;
    }

    async getSortedArrayListByAsc() {
        const array = new Array();
        const count = await this.productNameList.count;
        for (var i = 0; i < count; i++) {
            const item = await this.productNameList.nth(i).innerText;
            array.push(item);
        }

        const sortedList = new Array();
        for (var i = 0; i < array.length; i++) {
            const item = array[i];
            sortedList.push(item);
        }
        sortedList.sort();
        return sortedList;
    }

    async getSortedArrayListByDesc() {
        const array = new Array();
        const count = await this.productNameList.count;
        for (var i = 0; i < count; i++) {
            const item = await this.productNameList.nth(i).innerText;
            array.push(item);
        }

        const sortedList = new Array();
        for (var i = 0; i < array.length; i++) {
            const item = array[i];
            sortedList.push(item);
        }
        sortedList.sort();
        sortedList.reverse();
        return sortedList;
    }

    async getSortedNumberListByAsc() {
        const array = new Array();
        const count = await this.productNameList.count;
        for (var i = 0; i < count; i++) {
            const item = parseFloat((await this.productPriceList.nth(i).innerText).replace('$', ''));
            array.push(item);
        }

        const sortedList = new Array();
        for (var i = 0; i < array.length; i++) {
            const item = array[i];
            sortedList.push(item);
        }
        sortedList.sort(function (a, b) { return a - b });
        return sortedList;
    }

    async getSortedNumberListByDesc() {
        const array = new Array();
        const count = await this.productNameList.count;
        for (var i = 0; i < count; i++) {
            const item = parseFloat((await this.productPriceList.nth(i).innerText).replace('$', ''));
            array.push(item);
        }

        const sortedList = new Array();
        for (var i = 0; i < array.length; i++) {
            const item = array[i];
            sortedList.push(item);
        }
        sortedList.sort(function (a, b) { return b - a });
        return sortedList;
    }
}

export default new HomePage();