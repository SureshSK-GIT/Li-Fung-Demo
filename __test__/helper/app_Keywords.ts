import { element, browser, by } from "protractor";
import {CommonSelectors} from "./locators";
import { protractor } from "protractor/built/ptor";
import { By, promise } from "selenium-webdriver";

export class ApplicationKeywords {

    async waitForLoading (): Promise<void> {
       let EC = protractor.ExpectedConditions;
       return browser.driver.wait(EC.invisibilityOf(element(CommonSelectors.loadingIcon)),50000,'page loading should disappear');
       //return browser.sleep(15000);
    }

    async isLoading (): Promise<boolean> {
        return element(CommonSelectors.loadingIcon).isPresent();
    }

    
}