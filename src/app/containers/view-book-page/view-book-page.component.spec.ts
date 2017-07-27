import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookPageComponent } from './view-book-page.component';

describe('ViewBookPageComponent', () => {
  let component: ViewBookPageComponent;
  let fixture: ComponentFixture<ViewBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
