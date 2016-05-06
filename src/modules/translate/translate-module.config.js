(function(global, angular) {
    'use strict';

    function translationConfiguration($translateProvider) {

        $translateProvider
            .useSanitizeValueStrategy('escape')
            .registerAvailableLanguageKeys(['en', 'es'], {
                en_US: 'en',
                es_ES: 'es'
            })
            .fallbackLanguage('en')
            .preferredLanguage('en')
            .useLocalStorage()
            .useStaticFilesLoader({
                prefix: 'locale/Locale.',
                suffix: '.json'
            });
    }

    angular.module('app.translate')
        .config(translationConfiguration);

})(this, angular);
