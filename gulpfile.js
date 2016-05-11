'use strict';

var gulp = require('gulp');
var paths = require('./gulp/paths');
var runSequence = require('run-sequence');

require('./gulp/tasks/app')(gulp, paths);
require('./gulp/tasks/clean')(gulp, paths);
require('./gulp/tasks/libs')(gulp, paths);
require('./gulp/tasks/lint')(gulp, paths);
require('./gulp/tasks/server')(gulp, paths);
require('./gulp/tasks/test')(gulp, paths);

gulp.task('debug', function () {
    runSequence('clean:debug',
                'libs:debug:js',
                'libs:debug:scss',
                'app:debug:js',
                'app:debug:scss',
                'app:debug:tpls',
                'app:debug:copy',
                'app:debug:inject',
                'lint:js',
                'lint:scss',
                'lint:todos',
                'test:unit');
});

gulp.task('release', function() {
    runSequence('libs:debug:js',
                'libs:debug:scss',
                'app:debug:js',
                'app:debug:scss',
                'app:debug:tpls',
                'app:debug:copy',
                'test:unit',
                'libs:release:js',
                'app:release:js',
                'app:release:scss',
                'clean:release',
                'app:release:inject');
});

gulp.task('dev', function() {
    runSequence('clean:debug',
                'libs:debug:js',
                'libs:debug:scss',
                'app:debug:js',
                'app:debug:scss',
                'app:debug:tpls',
                'app:debug:copy',
                'app:debug:inject',
                'lint:js',
                'lint:scss',
                'lint:todos',
                'test:unit', 
                'server',
                'app:watch');
});

gulp.task('default', ['debug']);
