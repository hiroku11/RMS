import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationTeamComponent } from './investigation-team.component';

describe('InvestigationTeamComponent', () => {
  let component: InvestigationTeamComponent;
  let fixture: ComponentFixture<InvestigationTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigationTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigationTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
