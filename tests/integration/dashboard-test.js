import dashboard from '../page_model/dashboard';
import { userVariables } from 'testcafe';
import { adminUser } from '../roles/roles'

fixture('Dashboard Test')
    .page(userVariables.STAG_USER_URL)
    .beforeEach(async t => {
        await t.useRole(adminUser);
    });

test('1 - Verify that the names of the menus are correct', async t => {
    await t.expect(await dashboard.dashboardMenu.innerText).eql('Dashboard');
    await t.expect(await dashboard.masterDataMenu.innerText).eql('Master Data');
    await t.expect(await dashboard.partnerMenu.innerText).eql('Partner');
    await dashboard.expandMasterData();
    await t.expect(await dashboard.mdNetworkSubMenu.innerText).eql('Network');
    await t.expect(await dashboard.mdServicesSubMenu.innerText).eql('Services');
    await t.expect(await dashboard.mdIndustrySubMenu.innerText).eql('Industry');
    await dashboard.expandNetwork();
    await t.expect(await dashboard.mdnPortInternationalSubMenu.innerText).eql('Port International');
    await t.expect(await dashboard.mdnPortVietnamSubMenu.innerText).eql('Port Vietnam');
    await t.expect(await dashboard.mdnCountryUnitInternationalSubMenu.innerText).eql('Country Unit International');
    await t.expect(await dashboard.mdnCountryUnitVietnamSubMenu.innerText).eql('Country Unit Vietnam');
    await dashboard.expandServices();
    await t.expect(await dashboard.mdsProductSubMenu.innerText).eql('Product');
});