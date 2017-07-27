import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/let';

import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as book from '../actions/book.action';
import { GoogleBooksService } from '../services/google-books.service';

@Injectable()
export class BookExistsGuard implements CanActivate {

    constructor(
        private store: Store<fromRoot.State>,
        private googleBooks: GoogleBooksService,
        private router: Router) { }

    waitForCollectionToLoad(): Observable<boolean> {
        return this.store.select(fromRoot.getCollectionLoaded)
            .filter(loaded => loaded)
            .take(1);
    }

    hasBookInStore(id: string): Observable<boolean> {
        return this.store.select(fromRoot.getBookEntities)
            .map(entities => !!entities[id])
            .take(1);
    }

    hasBookInApi(id: string): Observable<boolean> {
        return this.googleBooks.retrieveBook(id)
            .map(bookEntity => new book.LoadAction(bookEntity))
            .do((action: book.LoadAction) => this.store.dispatch(action))
            .map(book => !!book)
            .catch(() => {
                this.router.navigate(['/404']);
                return of(false);
            });
    }

    hasBook(id: string): Observable<boolean> {
        return this.hasBookInStore(id)
            .switchMap(inStore => {
                if (inStore) {
                    return of(inStore);
                }

                return this.hasBookInApi(id);
            });
    }




    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return of(true);
    }
}
