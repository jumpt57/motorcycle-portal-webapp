var bikeApp = angular.module('bikeApp',
    [
        /**
         * NgModules
         */
        'ngRoute',
        'ngResource',
        /**
         * ComponentsModules
         */
        'manufacturersModule',       
        'manufacturerModule',
        'bikeModule',
        'researchModule',
        'comparatorModule',
        'newsModule',
        /**
         * SharedModules
         */
        'listBikesModule',       
        'listManufacturersModule',

        'cardbikeModule',
        'cardmanufacturerModule',

        'recordCardBikeModule',
        'recordCardManufacturerModule'      
        
    ]
);