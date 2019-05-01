var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    onPrepare: function () {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'testreport',
                filePrefix: 'index',
                screenshotsFolder: 'testreport/screenshots'
            })
        );
    }
    ,
    framework: 'jasmine',
    allScriptsTimeout: 11000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/*.js'],
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]
};