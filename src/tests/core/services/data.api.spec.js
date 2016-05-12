describe('data API', function () {
    'use strict';
    
    var dataApiService, $scope;

    beforeEach(function () {
        module('app.core');
    });

    beforeEach(inject(function (_dataApiService_,  _$rootScope_) {
        dataApiService = _dataApiService_;
        $scope = _$rootScope_;
    }));

    describe('when get for first time', function () {
        it('should return 10 elements', function (done) {
            var success = function(results) {
                expect(results.length).toBe(10);
            };
            
            var fail = function(error) {
                expect(error).toBeUndefined();
            };
            
            dataApiService.get()
                .then(success)
                .catch(fail)
                .finally(done);
            
            $scope.$apply(); // Resolve promises
        });
    });
});
