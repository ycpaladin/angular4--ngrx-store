import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAgeComponent } from './profile-age.component';

describe('ProfileAgeComponent', () => {
  let component: ProfileAgeComponent;
  let fixture: ComponentFixture<ProfileAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
