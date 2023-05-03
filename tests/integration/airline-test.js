import dashboard from '../page_model/dashboard';
import { userVariables } from 'testcafe';
import { adminUser } from '../roles/roles'
import { upload } from '../helpers/helper';

fixture('Master Data - Network')
    .page(userVariables.STAG_USER_URL)
    .beforeEach(async t => {
        await t.useRole(adminUser);
    });

test('1 - [Airline] Verify that the user sees the columns visible enough and that the column names are correct', async t => {
    await dashboard.expandMasterData();
    await dashboard.expandNetwork();
    await dashboard.clickAirline();
    await t.expect(dashboard.mdnAirlineNameCol.innerText).eql("AIRLINE NAME");
    await t.expect(dashboard.mdnIataCol.innerText).eql("IATA");
    await t.expect(dashboard.mdnIcaoCol.innerText).eql("ICAO");
    await t.expect(dashboard.mdnStatusCol.innerText).eql("STATUS");
});

test('2 - [Airline] Verify that the user can successfully upload file', async t => {
    await dashboard.expandMasterData();
    await dashboard.expandNetwork();
    await dashboard.clickAirline();
    await dashboard.clickImport();
    await upload([
        '../template/master_data/airline.xlsx'
    ]);
    await dashboard.closePopup();
});