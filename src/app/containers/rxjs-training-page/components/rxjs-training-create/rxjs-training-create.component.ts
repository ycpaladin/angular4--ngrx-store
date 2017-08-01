import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/concat';
import { of } from 'rxjs/observable/of';
import { interval } from 'rxjs/observable/interval';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-rxjs-training-create',
    templateUrl: './rxjs-training-create.component.html',
    styleUrls: ['./rxjs-training-create.component.css']
})
export class RxjsTrainingCreateComponent implements OnInit {

    data$: Observable<any[]>;
    constructor() { }

    ngOnInit() {
        // Observable.of(1, 2, 3, 4);
        // this.data$ = of(...[1, 2, 3, 4, 5, 6]).toArray();
        const numbers$ = of(10, 20, 30);
        const letters$ = of('a', 'b', 'c');
        const interval$ = interval(1000);
        this.data$ = numbers$.concat(letters$).toArray();
        const result$ = this.data$.concat(interval$); // .concat(interval$);
        result$.subscribe(function (v) {
            console.log(v);
        });
        // this.data$ = Observable.create(function (observer) {
        //     observer.next(1);
        //     observer.next(2);
        //     observer.next(3);
        //     observer.complete();
        // });

        // const x = this.data$.toArray();

        // console.log(x);

        // this.data$.subscribe(function (v) {
        //     console.log(v);
        // });
    }

}
