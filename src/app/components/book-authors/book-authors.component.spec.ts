import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAuthorsComponent } from './book-authors.component';

describe('BookAuthorsComponent', () => {
  let component: BookAuthorsComponent;
  let fixture: ComponentFixture<BookAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
