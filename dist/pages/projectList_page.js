"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const StyleList_Page_1 = require("./StyleList_Page");
// namespace projectListPage {
//     export const headingTitle = by.css('h1.tooltitle');
//     export namespace Search {
//         export const gtinNumber = by.css('[placeholder="GTIN"]');
//         export const searchButton = by.css('[jhitranslate="_$b.Search"]');
//         export const searchResult = by.tagName('gs1-searchresult');
//     }
// }
class ProjectList {
    selectProject(status, project) {
        let proj;
        proj = protractor_1.element(protractor_1.by.css("adf-document-list[id*='" + status + "'] div[filename='" + project + "'] mat-card-title[class='title-mat mat-card-title']"));
        protractor_1.browser.executeScript("arguments[0].click();", proj);
        return new StyleList_Page_1.StyleList();
    }
}
exports.ProjectList = ProjectList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdExpc3RfUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL19fdGVzdF9fL3BhZ2VzL1Byb2plY3RMaXN0X1BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBa0Q7QUFDbEQscURBQTZDO0FBRTdDLDhCQUE4QjtBQUU5QiwwREFBMEQ7QUFFMUQsZ0NBQWdDO0FBRWhDLG9FQUFvRTtBQUNwRSw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBQ3RFLFFBQVE7QUFDUixJQUFJO0FBRUosTUFBYSxXQUFXO0lBRXBCLGFBQWEsQ0FBQyxNQUFjLEVBQUUsT0FBZTtRQUN6QyxJQUFJLElBQUksQ0FBQztRQUNULElBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQUcsTUFBTSxHQUFHLG1CQUFtQixHQUFHLE9BQU8sR0FBRyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7UUFDbkosb0JBQU8sQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckQsT0FBTyxJQUFJLDBCQUFTLEVBQUUsQ0FBQztJQUMzQixDQUFDO0NBRUo7QUFURCxrQ0FTQyJ9