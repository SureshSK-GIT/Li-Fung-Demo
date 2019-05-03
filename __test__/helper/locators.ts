import { by } from "protractor";

export namespace CommonSelectors{
    export const headingTitle = by.css('gs1-cannabis > h4');
    export const formGroups = by.css('gs1-cannabis .form-group');
    export const inputTagName = 'input';
    export const labelTagName = 'label';
    export const selectTagName = 'select';
    export const optionTagName = 'option';
    export const errorMessageClassName = by.className('errorMsgText');
    export const cannabisTerpenesTable = by.css('.table.table-striped');
    export const addMoreItems = by.className('addRowControl');
    export const editProduct = by.tagName ('gs1-productedit');
    export const overall = by.id('overall');
    export const activeTabCssSelector = by.css('.nav-link.active')
    export const loadingIcon = by.css('.loading');
    export const tabs = by.css('[role="tab"]');
    export const updateButton = by.cssContainingText('button','Update');    
    export const errorMessagePopUp = by.className('alerts');
    export const errorMessageCloseButton = by.className('close');
    export const menuLinksCssSelector = by.css('li[routerlinkactive="ul-menu-li-active"]')
}