import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminTeamComponent } from './add-admin-team.component';

describe('AddAdminTeamComponent', () => {
  let component: AddAdminTeamComponent;
  let fixture: ComponentFixture<AddAdminTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdminTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdminTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
