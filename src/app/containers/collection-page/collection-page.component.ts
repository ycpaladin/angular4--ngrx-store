import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-collection-page',
    templateUrl: './collection-page.component.html',
    styleUrls: ['./collection-page.component.css']
})
export class CollectionPageComponent implements OnInit {

    books$: Observable<Book[]>;
    constructor(private store: Store<fromRoot.State>) {
        this.books$ = store.pipe(select(fromRoot.getBookCollection));
    }

    ngOnInit() {
    }

}
