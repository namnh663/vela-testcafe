import dashboard from '../page_model/dashboard';
import { userVariables } from 'testcafe';
import { adminUser } from '../roles/roles'
import { upload } from '../helpers/helper';

fixture('Incoterms Test')
    .page(userVariables.STAG_USER_URL)
    .beforeEach(async t => {
        await t.useRole(adminUser);
    });

test('1 - Verify that the user sees the columns visible enough and that the column names are correct', async t => {
    await dashboard.expandMasterData();
    await dashboard.expandServices();
    await dashboard.clickIncoterms();
    await t.expect(dashboard.mdsIncotermCodeCol.innerText).eql("INCOTERMS CODE");
    await t.expect(dashboard.mdsIncotermEnNameCol.innerText).eql("INCOTERMS NAME (EN)");
    await t.expect(dashboard.mdsIncotermVnNameCol.innerText).eql("INCOTERMS NAME (VN)");
    await t.expect(dashboard.mdsAppliedModeOfServiceCol.innerText).eql("APPLIED MODE OF SERVICE");
    await t.expect(dashboard.mdsIncotermStatusCol.innerText).eql("STATUS");
    await dashboard.clickIncoterms2020();
    await t.expect(dashboard.mdsIncotermCodeCol.innerText).eql("INCOTERMS CODE");
    await t.expect(dashboard.mdsIncotermEnNameCol.innerText).eql("INCOTERMS NAME (EN)");
    await t.expect(dashboard.mdsIncotermVnNameCol.innerText).eql("INCOTERMS NAME (VN)");
    await t.expect(dashboard.mdsAppliedModeOfServiceCol.innerText).eql("APPLIED MODE OF SERVICE");
    await t.expect(dashboard.mdsIncotermStatusCol.innerText).eql("STATUS");
});

test('2 - Verify that the user can successfully upload file', async t => {
    await dashboard.expandMasterData();
    await dashboard.expandServices();
    await dashboard.clickIncoterms();
    await dashboard.clickImport();
    await upload([
        '../template/master_data/incoterms.xlsx'
    ]);
    await dashboard.closePopup();
});