import dashboard from '../page_model/dashboard';
import detailPage from '../page_model/detail-page';
import jp from 'jsonpath';
import { userVariables } from 'testcafe';
import { adminUser } from '../roles/roles'
import { upload } from '../helpers/helper';

fixture('Domestic Transportation Test')
    .page(userVariables.STAG_USER_URL)
    .beforeEach(async t => {
        await t.useRole(adminUser);
        t.ctx.total;
        t.ctx.supplier;
        t.ctx.capacityId;
        t.ctx.supplierId;
        t.ctx.modeOfTransportEnName;
        t.ctx.commodity;
        t.ctx.packageTypeUomList;
        t.ctx.equipments;
        t.ctx.onBehalfCreditLimit;
        t.ctx.onBehalfPaymentTerm;
        t.ctx.technologySystem;
        t.ctx.subcontractPercent;
        t.ctx.specialLicenses;
        t.ctx.hubBranchArray;
        t.ctx.uom;
        t.ctx.capcity;
        t.ctx.averageDimension;
        t.ctx.averageWeight;
        t.ctx.averageCBM;
        t.ctx.opportunityZones;
    });

test('1 - Verify that the user can successfully upload file', async t => {
    const response = await t.request(userVariables.STAG_USER_URL + '/costing-api/api/Supplier/GetListAsync');
    t.fixtureCtx.total = response.body.length;
    t.fixtureCtx.supplier = response.body[0].shortName;
    await dashboard.expandCosting();
    await dashboard.clickTransportation();
    await dashboard.clickSupplierNameWithParameter(t.fixtureCtx.supplier);
    await t.expect(dashboard.supplierSelected.innerText).eql(t.fixtureCtx.supplier);
    await dashboard.clickImport();
    await upload([
        '../template/costing/dt.xlsx'
    ]);
    await dashboard.closePopup();
});

test('2 - Verify that the data shown in the details page is correct with the imported file', async t => {
    const responseForList = await t.request(userVariables.STAG_USER_URL + '/costing-api/api/DTCapacity');
    t.fixtureCtx.capacityId = responseForList.body[0].id;

    const responseForDetail = await t.request(userVariables.STAG_USER_URL + `/costing-api/api/DTCapacity/GetDetailAsync?id=${t.fixtureCtx.capacityId}`);
    t.fixtureCtx.supplierId = responseForDetail.body.supplierId;
    t.fixtureCtx.modeOfTransportEnName = responseForDetail.body.modeOfTransportNameEN;
    t.fixtureCtx.commodity = responseForDetail.body.commodity;
    t.fixtureCtx.packageTypeUomList = jp.query(responseForDetail.body, '$.packageTypes..uoM');
    t.fixtureCtx.equipments = responseForDetail.body.specialEquipments;
    t.fixtureCtx.onBehalfCreditLimit = responseForDetail.body.onBehalfCreditLimit + ' ' + responseForDetail.body.onBehalfCreditLimitCurrencyUnit;
    t.fixtureCtx.onBehalfPaymentTerm = responseForDetail.body.onBehalfPaymentTerm + ' ' + responseForDetail.body.onBehalfPaymentTermTimeUnit;
    t.fixtureCtx.technologySystem = responseForDetail.body.technologySystem;
    t.fixtureCtx.subcontractPercent = responseForDetail.body.subcontractPercent * 100;
    t.fixtureCtx.specialLicenses = responseForDetail.body.specialLicenses;
    const hubBranchTotal = responseForDetail.body.hubBranches.length;
    //Get hub location
    t.fixtureCtx.hubBranchArray = new Array();
    for (var i = 0; i < hubBranchTotal; i++) {
        const hubBranchAddress = responseForDetail.body.hubBranches[i].address;
        const hubBranchDistrict = responseForDetail.body.hubBranches[i].districtNameVN;
        const hubBranchProvince = responseForDetail.body.hubBranches[i].provinceNameVN;
        const hubBranchList = hubBranchAddress + ', ' + hubBranchDistrict + ', ' + hubBranchProvince;
        t.fixtureCtx.hubBranchArray.push(hubBranchList);
    }
    t.fixtureCtx.uom = jp.query(responseForDetail.body, '$.hubBranches..capcities..uoM');
    t.fixtureCtx.capcity = jp.query(responseForDetail.body, '$.hubBranches..capcities..capcity');
    const weightList = jp.query(responseForDetail.body, '$.hubBranches..capcities..averageDimensionWeight');
    const lengthList = jp.query(responseForDetail.body, '$.hubBranches..capcities..averageDimensionLength');
    const heightList = jp.query(responseForDetail.body, '$.hubBranches..capcities..averageDimensionHight');
    const averageDimensionListTotal = weightList.length;
    //Get average dimension (W-L-H)
    t.fixtureCtx.averageDimension = new Array();
    for (var i = 0; i < averageDimensionListTotal; i++) {
        const weight = weightList[i];
        const length = lengthList[i];
        const height = heightList[i];
        const list = weight + ' - ' + length + ' - ' + height;
        t.fixtureCtx.averageDimension.push(list);
    }
    t.fixtureCtx.averageWeight = jp.query(responseForDetail.body, '$.hubBranches..capcities..averageWeight');
    t.fixtureCtx.averageCBM = jp.query(responseForDetail.body, '$.hubBranches..capcities..averageCBM');
    t.fixtureCtx.opportunityZones = jp.query(responseForDetail.body, '$.opportunityZones..nameVN');
    await dashboard.openWithParameter(`/costing/transportation/capacity/${t.fixtureCtx.capacityId}?supplierName=SOTRANS&tabIndex=0`);
    //Verify Mode of transport
    await t.expect(detailPage.modeOfTransportTxt.innerText).eql(t.fixtureCtx.modeOfTransportEnName);
    //Verify Commodity
    await t.expect(detailPage.commodityTxt.innerText).eql(t.fixtureCtx.commodity);
    //Verify Packing type handling
    await t.expect((await detailPage.packingTypeHandlingTxt.innerText).split(' ').join('')).eql([t.fixtureCtx.packageTypeUomList].toString().split(' ').join(''));
    //Verify Special equipment
    await t.expect((await detailPage.specialEquipmentTxt.innerText).split(' ').join('')).eql([t.fixtureCtx.equipments].toString().split(' ').join(''));
    //Verify On-behalf credit limit
    await t.expect((await detailPage.onBehalfCreditLimitTxt.innerText).split(',').join('')).eql(t.fixtureCtx.onBehalfCreditLimit);
    //Verify On-behalf payment term
    await t.expect((await detailPage.onBehalfPaymentTermTxt.innerText).split(',').join('')).eql(t.fixtureCtx.onBehalfPaymentTerm);
    /*  Verify Subcontract (%)
        The unary plus operator (+) will convert a string into a number
    */
    await t.expect(+(await detailPage.subContractTxt.innerText)).eql(t.fixtureCtx.subcontractPercent);
    //Verify Hub/Branch location
    await t.expect(await detailPage.gethubBranchLocationList()).eql(t.fixtureCtx.hubBranchArray);
});