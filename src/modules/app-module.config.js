(function(global, angular) {
    'use strict';

    function routingConfiguration($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }

    angular.module('app')
        .config(routingConfiguration);

})(this, angular);
