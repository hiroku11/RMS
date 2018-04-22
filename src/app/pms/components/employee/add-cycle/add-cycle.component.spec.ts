import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCycleComponent } from './add-cycle.component';

describe('AddCycleComponent', () => {
  let component: AddCycleComponent;
  let fixture: ComponentFixture<AddCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
