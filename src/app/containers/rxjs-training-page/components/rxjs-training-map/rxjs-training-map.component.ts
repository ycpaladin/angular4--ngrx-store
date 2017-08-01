import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

import { Component, OnInit } from '@angular/core';


interface User {
    name: string;
    age: number;
}

@Component({
    selector: 'app-rxjs-training-map',
    templateUrl: './rxjs-training-map.component.html',
    styleUrls: ['./rxjs-training-map.component.css']
})
export class RxjsTrainingMapComponent implements OnInit {

    data$: Observable<string[]>;
    constructor() { }

    ngOnInit() {
        // 初始化一个数组
        const _d: User[] = [{ name: 'kevin', age: 31 }, { name: 'lxy', age: 27 }, { name: 'ccw', age: 1 }];
        // 初始化一个Observable对象，并取出数组中的name属性，并转换为一个Array
        this.data$ = Observable.from(_d).map((user: User) => user.name).toArray();

    }

}
