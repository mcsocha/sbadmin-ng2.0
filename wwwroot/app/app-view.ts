import {AppView} from './app-view';
import {Injectable} from 'angular2/core';

@Injectable()
export class AppViewService {
    getViews() {
        return Promise.resolve(VIEWS);
    }

    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<AppView[]>(resolve =>
            setTimeout(() => resolve(VIEWS), 2000) // 2 seconds
        );
    }
}

export interface AppView {
    name: string;
    id: number;
}

export var VIEWS: AppView[] = [
    { name: "dashboard", id: 1 },
    { name: "user-profile", id: 2 }
];
