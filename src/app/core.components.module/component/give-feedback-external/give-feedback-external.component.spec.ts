import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveFeedbackExternalComponent } from './give-feedback-external.component';

describe('GiveFeedbackExternalComponent', () => {
  let component: GiveFeedbackExternalComponent;
  let fixture: ComponentFixture<GiveFeedbackExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveFeedbackExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveFeedbackExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
