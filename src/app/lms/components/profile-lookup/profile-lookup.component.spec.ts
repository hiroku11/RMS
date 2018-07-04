import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLookupComponent } from './profile-lookup.component';

describe('ProfileLookupComponent', () => {
  let component: ProfileLookupComponent;
  let fixture: ComponentFixture<ProfileLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
