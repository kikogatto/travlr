
'use strict';
/* global angular */

/************************************************************************************************
 * Module definition
 ************************************************************************************************/
var travlrModule = angular.module('travlr', ['ngRoute', 'ngResource', 'ngAnimate', 'ngSanitize',
 'backgroundMenu','masthead',
 'trips', 'engagements',
 'compiledTemplates']);

travlrModule.config( ['$routeProvider', function ( $routeProvider ) {
    $routeProvider.when('/', {redirectTo: '/trips'});
    // .when('/identities', { templateUrl: 'identities.html', controller: 'emptyController' })
    // .when('/signup', { templateUrl: 'signup.html', controller: 'emptyController' })
    // .when('/signin', { templateUrl: 'signin.html', controller: 'emptyController' });
}]);

travlrModule.run(['$rootScope', '$location', '$timeout', function($rootScope, $location, $timeout) {
    // $rootScope.$on('OpenFlame.authenticated', function( e ) {
    //     $location.path('/');
    // });
    // $rootScope.$on('OpenFlame.authentication.failed', function( e ) {
    //     $location.path('/signin');
    // });

    // $rootScope.$on('OpenFlame.authorization.denied', function( e, args) {
    //     $location.path('/identities');
    // });
    // $rootScope.$on('OpenFlame.userSignOut', function( e, args) {
    //     $location.path('/');
    // });
}]);

// ***********************************************************************************************
//  * Controllers
//  ***********************************************************************************************
// travlrModule.controller('HomeController', ['$rootScope', function ($rootScope) {
//     $rootScope.bodyClass = {'login' : true, fullScreen : true};
// }]);
// travlrModule.controller('emptyController', ['$rootScope', function ($rootScope) {
//     $rootScope.bodyClass = {'login' : true, fullScreen : true};
// $('#view').backgroundBlur({
//     imageURL : 'https://unsplash.imgix.net/photo-1424746219973-8fe3bd07d8e3',
//     blurAmount : 50,
//     imageClass : 'avatar-blur'
// });

//}]);
