System.register(['angular2/core', './assets/components/masthead', './assets/components/toolbar', './assets/components/backgroundMenu'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, masthead_1, toolbar_1, backgroundMenu_1;
    var Travlr;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (masthead_1_1) {
                masthead_1 = masthead_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (backgroundMenu_1_1) {
                backgroundMenu_1 = backgroundMenu_1_1;
            }],
        execute: function() {
            Travlr = (function () {
                function Travlr() {
                }
                Travlr = __decorate([
                    core_1.Component({
                        selector: 'travlr',
                        template: "\n\t\t<section class='closed'>\n\t\t    <masthead>a</masthead>\n\t\t    <toolbar>a</toolbar>\n\t\t    <div class='content'>\n\t\t      <div style='color:gray; text-align:center;'>\n\t\t        <br><Br><BR><BR>\n\t\t        <i class='fa fa-paper-plane-o' style='font-size:80px;color:gray;'></i>\n\t\t        <div>You don't have any trips</div>\n\t\t      </div>\n\t\t    </div>\n\t\t</section>\n\t\t<background-menu class='backgroundMenu'></background-menu>\n    ",
                        directives: [masthead_1.Masthead, toolbar_1.Toolbar, backgroundMenu_1.BackgroundMenu]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Travlr);
                return Travlr;
            })();
            exports_1("Travlr", Travlr);
        }
    }
});
//# sourceMappingURL=travlr.js.map