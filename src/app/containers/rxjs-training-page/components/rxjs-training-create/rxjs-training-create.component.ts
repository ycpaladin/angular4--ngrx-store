import { Observable } from 'rxjs/Observable'; // 还有一个rxjs/observable 里面也有一个Observable 他们并不一样
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/map';
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
        // 创建 Observable的方式有很多 create、of、from、fromEvent、fromPromise.....
        const numbers$ = of(10, 20, 30);
        const letters$ = of('a', 'b', 'c');
        const interval$ = interval(1000);
        // this.data$ = numbers$.concat(letters$).toArray();
        // const result$ = this.data$.concat(interval$); // .concat(interval$);
        // result$.subscribe(function (v) {
        //     console.log(v);
        // });
        this.data$ = Observable.create(function (observer) {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            setTimeout(() => {
                observer.next(4);
                observer.complete(); // 不加这个页面上不会显示任何数据，----因为调用create方法返回出来的Observable不会自动关闭！
            }, 3000);

        }).toArray();

        // const d2$ = d$.map((v: number) => v + 10); // .toArray();

        // d2$.subscribe(value => console.log(value));

        // const x = this.data$.toArray();

        // console.log(x);

        // this.data$.subscribe(function (v) {
        //     console.log(v);
        // });
    }

}
