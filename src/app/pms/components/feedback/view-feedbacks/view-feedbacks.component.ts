import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-feedbacks',
  templateUrl: './view-feedbacks.component.html',
  styleUrls: ['./view-feedbacks.component.scss']
})
export class ViewFeedbacksComponent implements OnInit {
  userPerformanceCycleId: any;
  feedbacks: any;
  headerCycle: any;
  constructor(private route: ActivatedRoute, private _api: ApiService, private _alert: AlertsLoaderService) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.userPerformanceCycleId = params["userCycleId"];
      this.getHeaderInfo();
    });
  }

  getHeaderInfo() {
    this._api.get(`/performance/performance-cycle-header-info/userPerformanceCycleId/${this.userPerformanceCycleId}`)
      .subscribe((data) => {
        this.headerCycle = data;
        this.getFeedbacks();
      }, (error) => {
        this._alert.error(error);
      });
  }
  getFeedbacks() {
    this._api.get('/performance/view-feedback-internal/userPerformanceCycleId/' + this.userPerformanceCycleId).subscribe((data) => {
      this.feedbacks = data;
    }, (error) => {
      this._alert.error('Error getting feedbacks.');
    });
  }
}
