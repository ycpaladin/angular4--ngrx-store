import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreeTrainingPageComponent } from './three-training-page.component';

const routes: Routes = [
  { path: '', component: ThreeTrainingPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
