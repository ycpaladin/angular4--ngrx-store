import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-nav-item',
    templateUrl: './nav-item.component.html',
    styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

    @Input() icon = '';
    @Input() hint = '';
    @Input() routerLink: string | any[] = '/';
    @Output() activate = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

}
