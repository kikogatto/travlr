'use strict';
/* global angular, jasmine, describe, it, xit, expect, module, inject, beforeEach, spyOn */


describe('The Trips module', function() {
    var httpProvider;
    var $route;
    beforeEach( module('trips', function($httpProvider) {
        httpProvider = $httpProvider;
    }));
    beforeEach(inject(function( _$route_) {
        $route = _$route_;
    }));

    it('should have these requirements', function() {
        var trips = angular.module('trips');
        expect(trips.requires.length).toBe(2);
        expect(trips.requires).toContain('ngRoute');
        expect(trips.requires).toContain('compiledTemplates');
    });
});

describe('The Trips controller', function() {
    var $controller;
    beforeEach( module('trips') );

    beforeEach(inject(function( _$controller_) {
        $controller = _$controller_;
    }));

    it('should add a trips array to the scope', inject( function() {
        var $scope = {};
        var controller = $controller('TripsController', { $scope: $scope });
        expect($scope.trips).toBeDefined();
        expect($scope.trips.length).toBe(1);
    }));
});

describe('The addSomething directive', function() {
    var element;
    var $rootScope;
    var $q;
    beforeEach( module('trips') );
    beforeEach(inject( function ( $compile, _$q_, _$rootScope_ ) {
        $rootScope = _$rootScope_;
        $q = _$q_;
        var scope = $rootScope.$new();
        element = $compile('<div add-something></div>')( scope );
        scope.$digest();
    }));

    it('should have an isolated scope', inject( function() {
        var scope = element.isolateScope();
        expect( scope ).toBeDefined();
    }));

    it('should replace the element with the appropriate content', function() {
        expect( $(element).prop('tagName') ).toEqual('SECTION');
        expect( $(element).attr('class')).toBe('ng-isolate-scope');
    });
    it('should add a tabs array with all 3 icons to the scope', function() {
        var scope = element.isolateScope();
        expect( scope.tabs ).toBeDefined();
        expect( scope.tabs.length ).toBe(3);
        expect( scope.tabs ).toContain('fa-paper-plane-o');
        expect( scope.tabs ).toContain('fa-star');
        expect( scope.tabs ).toContain( 'fa-suitcase');
    });
    it('should add a addPanel property to the scope', function() {
        var scope = element.isolateScope();
        expect( scope.addPanel ).toBe('assets/empty.html');
    });
    describe('should expose a selectTab method that', function() {
        it('should exist', function() {
            var scope = element.isolateScope();
            expect( scope.selectTab ).toBeDefined();
            expect( angular.isFunction(scope.selectTab )).toBeTruthy();
        });
        it('should set the icon for the givenTab, if none is selected', function() {
            var scope = element.isolateScope();
            expect( scope.tabs[1] ).toBe('fa-star');
            scope.selectTab(1);
            expect( scope.tabs[1] ).toBe('fa-minus');
        });

        it('should set addPanel to the givenTab, if none is selected', function() {
            var scope = element.isolateScope();
            expect( scope.addPanel ).toBe('assets/empty.html');
            scope.selectTab(2);
            expect( scope.addPanel ).toBe('components/engagements/addEngagement.html');
        });
        it('should raise the panel with the options to add', function() {
            var scope = element.isolateScope();
            expect( $(element).children('.bar-footer-secondary').css('height')).toBe('0px');
            scope.selectTab(1);
            expect( $(element).children('.bar-footer-secondary').css('height')).toBe('450px');
        });

        it('should set the icon for the givenTab and reset the icon for the current selected, if one is selected', function() {
            var scope = element.isolateScope();
            expect( scope.tabs[1] ).toBe('fa-star');
            expect( scope.tabs[2] ).toBe('fa-suitcase');
            scope.selectTab(1);
            expect( scope.tabs[1] ).toBe('fa-minus');
            expect( scope.tabs[2] ).toBe('fa-suitcase');
            scope.selectTab(2);
            expect( scope.tabs[1] ).toBe('fa-star');
            expect( scope.tabs[2] ).toBe('fa-minus');
        });
        it('should reset the icon for the givenTab if it is already selected', function() {
            var scope = element.isolateScope();
            expect( scope.tabs[1] ).toBe('fa-star');
            scope.selectTab(1);
            expect( scope.tabs[1] ).toBe('fa-minus');
            scope.selectTab(1);
            expect( scope.tabs[1] ).toBe('fa-star');
        });

        it('should lower the panel if the given tab is already selected', function() {
            var scope = element.isolateScope();
            expect( $(element).children('.bar-footer-secondary').css('height')).toBe('0px');
            scope.selectTab(1);
            expect( $(element).children('.bar-footer-secondary').css('height')).toBe('450px');
            scope.selectTab(1);
            expect( $(element).children('.bar-footer-secondary').css('height')).toBe('0px');
        });
        it('should cleanr addPanel if the given tab is already selected', function() {
            var scope = element.isolateScope();
            expect( scope.addPanel ).toBe('assets/empty.html');
            scope.selectTab(2);
            expect( scope.addPanel ).toBe('components/engagements/addEngagement.html');
            scope.selectTab(2);
            expect( scope.addPanel ).toBe('assets/empty.html');
        });

    });
});
