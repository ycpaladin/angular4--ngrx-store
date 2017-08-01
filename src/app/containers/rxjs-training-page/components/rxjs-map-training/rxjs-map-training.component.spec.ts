import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMapTestComponent } from './rxjs-map-test.component';

describe('RxjsMapTestComponent', () => {
  let component: RxjsMapTestComponent;
  let fixture: ComponentFixture<RxjsMapTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsMapTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMapTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
