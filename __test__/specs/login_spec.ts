import { Login } from "../pages/Login_Page";
import { TestData } from "../data/DataSet";
import { browser, element, by } from "protractor";
import { ProjectList } from '../pages/ProjectList_Page';
import { GenericKeywords } from "../helper/Generic_Keywords";
import { StyleList } from "../pages/StyleList_Page";
var path = require('path');
var downloadsPath = path.resolve(__dirname, '../../Files');

describe('Login application as Test Lead', async () => {

  const login = new Login();
  const project = new ProjectList();
  const gKeywords = new GenericKeywords();
  const stylelist = new StyleList();

  it('should able to login', async () => {


    login.enterUsername(TestData.userTL);
    login.enterPassword(TestData.passTL);
    login.clickOnLoginButton();
    expect(gKeywords.getPageTitle()).toEqual('Collaborate Project List -GROUP_ROL_C8_TEAM-LEAD');

  });

  it('Open Project', async () => {

    const verifyProject = project.selectProject(TestData.projStatus, TestData.projName);
    expect(verifyProject.getProjectTitle()).toEqual(TestData.projName);
  })

  it('Add Style by Bulk Upload', async ()=>{
    const verifyCtrBlkUpload = stylelist.selectBlkUpload();
    expect(verifyCtrBlkUpload.isDisplayed()).toBeTruthy();
    stylelist.clickDownloadTemplate();
    gKeywords.waitTillFileExist(downloadsPath+"\\Style Template.xlsx", 10000);
  })

});