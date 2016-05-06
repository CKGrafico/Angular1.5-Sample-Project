(function(global, angular) {
    'use strict';
    
    function MenuController() {
        
    }
    
    angular.module('app.core')
        .component('ckMenu', {
            controller: MenuController,
            templateUrl: 'modules/core/components/menu/menu.html'
        });

})(this, angular);
