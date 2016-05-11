'use strict';

var del = require('del');

module.exports = function (gulp, paths) {

    gulp.task('clean:debug', function () {
        return del(paths.release.app.folder);
    });

    gulp.task('clean:release', function () {
        return del([paths.debug.scss.app.files, paths.debug.js.app.folder]);
    });
}