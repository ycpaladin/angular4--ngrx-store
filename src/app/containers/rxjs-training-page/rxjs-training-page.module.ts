import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { RxjsTrainingPageComponent } from './rxjs-training-page.component';

import { RxjsTrainingMapComponent } from './components/rxjs-training-map/rxjs-training-map.component';

import { routing } from './rxjs-training.routing';
import { RxjsTrainingSectionComponent } from './components/rxjs-training-section/rxjs-training-section.component';
import { RxjsTrainingCreateComponent } from './components/rxjs-training-create/rxjs-training-create.component';
import { RxjsTrainingNeverComponent } from './components/rxjs-training-never/rxjs-training-never.component';

@NgModule({
    imports: [
        routing,
        CommonModule,
        MaterialModule,
    ],
    declarations: [
        RxjsTrainingPageComponent,
        RxjsTrainingMapComponent,
        RxjsTrainingSectionComponent,
        RxjsTrainingCreateComponent,
        RxjsTrainingNeverComponent
    ]
})
export class RxjsTrainingPageModule { }
