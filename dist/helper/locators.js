"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var CommonSelectors;
(function (CommonSelectors) {
    CommonSelectors.headingTitle = protractor_1.by.css('gs1-cannabis > h4');
    CommonSelectors.formGroups = protractor_1.by.css('gs1-cannabis .form-group');
    CommonSelectors.inputTagName = 'input';
    CommonSelectors.labelTagName = 'label';
    CommonSelectors.selectTagName = 'select';
    CommonSelectors.optionTagName = 'option';
    CommonSelectors.errorMessageClassName = protractor_1.by.className('errorMsgText');
    CommonSelectors.cannabisTerpenesTable = protractor_1.by.css('.table.table-striped');
    CommonSelectors.addMoreItems = protractor_1.by.className('addRowControl');
    CommonSelectors.editProduct = protractor_1.by.tagName('gs1-productedit');
    CommonSelectors.overall = protractor_1.by.id('overall');
    CommonSelectors.activeTabCssSelector = protractor_1.by.css('.nav-link.active');
    CommonSelectors.loadingIcon = protractor_1.by.css('.loading');
    CommonSelectors.tabs = protractor_1.by.css('[role="tab"]');
    CommonSelectors.updateButton = protractor_1.by.cssContainingText('button', 'Update');
    CommonSelectors.errorMessagePopUp = protractor_1.by.className('alerts');
    CommonSelectors.errorMessageCloseButton = protractor_1.by.className('close');
    CommonSelectors.menuLinksCssSelector = protractor_1.by.css('li[routerlinkactive="ul-menu-li-active"]');
})(CommonSelectors = exports.CommonSelectors || (exports.CommonSelectors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9fX3Rlc3RfXy9oZWxwZXIvbG9jYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBZ0M7QUFFaEMsSUFBaUIsZUFBZSxDQW1CL0I7QUFuQkQsV0FBaUIsZUFBZTtJQUNmLDRCQUFZLEdBQUcsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzNDLDBCQUFVLEdBQUcsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ2hELDRCQUFZLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLDRCQUFZLEdBQUcsT0FBTyxDQUFDO0lBQ3ZCLDZCQUFhLEdBQUcsUUFBUSxDQUFDO0lBQ3pCLDZCQUFhLEdBQUcsUUFBUSxDQUFDO0lBQ3pCLHFDQUFxQixHQUFHLGVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckQscUNBQXFCLEdBQUcsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3ZELDRCQUFZLEdBQUcsZUFBRSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM3QywyQkFBVyxHQUFHLGVBQUUsQ0FBQyxPQUFPLENBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUM3Qyx1QkFBTyxHQUFHLGVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0Isb0NBQW9CLEdBQUcsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ2pELDJCQUFXLEdBQUcsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxvQkFBSSxHQUFHLGVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDOUIsNEJBQVksR0FBRyxlQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELGlDQUFpQixHQUFHLGVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsdUNBQXVCLEdBQUcsZUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxvQ0FBb0IsR0FBRyxlQUFFLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUE7QUFDMUYsQ0FBQyxFQW5CZ0IsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFtQi9CIn0=