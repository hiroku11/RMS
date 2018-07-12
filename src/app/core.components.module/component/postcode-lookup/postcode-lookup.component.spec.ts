import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcodeLookupComponent } from './postcode-lookup.component';

describe('PostcodeLookupComponent', () => {
  let component: PostcodeLookupComponent;
  let fixture: ComponentFixture<PostcodeLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcodeLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcodeLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
