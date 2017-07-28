import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAllBookComponent } from './remove-all-book.component';

describe('RemoveAllBookComponent', () => {
  let component: RemoveAllBookComponent;
  let fixture: ComponentFixture<RemoveAllBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveAllBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAllBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
