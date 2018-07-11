import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCoursesComponent } from './import-courses.component';

describe('ImportCoursesComponent', () => {
  let component: ImportCoursesComponent;
  let fixture: ComponentFixture<ImportCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
