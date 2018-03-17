import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingDocumentsComponent } from './supporting-documents.component';

describe('SupportingDocumentsComponent', () => {
  let component: SupportingDocumentsComponent;
  let fixture: ComponentFixture<SupportingDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportingDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportingDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
