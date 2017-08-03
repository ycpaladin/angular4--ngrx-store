
// import 'rxjs/add/operator/fromEvent';

import { Component, OnInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

interface User {
    name: string;
    age: number;
}


@Component({
    selector: 'app-rxjs-training-page',
    templateUrl: './rxjs-training-page.component.html',
    styleUrls: ['./rxjs-training-page.component.css']
})
export class RxjsTrainingPageComponent implements OnInit, DoCheck, OnChanges {




    constructor() { }

    ngOnInit() {
        console.log('ngOnInit from page RxjsTrainingPageComponent..');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges from page RxjsTrainingPageComponent..');
    }

    ngDoCheck(): void {
        console.log('ngDoCheck from page RxjsTrainingPageComponent..');
    }

}
