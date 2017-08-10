import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeTrainingPageComponent } from './three-training-page.component';

describe('ThreeTrainingPageComponent', () => {
  let component: ThreeTrainingPageComponent;
  let fixture: ComponentFixture<ThreeTrainingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeTrainingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeTrainingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
