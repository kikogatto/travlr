System.register(['angular2/core', '../../modules/engagements/engagementForm', '../../modules/tripRequests/twoWayTripForm'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, engagementForm_1, twoWayTripForm_1;
    var Toolbar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (engagementForm_1_1) {
                engagementForm_1 = engagementForm_1_1;
            },
            function (twoWayTripForm_1_1) {
                twoWayTripForm_1 = twoWayTripForm_1_1;
            }],
        execute: function() {
            Toolbar = (function () {
                function Toolbar() {
                    this.tabs = [
                        {
                            icon: 'fa-paper-plane-o',
                            label: '2 way trip'
                        },
                        {
                            icon: 'fa-star',
                            label: 'Favorites'
                        },
                        {
                            icon: 'fa-suitcase',
                            label: 'Engagement'
                        }
                    ];
                    this.toolbarPanel = undefined;
                    this.status = 'closed';
                    this.selectedTab = undefined;
                    this.originalIcon = undefined;
                    this.selectTab = function (tab) {
                        if (this.selectedTab) {
                            this.selectedTab.icon = this.originalIcon;
                            if (this.selectedTab === this.tabs[tab]) {
                                this.selectedTab = undefined;
                                this.status = 'closed';
                                this.toolbarPanel = undefined;
                                return;
                            }
                        }
                        this.selectedTab = this.tabs[tab];
                        this.originalIcon = this.tabs[tab].icon;
                        this.tabs[tab].icon = 'fa-minus';
                        this.status = 'open';
                        this.toolbarPanel = this.selectedTab.label;
                    };
                }
                Toolbar = __decorate([
                    core_1.Component({
                        selector: 'toolbar',
                        template: "\n\t\t<section class='toolbar'>\n\t\t    <div class=\"bar bar-standard bar-footer-secondary {{status}}\" [ngSwitch]=\"toolbarPanel\">\n\t\t    \t<template [ngSwitchWhen]=\"'2 way trip'\"><two-way-trip-form>Engagement</two-way-trip-form></template>\n\t\t    \t<template [ngSwitchWhen]=\"'Favorites'\">Lista de favoritos</template>\n\t\t    \t<template [ngSwitchWhen]=\"'Engagement'\"><engagement-form>Engagement</engagement-form></template>\n\t\t    </div>\n\t\t    <nav class=\"bar bar-tab\">\n\t\t        <a class=\"tab-item\" (click)='selectTab(0)'>\n\t\t        \t<span class=\"icon\"><i class='fa {{tabs[0].icon}}'></i></span>\n\t\t        \t<span class=\"tab-label\">{{tabs[0].label}}</span>\n\t\t        </a>\n\t\t        <a class=\"tab-item\" (click)='selectTab(1)'>\n\t\t            <span class=\"icon\"><i class='fa {{tabs[1].icon}}'></i></span>\n\t\t            <span class=\"tab-label\">{{tabs[1].label}}</span>\n\t\t        </a>\n\t\t        <a class=\"tab-item\" (click)='selectTab(2)'>\n\t\t        \t<span class=\"icon\"><i class='fa {{tabs[2].icon}}'></i></span>\n\t\t        \t<span class=\"tab-label\">{{tabs[2].label}}</span>\n\t\t        </a>\n\t\t    </nav>\n\t\t</section>\n    ",
                        directives: [engagementForm_1.EngagementForm, twoWayTripForm_1.TwoWayTripForm]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Toolbar);
                return Toolbar;
            })();
            exports_1("Toolbar", Toolbar);
        }
    }
});
//# sourceMappingURL=toolbar.js.map