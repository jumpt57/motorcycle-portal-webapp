function BikeController($scope, $routeParams, Bike) {

    Bike.query({ id: $routeParams.id }, function (data) {
        $scope.bike = data[0];

        $scope.bike.ads = [];
        /**Name without year */
        Bike.queryLBC({ name: $scope.bike.name, yearmin: $scope.bike.year, yearmax: $scope.bike.year }, function (data) {
            data.forEach(function (ad) {
                $scope.bike.ads.push({ city: ad.city, zip: ad.zipcode, url: ad.url, price: ad.price });
            }, this);
        });
        /**Name with year */
    });
}
bikeModule.controller('bikeController',
    [
        '$scope',
        '$routeParams',
        'Bike',
        BikeController
    ]
);