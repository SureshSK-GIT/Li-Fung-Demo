import { Config, browser } from  'protractor';
import {TestData} from "./data/DataSet";
var path = require('path');
var downloadsPath = path.resolve(__dirname, '../Files');

//export const reportFolderPath = './report/'+ Date.now();

export let config: Config = {
    
    allScriptsTimeout: 60000,
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: [
        './specs/login_spec.js',
       // './specs/search_spec.js',
        //'./specs/cannabis_spec.js'
       // './specs/addProduct_spec.js'

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
    onPrepare: function (){
        
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(true);
        browser.get(TestData.appURL);
        browser.waitForAngular();
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
              savePath: './report/'+ Date.now(),
              inlineImages: true,
              takeScreenshots: true,
              takeScreenshotsOnlyOnFailures: true,
              consolidate: false,
              consolidateAll: false
            })
          );
    },
   
};


