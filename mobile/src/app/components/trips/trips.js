'use strict';
/* global angular */

/************************************************************************************************
 * Module definition
 ************************************************************************************************/
var tripsModule = angular.module('trips', ['ngRoute','airports', 'compiledTemplates']);

tripsModule.config( ['$routeProvider', function ( $routeProvider ) {
    $routeProvider.when('/trips', { templateUrl: 'components/trips/trips.html', controller: 'TripsController', requires:[] });
    // .when('/identities', { templateUrl: 'identities.html', controller: 'emptyController' })
    // .when('/signup', { templateUrl: 'signup.html', controller: 'emptyController' })
    // .when('/signin', { templateUrl: 'signin.html', controller: 'emptyController' });
}]);

// ***********************************************************************************************
//  * Controllers
//  ***********************************************************************************************
tripsModule.controller('TripsController', ['$scope', function ($scope) {
    $scope.trips = [
        {name:'Brasilia'}
    ];
}]);


tripsModule.directive('addSomething', [  function () {
    return {
        restrict: 'EA',
        templateUrl:  'components/trips/addSomething.html',
        replace: true,
        scope: {},
        link: function (scope, iElement, iAttrs) {
            var selectedTab;
            var tabs = ['fa-paper-plane-o', 'fa-star', 'fa-suitcase'];
            scope.tabs = ['fa-paper-plane-o', 'fa-star', 'fa-suitcase'];
            var panels = ['components/trips/addTwoWayTrip.html', 'components/favorites/addFavorite.html', 'components/engagements/addEngagement.html'];
            scope.addPanel = 'assets/empty.html';


            scope.selectTab = function( tab ) {
                if( angular.isDefined( selectedTab )) {
                    scope.tabs[selectedTab]=tabs[selectedTab];
                    if( tab === selectedTab ) {
                        selectedTab = undefined;
                        scope.addPanel = 'assets/empty.html';
                        $(iElement).children('.bar-footer-secondary').css('height', '0px');
                        return;
                    }
                }
                selectedTab = tab;
                scope.addPanel = panels[selectedTab];
                scope.tabs[selectedTab] = 'fa-minus';
                $(iElement).children('.bar-footer-secondary').css('height', '450px');
            };
        }
    };
}]);