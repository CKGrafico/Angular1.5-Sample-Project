'use strict';

var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

module.exports = function (gulp, paths) {

    gulp.task('libs:debug:js', function() {
        return gulp.src(paths.libs.js)
            .pipe(gulp.dest(paths.debug.js.vendor.folder));
    });

    gulp.task('libs:release:js', function () {
        return gulp.src(paths.debug.js.vendor.files)
            .pipe(sourcemaps.init())
            .pipe(concat('vendor.min.js', { newLine: ';' }))
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.release.app.folder));
    });

    gulp.task('libs:debug:scss', function () {
        gulp.src(paths.libs.scss.normalize)
            .pipe(gulp.dest(paths.debug.scss.vendor.normalize));

        return gulp.src(paths.libs.scss.bootstrap)
            .pipe(gulp.dest(paths.debug.scss.vendor.bootstrap));
    });
}