import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsTrainingPageComponent } from './rxjs-training-page.component';

const routes: Routes = [
  { path: '', component: RxjsTrainingPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
