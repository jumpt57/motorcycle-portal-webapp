function ManufacturersService($resource, $rootScope) {
    return $resource('', {}, {
        query: {
            method: 'GET',
            isArray: true,
            url: $rootScope.apiUrl + 'manufacturers'
        },
        queryBikes: {
            method: 'GET',
            isArray: false,
            url: $rootScope.apiUrl + '/manufacturer/:id/bike'
        }
    });
}
manufacturersModule.factory('Manufacturers',
    [
        '$resource',
        '$rootScope',
        ManufacturersService
    ]
);