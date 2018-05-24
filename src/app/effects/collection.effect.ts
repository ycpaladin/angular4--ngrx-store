import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Database } from '@ngrx/db';

import * as collection from '../actions/collection.action';
import { Book } from '../models/book';
import { startWith, switchMap, map, catchError, toArray, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable()
export class CollectionEffects {


    @Effect()
    loadCollection$: Observable<Action> = this.actions$.pipe(
        ofType<collection.LoadAction>(collection.LOAD),
        startWith(new collection.LoadAction()),
        switchMap(() => this.db.query('books').pipe(
            toArray(),
            map((books: Book[]) => new collection.LoadSuccessAction(books)),
            catchError(e => of(new collection.LoadFailAction(e)))
        ))
    );



    @Effect()
    addBookToCollection$: Observable<Action> = this.actions$
        .pipe(
            ofType<collection.AddBookAction>(collection.ADD_BOOK),
            map(action => action.payload),
            mergeMap(book =>
                this.db.insert('books', [book]).pipe(
                    map(() => new collection.AddBookSuccessAction(book)),
                    catchError(e => of(new collection.AddBookFailAction(book)))
                )
            ));


    @Effect()
    removeBookFromCollection$: Observable<Action> = this.actions$
        .pipe(
            ofType<collection.RemoveBookAction>(collection.REMOVE_BOOK),
            map(action => action.payload),
            mergeMap(book => this.db.executeWrite('books', 'delete', [book.id]).pipe(
                map(() => new collection.RemoveBookSuccessAction(book)),
                catchError(e => of(new collection.RemoveBookFailAction(book)))
            ))
        );


    @Effect()
    removeAllBookFromCollection$: Observable<Action> = this.actions$.pipe(
        ofType<collection.RemoveAllBooksAction>(collection.REMOVE_ALL_BOOKS),
        mergeMap(() => this.db.query('books').pipe(
            map((book: Book) => book.id),
            toArray(),
            mergeMap((bookIds: string[]) => this.db.executeWrite('books', 'delete', bookIds).pipe(
                map(() => new collection.RemoveAllBooksSucessAction()),
                catchError(error => of(new collection.RemoveAllBooksFailAction())
                ))
            ))
        ));


    constructor(private actions$: Actions, private db: Database) {

    }
}

