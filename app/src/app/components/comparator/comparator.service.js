function ComparatorService($resource,$rootScope) {
    return $resource('', {}, {
        queryAll: {
            method: 'GET',
            isArray: true,
            url: $rootScope.apiUrl + 'manufacturers'
        }, 
        queryOneById: {
            method: 'GET',
            isArray: false,
            url: $rootScope.apiUrl + 'manufacturers/:id'
        },
        queryBikes: {
            method: 'GET',
            isArray: true,
            url: $rootScope.apiUrl + 'manufacturers/:id/bikes/:yearMin/:yearMax'
        },
        queryBikeById: {
            method: 'GET',
            isArray: true,
            url: $rootScope.apiUrl + 'bikes/:id'
        }
        
    });
}
comparatorModule.factory('Comparator',
    [
        '$resource',
        '$rootScope',
        ComparatorService
    ]
);