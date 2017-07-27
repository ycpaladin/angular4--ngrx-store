
import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/observable';
import * as fromRoot from '../../reducers';
import * as book from '../../actions/book.action';


@Component({
    selector: 'app-view-book-page',
    templateUrl: './view-book-page.component.html',
    styleUrls: ['./view-book-page.component.css']
})
export class ViewBookPageComponent implements OnDestroy {


    actionsSubscription: Subscription;
    // dd: Observable<any>;
    constructor(store: Store<fromRoot.State>, route: ActivatedRoute) {
        this.actionsSubscription = route.params
            .select<string>('id')
            .map(id => new book.SelectAction(id))
            .subscribe(store);
        // console.log(route);
    }


    ngOnDestroy(): void {
        this.actionsSubscription.unsubscribe();
    }
}
