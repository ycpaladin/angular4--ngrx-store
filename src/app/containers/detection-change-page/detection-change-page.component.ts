import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-detection-change-page',
    templateUrl: './detection-change-page.component.html',
    styleUrls: ['./detection-change-page.component.css']
})
export class DetectionChangePageComponent implements OnInit, OnChanges {


    constructor() { }



    profile: { name: string, age: number } = {
        name: 'Semlinker',
        age: 31
    };

    message = '-----@@@@_@@@@-----';

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('root has changed.');
    }

    Change() {
        this.profile.name = 'kevin';
    }

    Change2() {
        this.message = 'Hello,@@@';
    }


}
