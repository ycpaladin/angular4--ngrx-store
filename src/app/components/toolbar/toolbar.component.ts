import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    // encapsulation: ViewEncapsulation.None,
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    @Output() openMenu = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

}
