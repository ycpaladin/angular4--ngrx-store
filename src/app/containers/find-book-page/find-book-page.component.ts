import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../reducers';
import * as book from '../../actions/book.action';
import { Book } from '../../models/book';


@Component({
    selector: 'app-find-book-page',
    templateUrl: './find-book-page.component.html',
    styleUrls: ['./find-book-page.component.css']
})
export class FindBookPageComponent implements OnInit {

    searchQuery$: Observable<string>;
    books$: Observable<Book[]>;
    loading$: Observable<boolean>;
    constructor(private store: Store<fromRoot.State>) {
        this.searchQuery$ = store.select(fromRoot.getSearchQuery).take(1);
        this.books$ = store.select(fromRoot.getSearchResults);
        this.loading$ = store.select(fromRoot.getSearchLoading);
    }

    ngOnInit() {
    }

    search(query: string) {
        this.store.dispatch(new book.SearchAction(query));
    }
}
