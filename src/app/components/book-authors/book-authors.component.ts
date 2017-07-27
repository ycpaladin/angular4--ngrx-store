import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';


@Component({
    selector: 'app-book-authors',
    templateUrl: './book-authors.component.html',
    styleUrls: ['./book-authors.component.css']
})
export class BookAuthorsComponent implements OnInit {
    @Input() book: Book;
    constructor() { }

    ngOnInit() {
    }


    get authors() {
        return this.book.volumeInfo.authors;
    }
}
