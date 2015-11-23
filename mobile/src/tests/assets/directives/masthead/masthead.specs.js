'use strict';
/* global angular, jasmine, describe, it, xit, expect, module, inject, beforeEach, spyOn */


describe('The masthead service', function(){
    beforeEach( module('masthead') );
    var mastheadServices;
    beforeEach( inject( function( _mastheadServices_){
        mastheadServices = _mastheadServices_;
    }));

    it( 'should set the configs object on the services to the default values', function() {
        expect(mastheadServices.configs.mode).toBe(0);
        expect(mastheadServices.configs.title).toBe('Travlr');
    });

    describe('It should expose a config method that', function() {
        it( 'exists', function() {
            expect(mastheadServices.config).toBeDefined();
        });
        it( 'should set the configs object on the services', function() {
            mastheadServices.config({mode:1,title:'A new title'});
            expect(mastheadServices.configs.mode).toBe(1);
            expect(mastheadServices.configs.title).toBe('A new title');
        });
    });
});

describe('The masthead directive', function() {
    var element;
    var $rootScope;
    var $q;
    beforeEach( module('masthead') );
    beforeEach(inject( function ( $compile, _$q_, _$rootScope_ ) {
        $rootScope = _$rootScope_;
        $q = _$q_;
        var scope = $rootScope.$new();
        element = $compile('<div masthead></div>')( scope );
        scope.$digest();
    }));

    it('should have an isolated scope', inject( function() {
        var scope = element.isolateScope();
        expect( scope ).toBeDefined();
    }));

    it('should replace the element with the appropriate content that', function() {
        expect( $(element).prop('tagName') ).toEqual('HEADER');
        expect( $(element).attr('class').indexOf('bar') >=0 ).toBeTruthy();
        expect( $(element).attr('class').indexOf('bar-nav') >=0 ).toBeTruthy();
    });
    it('should add a configs element with all configs to the scope', function() {
        var scope = element.isolateScope();
        expect( scope.configs ).toBeDefined();
    });
    it('should set the scope configs for the MENU mode', function() {
        var scope = element.isolateScope();
        expect( scope.configs ).toBeDefined();
        expect( scope.configs.mode ).toBe(0);
        expect( scope.configs.title ).toBe('Travlr');
        expect( scope.configs.leftIcon ).not.toBeDefined();
        expect( scope.configs.rightIcon ).toBe('fa-navicon');
    });

    it('should render the html for the MENU mode', function() {
        var a = $(element).children('a').first();
        expect( $(a).attr('class').indexOf('icon') >=0 ).toBeTruthy();
        expect( $(a).attr('class').indexOf('pull-right') >=0 ).toBeTruthy();
    });

    it('should set the scope configs for the BACK mode', inject(function(mastheadServices) {
        mastheadServices.config({mode:1, title:'Travlr2'});
        var scope = element.isolateScope();
        expect( scope.configs ).toBeDefined();
        expect( scope.configs.mode ).toBe(1);
        expect( scope.configs.title ).toBe('Travlr2');
        expect( scope.configs.leftIcon ).toBe('fa-chevron-left');
    }));
    describe('should expose a toggleMenu method that', function() {
        it('should exist', function() {
            var scope = element.isolateScope();
            expect( scope.toggleMenu ).toBeDefined();
            expect( angular.isFunction(scope.toggleMenu )).toBeTruthy();
        });
        it('should toggle a boolean isOpen property on the scope', function() {
            var scope = element.isolateScope();
            expect( scope.isOpen ).toBeFalsy();
            scope.toggleMenu();
            expect( scope.isOpen ).toBeTruthy();
        });
        it('should set the left property to -150px on all dom elements with .content and .bar class, if toggled to open', function() {
            var scope = element.isolateScope();
            // expect( $('.content').css('left')).toBe('0px');
            // expect( $('.bar').css('left')).toBe('0px');
            scope.toggleMenu();
            // expect( $('.content').css('left')).toBe('-150px');
            // expect( $('.bar').css('left')).toBe('-150px');
        });

        it('should set the left property to 0px on all dom elements with .content and .bar class, if toggled to not open', function() {
            var scope = element.isolateScope();
            scope.toggleMenu();
            // expect( $('.content').css('left')).toBe('-150px');
            // expect( $('.bar').css('left')).toBe('-150px');
            scope.toggleMenu();
            // expect( $('.content').css('left')).toBe('0px');
            // expect( $('.bar').css('left')).toBe('0px');
        });
    });
});

