import { userVariables } from 'testcafe';
import jp from 'jsonpath';

fixture('Costing')
    .beforeEach(async t => {
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
        t.ctx.costingId;
        t.ctx.vasId;
        t.ctx.blcId;
    });

test('Returns all supplier', async t => {
    const response = await t.request(userVariables.STAG_USER_URL + '/costing-api/api/Supplier/GetListAsync');
    await t.expect(response.status).eql(200);
    await t.expect(response.body.length).eql(12);
});

test('Returns all capacity - DT', async t => {
    const response = await t.request(userVariables.STAG_USER_URL + '/costing-api/api/DTCapacity');
    t.fixtureCtx.capacityId = response.body[0].id;
    await t.expect(response.status).eql(200);
    await t.expect(response.body.length).eql(8);
});

test('Returns all costing - DT', async t => {
    const response = await t.request(userVariables.STAG_USER_URL + '/costing-api/api/DTCosting');
    t.fixtureCtx.costingId = response.body[0].id;
    await t.expect(response.status).eql(200);
    await t.expect(response.body.length).eql(5);
});

test('Returns all VAS - DT', async t => {
    const response = await t.request(userVariables.STAG_USER_URL + '/costing-api/api/DTVAS');
    t.fixtureCtx.vasId = response.body[0].id;
    await t.expect(response.status).eql(200);
    await t.expect(response.body.length).eql(4);
});

test('Returns all BLC - DT', async t => {
    const response = await t.request(userVariables.STAG_USER_URL + '/costing-api/api/DTBLC');
    t.fixtureCtx.blcId = response.body[0].id;
    await t.expect(response.status).eql(200);
    await t.expect(response.body.length).eql(4);
});

test('Return details of specific capacity id - DT', async t => {
    const response = await t.request(userVariables.STAG_USER_URL + `/costing-api/api/DTCapacity/GetDetailAsync?id=${t.fixtureCtx.capacityId}`);
    t.fixtureCtx.supplierId = response.body.supplierId;
    t.fixtureCtx.modeOfTransportEnName = response.body.modeOfTransportNameEN;
    t.fixtureCtx.commodity = response.body.commodity;
    t.fixtureCtx.packageTypeUomList = jp.query(response.body, '$.packageTypes..uoM');
    t.fixtureCtx.equipments = response.body.specialEquipments;
    t.fixtureCtx.onBehalfCreditLimit = response.body.onBehalfCreditLimit + ' ' + response.body.onBehalfCreditLimitCurrencyUnit;
    t.fixtureCtx.onBehalfPaymentTerm = response.body.onBehalfPaymentTerm;
    t.fixtureCtx.technologySystem = response.body.technologySystem;
    t.fixtureCtx.subcontractPercent = response.body.subcontractPercent * 100;
    t.fixtureCtx.specialLicenses = response.body.specialLicenses;
    const hubBranchTotal = response.body.hubBranches.length;
    //Get hub location
    t.fixtureCtx.hubBranchArray = new Array();
    for (var i = 0; i < hubBranchTotal; i++) {
        const hubBranchAddress = response.body.hubBranches[i].address;
        const hubBranchDistrict = response.body.hubBranches[i].districtNameVN;
        const hubBranchProvince = response.body.hubBranches[i].provinceNameVN;
        const hubBranchList = hubBranchAddress + ', ' + hubBranchDistrict + ', ' + hubBranchProvince;
        t.fixtureCtx.hubBranchArray.push(hubBranchList);
    }
    t.fixtureCtx.uom = jp.query(response.body, '$.hubBranches..capcities..uoM');
    t.fixtureCtx.capcity = jp.query(response.body, '$.hubBranches..capcities..capcity');
    const weightList = jp.query(response.body, '$.hubBranches..capcities..averageDimensionWeight');
    const lengthList = jp.query(response.body, '$.hubBranches..capcities..averageDimensionLength');
    const heightList = jp.query(response.body, '$.hubBranches..capcities..averageDimensionHight');
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
    t.fixtureCtx.averageWeight = jp.query(response.body, '$.hubBranches..capcities..averageWeight');
    t.fixtureCtx.averageCBM = jp.query(response.body, '$.hubBranches..capcities..averageCBM');
    t.fixtureCtx.opportunityZones = jp.query(response.body, '$.opportunityZones..nameVN');
    await t.expect(response.status).eql(200);
});