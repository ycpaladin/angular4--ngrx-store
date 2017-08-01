import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsTestPageComponent } from './rxjs-test-page.component';

const routes: Routes = [
  { path: '', component: RxjsTestPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
