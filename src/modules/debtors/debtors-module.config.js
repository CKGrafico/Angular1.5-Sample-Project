(function(global, angular) {
    'use strict';

    function routingConfiguration($stateProvider) {
        $stateProvider
            .state('app.debtors', {
                url: 'debtors/',
                views: {
                    content: {
                        component: 'ckDebtorsList'
                    }
                },
                resolve: {
                    data: function ($q, dataApiService) {
                        return $q.all({
                            list: dataApiService.get()
                        });
                    }
                }
            })
            .state('app.debtors-add', {
                url: 'debtors/add/',
                views: {
                    content: {
                        component: 'ckDebtorsForm'
                    }
                }
            })
            .state('app.debtors-edit', {
                url: 'debtors/edit/:id',
                views: {
                    content: {
                        component: 'ckDebtorsForm'
                    }
                },
                resolve: {
                    formData: function($q, $stateParams, dataApiService) {
                        if ($stateParams.id) {
                            return $q.all({
                                info: dataApiService.getItem($stateParams.id)
                            });
                        }
                    }
                }
            });
    }

    angular.module('app.debtors')
        .config(routingConfiguration);

})(this, angular);
