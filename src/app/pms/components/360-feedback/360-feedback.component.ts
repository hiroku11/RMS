import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-360-feedback',
  templateUrl: './360-feedback.component.html',
  styleUrls: ['./360-feedback.component.scss']
})
export class Three60FeedbackComponent implements OnInit {
  @Input() cycle: any;
  externalFeedbacks: any = [];
  internalFeedbacks: any = [];
  constructor(private _api: ApiService, private _alert: AlertsLoaderService) { }

  ngOnInit() {
    this.getFeedbacksInternal();
    this.getFeedbacksExternal();
  }

  getFeedbacksInternal() {
    this._api.get(`/performance/view-feedback-internal/userPerformanceCycleId/${this.cycle.userPerformanceCycleId}`).subscribe(
      (data) => {
        this.internalFeedbacks = data;
      }, (error) => {
        this._alert.error(error);
      }
    )
  }

  getFeedbacksExternal() {
    this._api.get(`/performance/view-feedback-external/userPerformanceCycleId/${this.cycle.userPerformanceCycleId}`).subscribe(
      (data) => {
        this.internalFeedbacks = data;
      }, (error) => {
        this._alert.error(error);
      }
    )
  }
}
