import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Book } from '../../models/book';
import * as fromRoot from '../../reducers';
import * as collection from '../../actions/collection.action';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-selected-book-page',
    templateUrl: './selected-book-page.component.html',
    styleUrls: ['./selected-book-page.component.css']
})
export class SelectedBookPageComponent implements OnInit {

    book$: Observable<Book>;
    isSelectedBookInCollection$: Observable<boolean>;
    constructor(private store: Store<fromRoot.State>) {
        this.book$ = store.pipe(select(fromRoot.getSelectedBook));
        this.isSelectedBookInCollection$ = store.pipe(select(fromRoot.isSelectedBookInCollection));
    }


    ngOnInit() {
    }

    addToCollection(book: Book) {
        this.store.dispatch(new collection.AddBookAction(book));
    }

    removeFromCollection(book: Book) {
        this.store.dispatch(new collection.RemoveBookAction(book));
    }

}
