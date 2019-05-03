"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const locators_1 = require("./locators");
const ptor_1 = require("protractor/built/ptor");
class ApplicationKeywords {
    waitForLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            let EC = ptor_1.protractor.ExpectedConditions;
            return protractor_1.browser.driver.wait(EC.invisibilityOf(protractor_1.element(locators_1.CommonSelectors.loadingIcon)), 50000, 'page loading should disappear');
            //return browser.sleep(15000);
        });
    }
    isLoading() {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.element(locators_1.CommonSelectors.loadingIcon).isPresent();
        });
    }
}
exports.ApplicationKeywords = ApplicationKeywords;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwX0tleXdvcmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vX190ZXN0X18vaGVscGVyL2FwcF9LZXl3b3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBQ2xELHlDQUEyQztBQUMzQyxnREFBbUQ7QUFHbkQsTUFBYSxtQkFBbUI7SUFFdEIsY0FBYzs7WUFDakIsSUFBSSxFQUFFLEdBQUcsaUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztZQUN2QyxPQUFPLG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLG9CQUFPLENBQUMsMEJBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzFILDhCQUE4QjtRQUNqQyxDQUFDO0tBQUE7SUFFSyxTQUFTOztZQUNYLE9BQU8sb0JBQU8sQ0FBQywwQkFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVELENBQUM7S0FBQTtDQUdKO0FBYkQsa0RBYUMifQ==