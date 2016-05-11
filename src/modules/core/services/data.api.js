(function(global, angular) {
    'use strict';

    var data = [
        { name: 'Quique',   debt: 10 },
        { name: 'Carlos',   debt: 6 },
        { name: 'Sandra',   debt: 34 },
        { name: 'Maite',    debt: 67 },
        { name: 'Fred',     debt: 88 },
        { name: 'Martin',   debt: 2 },
        { name: 'Marta',    debt: 20 },
        { name: 'Guilla',   debt: 23 },
        { name: 'Fer',      debt: 62 },
        { name: 'Andrea',   debt: 98 }
    ];

    function dataApiService($q) {
        this.get = function () {
            return $q(function(resolve) {
                resolve(JSON.parse(JSON.stringify(data)));
            });
        };
        
        this.getItem = function (id) {
            return $q(function(resolve) {
                resolve(JSON.parse(JSON.stringify({ debtor: data[id], id: id })));
            });
        };
        
        this.add = function(debtor) {
            data.push(debtor);
        };
        
        this.edit = function(id, debtor) {
            data[id] = debtor;
        };

        return {
            get: this.get,
            add: this.add,
            getItem: this.getItem,
            edit: this.edit
        };
    }

    angular.module('app.core')
    .factory('dataApiService', dataApiService);
})(this, angular);