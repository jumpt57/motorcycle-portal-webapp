function AppRun($rootScope){    
    $rootScope.apiUrl = 'http://localhost:3000/api/';
}
bikeApp.run(
    [
        '$rootScope',
        AppRun
    ]
);