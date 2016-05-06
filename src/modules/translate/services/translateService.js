(function(global, angular) {
    'use strict';

    var languages = {
        es: 'es',
        en: 'en'
    };

    function translateService($translate) {
        this.changeLanguage = function (language) {
            $translate.use(languages[language]);
        };

        return {
            languages: languages,
            changeLanguage: this.changeLanguage
        };
    }

    angular.module('app.translate')
        .factory('translateService', translateService);

})(this, angular);
