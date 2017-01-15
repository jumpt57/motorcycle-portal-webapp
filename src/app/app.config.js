function AppConfig($routeProvider, $resourceProvider, $locationProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/manufacturers', {
            templateUrl: './src/app/components/manufacturers/manufacturers.template.html',
            controller: 'manufacturersController'
        })
        .when('/manufacturer/:id', {
            templateUrl: './src/app/components/manufacturer/manufacturer.template.html',
            controller: 'manufacturerController'
        })
        .when('/bike/:id', {
            templateUrl: './src/app/components/bike/bike.template.html',
            controller: 'bikeController'
        })
        .when('/research', {
            templateUrl: './src/app/components/research/research.template.html',
            controller: 'researchController'
        })
        .when('/comparator', {
            templateUrl: './src/app/components/comparator/comparator.template.html',
            controller: 'comparatorController'
        })
        .when('/news', {
            templateUrl: './src/app/components/news/news.template.html',
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
        '$locationProvider',
        AppConfig
    ]
);