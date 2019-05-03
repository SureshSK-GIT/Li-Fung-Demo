import { Login } from "../pages/login_page";
import { TestData } from "../data/DataSet";
import { browser, element, by } from "protractor";
import { projectList } from '../pages/projectList_page';

describe('Login application as Test Lead', async () => {

  it('should able to login', async () => {

    const login = new Login();
    login.enterUsername(TestData.userTL);
    login.enterPassword(TestData.passTL);
    const projectListPage = login.clickOnLoginButton();
    //console.log(projectListPage.getPageTitle()+" equals Collaborate Project List -GROUP_ROL_C8_TEAM-LEAD");
    expect(projectListPage.getPageTitle()).toEqual('Collaborate Project List -GROUP_ROL_C8_TEAM-LEAD');

  });

});