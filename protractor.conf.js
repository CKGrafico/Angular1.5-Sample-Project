exports.config = {
    directConnect: true,
    allScriptsTimeout: 11000,
    capabilities: {
        'browserName': 'chrome'
    },
    baseUrl: 'http://localhost:63380/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};