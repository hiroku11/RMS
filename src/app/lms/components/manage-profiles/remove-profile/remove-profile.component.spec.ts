import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProfileComponent } from './remove-profile.component';

describe('RemoveProfileComponent', () => {
  let component: RemoveProfileComponent;
  let fixture: ComponentFixture<RemoveProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
