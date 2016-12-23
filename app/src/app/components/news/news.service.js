function NewsService($resource) {
    return $resource('./assets/json/manufacturers.json', {}, {
        query: {
            method: 'GET',
            isArray: true
        }
    });
}
newsModule.factory('News',
    [
        '$resource',
        NewsService
    ]
);