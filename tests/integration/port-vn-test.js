import dashboard from '../page_model/dashboard';
import { userVariables } from 'testcafe';
import { adminUser } from '../roles/roles'
import { upload } from '../helpers/helper';

fixture('Master Data - Network')
    .page(userVariables.STAG_USER_URL)
    .beforeEach(async t => {
        await t.useRole(adminUser);
    });

test('4 - [Port VN] Verify that the user sees the columns visible enough and that the column names are correct', async t => {
    await dashboard.openPortVnPage();
    await t.expect(dashboard.mdnAirportCodeCol.innerText).eql("AIRPORT CODE");
    await t.expect(dashboard.mdnAirportEnNameCol.innerText).eql("AIRPORT NAME (EN)");
    await t.expect(dashboard.mdnAirportVnNameCol.innerText).eql("AIRPORT NAME (VN)");
    await t.expect(dashboard.mdnProvinceEnCol.innerText).eql("PROVINCE (EN)");
    await t.expect(dashboard.mdnPortVnStatusCol.innerText).eql("STATUS");
});

test('5 - [Port VN] Verify that the user can successfully upload file', async t => {
    await dashboard.expandMasterData();
    await dashboard.expandNetwork();
    await dashboard.clickPortVietnam();
    await dashboard.clickImport();
    await upload([
        '../template/master_data/port-vn.xlsx'
    ]);
    await dashboard.closePopup();
});