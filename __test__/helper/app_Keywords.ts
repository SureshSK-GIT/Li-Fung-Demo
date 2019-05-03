// import { element, browser, by } from "protractor";
// import {CommonSelectors} from "./locators";
// import { protractor } from "protractor/built/ptor";
// import { By, promise } from "selenium-webdriver";

// export class ApplicationKeywords {

//     async waitForLoading (): Promise<void> {
//        let EC = protractor.ExpectedConditions;
//        return browser.driver.wait(EC.invisibilityOf(element(CommonSelectors.loadingIcon)),50000,'page loading should disappear');
//        //return browser.sleep(15000);
//     }

//     async isLoading (): Promise<boolean> {
//         return element(CommonSelectors.loadingIcon).isPresent();
//     }

//     async getActiveTab (): Promise<any> {
//         return element(CommonSelectors.activeTabCssSelector).getText();
//     }

//     async navigateToTab (tab: string): Promise<void> {
//         const tabList = await element.all(CommonSelectors.tabs);
//         for (let index = 0; index < tabList.length; index++) {
//             const element = tabList[index];
//             const tabName: string = await element.getText ();
//             const webElement = await element.getWebElement();
//             if (tabName.match (tab)){
//                 const EC = protractor.ExpectedConditions;
//                 //await browser.executeScript("arguments[0].scrollIntoView(true)",element);
//                 //await browser.wait(EC.elementToBeClickable(element),5000);
//                 await element.click();
//                 return;
//             }
//         }
//     }

//     async navigateToMenu (mainMenu: string, subMenu?: string): Promise<void> {
//         const menuList = await element.all(CommonSelectors.menuLinksCssSelector);
        
//         for (let index = 0; index < menuList.length; index++) {
//             const menuItem = menuList[index];
//             const menuName: string = await menuItem.$('img').getAttribute('alt');
//             console.log(menuName);
//             if (!menuName.match(mainMenu)){
//                continue;
//             }
//             await menuItem.click();
//             const subMenuItemList = await menuItem.$$('li');
//             for (let index = 0; index < subMenuItemList.length; index++) {
//                 const subMenuItem = subMenuItemList[index];
//                 const subMenuName = await subMenuItem.getText();      
//                 if(subMenuName.match(subMenu)){
//                     await subMenuItem.click();
//                     return;
//                 }          
//             }
//         }
//     }

//     async selectUpdateButton (): Promise<void>{
//         await element(CommonSelectors.updateButton).click();
//     }

//     async closeErrorMessagePopUp (): Promise<boolean>{
        
//         const closeButton = await element(CommonSelectors.errorMessagePopUp).element(CommonSelectors.errorMessageCloseButton);
//         if( await closeButton.isPresent() == true){
//             await closeButton.click(); 
//         }
//         return closeButton.isPresent();
//     }
    
//     /**
//      * 
//      * @param fieldLabel 
//      * @param optionToSelect 
//      * @param isSibling 
//      */
//     async selectFromDropDownItemGeneric (selector: By, fieldLabel: string, optionToSelect: string, isSibling?: boolean): Promise<boolean> {
//         const formGroupList = await element.all(selector);
//         for (let index = 0; index < formGroupList.length; index++) {
//             let formGroup = formGroupList[index];
//             const labelText: string = await formGroup.$(CommonSelectors.labelTagName).getText();
//             if ( !labelText.trim().startsWith(fieldLabel)){
//                 continue;
//             }
//             console.log ("Dropdown: "+labelText);
//             if(isSibling){
//                 formGroup = formGroupList[index + 1];
//             }
//             const optionList = await formGroup.$(CommonSelectors.selectTagName).$$(CommonSelectors.optionTagName)
//             if(optionToSelect === null){
//                 const optionTag = await formGroup.$(CommonSelectors.selectTagName).$$(CommonSelectors.optionTagName).get(0);
//                 await optionTag.click();
//                 return await optionTag.getAttribute('selected');
//             }
//             for (let optionIndex = 0; optionIndex < optionList.length; optionIndex++) {
//                 const option = optionList[optionIndex];
//                 const optionText: string = await option.getText();
//                 if (optionText.match(optionToSelect)){
//                     console.log(optionText);
//                     const optionTag = await formGroup.$(CommonSelectors.selectTagName).$$(CommonSelectors.optionTagName).get(optionIndex);
//                     await optionTag.click();
//                     return await optionTag.getAttribute('selected');
//                 }                    
//             }
//         }
//     }

//     async selectFromDropDownItem (fieldLabel: string, optionToSelect: string, isSibling?: boolean): Promise<boolean> {
//         const formGroupList = await element.all(CommonSelectors.formGroups);
//         for (let index = 0; index < formGroupList.length; index++) {
//             let formGroup = formGroupList[index];
//             const labelText: string = await formGroup.$(CommonSelectors.labelTagName).getText();
//             if ( !labelText.startsWith(fieldLabel)){
//                 continue;
//             }
//             console.log ("Dropdown: "+labelText);
//             if(isSibling){
//                 formGroup = formGroupList[index + 1];
//             }
//             const optionList = await formGroup.$(CommonSelectors.selectTagName).$$(CommonSelectors.optionTagName)
//             if(optionToSelect === null){
//                 const optionTag = await formGroup.$(CommonSelectors.selectTagName).$$(CommonSelectors.optionTagName).get(0);
//                 await optionTag.click();
//                 return await optionTag.getAttribute('selected');
//             }
//             for (let optionIndex = 0; optionIndex < optionList.length; optionIndex++) {
//                 const option = optionList[optionIndex];
//                 const optionText: string = await option.getText();
//                 if (optionText.match(optionToSelect)){
//                     console.log(optionText);
//                     const optionTag = await formGroup.$(CommonSelectors.selectTagName).$$(CommonSelectors.optionTagName).get(optionIndex);
//                     await optionTag.click();
//                     return await optionTag.getAttribute('selected');
//                 }                    
//             }
//         }
//     }

    

//     /**
//      * 
//      * @param fieldLabel 
//      * @param value 
//      * @param isSibling 
//      */
//     async enterTextIntoFieldGeneric (selector: By, fieldLabel: string, value: string, isSibling?: boolean): Promise<string> {
//         if(value == null){
//             return null;
//         }
// 		const formGroupList = await element.all(selector);
//         for (let index = 0; index < formGroupList.length; index++) {
//             let formGroup = formGroupList[index];
//             const labelText: string = await formGroup.$(CommonSelectors.labelTagName).getText();
//             if (labelText.trim().startsWith(fieldLabel)){
//                 console.log ("TextField: "+labelText);
//                 if(isSibling){
//                     formGroup = formGroupList[index + 1];
//                 }
//                 const input = await formGroup.$(CommonSelectors.inputTagName);
//                 await input.clear();
//                 await input.sendKeys(value);
//                 return input.getAttribute('value');
//             }
//         }
//     }

//         /**
//      * 
//      * @param fieldLabel 
//      * @param value 
//      * @param isSibling 
//      */
//     async enterTextIntoTextAreaField (selector: By, fieldLabel: string, value: string, isSibling?: boolean): Promise<string> {
//         if(value == null){
//             return null;
//         }
// 		const formGroupList = await element.all(selector);
//         for (let index = 0; index < formGroupList.length; index++) {
//             let formGroup = formGroupList[index];
//             const labelText: string = await formGroup.$(CommonSelectors.labelTagName).getText();
//             if (labelText.startsWith(fieldLabel)){
//                 console.log ("TextField: "+labelText);
//                 if(isSibling){
//                     formGroup = formGroupList[index + 1];
//                 }
//                 const input = await formGroup.$(CommonSelectors.textAreaTagName);
//                 await input.clear();
//                 await input.sendKeys(value);
//                 return input.getAttribute('value');
//             }
//         }
//     }




//     /**
//      * 
//      * @param fieldLabel 
//      * @param value 
//      * @param isSibling 
//      */
//     async enterTextIntoField (fieldLabel: string, value: string, isSibling?: boolean): Promise<string> {
//         if(value == null){
//             return null;
//         }
//         const formGroupList = await element.all(CommonSelectors.formGroups);
//         for (let index = 0; index < formGroupList.length; index++) {
//             let formGroup = formGroupList[index];
//             const labelText: string = await formGroup.$(CommonSelectors.labelTagName).getText();
//             if (labelText.startsWith(fieldLabel)){
//                 console.log ("TextField: "+labelText);
//                 if(isSibling){
//                     formGroup = formGroupList[index + 1];
//                 }
//                 const input = await formGroup.$(CommonSelectors.inputTagName);
//                 await input.clear();
//                 await input.sendKeys(value);
//                 return input.getText();
//             }
//         }
//     }

//     /**
//      * 
//      * @param fieldLabel 
//      * @param isSibling 
//      */
//     async getErrorMessage (fieldLabel: string, isSibling?: boolean): Promise<string> {
//         const formGroupList = await element.all(CommonSelectors.formGroups);
//         for (let index = 0; index < formGroupList.length; index++) {
//             let formGroup = formGroupList[index];
//             const labelText: string = await formGroup.$(CommonSelectors.labelTagName).getText();
//             if (labelText.startsWith(fieldLabel)){
//                 console.log ("Error Message: "+labelText);
//                 if(isSibling){
//                     formGroup = formGroupList[index + 1];
//                 }
//                 const isPresent = await formGroup.element(CommonSelectors.errorMessageClassName).isPresent();
//                 console.log(isPresent);
//                 if(isPresent === true){
//                     const errorMessage = await formGroup.element(CommonSelectors.errorMessageClassName);
//                     return errorMessage.getText();
//                 }else{
//                     return null;
//                 }
                                
//             }
//         }
//     }

//     async closeModalWindowDialog(): Promise<any>{
//         const button = await element(by.tagName(CommonSelectors.modalWindowTagName)).$(CommonSelectors.buttonTagName);
//         return button.click();
//     }

// }