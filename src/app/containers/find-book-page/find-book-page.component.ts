import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as book from '../../actions/book.action';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


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
        this.searchQuery$ = store.pipe(select(fromRoot.getSearchQuery), take(1));
        this.books$ = store.pipe(select(fromRoot.getSearchResults));
        this.loading$ = store.pipe(select(fromRoot.getSearchLoading));
    }

    ngOnInit() {
    }

    search(query: string) {
        this.store.dispatch(new book.SearchAction(query));
    }
}
