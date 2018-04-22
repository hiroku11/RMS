import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSubViewComponent } from './manager-sub-view.component';

describe('ManagerSubViewComponent', () => {
  let component: ManagerSubViewComponent;
  let fixture: ComponentFixture<ManagerSubViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSubViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSubViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
