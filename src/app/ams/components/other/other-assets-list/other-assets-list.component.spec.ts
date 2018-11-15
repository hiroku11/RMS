import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAssetsListComponent } from './other-assets-list.component';

describe('OtherAssetsListComponent', () => {
  let component: OtherAssetsListComponent;
  let fixture: ComponentFixture<OtherAssetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherAssetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherAssetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
