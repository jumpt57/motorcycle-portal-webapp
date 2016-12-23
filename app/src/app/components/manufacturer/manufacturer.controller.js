function ManufacturerController($scope, $routeParams, Manufacturer){
    Manufacturer.query({id: $routeParams.id}, function(data){   
        $scope.manufacturer = data[0];
    });
}
manufacturerModule.controller('manufacturerController',
    [
        '$scope',
        '$routeParams',
        'Manufacturer',
        ManufacturerController
    ]
);