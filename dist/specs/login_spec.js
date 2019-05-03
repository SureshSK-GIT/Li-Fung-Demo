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
const login_page_1 = require("../pages/login_page");
const DataSet_1 = require("../data/DataSet");
describe('Login application as Test Lead', () => __awaiter(this, void 0, void 0, function* () {
    it('should able to login', () => __awaiter(this, void 0, void 0, function* () {
        const login = new login_page_1.Login();
        login.enterUsername(DataSet_1.TestData.userTL);
        login.enterPassword(DataSet_1.TestData.passTL);
        const projectListPage = login.clickOnLoginButton();
        // var title = browser.getTitle();
        //   title.then(function (webpagetitle) {
        //       console.log("webpagetitle-->"+webpagetitle);
        //   })
        // await console.log(projectListPage);
        // projectListPage.getPageTitle().then((title)=>{
        //   console.log(title+" equals Collaborate Project List -GROUP_ROL_C8_TEAM-LEAD");
        // })
        console.log(projectListPage.getPageTitle() + " equals Collaborate Project List -GROUP_ROL_C8_TEAM-LEAD");
        expect(projectListPage.getPageTitle()).toEqual('Collaborate Project List -GROUP_ROL_C8_TEAM-LEAD');
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL19fdGVzdF9fL3NwZWNzL2xvZ2luX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9EQUE0QztBQUM1Qyw2Q0FBMkM7QUFJM0MsUUFBUSxDQUFDLGdDQUFnQyxFQUFFLEdBQVMsRUFBRTtJQUVwRCxFQUFFLENBQUMsc0JBQXNCLEVBQUUsR0FBUyxFQUFFO1FBRXBDLE1BQU0sS0FBSyxHQUFHLElBQUksa0JBQUssRUFBRSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxhQUFhLENBQUMsa0JBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxLQUFLLENBQUMsYUFBYSxDQUFDLGtCQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsTUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkQsa0NBQWtDO1FBQ2xDLHlDQUF5QztRQUN6QyxxREFBcUQ7UUFDckQsT0FBTztRQUNQLHNDQUFzQztRQUN0QyxpREFBaUQ7UUFDakQsbUZBQW1GO1FBQ25GLEtBQUs7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsR0FBQywwREFBMEQsQ0FBQyxDQUFDO1FBQ3ZHLE1BQU0sQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsa0RBQWtELENBQUMsQ0FBQztJQUVyRyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9