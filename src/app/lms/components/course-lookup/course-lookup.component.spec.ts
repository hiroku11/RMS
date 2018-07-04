import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLookupComponent } from './course-lookup.component';

describe('CourseLookupComponent', () => {
  let component: CourseLookupComponent;
  let fixture: ComponentFixture<CourseLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
