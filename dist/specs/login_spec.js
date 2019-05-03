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
const Login_Page_1 = require("../pages/Login_Page");
const DataSet_1 = require("../data/DataSet");
const ProjectList_Page_1 = require("../pages/ProjectList_Page");
const Generic_Keywords_1 = require("../helper/Generic_Keywords");
const StyleList_Page_1 = require("../pages/StyleList_Page");
var path = require('path');
var downloadsPath = path.resolve(__dirname, '../../Files');
describe('Login application as Test Lead', () => __awaiter(this, void 0, void 0, function* () {
    const login = new Login_Page_1.Login();
    const project = new ProjectList_Page_1.ProjectList();
    const gKeywords = new Generic_Keywords_1.GenericKeywords();
    const stylelist = new StyleList_Page_1.StyleList();
    it('should able to login', () => __awaiter(this, void 0, void 0, function* () {
        login.enterUsername(DataSet_1.TestData.userTL);
        login.enterPassword(DataSet_1.TestData.passTL);
        login.clickOnLoginButton();
        expect(gKeywords.getPageTitle()).toEqual('Collaborate Project List -GROUP_ROL_C8_TEAM-LEAD');
    }));
    it('Open Project', () => __awaiter(this, void 0, void 0, function* () {
        const verifyProject = project.selectProject(DataSet_1.TestData.projStatus, DataSet_1.TestData.projName);
        expect(verifyProject.getProjectTitle()).toEqual(DataSet_1.TestData.projName);
    }));
    it('Add Style by Bulk Upload', () => __awaiter(this, void 0, void 0, function* () {
        const verifyCtrBlkUpload = stylelist.selectBlkUpload();
        expect(verifyCtrBlkUpload.isDisplayed()).toBeTruthy();
        stylelist.clickDownloadTemplate();
        gKeywords.waitTillFileExist(downloadsPath + "\\Style Template.xlsx", 10000);
        //gKeywords.writeExcel(downloadsPath+"\\Style Template.xlsx");
        // browser.sleep(10000);
        // gKeywords.writeExcel(downloadsPath+"\\Style Template.xlsx");
        // browser.sleep(5000);
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5fc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL19fdGVzdF9fL3NwZWNzL2xvZ2luX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLG9EQUE0QztBQUM1Qyw2Q0FBMkM7QUFFM0MsZ0VBQXdEO0FBQ3hELGlFQUE2RDtBQUM3RCw0REFBb0Q7QUFDcEQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBRTNELFFBQVEsQ0FBQyxnQ0FBZ0MsRUFBRSxHQUFTLEVBQUU7SUFFcEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxrQkFBSyxFQUFFLENBQUM7SUFDMUIsTUFBTSxPQUFPLEdBQUcsSUFBSSw4QkFBVyxFQUFFLENBQUM7SUFDbEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7SUFDeEMsTUFBTSxTQUFTLEdBQUcsSUFBSSwwQkFBUyxFQUFFLENBQUM7SUFFbEMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEdBQVMsRUFBRTtRQUdwQyxLQUFLLENBQUMsYUFBYSxDQUFDLGtCQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsa0RBQWtELENBQUMsQ0FBQztJQUUvRixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFTLEVBQUU7UUFFNUIsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxrQkFBUSxDQUFDLFVBQVUsRUFBRSxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BGLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRSxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDBCQUEwQixFQUFFLEdBQVEsRUFBRTtRQUN2QyxNQUFNLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2RCxNQUFNLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0RCxTQUFTLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNsQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsYUFBYSxHQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFFLDhEQUE4RDtRQUM5RCx3QkFBd0I7UUFDeEIsK0RBQStEO1FBQy9ELHVCQUF1QjtJQUN6QixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUosQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9