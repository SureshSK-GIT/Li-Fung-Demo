import { element, by, browser } from "protractor";
import { StyleList } from "./StyleList_Page";

// namespace projectListPage {

//     export const headingTitle = by.css('h1.tooltitle');

//     export namespace Search {

//         export const gtinNumber = by.css('[placeholder="GTIN"]');
//         export const searchButton = by.css('[jhitranslate="_$b.Search"]');
//         export const searchResult = by.tagName('gs1-searchresult');
//     }
// }

export class ProjectList {

    selectProject(status: string, project: string): any {
        let proj;
        proj = element(by.css("adf-document-list[id*='" + status + "'] div[filename='" + project + "'] mat-card-title[class='title-mat mat-card-title']"));
        browser.executeScript("arguments[0].click();", proj);
        return new StyleList();
    }

}