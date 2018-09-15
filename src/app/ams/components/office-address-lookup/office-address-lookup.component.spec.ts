import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAddressLookupComponent } from './office-address-lookup.component';

describe('OfficeAddressLookupComponent', () => {
  let component: OfficeAddressLookupComponent;
  let fixture: ComponentFixture<OfficeAddressLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeAddressLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeAddressLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
