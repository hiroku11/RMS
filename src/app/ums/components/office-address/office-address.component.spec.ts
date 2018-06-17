import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAddressComponent } from './office-address.component';

describe('OfficeAddressComponent', () => {
  let component: OfficeAddressComponent;
  let fixture: ComponentFixture<OfficeAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
