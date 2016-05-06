'use strict';

var Server = require('karma').Server;
var paths = require('../paths');

module.exports = function (gulp) {

    gulp.task('test', function (done) {
        new Server({
            configFile: require('path').resolve('karma.conf.js'),
            singleRun: true
        }, done).start();
    });

}
