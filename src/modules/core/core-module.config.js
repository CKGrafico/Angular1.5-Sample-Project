(function(global, angular) {
    'use strict';

    function routingConfiguration($stateProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                component: 'ckSite'
            });
    }

    angular.module('app.core')
        .config(routingConfiguration);

})(this, angular);