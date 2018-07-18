import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRejectCourseComponent } from './approve-reject-course.component';

describe('ApproveRejectCourseComponent', () => {
  let component: ApproveRejectCourseComponent;
  let fixture: ComponentFixture<ApproveRejectCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveRejectCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveRejectCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
