'use strict';

var eslint = require('gulp-eslint');
var sassLint = require('gulp-sass-lint');
var todo = require('gulp-todo');

module.exports = function (gulp, paths) {

    gulp.task('lint:js', function () {
        return gulp.src(paths.debug.js.src.files)
                .pipe(eslint({
                    config: './eslint.json'
                }))
                .pipe(eslint.format())
                .pipe(eslint.failAfterError());
    });

    gulp.task('lint:scss', function () {
        return gulp.src(paths.debug.scss.src.files)
            .pipe(sassLint())
            .pipe(sassLint.format())
            .pipe(sassLint.failOnError());
    });

    gulp.task('lint:todos', function () {
        return gulp.src(paths.debug.js.src.files
                .concat(paths.debug.scss.src.files)
                .concat(paths.debug.specs)
                .concat(paths.debug.templates.src))
            .pipe(todo({verbose: true}));
    });
}