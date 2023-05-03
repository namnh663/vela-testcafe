import { userVariables } from 'testcafe';
import loginPage from '../page_model/login-page';
import forgotPage from '../page_model/forgot-page';

const data = require('../data/translate_login.json');

fixture('Login Test')
    .page(userVariables.STAG_USER_URL);

test('1 - Verify that the default language is English', async t => {
    await t.expect(loginPage.formTitle.innerText).eql('Login');
    await t.expect(loginPage.subTitle.innerText).eql('Please login to your account');
    await t.expect(loginPage.firstLanguageOption.innerText).eql('English');
    await t.expect(loginPage.secondLanguageOption.innerText).eql('Vietnamese');
});

data.forEach(translate_login => {
    test(`${translate_login.id} - Verify that the user can change to '${translate_login.swith}'`, async t => {
        await loginPage.switchLanguage(translate_login.swith);
        await t.expect(loginPage.formTitle.innerText).eql(translate_login.title);
        await t.expect(loginPage.subTitle.innerText).eql(translate_login.sub);
        await t.expect(loginPage.firstLanguageOption.innerText).eql(translate_login.eng);
        await t.expect(loginPage.secondLanguageOption.innerText).eql(translate_login.vn);
    });
});

test('4 - Verify that the user has not entered the fields', async t => {
    await loginPage.clickLogin();
    await t.expect(loginPage.emailWarnMsg.innerText).eql('The Email is required.');
    await t.expect(loginPage.passwordWarnMsg.innerText).eql('The Password is required.');
    await loginPage.switchLanguage('Vietnamese');
    await loginPage.clickLogin();
    await t.expect(loginPage.emailWarnMsg.innerText).eql('Email là bắt buộc.');
    await t.expect(loginPage.passwordWarnMsg.innerText).eql('Mật khẩu là bắt buộc.');
});

test('5 - Verify that user can go to forgot password page', async t => {
    await loginPage.clickForgot();
    await t.expect(forgotPage.mainTitle.innerText).eql('Forgot password?');
    await t.expect(forgotPage.subTitle.innerText).eql('We’ll help you reset it and get back on track');
    await loginPage.switchLanguage('Vietnamese');
    await t.expect(forgotPage.mainTitle.innerText).eql('Quên mật khẩu?');
    await t.expect(forgotPage.subTitle.innerText).eql('Chúng tôi sẽ giúp bạn thiết lập lại mật khẩu');
});