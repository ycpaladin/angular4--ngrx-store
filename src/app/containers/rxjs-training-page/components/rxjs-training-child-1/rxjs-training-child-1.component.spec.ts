import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTrainingChild1Component } from './rxjs-training-child-1.component';

describe('RxjsTrainingChild1Component', () => {
  let component: RxjsTrainingChild1Component;
  let fixture: ComponentFixture<RxjsTrainingChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsTrainingChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTrainingChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
