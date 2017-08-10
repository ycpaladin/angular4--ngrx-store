import { Routes } from '@angular/router';

import { ViewBookPageComponent } from './containers/view-book-page/view-book-page.component';
import { FindBookPageComponent } from './containers/find-book-page/find-book-page.component';
// import { SelectedBookPageComponent } from './containers/selected-book-page/selected-book-page.component';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { BookExistsGuard } from './guards/book-exists';

export const routes: Routes = [
    {
        path: '',
        component: CollectionPageComponent
    },
    {
        path: 'book/find',
        component: FindBookPageComponent
    },
    {
        path: 'book/:id',
        canActivate: [BookExistsGuard],
        component: ViewBookPageComponent
    },
    {
        path: 'training',
        loadChildren: './containers/rxjs-training-page/rxjs-training-page.module#RxjsTrainingPageModule'
    },
    {
        path: 'three',
        loadChildren: './containers/three-training-page/three-training-page.module#ThreeTrainingPageModule'
    },
    {
        path: 'detection',
        loadChildren: './containers/detection-change-page/detection-change-page.module#DetectionChangePageModule'
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
