"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var StyleListPage;
(function (StyleListPage) {
    StyleListPage.projectDetailName = protractor_1.by.css("div[class='project-detail-name']");
    StyleListPage.btnBulkUpload = protractor_1.element(protractor_1.by.css("div.add-style span img"));
    StyleListPage.btnAddStyle = protractor_1.element(protractor_1.by.css("div.add-style span mat-icon"));
    StyleListPage.ctrBulkStyleUpload = protractor_1.element(protractor_1.by.css(".mat-dialog-container.mat-dialog-container"));
    StyleListPage.btnDownloadTemplate = protractor_1.element(protractor_1.by.css("ng-component button[class*='download']"));
    StyleListPage.btnUploadTemplate = protractor_1.element(protractor_1.by.css("button[mattooltip='Upload File']"));
})(StyleListPage || (StyleListPage = {}));
class StyleList {
    getProjectTitle() {
        return protractor_1.element(StyleListPage.projectDetailName).getText();
    }
    selectBlkUpload() {
        StyleListPage.btnBulkUpload.click();
        return StyleListPage.ctrBulkStyleUpload;
    }
    clickAddStyle() {
        StyleListPage.btnAddStyle.click();
    }
    clickDownloadTemplate() {
        StyleListPage.btnDownloadTemplate.click();
        protractor_1.browser.sleep(10000);
    }
    clickUploadTemplate() {
        StyleListPage.btnUploadTemplate.click();
    }
}
exports.StyleList = StyleList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3R5bGVMaXN0X1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9fX3Rlc3RfXy9wYWdlcy9TdHlsZUxpc3RfUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrRDtBQUVsRCxJQUFVLGFBQWEsQ0FTdEI7QUFURCxXQUFVLGFBQWE7SUFFTiwrQkFBaUIsR0FBRyxlQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDL0QsMkJBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQzFELHlCQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztJQUM3RCxnQ0FBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLGlDQUFtQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7SUFDaEYsK0JBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztBQUV6RixDQUFDLEVBVFMsYUFBYSxLQUFiLGFBQWEsUUFTdEI7QUFFRCxNQUFhLFNBQVM7SUFDbEIsZUFBZTtRQUNYLE9BQU8sb0JBQU8sQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsZUFBZTtRQUNYLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEMsT0FBTyxhQUFhLENBQUMsa0JBQWtCLENBQUM7SUFDNUMsQ0FBQztJQUVELGFBQWE7UUFDVCxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxxQkFBcUI7UUFDakIsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFDLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxtQkFBbUI7UUFDZixhQUFhLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUMsQ0FBQztDQUlKO0FBekJELDhCQXlCQyJ9