(function(global, angular) {
    'use strict';
    
    function DebtorsController() {
        this.list = this.data.list;
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
