import dashboard from '../page_model/dashboard';
import { userVariables } from 'testcafe';
import { adminUser } from '../roles/roles'
import { upload } from '../helpers/helper';

fixture('Master Data - Network')
    .page(userVariables.STAG_USER_URL)
    .beforeEach(async t => {
        await t.useRole(adminUser);
    });

test('3 - [Country Unit VN] Verify that the user can successfully upload file', async t => {
    await dashboard.expandMasterData();
    await dashboard.expandNetwork();
    await dashboard.clickCountryUnitVietnam();
    await dashboard.clickImport();
    await upload([
        '../template/master_data/country-unit-vn.xlsx'
    ]);
    await t.wait(70000);
    await dashboard.closePopup();
});