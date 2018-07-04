import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProfileComponent } from './assign-profile.component';

describe('AssignProfileComponent', () => {
  let component: AssignProfileComponent;
  let fixture: ComponentFixture<AssignProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
