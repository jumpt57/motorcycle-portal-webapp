function AppRun($rootScope, $location) {
    $rootScope.apiUrl = "http://localhost:3000/api/";
    $rootScope.server = "http://localhost:3000/";
}
bikeApp.run(
    [
        '$rootScope',
        '$location',
        AppRun
    ]
);