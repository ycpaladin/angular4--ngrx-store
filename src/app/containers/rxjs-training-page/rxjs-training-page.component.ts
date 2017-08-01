
// import 'rxjs/add/operator/fromEvent';

import { Component, OnInit } from '@angular/core';

interface User {
    name: string;
    age: number;
}


@Component({
    selector: 'app-rxjs-training-page',
    templateUrl: './rxjs-training-page.component.html',
    styleUrls: ['./rxjs-training-page.component.css']
})
export class RxjsTrainingPageComponent implements OnInit {


    constructor() { }

    ngOnInit() {

    }

}
