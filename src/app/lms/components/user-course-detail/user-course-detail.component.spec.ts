import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseDetailComponent } from './user-course-detail.component';

describe('UserCourseDetailComponent', () => {
  let component: UserCourseDetailComponent;
  let fixture: ComponentFixture<UserCourseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
