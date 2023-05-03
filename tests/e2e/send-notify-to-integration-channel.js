import { sendMessageToBotIntegrationTestChannel, readAndWriteJsonFile } from '../helpers/helper'

fixture('Automation Testing Report')
    .before(async () => {
        const data = readAndWriteJsonFile('report.json');
        sendMessageToBotIntegrationTestChannel(data.total, data.userAgents, data.startTime, data.endTime, data.passed);
    });

test('Execution', async () => {
    
});