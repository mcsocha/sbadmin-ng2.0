import {Component, OnInit} from 'angular2/core';
import {NavigationComponent} from './navigation.component';
import {UserProfileComponent} from './user-profile.component';
import {DashboardComponent} from './dashboard.component';
import {bootstrap} from 'angular2/platform/browser';
import {AppView} from './app-view';

@Component({
    selector: 'app',
    template: `
    <navigation []></navigation>
    <div id="page-wrapper">
        <dashboard *ngIf="activeView === 'dashboard'"></dashboard>
        <user-profile *ngIf="activeView === 'user-profile'"></user-profile>
    </div>
    `,
    directives: [NavigationComponent, UserProfileComponent, DashboardComponent]
})
export class AppComponent implements OnInit {  
    public activeView: AppView;

    ngOnInit() { }
    
    setTitle(title) {
        document.title = title;
    }
    getTitle() {
        return document.title;
    }
}

bootstrap(AppComponent);