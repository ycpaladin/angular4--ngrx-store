import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBookPageComponent } from './selected-book-page.component';

describe('SelectedBookPageComponent', () => {
  let component: SelectedBookPageComponent;
  let fixture: ComponentFixture<SelectedBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedBookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
