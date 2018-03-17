import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyAdminComponent } from './notify-admin.component';

describe('NotifyAdminComponent', () => {
  let component: NotifyAdminComponent;
  let fixture: ComponentFixture<NotifyAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
