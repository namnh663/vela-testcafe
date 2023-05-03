import dashboard from '../page_model/dashboard';
import { userVariables } from 'testcafe';
import { adminUser } from '../roles/roles'
import { upload } from '../helpers/helper';

fixture('Customs Procedure Test')
    .page(userVariables.STAG_USER_URL)
    .beforeEach(async t => {
        await t.useRole(adminUser);
    });

test('1 - Verify that the user sees the columns visible enough and that the column names are correct', async t => {
    await dashboard.expandMasterData();
    await dashboard.expandServices();
    await dashboard.clickCustomsProcedure();
    await t.expect(dashboard.mdsProcedureCodeCol.innerText).eql("PROCEDURE CODE");
    await t.expect(dashboard.mdsProcedureEnNameCol.innerText).eql("PROCEDURE NAME (EN)");
    await t.expect(dashboard.mdsProcedureVnNameCol.innerText).eql("PROCEDURE NAME (VN)");
    await t.expect(dashboard.mdsProcedureTypeCol.innerText).eql("IMPORT_EXPORT");
    await t.expect(dashboard.mdsProcedureStatusCol.innerText).eql("STATUS");
});

test('2 - Verify that the user can successfully upload file', async t => {
    await dashboard.expandMasterData();
    await dashboard.expandServices();
    await dashboard.clickCustomsProcedure();
    await dashboard.clickImport();
    await upload([
        '../template/master_data/customs-procedure.xlsx'
    ]);
    await dashboard.closePopup();
});