import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTrainingHttpComponent } from './rxjs-training-http.component';

describe('RxjsTrainingHttpComponent', () => {
  let component: RxjsTrainingHttpComponent;
  let fixture: ComponentFixture<RxjsTrainingHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsTrainingHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTrainingHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
