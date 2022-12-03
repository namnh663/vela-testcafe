import loginPage from '../page_model/login-page';

const data = require('../data/account.json');

const standardUser = 'standard_user';

fixture('Login Test')
    .page('https://www.saucedemo.com/');

data.forEach(account => {
    test(`${account.id} - Verify that the user is logged in as '${account.username}'`, async t => {
        await loginPage.login(account.username, account.password);
        await t.expect(loginPage.errorMsg.innerText).eql(account.message);
    });
});

test('3 - Verify that the user has not entered the fields', async t => {
    await loginPage.clickLogin();
    await t.expect(loginPage.errorMsg.innerText).eql('Epic sadface: Username is required');
});

test('4 - Verify that the user has not entered a password', async t => {
    await loginPage.inputUsername(standardUser);
    await loginPage.clickLogin();
    await t.expect(loginPage.errorMsg.innerText).eql('Epic sadface: Password is required');
});

test('5 - Verify that access to the homepage is denied without logging in', async t => {
    await loginPage.openHomePage();
    await t.expect(loginPage.errorMsg.innerText).eql("Epic sadface: You can only access '/inventory.html' when you are logged in.");
});

test('6 - Verify that access to the cartpage is denied without logging in', async t => {
    await loginPage.openCartPage();
    await t.expect(loginPage.errorMsg.innerText).eql("Epic sadface: You can only access '/cart.html' when you are logged in.");
});

test('7 - Verify that the user is successfully logged in', async t => {
    await loginPage.login('standard_user', 'secret_sauce');
    await t.expect(await loginPage.getCurrentUrl()).eql('https://www.saucedemo.com/inventory.html');
});