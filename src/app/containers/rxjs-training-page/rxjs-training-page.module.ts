import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { RxjsTrainingPageComponent } from './rxjs-training-page.component';

import { RxjsTrainingMapComponent } from './components/rxjs-training-map/rxjs-training-map.component';

import { routing } from './rxjs-training.routing';
import { RxjsTrainingFromEventComponent } from './components/rxjs-training-fromEvent/rxjs-training-fromEvent.component';
import { RxjsTrainingCreateComponent } from './components/rxjs-training-create/rxjs-training-create.component';
import { RxjsTrainingNeverComponent } from './components/rxjs-training-never/rxjs-training-never.component';
import { RxjsTrainingChild1Component } from './components/rxjs-training-child-1/rxjs-training-child-1.component';
import { RxjsTrainingChild2Component } from './components/rxjs-training-child-2/rxjs-training-child-2.component';
import { RxjsTrainingHttpComponent } from './components/rxjs-training-http/rxjs-training-http.component';

@NgModule({
    imports: [
        routing,
        CommonModule,
        MaterialModule,
        HttpModule
    ],
    declarations: [
        RxjsTrainingPageComponent,
        RxjsTrainingMapComponent,
        RxjsTrainingFromEventComponent,
        RxjsTrainingCreateComponent,
        RxjsTrainingNeverComponent,
        RxjsTrainingChild1Component,
        RxjsTrainingChild2Component,
        RxjsTrainingHttpComponent
    ]
})
export class RxjsTrainingPageModule { }
