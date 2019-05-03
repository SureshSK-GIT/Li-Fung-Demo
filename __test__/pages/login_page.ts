import { element, by, browser } from "protractor";
import {TestData} from "../data/DataSet";
import { projectList } from "./projectList_page";

export namespace LoginPage{

    export const username = by.id('username');
    export const password = by.id('password');
    export const loginButton = by.id('login-button');
}

export class Login{

    enterUsername (username: string): void{
        element(LoginPage.username).sendKeys (username);
    }

    enterPassword (password: string): void{
        element(LoginPage.password).sendKeys (password);
    }

    clickOnLoginButton (): any {
        element(LoginPage.loginButton).click();
        return new projectList();
    }

}