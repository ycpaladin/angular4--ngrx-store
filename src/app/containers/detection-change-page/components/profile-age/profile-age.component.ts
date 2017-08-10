import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-profile-age',
    templateUrl: './profile-age.component.html',
    styleUrls: ['./profile-age.component.css']
})
export class ProfileAgeComponent implements OnInit {
    @Input() age: number;
    constructor() { }

    ngOnInit() {
    }

}
