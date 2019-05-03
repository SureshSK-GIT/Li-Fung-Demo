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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwX0tleXdvcmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vX190ZXN0X18vaGVscGVyL2FwcF9LZXl3b3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxREFBcUQ7QUFDckQsOENBQThDO0FBQzlDLHNEQUFzRDtBQUN0RCxvREFBb0Q7QUFFcEQscUNBQXFDO0FBRXJDLCtDQUErQztBQUMvQyxpREFBaUQ7QUFDakQsb0lBQW9JO0FBQ3BJLHdDQUF3QztBQUN4QyxRQUFRO0FBRVIsNkNBQTZDO0FBQzdDLG1FQUFtRTtBQUNuRSxRQUFRO0FBRVIsNENBQTRDO0FBQzVDLDBFQUEwRTtBQUMxRSxRQUFRO0FBRVIseURBQXlEO0FBQ3pELG1FQUFtRTtBQUNuRSxpRUFBaUU7QUFDakUsOENBQThDO0FBQzlDLGdFQUFnRTtBQUNoRSxnRUFBZ0U7QUFDaEUsd0NBQXdDO0FBQ3hDLDREQUE0RDtBQUM1RCw4RkFBOEY7QUFDOUYsK0VBQStFO0FBQy9FLHlDQUF5QztBQUN6QywwQkFBMEI7QUFDMUIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixRQUFRO0FBRVIsaUZBQWlGO0FBQ2pGLG9GQUFvRjtBQUVwRixrRUFBa0U7QUFDbEUsZ0RBQWdEO0FBQ2hELG9GQUFvRjtBQUNwRixxQ0FBcUM7QUFDckMsOENBQThDO0FBQzlDLDJCQUEyQjtBQUMzQixnQkFBZ0I7QUFDaEIsc0NBQXNDO0FBQ3RDLCtEQUErRDtBQUMvRCw2RUFBNkU7QUFDN0UsOERBQThEO0FBQzlELHlFQUF5RTtBQUN6RSxrREFBa0Q7QUFDbEQsaURBQWlEO0FBQ2pELDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixRQUFRO0FBRVIsa0RBQWtEO0FBQ2xELCtEQUErRDtBQUMvRCxRQUFRO0FBRVIseURBQXlEO0FBRXpELGlJQUFpSTtBQUNqSSxzREFBc0Q7QUFDdEQsMENBQTBDO0FBQzFDLFlBQVk7QUFDWiwwQ0FBMEM7QUFDMUMs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