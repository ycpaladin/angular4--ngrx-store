import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-detection-change-page',
    templateUrl: './detection-change-page.component.html',
    styleUrls: ['./detection-change-page.component.css']
})
export class DetectionChangePageComponent implements OnInit {

    constructor() { }



    profile: { name: string, age: number } = {
        name: 'Semlinker',
        age: 31
    };

    message = '-----@@@@_@@@@-----';

    ngOnInit() {
    }

    Change() {
        this.profile = {
            name: 'kevin',
            age: 30
        };
    }

    Change2() {
        this.message = 'Hello,@@@';
    }
}
