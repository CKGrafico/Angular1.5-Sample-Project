(function(global, angular) {
    'use strict';
    
    function DebtorsFormController($state, dataApiService) {
        this.form = this.formData ?  this.formData.info.debtor : { name: null, debt: 0 };
        
        console.log(this.formData);
        
        this.onSubmit = function (form) {
            if (!form.$invalid) {
                dataApiService.add(this.form);
                $state.go('app.debtors');
            }
        };
        
        this.onEdit = function (form) {
            if (!form.$invalid) {
                dataApiService.edit(this.formData.info.id, this.form);
                $state.go('app.debtors');
            }
        };
    }

    angular.module('app.debtors')
        .component('ckDebtorsForm', {
            bindings: {
                formData: '='
            },
            controller: DebtorsFormController,
            templateUrl: 'modules/debtors/components/debtorsForm/debtorsForm.html'
        });

})(this, angular);
