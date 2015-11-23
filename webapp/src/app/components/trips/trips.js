
'use strict';
/* global angular */

/************************************************************************************************
 * Module definition
 ************************************************************************************************/
var tripsModule = angular.module('trips', ['travlr']);

tripsModule.config( ['$routeProvider', function ( $routeProvider ) {
    $routeProvider.when('/trips', { templateUrl: 'components/trips/trips.html', controller: 'TripsController', requires:[] });
    // .when('/identities', { templateUrl: 'identities.html', controller: 'emptyController' })
    // .when('/signup', { templateUrl: 'signup.html', controller: 'emptyController' })
    // .when('/signin', { templateUrl: 'signin.html', controller: 'emptyController' });
}]);

// ***********************************************************************************************
//  * Controllers
//  ***********************************************************************************************
tripsModule.controller('TripsController', ['$rootScope', function ($rootScope) {
    $rootScope.bodyClass = {'login' : true, fullScreen : true};
}]);
