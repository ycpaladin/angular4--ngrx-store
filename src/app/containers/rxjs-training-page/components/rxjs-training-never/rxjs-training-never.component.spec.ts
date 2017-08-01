import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTrainingNeverComponent } from './rxjs-training-never.component';

describe('RxjsTrainingNeverComponent', () => {
  let component: RxjsTrainingNeverComponent;
  let fixture: ComponentFixture<RxjsTrainingNeverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsTrainingNeverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTrainingNeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
