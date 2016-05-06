'use strict';

var webserver = require('gulp-webserver');
var paths = require('../paths');

module.exports = function (gulp) {

    gulp.task('server', function (done) {
        return gulp.src('./')
            .pipe(webserver({
                livereload: true,
                open: 'app/#/'
            }));
    });

}
