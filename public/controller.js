
var pdvManager = angular.module('pdvManager', []);

function mainController($scope, $http) {

    $scope.showPdvAlert = false;

    $scope.findById = function (pdvId) {
        if (isDefined(pdvId)) {
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
        if (isDefined($scope.queryParameters)) {
            $http.get('/pdv?', {
                params: {
                    latitude: $scope.queryParameters.latitude,
                    longitude: $scope.queryParameters.longitude
                }
            })
                .success(function (data) {
                    if(!data.includes('Error searching PDV')) {
                        $scope.pdv = data;
                    }
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
                if(!data.includes('Error inserting PDV')) {
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