System.register(['angular2/core', './navigation.component', './user-profile.component', './dashboard.component', 'angular2/platform/browser'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, navigation_component_1, user_profile_component_1, dashboard_component_1, browser_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            },
            function (user_profile_component_1_1) {
                user_profile_component_1 = user_profile_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () { };
                AppComponent.prototype.setTitle = function (title) {
                    document.title = title;
                };
                AppComponent.prototype.getTitle = function () {
                    return document.title;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n    <navigation []></navigation>\n    <div id=\"page-wrapper\">\n        <dashboard *ngIf=\"activeView === 'dashboard'\"></dashboard>\n        <user-profile *ngIf=\"activeView === 'user-profile'\"></user-profile>\n    </div>\n    ",
                        directives: [navigation_component_1.NavigationComponent, user_profile_component_1.UserProfileComponent, dashboard_component_1.DashboardComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            browser_1.bootstrap(AppComponent);
        }
    }
});
