'use strict';

var roots = {
    libs: './node_modules',
    app: './app',
    src: './src'
};

module.exports = {
    libs: {
        js: [
            roots.libs + '/jquery/dist/jquery.js',
            roots.libs + '/bootstrap-sass/assets/javascripts/bootstrap.js',
            roots.libs + '/angular/angular.js',
            roots.libs + '/angular-cookies/angular-cookies.js',
            roots.libs + '/angular-translate/dist/angular-translate.js',
            roots.libs + '/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
            roots.libs + '/angular-translate/dist/angular-translate-storage-local/angular-translate-storage-local.js',
            roots.libs + '/angular-translate/dist/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
            roots.libs + '/angular-ui-router/release/angular-ui-router.js'
        ],

        scss: {
            bootstrap: roots.libs + '/bootstrap-sass/assets/stylesheets/bootstrap/**/*.scss',
            normalize: roots.libs + '/normalize-scss/sass/normalize/**/*.scss'

        }
    },

    debug: {
        index: roots.src + '/index.html',

        fonts: {
            app: roots.app + '/fonts',
            src: roots.src + '/fonts/**/*.*'
        },

        images: {
            app: roots.app + '/images',
            src: roots.src + '/images/**/*.*'
        },

        js: {
            app: {
                folder: roots.app + '/js',
                files: [roots.app + '/js/vendor/jquery.js',
                        roots.app + '/js/vendor/angular.js',
                        roots.app + '/js/vendor/angular-translate.js',
                        roots.app + '/js/vendor/**/*.js',
                        roots.app + '/js/app-module.js',
                        roots.app + '/js/**/*-module.js', 
                        roots.app + '/js/**/*-module.config.js',
                        roots.app + '/js/**/*.js'],

                test: [roots.app + '/js/vendor/jquery.js',
                       roots.app + '/js/vendor/angular.js',
                       roots.libs + '/angular-mocks/angular-mocks.js',
                       roots.app + '/js/vendor/angular-translate.js',
                       roots.app + '/js/vendor/**/*.js',
                       roots.app + '/js/app-module.js',
                       roots.app + '/js/**/*-module.js', 
                       roots.app + '/js/**/*-module.config.js',
                       roots.app + '/js/**/*.js']
            },

            src: {
                folder: roots.src + '/modules/',
                files: [roots.src + '/modules/**/*.js']
            },

            vendor: {
                folder: roots.app + '/js/vendor',
                files: [roots.app + '/js/vendor/**/jquery.js',
                        roots.app + '/js/vendor/**/angular.js',
                        roots.app + '/js/vendor/**/*.js']
            }
        },

        scss: {
            app: {
                folder: roots.app ,
                files: roots.app + '/main.css'
            },

            src: {
                folder: roots.src + '/scss/',
                files: [roots.src + '/scss/**/*.scss', '!' + roots.src + '/scss/vendor/**/*.scss']
            },

            vendor: {
                bootstrap: roots.src + '/scss/vendor/bootstrap',
                normalize: roots.src + '/scss/vendor/normalize-scss'
            }
        },

        specs: [roots.src + '/tests/**/*.specs.js'],

        templates: {
            app: {
                folder: roots.app + '/templates',
                files: roots.app + '/templates/**/*.js'
            },

            src: [roots.src + '/**/*.html', '!' + roots.src + '/**/index.html']
        }
    },

    release: {
        app: {
            folder: roots.app,
            files: roots.app + '/**/*.*'
        },
        
        js: [roots.app + '/vendor.min.js', roots.app + '/app.min.js', roots.app + '/templates/app-tpls.js'],

        scss: roots.app + '/main.min.css'
    }
};
