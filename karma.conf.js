var paths = require('./gulp/paths');
module.exports = function (config) {
    config.set({
        basePath: '',
        urlRoot: 'app',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'], // Show better errors
        reporters: [
            'progress',
            'coverage'
        ],
        // Which files should be covered by code coverage
        preprocessors: {
            'app/js/!(vendor)/**/!(*.config|*-module)+(.js)': ['coverage']
        },
        coverageReporter: {
            type: 'html',
            dir: '.test/coverage/'
        },
        singleRun: true,
        files: paths.debug.js.app.test
               .concat(paths.debug.specs),
        exclude: [],
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO
    });
};