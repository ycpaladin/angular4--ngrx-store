import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './reducers';
import * as layout from './actions/layout.action';
import { Observable } from 'rxjs';

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
        this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
    }

    title = 'app';

    closeSidenav() {

        this.store.dispatch(new layout.CloseSidenavAction());
    }

    openSidenav() {
        this.store.dispatch(new layout.OpenSidenavAction());
    }
}
