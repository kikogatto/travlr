'use strict';
/* global angular, jasmine, describe, it, xit, expect, module, inject, beforeEach, spyOn */


describe('The travlr module', function() {
    var httpProvider;
    var $route;
    beforeEach( module('travlr', function($httpProvider) {
        httpProvider = $httpProvider;
    }));
    beforeEach(inject(function( _$route_) {
        $route = _$route_;
    }));

    it('should have these requirements', function() {
        var openFlame = angular.module('travlr');
        expect(openFlame.requires.length).toBe(9);
        expect(openFlame.requires).toContain('ngRoute');
        expect(openFlame.requires).toContain('ngResource');
        expect(openFlame.requires).toContain('ngAnimate');
        expect(openFlame.requires).toContain('ngSanitize');
        expect(openFlame.requires).toContain('compiledTemplates');

        expect(openFlame.requires).toContain('masthead');
        expect(openFlame.requires).toContain('trips');
        expect(openFlame.requires).toContain('engagements');
    });

});

