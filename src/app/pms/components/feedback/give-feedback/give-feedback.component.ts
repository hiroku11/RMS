import { UserService } from './../../../../services/user.service';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.component.html'
})
export class GiveFeedbackComponent implements OnInit {
  userPerformanceCycleId: number;
  feedbackData: any;
  feedback: any;
  loggedInUser: any;
  constructor(private route: ActivatedRoute, private _api: ApiService,
    private _alert: AlertsLoaderService, private user: UserService) {

  }


  ngOnInit() {
    this.loggedInUser = this.user.userDetails;
    this.route.params.subscribe((params: Params) => {
      this.userPerformanceCycleId = params["userCycleId"];
      this.getInternalFeedbackRequest();
    });
    this.initFeedback();
  }

  initFeedback() {
    this.feedback = {
      "feedbackGivenDate": new Date(),
      "feedbackComments": ""
    };
  }

  getInternalFeedbackRequest() {
    this._api.get(`/performance/show-feedback-internal/userPerformanceCycleId/${this.userPerformanceCycleId}`).subscribe(
      (data) => {
        this.feedbackData = data;
      }, (error) => {

      }
    )
  }

  gievFeedback() {
    this._api.post(`/performance/add-feedback-internal/userPerformanceCycleId/${this.userPerformanceCycleId}`, this.feedback).subscribe(
      (data) => {
        this._alert.success("Feedback Submitted successfully.");
      }, (error) => {
        this._alert.error(error);
      }
    )
  }

  clear() {
    this.initFeedback();
  }

}
