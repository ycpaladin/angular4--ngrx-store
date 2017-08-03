import { Component, OnInit, DoCheck, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
    selector: 'app-rxjs-training-child-2',
    templateUrl: './rxjs-training-child-2.component.html',
    styleUrls: ['./rxjs-training-child-2.component.css']
})
export class RxjsTrainingChild2Component implements OnInit, DoCheck, OnChanges {



    @Input() value: string;
    constructor() { }

    ngOnInit() {
    }

    ngDoCheck(): void {
        console.log('ngDoCheck from RxjsTrainingChild2Component...');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges from RxjsTrainingChild2Component...');
    }
}
