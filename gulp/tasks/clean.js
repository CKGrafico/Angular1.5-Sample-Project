'use strict';

var del = require('del');
var paths = require('../paths');

module.exports = function (gulp) {

    gulp.task('clean:debug', function () {
        return del(paths.release.app.folder);
    });

    gulp.task('clean:release', function () {
        return del([paths.debug.scss.app.files, paths.debug.js.app.folder]);
    });
}