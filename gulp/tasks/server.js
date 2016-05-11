'use strict';

var webserver = require('gulp-webserver');

module.exports = function (gulp, paths) {

    gulp.task('server', function (done) {
        return gulp.src('./')
            .pipe(webserver({
                livereload: true,
                open: 'app/#/'
            }));
    });

}
