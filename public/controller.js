
var pdvManager = angular.module('pdvManager', []);

function mainController($scope, $http) {

    $scope.showPdvAlert = false;

    $scope.findById = function (pdvId) {
        if (!isNaN(parseInt(pdvId))) {
            $http.get('/pdv/' + pdvId)
                .success(function (data) {
                    $scope.pdv = data;
                    console.log('Search finished: ' + data);
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }
    };

    $scope.findByAddressAndCoverage = function () {
        if (undefined != $scope.queryParameters)
            if (!isNaN(parseInt($scope.queryParameters.longitude)) && !isNaN(parseInt($scope.queryParameters.latitude))) {
                $http.get('/pdv?', {
                    params: {
                        longitude: $scope.queryParameters.longitude,
                        latitude: $scope.queryParameters.latitude
                    }
                })
                    .success(function (data) {
                        $scope.pdv = data;
                        console.log('Search finished: ' + data);
                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
            }
    };

    $scope.addPdv = function () {
        $http.post('/pdv', $scope.inputPdvJSON)
            .success(function (data) {
                //$scope.pdv = data;
                if (!data.includes('Error inserting PDV')) {
                    $scope.showPdvSuccess = true;
                    $scope.showPdvAlert = false;
                    console.log('New Pdv added: ' + data);
                } else {
                    $scope.showPdvAlert = true;
                    $scope.showPdvSuccess = false;
                    console.log(data);
                }
            })
            .error(function (data) {
                $scope.showPdvAlert = true;
                $scope.showPdvSuccess = false;
                console.log('Error: ' + data);
            });
    };

    function isDefined(parameter) {
        return undefined != parameter;
    }

}