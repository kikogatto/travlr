/* Directives Module */
'use strict';
/* global angular */
var masthead = angular.module('masthead',['compiledTemplates']);

masthead.service('mastheadServices', [  function () {
    var MODE_MENU = 0;
    var MODE_BACK = 1;

    var services = {
        configs : {},
        config : function(options){
            this.configs.mode = options.mode;
            this.configs.title = options.title;
            this.configs.leftIcon = options.mode === 0 ? undefined:'fa-chevron-left';
            this.configs.rightIcon = 'fa-navicon';
            //this.configs.rightIcon = 'fa-chevron-right';
        },
    };
    services.config({mode:MODE_MENU, title:'Travlr'});
    return services;
}]);

masthead.directive('masthead', ['mastheadServices' , function (mastheadServices) {
    var _leftLinks = [
        {icon:'fa-chevron-left', label:'', link:''}
    ];
    return {
        restrict: 'EA',
        templateUrl:  'assets/directives/masthead/masthead.html',
        replace: true,
        scope: {},
        link: function (scope, iElement, iAttrs) {
            scope.configs = mastheadServices.configs;
            scope.toggleMenu = function() {
                scope.isOpen = !scope.isOpen;
                $('.content').css('left', scope.isOpen ? '-150px' : 0);
                $('.content').css('right',scope.isOpen ? '150px': 0);
                $('.bar').css('left',scope.isOpen ? '-150px': 0);
                $('.bar').css('right',scope.isOpen ? '150px': 0);
            };
        }
    };
}]);