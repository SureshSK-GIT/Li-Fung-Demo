"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const DataSet_1 = require("./data/DataSet");
var path = require('path');
var downloadsPath = path.resolve(__dirname, '../Files');
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
        'chromeOptions': {
            args: ['--no-sandbox', '--test-type=browser'],
            prefs: {
                'plugins.always_open_pdf_externally': true,
                'download': {
                    'prompt_for_download': false,
                    'default_directory': downloadsPath,
                    'directory_upgrade': true
                }
            }
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL19fdGVzdF9fL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBOEM7QUFDOUMsNENBQXdDO0FBQ3hDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUV4RCwwREFBMEQ7QUFFL0MsUUFBQSxNQUFNLEdBQVc7SUFFeEIsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixTQUFTLEVBQUUsU0FBUztJQUNwQixrREFBa0Q7SUFDbEQsYUFBYSxFQUFFLElBQUk7SUFDbkIsS0FBSyxFQUFFO1FBQ0gsdUJBQXVCO0tBSzFCO0lBQ0QsWUFBWSxFQUFFO1FBQ1YsYUFBYSxFQUFFLFFBQVE7UUFDdkIsZUFBZSxFQUFFO1lBQ2IsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFLHFCQUFxQixDQUFDO1lBQzdDLEtBQUssRUFBRTtnQkFDTCxvQ0FBb0MsRUFBRSxJQUFJO2dCQUMxQyxVQUFVLEVBQUU7b0JBQ1YscUJBQXFCLEVBQUUsS0FBSztvQkFDNUIsbUJBQW1CLEVBQUUsYUFBYTtvQkFDbEMsbUJBQW1CLEVBQUUsSUFBSTtpQkFDMUI7YUFDRjtTQUNGO0tBQ047SUFDRCxlQUFlLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtRQUNoQixpQ0FBaUM7UUFDakMsU0FBUyxFQUFFLElBQUk7S0FDbEI7SUFDRCxTQUFTLEVBQUUsS0FBSztJQUNoQixTQUFTLEVBQUU7UUFFUCxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0Isb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6Qix3Q0FBd0M7UUFDeEMsa0NBQWtDO1FBQ2xDLHdEQUF3RDtRQUN4RCx3QkFBd0I7UUFDeEIsTUFBTTtRQUNOLHVEQUF1RDtRQUN2RCx1RUFBdUU7UUFDdkUsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1QiwrQkFBK0I7UUFDL0IsT0FBTztRQUNQLGlDQUFpQztRQUNqQyxtQ0FBbUM7UUFDbkMsMkNBQTJDO1FBQzNDLCtEQUErRDtRQUMvRCw2REFBNkQ7UUFDN0QsaUVBQWlFO1FBQ2pFLHdIQUF3SDtRQUN4SCwrREFBK0Q7UUFDL0Qsb0NBQW9DO1FBQ3BDLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFFBQVE7UUFDUixNQUFNO1FBQ04sTUFBTSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUMxRSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksb0JBQW9CLENBQUM7WUFDaEQsUUFBUSxFQUFFLFdBQVcsR0FBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ2pDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLDZCQUE2QixFQUFFLElBQUk7WUFDbkMsV0FBVyxFQUFFLEtBQUs7WUFDbEIsY0FBYyxFQUFFLEtBQUs7U0FDdEIsQ0FBQyxDQUNILENBQUM7SUFDUixDQUFDO0NBRUosQ0FBQyJ9