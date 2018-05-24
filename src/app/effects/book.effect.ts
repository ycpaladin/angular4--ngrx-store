
import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { GoogleBooksService } from '../services/google-books.service';
import * as book from '../actions/book.action';
import { Observable, empty, of } from 'rxjs';
import { map, switchMap, skip, takeUntil, catchError } from 'rxjs/operators';
import { Book } from '../models/book';

@Injectable()
export class BookEffects {

    constructor(private actions$: Actions, private googleBooks: GoogleBooksService) { }

    @Effect()
    search$: Observable<Action> = this.actions$.pipe(
        ofType<book.SearchAction>(book.SEARCH),
        map(action => action.payload),
        switchMap(query => {
            if (query === '') {
                return empty();
            }
            const nextSearch$ = this.actions$.pipe(
                ofType<book.SearchAction>(book.SEARCH),
                skip(1),
            );

            return this.googleBooks.searchBooks(query).pipe(
                takeUntil(nextSearch$),
                map((books: Book[]) => new book.SearchCompleteAction(books)),
                catchError(() => of(new book.SearchCompleteAction([])))
            );
        })
    );

}
