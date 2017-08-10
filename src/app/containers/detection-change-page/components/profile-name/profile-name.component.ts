import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-profile-name',
    templateUrl: './profile-name.component.html',
    styleUrls: ['./profile-name.component.css']
})
export class ProfileNameComponent implements OnInit {

    @Input() name: string;
    constructor() { }

    ngOnInit() {
    }

}
