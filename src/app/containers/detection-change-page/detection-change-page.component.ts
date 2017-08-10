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

        setTimeout(() => {
            this.profile.name = 'lxy';
            console.log(this.profile.name);
        }, 2000);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('root has changed.');
    }

    Change() {
        this.profile.name = 'kevin';
        // this.profile = {
        //     name: 'kevin',
        //     age: 30
        // };
    }

    Change2() {
        this.message = 'Hello,@@@';
    }


}
