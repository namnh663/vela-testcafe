import loginPage from '../page_model/login-page';
import { Role } from 'testcafe'

const standardUser = Role('https://www.saucedemo.com/', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
});

const problemUser = Role('https://www.saucedemo.com/', async () => {
    await loginPage.login('problem_user', 'secret_sauce');
});

export { standardUser, problemUser };