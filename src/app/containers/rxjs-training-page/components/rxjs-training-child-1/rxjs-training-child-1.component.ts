import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck } from '@angular/core';

@Component({
    selector: 'app-rxjs-training-child-1',
    templateUrl: './rxjs-training-child-1.component.html',
    styleUrls: ['./rxjs-training-child-1.component.css']
})
export class RxjsTrainingChild1Component implements OnInit, OnChanges, DoCheck {



    @Input() value: string;
    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges from RxjsTrainingChild1Component...');
    }

    ngDoCheck(): void {
        console.log('ngDoCheck from RxjsTrainingChild1Component...');
    }

}
