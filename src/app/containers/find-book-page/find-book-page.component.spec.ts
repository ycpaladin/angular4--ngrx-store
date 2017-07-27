import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBookPageComponent } from './find-book-page.component';

describe('FindBookPageComponent', () => {
  let component: FindBookPageComponent;
  let fixture: ComponentFixture<FindBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindBookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
