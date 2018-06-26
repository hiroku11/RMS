import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvestigationTeamtComponent } from './add-investigation-teamt.component';

describe('AddInvestigationTeamtComponent', () => {
  let component: AddInvestigationTeamtComponent;
  let fixture: ComponentFixture<AddInvestigationTeamtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInvestigationTeamtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvestigationTeamtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
