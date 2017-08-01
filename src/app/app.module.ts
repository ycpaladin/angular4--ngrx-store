import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { routes } from './app.routing';
import { LayoutComponent } from './components/layout/layout.component';
import { ViewBookPageComponent } from './containers/view-book-page/view-book-page.component';
import { FindBookPageComponent } from './containers/find-book-page/find-book-page.component';
import { SelectedBookPageComponent } from './containers/selected-book-page/selected-book-page.component';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';

import { BookExistsGuard } from './guards/book-exists';
import { GoogleBooksService } from './services/google-books.service';

import { PipeModule } from './pipes/pipe.module';
import { ComponentsModule } from './components/components.module';

import { BookEffects } from './effects/book.effect';
import { CollectionEffects } from './effects/collection.effect';

import { reducer } from './reducers';
import { schema } from './db.schema';


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
        HttpModule,
        PipeModule,
        ComponentsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, { useHash: true }),
        StoreModule.forRoot(reducer),
        StoreRouterConnectingModule,
        EffectsModule.forRoot([BookEffects, CollectionEffects]),
        DBModule.provideDB(schema)
    ],
    providers: [BookExistsGuard, GoogleBooksService],
    bootstrap: [AppComponent]
})
export class AppModule { }
