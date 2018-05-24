import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipeModule } from '../pipes/pipe.module';

import { SidenavComponent } from './sidenav/sidenav.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { BookAuthorsComponent } from './book-authors/book-authors.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookPreviewListComponent } from './book-preview-list/book-preview-list.component';
import { BookPreviewSearchComponent } from './book-preview-search/book-preview-search.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { RemoveAllBookComponent } from './remove-all-book/remove-all-book.component';

import {
    MatButtonModule, MatMenuModule, MatCardModule,
    MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule
} from '@angular/material';

export const COMPONENTS = [
    SidenavComponent,
    NavItemComponent,
    BookAuthorsComponent,
    BookDetailComponent,
    BookPreviewComponent,
    BookPreviewListComponent,
    BookPreviewSearchComponent,
    ToolbarComponent,
    BookSearchComponent,
    RemoveAllBookComponent
];

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatInputModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        RouterModule,
        PipeModule,
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ComponentsModule { }
