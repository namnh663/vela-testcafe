import { IncomingWebhook } from "ms-teams-webhook";
import { userVariables, t } from 'testcafe';
import XPathSelector from '../helpers/xpath-selector';
const fs = require('fs');

export async function sendMessageToBotIntegrationTestChannel(total, agent, startTime, endTime, passed) {
    const webhook = new IncomingWebhook(userVariables.TEAMS_INTEGRATION_WEBHOOK_URL);
    await webhook.send(
        {
            "@type": "MessageCard",
            "@context": "https://schema.org/extensions",
            themeColor: "0078D7",
            title: 'Automation Testing Report',
            text: 'Running ' + total + ' tests in: ' + agent,
            sections: [
                {
                    text: '**Start Time:** ' + startTime + '  \n **End Time:** ' + endTime + '  \n **Passed:** ' + passed + '/' + total,
                },
                {
                    text: 'View report: https://www.tesults.com/results/rsp/view/results/target/19c71619-f722-4a03-9dba-5e26a76f183b-1671617100829',
                },
            ],
        }
    );
};

export async function sendMessageToBotApiTestChannel(total, agent, startTime, endTime, passed) {
    const webhook = new IncomingWebhook(userVariables.TEAMS_API_WEBHOOK_URL);
    await webhook.send(
        {
            "@type": "MessageCard",
            "@context": "https://schema.org/extensions",
            themeColor: "0078D7",
            title: 'Automation Testing Report',
            text: 'Running ' + total + ' tests in: ' + agent,
            sections: [
                {
                    text: '**Start Time:** ' + startTime + '  \n **End Time:** ' + endTime + '  \n **Passed:** ' + passed + '/' + total,
                },
                {
                    text: 'View report: https://www.tesults.com/results/rsp/view/results/target/19c71619-f722-4a03-9dba-5e26a76f183b-1678251783853',
                },
            ],
        }
    );
};

export function readAndWriteJsonFile(path) {
    const rawData = fs.readFileSync(path);
    const jsonData = JSON.parse(rawData);
    const data = JSON.stringify(jsonData);
    fs.writeFileSync(path, data);
    const report = JSON.parse(data);
    return report;
};

export async function upload(filePath) {
    await t
        .setFilesToUpload(XPathSelector('//input[@placeholder="Choose file"]'), filePath)
        .click(XPathSelector('//button/span[text()=" Next step "]'));
}