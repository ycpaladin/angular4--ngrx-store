import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RxjsTrainingPageComponent } from './rxjs-training-page.component';

import { RxjsMapTrainingComponent } from './components/rxjs-map-training/rxjs-map-training.component';

import { routing } from './rxjs-training.routing';

@NgModule({
    imports: [
        routing,
        CommonModule,
        MaterialModule,
    ],
    declarations: [
        RxjsTrainingPageComponent,
        RxjsMapTrainingComponent
    ]
})
export class RxjsTrainingPageModule { }
