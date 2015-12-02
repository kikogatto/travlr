'use strict';
/* global angular, jasmine, describe, it, xit, expect, module, inject, beforeEach, spyOn */


describe('The airports services', function() {
    var airports;
    beforeEach( module('airports'));
    beforeEach(inject(function( _airports_) {
        airports = _airports_;
    }));

    describe('should expose a find method that', function() {
        it('should exist', function() {
            expect( airports.find ).toBeDefined();
            expect( angular.isFunction(airports.find )).toBeTruthy();
        });
        it('should return an empty array if the paramenter length < 3', function() {
            var list = airports.find('cg');
            expect( list ).toBeDefined();
            expect( angular.isArray(list)).toBeTruthy();
            expect( list.length ).toBe(0);
        });
        it('should return an empty array if the paramenter length is undefined', function() {
            var list = airports.find();
            expect( list ).toBeDefined();
            expect( angular.isArray(list)).toBeTruthy();
            expect( list.length ).toBe(0);
        });
        it('should return the an array with the airport identified by the given code, if the query parameter is an airport code', function() {
            var list = airports.find('cgh');
            expect( list ).toBeDefined();
            expect( angular.isArray(list)).toBeTruthy();
            expect( list.length ).toBe(1);
            expect( list[0].code ).toBe('CGH');
            expect( list[0].name ).toBe('Congonhas International Airport');
        });
        it('should return a list of airports, filtered by their names, if the query parameter is not an airport code', function() {
            var list = airports.find('guarul');
            expect( airports.find ).toBeDefined();
            expect( angular.isFunction(airports.find )).toBeTruthy();
        });
    });
});

describe('The airportSearch directive', function() {
    var element;
    var $rootScope;
    var $q;
    beforeEach( module('airports') );
    beforeEach(inject( function ( $compile, _$q_, _$rootScope_ ) {
        $rootScope = _$rootScope_;
        $q = _$q_;
        var scope = $rootScope.$new();
        element = $compile('<div airport-search></div>')( scope );
        scope.$digest();
    }));

    it('should have an isolated scope', inject( function() {
        var scope = element.isolateScope();
        expect( scope ).toBeDefined();
    }));

    it('should replace the element with the appropriate content', function() {
        expect( $(element).prop('tagName') ).toEqual('SECTION');
        expect( $(element).attr('class')).toContain('ng-isolate-scope');
        expect( $(element).attr('class')).toContain('airportSearch');
    });
    it('should add an airports object, with a size===0 value to the scope', function() {
        var scope = element.isolateScope();
        expect( scope.airports ).toBeDefined();
        expect( scope.airports.size ).toBe(0);
    });
    describe('should expose a toggleAirports method that', function() {
        it('should exist', function() {
            var scope = element.isolateScope();
            expect( scope.toggleAirports ).toBeDefined();
            expect( angular.isFunction(scope.toggleAirports )).toBeTruthy();
        });
        it('toggles an open boolean property on the airports object on the scope', function() {
            var scope = element.isolateScope();
            expect( scope.airports.open ).toBeFalsy();
            scope.toggleAirports();
            expect( scope.airports.open ).toBeTruthy();
            scope.toggleAirports();
            expect( scope.airports.open ).toBeFalsy();
        });
    });
    describe('should expose a findAirport method that', function() {
        it('should exist', function() {
            var scope = element.isolateScope();
            expect( scope.findAirport ).toBeDefined();
            expect( angular.isFunction(scope.findAirport )).toBeTruthy();
        });
        it('should list all airports that match the query in the scope', function() {
            var scope = element.isolateScope();
            scope.airports.query='cong';
            scope.findAirport();
            expect( scope.airports.list.length ).toBe(2);
        });
    });
    describe('should expose a selectAirport method that', function() {
        it('should exist', function() {
            var scope = element.isolateScope();
            expect( scope.findAirport ).toBeDefined();
            expect( angular.isFunction(scope.findAirport )).toBeTruthy();
        });
        it('should set the selectedAirport name and code on the scope', function() {
            var scope = element.isolateScope();
            var sel =scope.selectedAirport;
            expect( scope.selectedAirport.code ).toBe('CGH');
            scope.selectAirport({name:'Santos Dumont', code:'SDU'});
            expect( sel.code ).toBe('SDU');
            expect( sel.name ).toBe('Santos Dumont');
        });
        it('should set the airports.open property to false', function() {
            var scope = element.isolateScope();

            scope.toggleAirports();
            expect( scope.airports.open ).toBeTruthy();
            scope.selectAirport({name:'Santos Dumont', code:'SDU'});
            expect( scope.airports.open ).toBeFalsy();
        });
    });
});
