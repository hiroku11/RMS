import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoursesDataComponent } from './my-courses-data.component';

describe('MyCoursesDataComponent', () => {
  let component: MyCoursesDataComponent;
  let fixture: ComponentFixture<MyCoursesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCoursesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoursesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
