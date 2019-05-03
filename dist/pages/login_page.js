"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
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
    }
}
exports.Login = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5fUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL19fdGVzdF9fL3BhZ2VzL0xvZ2luX1BhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBa0Q7QUFJbEQsSUFBaUIsU0FBUyxDQUt6QjtBQUxELFdBQWlCLFNBQVM7SUFFVCxrQkFBUSxHQUFHLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0Isa0JBQVEsR0FBRyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdCLHFCQUFXLEdBQUcsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNyRCxDQUFDLEVBTGdCLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBS3pCO0FBRUQsTUFBYSxLQUFLO0lBRWQsYUFBYSxDQUFDLFFBQWdCO1FBQzFCLG9CQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsYUFBYSxDQUFDLFFBQWdCO1FBQzFCLG9CQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2Qsb0JBQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0MsQ0FBQztDQUVKO0FBZEQsc0JBY0MifQ==