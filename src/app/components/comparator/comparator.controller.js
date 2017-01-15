function ComparatorController($scope, Comparator) {
    $scope.bikes = [];
    Comparator.queryAll(function (data) {
        $scope.manufacturers = data;
    });
    $scope.onManufacturerChange = function (id) {
        Comparator.queryOneById({ id: id }, function (data) {
            $scope.manuYears = data.years;
        });
        
    };
    $scope.onManuYearChange = function (id, year) {
        Comparator.queryBikes({ id: id, yearMax: year, yearMin: year }, function (data) {
            $scope.manuBikes = data[0].bikes;
        });
    };
    $scope.onClickAddBike = function (id) {
        Comparator.queryBikeById({ id: id }, function (data) {
            $scope.bikes.push(data[0]);
            $scope.marqueSelect = null;
            $scope.modeleSelect = null;
            $scope.anneeSelect = null;
            $scope.manuYears = [];
            $scope.manuBikes = [];
        });
    };

}
comparatorModule.controller('comparatorController',
    [
        '$scope',
        'Comparator',
        ComparatorController
    ]
    );