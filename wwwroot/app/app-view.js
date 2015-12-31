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
    var AppViewService, VIEWS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppViewService = (function () {
                function AppViewService() {
                }
                AppViewService.prototype.getViews = function () {
                    return Promise.resolve(VIEWS);
                };
                // See the "Take it slow" appendix
                AppViewService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(VIEWS); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                AppViewService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AppViewService);
                return AppViewService;
            })();
            exports_1("AppViewService", AppViewService);
            exports_1("VIEWS", VIEWS = [
                { name: "dashboard", id: 1 },
                { name: "user-profile", id: 2 }
            ]);
        }
    }
});
