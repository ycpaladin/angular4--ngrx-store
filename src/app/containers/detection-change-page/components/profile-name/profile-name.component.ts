import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-profile-name',
    templateUrl: './profile-name.component.html',
    styleUrls: ['./profile-name.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileNameComponent implements OnInit, OnChanges {


    @Input() name: string;
    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('profile-name has changed.');
    }
}
