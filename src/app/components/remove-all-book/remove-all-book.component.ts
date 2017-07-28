import { Component, OnInit } from '@angular/core';
import * as collection from '../../actions/collection.action';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-remove-all-book',
    templateUrl: './remove-all-book.component.html',
    styleUrls: ['./remove-all-book.component.css']
})
export class RemoveAllBookComponent implements OnInit {

    constructor(private store: Store<any>) { }

    ngOnInit() {
    }

    removeAllBook() {
        this.store.dispatch(new collection.RemoveAllBooksAction());
    }

}
