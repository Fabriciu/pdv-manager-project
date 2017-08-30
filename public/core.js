
var pdvManager = angular.module('pdvManager', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $scope.findById = function(pdvId) {
        $http.get('/pdv/' + pdvId)
            .success(function(data) {
                $scope.pdv = data;
                console.log('Pdv found: ' + data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.findByAddressAndCoordinates = function(latitude, longitude) {
        $http.get('/pdv?latitude')
            .success(function(data) {
                $scope.pdv = data;
                console.log('Pdv found: ' + data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}