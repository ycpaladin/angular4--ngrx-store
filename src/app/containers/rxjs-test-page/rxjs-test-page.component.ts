import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
// import 'rxjs/add/operator/fromEvent';

import { Component, OnInit } from '@angular/core';

interface User {
    name: string;
    age: number;
}


@Component({
    selector: 'app-rxjs-test-page',
    templateUrl: './rxjs-test-page.component.html',
    styleUrls: ['./rxjs-test-page.component.css']
})
export class RxjsTestPageComponent implements OnInit {


    data$: Observable<string[]>;

    constructor() { }

    ngOnInit() {
        const _d: User[] = [{ name: 'kevin', age: 31 }, { name: 'lxy', age: 27 }, { name: 'ccw', age: 1 }];

        this.data$ = Observable.from(_d).map((user: User) => user.name).toArray();
        // this.data$ = x$.toArray();

        // const x$ = Observable.from(_d).toArray();

        // x$.subscribe({
        //     next(v) {
        //         console.log(v);
        //     },
        //     error(e) {
        //         console.log('error=>', e);
        //     },
        //     complete() {
        //         console.log('done.');
        //     }
        // });

    }

}
