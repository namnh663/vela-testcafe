import dashboard from '../page_model/dashboard';
import { userVariables } from 'testcafe';
import { adminUser } from '../roles/roles'

fixture('Check Item List Test')
    .page(userVariables.STAG_USER_URL)
    .beforeEach(async t => {
        await t.useRole(adminUser);
    });

test('1 - Verify that the total number of lines showing on the UI match', async t => {
    await dashboard.expandMasterData();
    await dashboard.expandIndustry();
    await dashboard.clickMarketSegment();
    const totalPerPageByTransport = await dashboard.marketSegmentTrList.count;
    const totalByTransport = 4;
    await t.expect(await dashboard.pagingText.innerText).eql('1 to ' + totalPerPageByTransport + ' of ' + totalByTransport + ' records');
    await dashboard.clickByLogisticsPartyTab();
    const totalPerPageByLogistics = await dashboard.marketSegmentTrList.count;
    const totalByLogistics = 5;
    await t.expect(await dashboard.pagingText.innerText).eql('1 to ' + totalPerPageByLogistics + ' of ' + totalByLogistics + ' records');
    await dashboard.clickByEndUserTab();
    const totalPerPageByEndUser = await dashboard.marketSegmentTrList.count;
    const totalByEndUser = 12;
    await t.expect(await dashboard.pagingText.innerText).eql('1 to ' + totalPerPageByEndUser + ' of ' + totalByEndUser + ' records');
});