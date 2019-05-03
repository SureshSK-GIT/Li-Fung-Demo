//import {ApplicationKeywords} from "../helper/app_keywords";
import {element, by, browser} from "protractor";

namespace projectListPage{

    export const headingTitle = by.css('h1.tooltitle');

    export namespace Search{

        export const gtinNumber = by.css('[placeholder="GTIN"]');
        export const searchButton = by.css('[jhitranslate="_$b.Search"]');
        export const searchResult = by.tagName ('gs1-searchresult');
    }
}

export class projectList{

    getPageTitle (): any {
         return browser.getTitle();
    }

    enterGTIN (gtin: string): any {
        element(projectListPage.Search.gtinNumber).sendKeys (gtin);
    }

    getGTINValue (): any {
        return element(projectListPage.Search.gtinNumber).getAttribute ('value');
    }
    clickOnSearch (): any {
        element(projectListPage.Search.searchButton).click ();
    }
    

}