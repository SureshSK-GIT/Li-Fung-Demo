"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const projectList_page_1 = require("./projectList_page");
var LoginPage;
(function (LoginPage) {
    LoginPage.username = protractor_1.by.id('username');
    LoginPage.password = protractor_1.by.id('password');
    LoginPage.loginButton = protractor_1.by.id('login-button');
})(LoginPage = exports.LoginPage || (exports.LoginPage = {}));
class Login {
    enterUsername(username) {
        protractor_1.element(LoginPage.username).sendKeys(username);
    }
    enterPassword(password) {
        protractor_1.element(LoginPage.password).sendKeys(password);
    }
    clickOnLoginButton() {
        protractor_1.element(LoginPage.loginButton).click();
        return new projectList_page_1.projectList();
    }
}
exports.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL19fdGVzdF9fL3BhZ2VzL2xvZ2luX3BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBa0Q7QUFFbEQseURBQWlEO0FBRWpELElBQWlCLFNBQVMsQ0FLekI7QUFMRCxXQUFpQixTQUFTO0lBRVQsa0JBQVEsR0FBRyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdCLGtCQUFRLEdBQUcsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QixxQkFBVyxHQUFHLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDckQsQ0FBQyxFQUxnQixTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUt6QjtBQUVELE1BQWEsS0FBSztJQUVkLGFBQWEsQ0FBRSxRQUFnQjtRQUMzQixvQkFBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGFBQWEsQ0FBRSxRQUFnQjtRQUMzQixvQkFBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGtCQUFrQjtRQUNkLG9CQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLE9BQU8sSUFBSSw4QkFBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUVKO0FBZkQsc0JBZUMifQ==