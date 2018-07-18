import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRejectInactiveTabComponent } from './approve-reject-inactive-tab.component';

describe('ApproveRejectInactiveTabComponent', () => {
  let component: ApproveRejectInactiveTabComponent;
  let fixture: ComponentFixture<ApproveRejectInactiveTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveRejectInactiveTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveRejectInactiveTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
