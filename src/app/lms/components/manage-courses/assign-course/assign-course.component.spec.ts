import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCourseComponent } from './assign-course.component';

describe('AssignCourseComponent', () => {
  let component: AssignCourseComponent;
  let fixture: ComponentFixture<AssignCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
