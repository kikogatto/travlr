/* Directives Module */
'use strict';
/* global angular */
var masthead = angular.module('masthead',[ 'compiledTemplates']);

// masthead.service('masthead', [  function () {
//     var _menuItems = [];
//     var services = {
//         addItem : function(item) {
//             _menuItems.push(item);
//             var curr = _menuItems.length -1;
//             while( curr > 0 && _menuItems[curr-1].order > _menuItems[curr].order) {
//                 _menuItems[curr] = _menuItems[curr-1];
//                 _menuItems[curr-1] = item;
//                 curr--;
//             }
//         },
//         items : function() {
//             return _menuItems;
//         }
//     };
//     return services;
// }]);

masthead.directive('masthead', ['$rootScope' , function ($rootScope) {
    return {
        restrict: 'EA',
        templateUrl:  'assets/directives/masthead/masthead.html',
        replace: true,
        scope: {},
        link: function (scope, iElement, iAttrs) {
            // scope.items = navigationService.items();
            // scope.isVisible = function() {
            //     return authenticationServices.isAuthenticated() && $rootScope.bodyClass && !$rootScope.bodyClass.fullScreen;
            // };
        }
    };
}]);