import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentOrLeaseComponent } from './rent-or-lease.component';

describe('RentOrLeaseComponent', () => {
  let component: RentOrLeaseComponent;
  let fixture: ComponentFixture<RentOrLeaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentOrLeaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentOrLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
