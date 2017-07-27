import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPreviewSearchComponent } from './book-preview-search.component';

describe('BookPreviewSearchComponent', () => {
  let component: BookPreviewSearchComponent;
  let fixture: ComponentFixture<BookPreviewSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPreviewSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPreviewSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
