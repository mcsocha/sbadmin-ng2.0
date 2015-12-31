import {Component} from 'angular2/core';

@Component({
    selector: 'dashboard',
    template: `
    <div class="row">
        <div class="col-lg-12">
            <h1>Dashboard</h1>
            <p class="widget">
                "Set Title" widget<br/>
                <input [(ngModel)]="title" width="30" />
            </p>
        </div>
    </div>
    `,
    styles: [
        ""
    ]
})
export class DashboardComponent {
}