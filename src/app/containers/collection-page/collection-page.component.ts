import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import * as fromRoot from '../../reducers';
import { Book } from '../../models/book';

@Component({
    selector: 'app-collection-page',
    templateUrl: './collection-page.component.html',
    styleUrls: ['./collection-page.component.css']
})
export class CollectionPageComponent implements OnInit {

    books$: Observable<Book[]>;
    constructor(private store: Store<fromRoot.State>) {
        this.books$ = store.select(fromRoot.getBookCollection);
    }

    ngOnInit() {
    }

}
