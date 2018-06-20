import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerLookupComponent } from './manager-lookup.component';

describe('ManagerLookupComponent', () => {
  let component: ManagerLookupComponent;
  let fixture: ComponentFixture<ManagerLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
