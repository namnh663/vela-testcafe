import homePage from '../page_model/home-page';
import { standardUser } from '../roles/roles'

fixture('Home Test')
    .page('https://www.saucedemo.com/')
    .beforeEach(async t => {
        await t.useRole(standardUser);
    });

test('1 - Verify that the user is using the default filter', async t => {
    await homePage.open();
    await t.expect(await homePage.activeOption.innerText).eql('NAME (A TO Z)');
    await t.expect(await homePage.getProductListByNameOnUI()).eql(await homePage.getSortedArrayListByAsc());
});

test('2 - Verify that user is filtering products name from z to a', async t => {
    await homePage.open();
    await homePage.filterBy('Name (Z to A)');
    await t.expect(await homePage.activeOption.innerText).eql('NAME (Z TO A)');
    await t.expect(await homePage.getProductListByNameOnUI()).eql(await homePage.getSortedArrayListByDesc());
});

test('3 - Verify that user is filtering products price from low to high', async t => {
    await homePage.open();
    await homePage.filterBy('Price (low to high)');
    await t.expect(await homePage.activeOption.innerText).eql('PRICE (LOW TO HIGH)');
    await t.expect(await homePage.getProductListByPriceOnUI()).eql(await homePage.getSortedNumberListByAsc());
});

test('4 - Verify that user is filtering products price from high to low', async t => {
    await homePage.open();
    await homePage.filterBy('Price (high to low)');
    await t.expect(await homePage.activeOption.innerText).eql('PRICE (HIGH TO LOW)');
    await t.expect(await homePage.getProductListByPriceOnUI()).eql(await homePage.getSortedNumberListByDesc());
});

test('5 - Verify that the user has added all product to the cart', async t => {
    await homePage.open();
    await homePage.addAll();
    await t.expect(await homePage.totalInCart.innerText).eql('6');
});

test('6 - Verify that the user can remove the product from the cart', async t => {
    await homePage.open();
    await homePage.addFirstItem();
    await t.expect(await homePage.totalInCart.innerText).eql('1');
    await homePage.addLastItem();
    await t.expect(await homePage.totalInCart.innerText).eql('2');
    await homePage.removeFirstItem();
    await t.expect(await homePage.totalInCart.innerText).eql('1');
});