function ManufacturerController($scope, $routeParams, Manufacturer){
    console.log('test')
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