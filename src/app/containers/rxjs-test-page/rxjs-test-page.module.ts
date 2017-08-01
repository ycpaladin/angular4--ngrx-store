import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RxjsTestPageComponent } from './rxjs-test-page.component';

import { RxjsMapTestComponent } from './components/rxjs-map-test/rxjs-map-test.component';

import { routing } from './rxjs-test.routing';

@NgModule({
    imports: [
        routing,
        CommonModule,
        MaterialModule,
    ],
    declarations: [
        RxjsTestPageComponent,
        RxjsMapTestComponent
    ]
})
export class RxjsTestPageModule { }
