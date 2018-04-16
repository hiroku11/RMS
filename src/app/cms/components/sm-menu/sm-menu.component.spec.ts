import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmMenuComponent } from './sm-menu.component';

describe('SmMenuComponent', () => {
  let component: SmMenuComponent;
  let fixture: ComponentFixture<SmMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
