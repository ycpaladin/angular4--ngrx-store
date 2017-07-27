import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcAddCommasPipe } from './bc-add-commas.pipe';
import { BcEllipsisPipe } from './bc-ellipsis.pipe';

export const PIPES = [BcAddCommasPipe, BcEllipsisPipe];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: PIPES,
    exports: PIPES
})
export class PipeModule { }
