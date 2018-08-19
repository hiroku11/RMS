import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseDetailProgressComponent } from './user-course-detail-progress.component';

describe('UserCourseDetailProgressComponent', () => {
  let component: UserCourseDetailProgressComponent;
  let fixture: ComponentFixture<UserCourseDetailProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCourseDetailProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCourseDetailProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
