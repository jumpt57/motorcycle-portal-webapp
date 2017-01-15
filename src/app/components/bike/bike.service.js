function BikeService($resource, $rootScope) {
    return $resource('', {}, {
        query: {
            method: 'GET',
            isArray: true,
            url: $rootScope.apiUrl + 'bikes/:id'
        },
        queryLBC: {
            method: 'GET',
            url: $rootScope.apiUrl + 'lbc/:name/:yearmin/:yearmax',
            isArray: true
        }

    });
}
bikeModule.factory('Bike',
    [
        '$resource',
        '$rootScope',
        BikeService
    ]
);