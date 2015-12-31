import {Component} from 'angular2/core';

@Component({
    selector: 'user-profile',
    template: `
    <div class="row">
        <div class="col-lg-12">
            <h1>User Profile</h1>
            <p>
                Hello, {{firstName}}!<br/>
                Some Text...
            </p>
        </div>
    </div>
    `,
    inputs: ['firstName']
})
export class UserProfileComponent {
    public firstName: string;
}