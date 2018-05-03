import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackRequestComponent } from './feedback-request.component';

describe('FeedbackRequestComponent', () => {
  let component: FeedbackRequestComponent;
  let fixture: ComponentFixture<FeedbackRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
