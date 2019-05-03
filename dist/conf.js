"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const DataSet_1 = require("./data/DataSet");
//export const reportFolderPath = './report/'+ Date.now();
exports.config = {
    allScriptsTimeout: 60000,
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: [
        './specs/login_spec.js',
    ],
    capabilities: {
        "browserName": 'chrome',
    },
    jasmineNodeOpts: {
        showColors: true,
        //defaultTimeoutInterval: 200000,
        isVerbose: true
    },
    noGlobals: false,
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.waitForAngularEnabled(true);
        protractor_1.browser.get(DataSet_1.TestData.appURL);
        protractor_1.browser.waitForAngular();
        //browser.ignoreSynchronization = false;
        // const fs = require('fs-extra');
        // fs.emptyDir('./report/screenshots/', function (err) {
        //     console.log(err);
        // });
        // var jasmineReporters = require('jasmine-reporters');
        // jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        //     consolidateAll: true,
        //     savePath: './report',
        //     filePrefix: 'xmlresults'
        // }));
        // jasmine.getEnv().addReporter({
        //     specDone: function(result) {
        //         if (result.status == 'failed') {
        //             browser.getCapabilities().then(function (caps) {
        //                 var browserName = caps.get('browserName');
        //                 browser.takeScreenshot().then(function (png) {
        //                     var stream = fs.createWriteStream('./report/screenshots/' + browserName + '-' + result + '.png');
        //                     stream.write(new Buffer(png, 'base64'));
        //                     stream.end();
        //                 });
        //             });
        //         }
        //     }
        // });
        const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './report/' + Date.now(),
            inlineImages: true,
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true,
            consolidate: false,
            consolidateAll: false
        }));
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL19fdGVzdF9fL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBOEM7QUFDOUMsNENBQXdDO0FBRXhDLDBEQUEwRDtBQUUvQyxRQUFBLE1BQU0sR0FBVztJQUV4QixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixLQUFLLEVBQUU7UUFDSCx1QkFBdUI7S0FLMUI7SUFDRCxZQUFZLEVBQUU7UUFDVixhQUFhLEVBQUUsUUFBUTtLQUUxQjtJQUNELGVBQWUsRUFBRTtRQUNiLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGlDQUFpQztRQUNqQyxTQUFTLEVBQUUsSUFBSTtLQUNsQjtJQUNELFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFNBQVMsRUFBRTtRQUVQLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLHdDQUF3QztRQUN4QyxrQ0FBa0M7UUFDbEMsd0RBQXdEO1FBQ3hELHdCQUF3QjtRQUN4QixNQUFNO1FBQ04sdURBQXVEO1FBQ3ZELHVFQUF1RTtRQUN2RSw0QkFBNEI7UUFDNUIsNEJBQTRCO1FBQzVCLCtCQUErQjtRQUMvQixPQUFPO1FBQ1AsaUNBQWlDO1FBQ2pDLG1DQUFtQztRQUNuQywyQ0FBMkM7UUFDM0MsK0RBQStEO1FBQy9ELDZEQUE2RDtRQUM3RCxpRUFBaUU7UUFDakUsd0hBQXdIO1FBQ3hILCtEQUErRDtRQUMvRCxvQ0FBb0M7UUFDcEMsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osUUFBUTtRQUNSLE1BQU07UUFDTixNQUFNLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxvQkFBb0IsQ0FBQztZQUNoRCxRQUFRLEVBQUUsV0FBVyxHQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDakMsWUFBWSxFQUFFLElBQUk7WUFDbEIsZUFBZSxFQUFFLElBQUk7WUFDckIsNkJBQTZCLEVBQUUsSUFBSTtZQUNuQyxXQUFXLEVBQUUsS0FBSztZQUNsQixjQUFjLEVBQUUsS0FBSztTQUN0QixDQUFDLENBQ0gsQ0FBQztJQUNSLENBQUM7Q0FFSixDQUFDIn0=