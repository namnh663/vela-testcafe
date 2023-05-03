import XPathSelector from '../helpers/xpath-selector';

class DetailPage {

    constructor() {
        this.modeOfTransportTxt = XPathSelector('//div[@class="ant-card-body"]/div/div/div[text()="Mode of transport"]/following-sibling::div');
        this.commodityTxt = XPathSelector('//div[@class="ant-card-body"]/div/div/div[text()="Commodity"]/following-sibling::div/div');
        this.packingTypeHandlingTxt = XPathSelector('//div[@class="ant-card-body"]/div/div/div[text()="Packing type handling"]/following-sibling::div/div');
        this.specialEquipmentTxt = XPathSelector('//div[@class="ant-card-body"]/div/div/div[text()="Special equipment"]/following-sibling::div/div');
        this.onBehalfCreditLimitTxt = XPathSelector('//div[@class="ant-card-body"]/div/div/div[text()="On-behalf credit limit"]/following-sibling::div');
        this.onBehalfPaymentTermTxt = XPathSelector('//div[@class="ant-card-body"]/div/div/div[text()="On-behalf payment term"]/following-sibling::div');
        this.subContractTxt = XPathSelector('//div[@class="ant-card-body"]/div/div/div[text()="Subcontract (%)"]/following-sibling::div');
        this.hubBranchLocationList = XPathSelector('//div[@class="ant-card-body"]/div/div/div[text()="Hub/Branch location"]/following-sibling::div/span/following-sibling::div');
        this.hubBranchLocation = XPathSelector('//div[@class="ant-card-body"]/div[1]/div/div[text()="Hub/Branch location"]/following-sibling::div/span/following-sibling::div');
    }

    async gethubBranchLocationList() {
        const array = new Array();
        const count = await this.hubBranchLocationList.count;
        for (var i = 1; i < count + 1; i++) {
            array.push(await XPathSelector('//div[@class="ant-card-body"]/div['+i+']/div/div[text()="Hub/Branch location"]/following-sibling::div/span/following-sibling::div').innerText);
        }
        return array;
    }

}

export default new DetailPage();