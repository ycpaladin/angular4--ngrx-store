import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTrainingSectionComponent } from './rxjs-training-section.component';

describe('RxjsTrainingSectionComponent', () => {
  let component: RxjsTrainingSectionComponent;
  let fixture: ComponentFixture<RxjsTrainingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsTrainingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTrainingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
