function ManufacturerService($resource, $rootScope) {
    return $resource('', {}, {
        query: {
            method: 'GET',
            isArray: true,
            url: $rootScope.apiUrl + 'manufacturers/:id/bikes'
        }
    });
}
manufacturerModule.factory('Manufacturer',
    [
        '$resource',
        '$rootScope',
        ManufacturerService
    ]
);