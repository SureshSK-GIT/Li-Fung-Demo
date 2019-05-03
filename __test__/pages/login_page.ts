import { element, by, browser } from "protractor";
import { TestData } from "../data/DataSet";
import { ProjectList } from "./ProjectList_Page";

export namespace LoginPage {

    export const username = by.id('username');
    export const password = by.id('password');
    export const loginButton = by.id('login-button');
}

export class Login {

    enterUsername(username: string): void {
        element(LoginPage.username).sendKeys(username);
    }

    enterPassword(password: string): void {
        element(LoginPage.password).sendKeys(password);
    }

    clickOnLoginButton(): void {
        element(LoginPage.loginButton).click();
    }

}