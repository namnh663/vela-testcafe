import { userVariables } from 'testcafe';

fixture('Master Data')
    .beforeEach(async t => {
        t.ctx.airportId;
    });

test('Returns all airlines in the Airlines database', async t => {
    const response = await t.request(userVariables.STAG_USER_URL + '/master-data-api/api/Airline/GetListAsync');
    t.fixtureCtx.total = response.body.length;
    await t.expect(response.status).eql(200);
    await t.expect(response.body.length).eql(315);
});

test('Returns 10 airlines in the Airlines database', async t => {
    const response = await t.request.post({
        url: userVariables.STAG_USER_URL + '/master-data-api/api/Airline/GetPaging',
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            "skipCount": 0,
            "pageSize": 10,
            "direction": "ascend",
            "sortKey": "DateCreated"
        }
    });
    await t.expect(response.status).eql(200);
    await t.expect(response.body.items.length).eql(10);
    await t.expect(response.body.totalCount).eql(t.fixtureCtx.total);
});

test('Returns 10 airlines at page 2 in the Airlines database', async t => {
    const response = await t.request.post({
        url: userVariables.STAG_USER_URL + '/master-data-api/api/Airline/GetPaging',
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            "skipCount": 10,
            "pageSize": 10,
            "direction": "ascend",
            "sortKey": "DateCreated"
        }
    });
    await t.expect(response.status).eql(200);
    await t.expect(response.body.items.length).eql(10);
    await t.expect(response.body.totalCount).eql(t.fixtureCtx.total);
});

test('Returns the airport specified by the Airline Name', async t => {
    const response = await t.request.post({
        url: userVariables.STAG_USER_URL + '/master-data-api/api/Airline/GetPaging',
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            "skipCount": 0,
            "pageSize": 10,
            "direction": "ascend",
            "sortKey": "airlineName"
        }
    });
    await t.expect(response.status).eql(200);
    await t.expect(response.body.items.length).eql(10);
    await t.expect(response.body.totalCount).eql(t.fixtureCtx.total);
});