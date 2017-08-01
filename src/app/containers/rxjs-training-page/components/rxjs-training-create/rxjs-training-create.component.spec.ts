import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTrainingCreateComponent } from './rxjs-training-create.component';

describe('RxjsTrainingCreateComponent', () => {
  let component: RxjsTrainingCreateComponent;
  let fixture: ComponentFixture<RxjsTrainingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsTrainingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTrainingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
