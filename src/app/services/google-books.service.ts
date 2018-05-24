import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GoogleBooksService {

    private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

    constructor(private http: HttpClient) { }

    searchBooks(queryTitle: string): Observable<Book[]> {
        return this.http.get<{}>(`${this.API_PATH}?q=${queryTitle}`).pipe(map(d => d['items']));
    }

    retrieveBook(volumeId: string): Observable<Book> {
        return this.http.get<Book>(`${this.API_PATH}/${volumeId}`);
    }

}
