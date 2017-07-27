
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { defer } from 'rxjs/observable/defer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { GoogleBooksService } from '../services/google-books.service';
import * as book from '../actions/book.action';

@Injectable()
export class BookEffects {

    constructor(private actions$: Actions, private googleBooks: GoogleBooksService) { }

    @Effect()
    search$: Observable<Action> = this.actions$.ofType(book.SEARCH).map(toPayload).switchMap(query => {
        if (query === '') {
            return empty();
        }

        const nextSearch$ = this.actions$.ofType(book.SEARCH).skip(1);
        return this.googleBooks.searchBooks(query)
            .takeUntil(nextSearch$)
            .map(books => new book.SearchCompleteAction(books))
            .catch(() => of(new book.SearchCompleteAction([])));
    });
}
