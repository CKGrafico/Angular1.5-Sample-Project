'use strict';

var Server = require('karma').Server;
var angularProtractor = require('gulp-angular-protractor');

module.exports = function (gulp, paths) {

    gulp.task('test:unit', function (done) {
        new Server({
            configFile: require('path').resolve('karma.conf.js'),
            singleRun: true
        }, done).start();
    });
    
    gulp.task('test:e2e', ['server'], function(callback) {
        gulp.src(paths.debug.specs_e2e)
            .pipe(angularProtractor({
                'configFile': 'protractor.conf.js',
                'debug': false,
                'autoStartStopServer': true
            }))
            .on('error', function(e) {
                console.log(e);
            })
            .on('end', callback);
    });

}
