import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './three-training-page.routing';

import { ThreeTrainingPageComponent } from './three-training-page.component';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        ThreeTrainingPageComponent
    ]
})
export class ThreeTrainingPageModule { }
