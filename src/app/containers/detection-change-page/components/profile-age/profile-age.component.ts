import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-profile-age',
    templateUrl: './profile-age.component.html',
    styleUrls: ['./profile-age.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileAgeComponent implements OnInit, OnChanges {

    @Input() age: number;
    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('profile-age has changed..');
    }
}
