/* Directives Module */
'use strict';
/* global angular */
var backgroundMenu = angular.module('backgroundMenu',['compiledTemplates']);

// backgroundMenu.service('backgroundMenuServices', [  function () {
//     var open = false;
//     var services = {
//         // isOpen : function(){
//         //     return open;
//         // },
//         // toggle : function() {
//         //     open = !open;
//         // },
//     };
//     return services;
// }]);

// backgroundMenu.directive('backgroundMenu', ['backgroundMenuServices' , function (backgroundMenuServices) {
//     return {
//         restrict: 'EA',
//         templateUrl:  'assets/directives/backgroundMenu/backgroundMenu.html',
//         replace: true,
//         scope: {},
//         link: function (scope, iElement, iAttrs) {
//         }
//     };
// }]);