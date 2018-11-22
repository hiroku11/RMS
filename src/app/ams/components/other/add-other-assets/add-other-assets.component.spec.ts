import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtherAssetsComponent } from './add-other-assets.component';

describe('AddOtherAssetsComponent', () => {
  let component: AddOtherAssetsComponent;
  let fixture: ComponentFixture<AddOtherAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOtherAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOtherAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
