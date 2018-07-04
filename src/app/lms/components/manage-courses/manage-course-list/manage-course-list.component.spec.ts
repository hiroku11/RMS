import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCourseListComponent } from './manage-course-list.component';

describe('ManageCourseListComponent', () => {
  let component: ManageCourseListComponent;
  let fixture: ComponentFixture<ManageCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
