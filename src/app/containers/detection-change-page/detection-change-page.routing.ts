import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DetectionChangePageComponent } from './detection-change-page.component';

const routes: Routes = [
    {
        path: '',
        component: DetectionChangePageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

