import dashboard from '../page_model/dashboard';
import { userVariables } from 'testcafe';
import { adminUser } from '../roles/roles'
import { upload } from '../helpers/helper';

fixture('Custom Clearance Test')
    .page(userVariables.STAG_USER_URL)
    .beforeEach(async t => {
        await t.useRole(adminUser);
        t.ctx.total;
        t.ctx.supplier;
    });

test('1 - Verify that the user can successfully upload file', async t => {
    const response = await t.request(userVariables.STAG_USER_URL + '/costing-api/api/Supplier/GetListAsync');
    t.fixtureCtx.total = response.body.length;
    t.fixtureCtx.supplier = response.body[0].shortName;
    await dashboard.expandCosting();
    await dashboard.clickCustomClearance();
    await dashboard.clickSupplierNameWithParameter(t.fixtureCtx.supplier);
    await t.expect(dashboard.supplierSelected.innerText).eql(t.fixtureCtx.supplier);
    await dashboard.clickImport();
    await upload([
        '../template/costing/cc.xlsx'
    ]);
    await dashboard.closePopup();
});