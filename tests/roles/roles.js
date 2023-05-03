import loginPage from '../page_model/login-page';
import { userVariables } from 'testcafe';
import { Role } from 'testcafe'

const adminUser = Role(userVariables.STAG_SSO_URL + '/Account/Login', async () => {
    await loginPage.login('namnh663@gmail.com', '111111');
});

export { adminUser };