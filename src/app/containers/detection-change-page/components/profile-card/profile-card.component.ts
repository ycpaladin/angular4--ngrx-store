import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-profile-card',
    templateUrl: './profile-card.component.html',
    styleUrls: ['./profile-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCardComponent implements OnInit, OnChanges {


    @Input() profile: { name: string, age: number };
    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('profile has changed ...');
    }

    Update() {
        this.profile.name = 'kkkkkkk';
    }

}
