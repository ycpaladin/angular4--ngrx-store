
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


    constructor() { }

    ngOnInit() {

    }

}
