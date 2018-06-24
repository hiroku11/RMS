import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationTeamListComponent } from './investigation-team-list.component';

describe('InvestigationTeamListComponent', () => {
  let component: InvestigationTeamListComponent;
  let fixture: ComponentFixture<InvestigationTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigationTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigationTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
