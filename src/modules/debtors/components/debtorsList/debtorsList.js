(function(global, angular) {
    'use strict';
    
    function DebtorsController(dataApiService) {
        this.list = this.data.list;
        var success = function(results) {
            console.log(results);
        };
        
        var fail = function(error) {
            console.log(error);
        };
        
        var done = function () {
            console.log('done');
        };
        
        dataApiService.get()
            .then(success)
            .catch(fail)
            .finally(done);
    }

    angular.module('app.debtors')
        .component('ckDebtorsList', {
            bindings: {
                data: '='
            },
            controller: DebtorsController,
            templateUrl: 'modules/debtors/components/debtorsList/debtorsList.html'
        });

})(this, angular);
