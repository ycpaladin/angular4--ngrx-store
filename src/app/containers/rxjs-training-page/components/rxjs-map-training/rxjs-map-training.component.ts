import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

import { Component, OnInit } from '@angular/core';


interface User {
    name: string;
    age: number;
}

@Component({
    selector: 'app-rxjs-map-training',
    templateUrl: './rxjs-map-training.component.html',
    styleUrls: ['./rxjs-map-training.component.css']
})
export class RxjsMapTrainingComponent implements OnInit {

    data$: Observable<string[]>;
    constructor() { }

    ngOnInit() {
        const _d: User[] = [{ name: 'kevin', age: 31 }, { name: 'lxy', age: 27 }, { name: 'ccw', age: 1 }];

        this.data$ = Observable.from(_d).map((user: User) => user.name).toArray();

    }

}
