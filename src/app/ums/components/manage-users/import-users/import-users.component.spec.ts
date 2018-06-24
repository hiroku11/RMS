import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportUsersComponent } from './import-users.component';

describe('ImportUsersComponent', () => {
  let component: ImportUsersComponent;
  let fixture: ComponentFixture<ImportUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
