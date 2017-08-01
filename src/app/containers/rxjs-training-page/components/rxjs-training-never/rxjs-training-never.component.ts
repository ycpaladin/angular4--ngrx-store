import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-rxjs-training-never',
    templateUrl: './rxjs-training-never.component.html',
    styleUrls: ['./rxjs-training-never.component.css']
})
export class RxjsTrainingNeverComponent implements OnInit {

    constructor() { }
    // http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-never
    ngOnInit() {
    }

}
