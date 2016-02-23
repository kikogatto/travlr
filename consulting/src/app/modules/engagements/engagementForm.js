System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var EngagementForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EngagementForm = (function () {
                function EngagementForm() {
                }
                EngagementForm = __decorate([
                    core_1.Component({
                        selector: 'engagement-form',
                        template: "\n\t\t<form>\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"engagementName\">Engagement Name</label>\n\t\t    <input  class=\"form-control\" id=\"engagementName\" placeholder=\"Name\"  type='text'>\n\t\t  </div>\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"engagementCity\">City</label>\n\t\t    <input type=\"text\" class=\"form-control\" id=\"engagementCity\" placeholder=\"City\">\n\t\t  </div>\n\t\t  <div class=\"form-group\">\n\t\t    <label for=\"engagementChargeCode\">Charge Code</label>\n\t\t    <input type=\"text\" class=\"form-control\" id=\"engagementChargeCode\" placeholder=\"Charge Code\">\n\t\t  </div>\n\t\t  <div class=\"checkbox\">\n\t\t    <label>\n\t\t      <input type=\"checkbox\"> Include hotel?\n\t\t    </label>\n\t\t  </div>\n\t\t  <button type=\"submit\" class=\"btn btn-default\">Create</button>\n\t\t</form>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EngagementForm);
                return EngagementForm;
            })();
            exports_1("EngagementForm", EngagementForm);
        }
    }
});
//# sourceMappingURL=engagementForm.js.map