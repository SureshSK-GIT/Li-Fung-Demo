"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {ApplicationKeywords} from "../helper/app_keywords";
const protractor_1 = require("protractor");
var projectListPage;
(function (projectListPage) {
    projectListPage.headingTitle = protractor_1.by.css('h1.tooltitle');
    let Search;
    (function (Search) {
        Search.gtinNumber = protractor_1.by.css('[placeholder="GTIN"]');
        Search.searchButton = protractor_1.by.css('[jhitranslate="_$b.Search"]');
        Search.searchResult = protractor_1.by.tagName('gs1-searchresult');
    })(Search = projectListPage.Search || (projectListPage.Search = {}));
})(projectListPage || (projectListPage = {}));
class projectList {
    getPageTitle() {
        return protractor_1.browser.getTitle();
    }
    enterGTIN(gtin) {
        protractor_1.element(projectListPage.Search.gtinNumber).sendKeys(gtin);
    }
    getGTINValue() {
        return protractor_1.element(projectListPage.Search.gtinNumber).getAttribute('value');
    }
    clickOnSearch() {
        protractor_1.element(projectListPage.Search.searchButton).click();
    }
}
exports.projectList = projectList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdExpc3RfcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL19fdGVzdF9fL3BhZ2VzL3Byb2plY3RMaXN0X3BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2REFBNkQ7QUFDN0QsMkNBQWdEO0FBRWhELElBQVUsZUFBZSxDQVV4QjtBQVZELFdBQVUsZUFBZTtJQUVSLDRCQUFZLEdBQUcsZUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVuRCxJQUFpQixNQUFNLENBS3RCO0lBTEQsV0FBaUIsTUFBTTtRQUVOLGlCQUFVLEdBQUcsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzVDLG1CQUFZLEdBQUcsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3JELG1CQUFZLEdBQUcsZUFBRSxDQUFDLE9BQU8sQ0FBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsRUFMZ0IsTUFBTSxHQUFOLHNCQUFNLEtBQU4sc0JBQU0sUUFLdEI7QUFDTCxDQUFDLEVBVlMsZUFBZSxLQUFmLGVBQWUsUUFVeEI7QUFFRCxNQUFhLFdBQVc7SUFFcEIsWUFBWTtRQUNQLE9BQU8sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsU0FBUyxDQUFFLElBQVk7UUFDbkIsb0JBQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsWUFBWTtRQUNSLE9BQU8sb0JBQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBRSxPQUFPLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBQ0QsYUFBYTtRQUNULG9CQUFPLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUcsQ0FBQztJQUMxRCxDQUFDO0NBR0o7QUFsQkQsa0NBa0JDIn0=