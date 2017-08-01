import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTestPageComponent } from './rxjs-test-page.component';

describe('RxjsTestPageComponent', () => {
  let component: RxjsTestPageComponent;
  let fixture: ComponentFixture<RxjsTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsTestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
