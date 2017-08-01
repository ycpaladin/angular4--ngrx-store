import { never } from 'rxjs/observable/never';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';


@Component({
    selector: 'app-rxjs-training-never',
    templateUrl: './rxjs-training-never.component.html',
    styleUrls: ['./rxjs-training-never.component.css']
})
export class RxjsTrainingNeverComponent implements OnInit {

    data$: Observable<any>;
    constructor() { }
    // http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-never
    // https://yq.aliyun.com/articles/65027
    //
    ngOnInit() {
        const x$ = never().startWith(7);
        x$.subscribe((v) => {
            console.log('value => ', v);
        },
            (e) => {
                console.log(e);
            },
            () => {
                console.log('completed.');
            });
    }

}
