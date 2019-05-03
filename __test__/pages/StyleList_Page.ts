import { browser, element, by } from "protractor";

namespace StyleListPage {

    export const projectDetailName = by.css("div[class='project-detail-name']");
    export const btnBulkUpload = element(by.css("div.add-style span img"));
    export const btnAddStyle = element(by.css("div.add-style span mat-icon"));
    export const ctrBulkStyleUpload = element(by.css(".mat-dialog-container.mat-dialog-container"));
    export const btnDownloadTemplate = element(by.css("ng-component button[class*='download']"));
    export const btnUploadTemplate = element(by.css("button[mattooltip='Upload File']"));

}

export class StyleList {
    getProjectTitle(): any {
        return element(StyleListPage.projectDetailName).getText();
    }

    selectBlkUpload():any{
        StyleListPage.btnBulkUpload.click();
        return StyleListPage.ctrBulkStyleUpload;
    }

    clickAddStyle():void{
        StyleListPage.btnAddStyle.click();
    }

    clickDownloadTemplate():void{
        StyleListPage.btnDownloadTemplate.click();
        browser.sleep(10000);
    }

    clickUploadTemplate(){
        StyleListPage.btnUploadTemplate.click();
    }



}