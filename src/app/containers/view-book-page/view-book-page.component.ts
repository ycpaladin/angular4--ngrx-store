
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as book from '../../actions/book.action';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
    selector: 'app-view-book-page',
    templateUrl: './view-book-page.component.html',
    styleUrls: ['./view-book-page.component.css']
})
export class ViewBookPageComponent implements OnDestroy {


    actionsSubscription: Subscription;
    // dd: Observable<any>;
    constructor(store: Store<fromRoot.State>, route: ActivatedRoute) {
        this.actionsSubscription = route.params.pipe(
            map(p => new book.SelectAction(p['id']))
        ).subscribe(store);
    }


    ngOnDestroy(): void {
        this.actionsSubscription.unsubscribe();
    }
}
