import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionChangePageComponent } from './detection-change-page.component';

describe('DetectionChangePageComponent', () => {
  let component: DetectionChangePageComponent;
  let fixture: ComponentFixture<DetectionChangePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectionChangePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionChangePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
