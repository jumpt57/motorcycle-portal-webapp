function AppRouter($routeProvider, $resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;

    $routeProvider
        .when('/manufacturers', {
            templateUrl: './app/components/manufacturers/manufacturers.template.html',
            controller: 'manufacturersController'
        })
        .when('/manufacturer/:id', {
            templateUrl: './app/components/manufacturer/manufacturer.template.html',
            controller: 'manufacturerController'
        })
        .when('/bike/:id', {
            templateUrl: './app/components/bike/bike.template.html',
            controller: 'bikeController'
        })
        .when('/research', {
            templateUrl: './app/components/research/research.template.html',
            controller: 'researchController'
        })
        .when('/comparator', {
            templateUrl: './app/components/comparator/comparator.template.html',
            controller: 'comparatorController'
        })
        .when('/news', {
            templateUrl: './app/components/news/news.template.html',
            controller: 'newsController'
        })
        .otherwise({
            redirectTo: '/manufacturers'
        });
}
bikeApp.config(
    [
        '$routeProvider',
        '$resourceProvider',
        AppRouter
    ]
);