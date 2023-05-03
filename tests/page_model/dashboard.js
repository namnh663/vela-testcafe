import { t } from 'testcafe';
import { userVariables } from 'testcafe';
import XPathSelector from '../helpers/xpath-selector';

class Dashboard {
    constructor() {
        this.dashboardMenu = XPathSelector('//ul/li/span/span[text()="Dashboard"]');
        //#region Master Data
        this.masterDataMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]');

        //#region Master Data > Network
        this.mdNetworkSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Network "]');
        this.mdnStatusCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" STATUS "]');
        this.mdnPortInternationalSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Network "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Port International"]');
        this.mdnPortVietnamSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Network "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Port Vietnam"]');
        this.mdnCountryUnitInternationalSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Network "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Country Unit International"]');
        this.mdnCountryUnitVietnamSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Network "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Country Unit Vietnam"]');
        //Port Vietnam
        this.mdnPortVnSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Network "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Port Vietnam"]');
        this.mdnAirportCodeCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Airport Code "]');
        this.mdnAirportEnNameCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Airport Name (EN) "]');
        this.mdnAirportVnNameCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Airport Name (VN) "]');
        this.mdnProvinceEnCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Province (EN) "]');
        this.mdnPortVnStatusCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Status "]');
        //Airline
        this.mdnAirlineSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Network "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Airline"]');
        this.mdnAirlineNameCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Airline Name "]');
        this.mdnIataCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" IATA "]');
        this.mdnIcaoCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" ICAO "]');
        //Shipping Line
        this.mdnShippingLineSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Network "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Shipping Line"]');
        this.mdnShippingLineAbbCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Shipping Line Name (Abbreviated) "]');
        this.mdnShippingLineNameCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Shipping Line Name "]');
        //Customs Sub Department
        this.mdnCustomSubDepSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Network "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Customs Sub Department"]');
        this.mdnSubDepEnNameCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Sub Department Name (EN) "]');
        this.mdnSubDepVnNameCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Sub Department Name (VN) "]');
        this.mdnProvinceEnNameCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Province Name (EN) "]');
        //#endregion

        //#region Master Data > Services
        this.mdServicesSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Services "]');
        //Product
        this.mdsProductSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Services "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Product"]');
        this.mdsVolumeSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Services "]/parent::span/parent::div/following-sibling::div/ul/li/following::span/span[text()="Volume"]');
        this.mdsChargeSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Services "]/parent::span/parent::div/following-sibling::div/ul/li/following::span/span[text()="Charge"]');
        this.mdsCommoditySubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Services "]/parent::span/parent::div/following-sibling::div/ul/li/following::span/span[text()="Commodity"]');
        this.mdsCapacitySubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Services "]/parent::span/parent::div/following-sibling::div/ul/li/following::span/span[text()="Capacity"]');
        this.mdsUnitSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Services "]/parent::span/parent::div/following-sibling::div/ul/li/following::span/span[text()="Unit"]');
        //Incoterms
        this.mdsIncotermSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Services "]/parent::span/parent::div/following-sibling::div/ul/li/following::span/span[text()="Incoterms"]');
        this.mdsIncoterm2010Tab = XPathSelector('//nz-tabs-nav[@role="tablist"]/div/div/div/div/span[text()="Incoterms 2010"]');
        this.mdsIncoterm2020Tab = XPathSelector('//nz-tabs-nav[@role="tablist"]/div/div/div/div/span[text()="Incoterms 2020"]');
        this.mdsIncotermCodeCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Incoterms Code "]');
        this.mdsIncotermEnNameCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Incoterms Name (EN) "]');
        this.mdsIncotermVnNameCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Incoterms Name (VN) "]');
        this.mdsAppliedModeOfServiceCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Applied Mode of Service "]');
        this.mdsIncotermStatusCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Status "]');
        //Customs Procedure
        this.mdsCustomsProcedureSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Services "]/parent::span/parent::div/following-sibling::div/ul/li/following::span/span[text()="Customs Procedure"]');
        this.mdsProcedureCodeCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Procedure Code "]');
        this.mdsProcedureEnNameCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Procedure Name (EN) "]');
        this.mdsProcedureVnNameCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Procedure Name (VN) "]');
        this.mdsProcedureTypeCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" Import_Export "]');
        this.mdsProcedureStatusCol = XPathSelector('//tr/th/nz-table-sorters/span[text()=" STATUS "]');
        //#endregion

        //#region Master Data > Industry
        this.mdIndustrySubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Industry "]');
        this.mdiMarketSegmentSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Master Data "]/parent::span/parent::div/following-sibling::div/ul/li/div/span/span[text()=" Industry "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Market Segment"]');
        //#endregion

        //#endregion Master Data

        //#region Partner
        this.partnerMenu = XPathSelector('//ul/li/div/span/span[text()=" Partner "]');
        this.pCustomerSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Partner "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Customer"]');
        this.pSupplierSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Partner "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Supplier"]');
        //#endregion Partner

        this.costingMenu = XPathSelector('//ul/li/div/span/span[text()=" Costing "]');
        this.cTransportationSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Costing "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Transportation"]');
        this.cCustomClearanceSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Costing "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Custom Clearance"]');
        this.cWarehouseSubMenu = XPathSelector('//ul/li/div/span/span[text()=" Costing "]/parent::span/parent::div/following-sibling::div/ul/li/span/span[text()="Warehouse"]');

        this.logoutBtn = XPathSelector('//button/span[text()=" Logout "]');
        this.importBtn = XPathSelector('//button/span[text()=" Import "]');
        this.browserFileBtn = XPathSelector('//input[@placeholder="Choose file"]');
        this.nextStepBtn = XPathSelector('//button/span[text()=" Next step "]');
        this.closeBtn = XPathSelector('//button/span[text()=" Close "]');
        this.popupErrTitle = XPathSelector('//div[@role="document"]/div/div/div/div[text()="File error"]');
        this.content = XPathSelector('//mat-toolbar/div[@class="box"]/div/span[@class="ng-star-inserted"]')
        this.msByTransportationTab = XPathSelector('//div[@class="ant-tabs-nav-wrap"]//descendant::span[text()="By Transportation"]');
        this.msByLogisticsPartyTab = XPathSelector('//div[@class="ant-tabs-nav-wrap"]//descendant::span[text()="By Logistics Party"]');
        this.msByEndUserTab = XPathSelector('//div[@class="ant-tabs-nav-wrap"]//descendant::span[text()="By End User"]');
        this.marketSegmentTrList = XPathSelector('//tbody/tr[@class="ant-table-row ng-star-inserted"]');
        this.pagingText = XPathSelector('//nz-pagination/ul/li');

        this.sotransTitle = XPathSelector('//div[@class="ant-card-body"]/div/div/div[text()="SOTRANS"]');
        this.supplierSelected = XPathSelector('//nz-select-item[text()="SOTRANS"]');
    }

    async clickSupplierNameWithParameter(supplierName) {
        await t.click(XPathSelector('//div[@class="ant-card-body"]/div/div/div[text()="' + supplierName + '"]'));
    }

    async clickSupplierNumberWithParameter(supplierNumber) {
        await t.click(XPathSelector('//div/div[' + supplierNumber + ']/nz-list-item/nz-card/div'));
    }

    async open() {
        await t.navigateTo(userVariables.STAG_USER_URL);
    }

    async openWithParameter(suffixUrl) {
        await t.navigateTo(userVariables.STAG_USER_URL + suffixUrl);
    }

    async openCustomsProcedurePage() {
        await t.navigateTo(userVariables.STAG_USER_URL + '/master-data/services/customs-procedure');
    }

    async openAirlinePage() {
        await t.navigateTo(userVariables.STAG_USER_URL + '/master-data/network/airline');
    }

    async openPortVnPage() {
        await t.navigateTo(userVariables.STAG_USER_URL + '/master-data/network/port-vietnam');
    }

    async openFmCostingPage() {
        await t.navigateTo(userVariables.STAG_USER_URL + '/costing/freight-management');
    }

    async clickByLogisticsPartyTab() {
        await t.click(this.msByLogisticsPartyTab);
    }

    async clickByEndUserTab() {
        await t.click(this.msByEndUserTab);
    }

    async clickCustomsProcedure() {
        await t.click(this.mdsCustomsProcedureSubMenu);
    }

    async clickProduct() {
        await t.click(this.mdsProductSubMenu);
    }

    async clickAirline() {
        await t.click(this.mdnAirlineSubMenu);
    }

    async clickCountryUnitVietnam() {
        await t.click(this.mdnCountryUnitVietnamSubMenu);
    }

    async clickPortVietnam() {
        await t.click(this.mdnPortVietnamSubMenu);
    }

    async clickShippingLine() {
        await t.click(this.mdnShippingLineSubMenu);
    }

    async clickIncoterms() {
        await t.click(this.mdsIncotermSubMenu);
    }

    async clickSotransSupplier() {
        await t.click(this.sotransTitle);
    }

    async clickIncoterms2020() {
        await t.click(this.mdsIncoterm2020Tab);
    }

    async clickUnit() {
        await t.click(this.mdsUnitSubMenu);
    }

    async clickCapacity() {
        await t.click(this.mdsCapacitySubMenu);
    }

    async clickCustomSubDep() {
        await t.click(this.mdnCustomSubDepSubMenu);
    }

    async clickVolume() {
        await t.click(this.mdsVolumeSubMenu);
    }

    async clickCharge() {
        await t.click(this.mdsChargeSubMenu);
    }

    async clickMarketSegment() {
        await t.click(this.mdiMarketSegmentSubMenu);
    }

    async clickTransportation() {
        await t.click(this.cTransportationSubMenu);
    }

    async clickCustomClearance() {
        await t.click(this.cCustomClearanceSubMenu);
    }

    async clickWarehouse() {
        await t.click(this.cWarehouseSubMenu);
    }

    async clickImport() {
        await t.click(this.importBtn);
    }

    async closePopup() {
        await t.click(this.closeBtn);
    }

    async clickSupplier() {
        await t.click(this.pSupplierSubMenu);
    }

    async expandPartner() {
        await t.click(this.partnerMenu);
    }

    async expandMasterData() {
        await t.click(this.masterDataMenu);
    }

    async expandNetwork() {
        await t.click(this.mdNetworkSubMenu);
    }

    async expandServices() {
        await t.click(this.mdServicesSubMenu);
    }

    async expandIndustry() {
        await t.click(this.mdIndustrySubMenu);
    }

    async expandCosting() {
        await t.click(this.costingMenu);
    }

    async logout() {
        await t.click(this.logoutBtn);
    }

}

export default new Dashboard();