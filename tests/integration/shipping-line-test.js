import dashboard from '../page_model/dashboard';
import { userVariables } from 'testcafe';
import { adminUser } from '../roles/roles'
import { upload } from '../helpers/helper';

fixture('Shipping Line Test')
    .page(userVariables.STAG_USER_URL)
    .beforeEach(async t => {
        await t.useRole(adminUser);
    });

test('1 - Verify that the user can successfully upload file', async t => {
    await dashboard.expandMasterData();
    await dashboard.expandNetwork();
    await dashboard.clickShippingLine();
    await dashboard.clickImport();
    await upload([
        '../template/master_data/shipping-line.xlsx'
    ]);
    await dashboard.closePopup();
});