import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackQueueComponent } from './feedback-queue.component';

describe('FeedbackQueueComponent', () => {
  let component: FeedbackQueueComponent;
  let fixture: ComponentFixture<FeedbackQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
