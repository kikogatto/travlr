System.register(['angular2/platform/browser', '../app/travlr'], function(exports_1) {
    var browser_1, travlr_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (travlr_1_1) {
                travlr_1 = travlr_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(travlr_1.Travlr);
        }
    }
});
//# sourceMappingURL=boot.js.map