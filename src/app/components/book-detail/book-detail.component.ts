import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

    @Input() book: Book;
    @Input() inCollection: boolean;
    @Output() add = new EventEmitter<Book>();
    @Output() remove = new EventEmitter<Book>();

    constructor() { }

    ngOnInit() {
    }

    get id() {
        return this.book.id;
    }

    get title() {
        return this.book.volumeInfo.title;
    }

    get subtitle() {
        return this.book.volumeInfo.subtitle;
    }

    get description() {
        return this.book.volumeInfo.description;
    }

    get thumbnail() {
        return this.book.volumeInfo.imageLinks
            && this.book.volumeInfo.imageLinks.smallThumbnail;
    }
}
