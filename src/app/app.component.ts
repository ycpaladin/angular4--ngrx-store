import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { Observable } from 'rxjs/Observable';


import * as layout from './actions/layout.action';

@Component({
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    //  encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    showSidenav$: Observable<boolean>;
    constructor(private store: Store<fromRoot.State>) {
        this.showSidenav$ = this.store.select(fromRoot.getShowSidenav);
    }

    title = 'app';

    closeSidenav() {

        this.store.dispatch(new layout.CloseSidenavAction());
    }

    openSidenav() {
        this.store.dispatch(new layout.OpenSidenavAction());
    }
}
