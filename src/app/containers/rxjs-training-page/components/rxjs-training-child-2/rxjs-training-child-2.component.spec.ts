import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTrainingChild2Component } from './rxjs-training-child-2.component';

describe('RxjsTrainingChild2Component', () => {
  let component: RxjsTrainingChild2Component;
  let fixture: ComponentFixture<RxjsTrainingChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsTrainingChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTrainingChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
