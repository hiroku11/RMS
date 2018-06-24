import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationLookupComponent } from './organization-lookup.component';

describe('OrganizationLookupComponent', () => {
  let component: OrganizationLookupComponent;
  let fixture: ComponentFixture<OrganizationLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
