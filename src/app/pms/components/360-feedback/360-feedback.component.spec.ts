import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 360FeedbackComponent } from './360-feedback.component';

describe('360FeedbackComponent', () => {
  let component: 360FeedbackComponent;
  let fixture: ComponentFixture<360FeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 360FeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(360FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
