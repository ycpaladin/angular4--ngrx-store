import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { routes } from './routes';
import { LayoutComponent } from './components/layout/layout.component';
import { ViewBookPageComponent } from './containers/view-book-page/view-book-page.component';
import { FindBookPageComponent } from './containers/find-book-page/find-book-page.component';
import { SelectedBookPageComponent } from './containers/selected-book-page/selected-book-page.component';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';


import { PipeModule } from './pipes/pipe.module';
import { ComponentsModule } from './components/components.module';


import { reducer } from './reducers';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        ViewBookPageComponent,
        FindBookPageComponent,
        SelectedBookPageComponent,
        CollectionPageComponent,
        NotFoundPageComponent,


    ],
    imports: [
        BrowserModule,
        MaterialModule,
        PipeModule,
        ComponentsModule,
        RouterModule.forRoot(routes, { useHash: true }),
        StoreModule.forRoot(reducer),
        StoreRouterConnectingModule
        // StoreModule.forRoot(rootReducer)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
