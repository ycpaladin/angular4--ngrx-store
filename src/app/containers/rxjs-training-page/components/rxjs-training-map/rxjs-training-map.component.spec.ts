import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMapTrainingComponent } from './rxjs-map-training.component';

describe('RxjsMapTrainingComponent', () => {
  let component: RxjsMapTrainingComponent;
  let fixture: ComponentFixture<RxjsMapTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsMapTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMapTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
