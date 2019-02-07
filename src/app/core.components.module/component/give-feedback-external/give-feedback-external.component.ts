import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../services/api.service';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-give-feedback-external',
  templateUrl: './give-feedback-external.component.html',
  styleUrls: ['./give-feedback-external.component.scss']
})
export class GiveFeedbackExternalComponent implements OnInit {
  userPerformanceCycleId: number;
  feedbackData: any;
  feedback: any;
  constructor(private route: ActivatedRoute, private _api: ApiService,
    private _alert: AlertsLoaderService) {
    this.initFeedback();
  }


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.userPerformanceCycleId = params["cycleId"];
      this.getExternalFeedbackRequest();
    });

  }

  initFeedback() {
    this.feedback = {
      "feedbackGivenDate": new Date(),
      "feedbackComments": "",
      "title": "",
      "firstName": "",
      "middleName": "",
      "lastName": "",
      "jobTitle": "",
      "phone": "",
      "email": "",
    };
  }

  getExternalFeedbackRequest() {
    this._api.get(`/performance/show-feedback-external/userPerformanceCycleId/${this.userPerformanceCycleId}`).subscribe(
      (data) => {
        this.feedbackData = data;
      }, (error) => {
        this._alert.error('Error getting feedback request try again.');
      }
    )
  }

  gievFeedback() {
    this._api.post(`/performance/add-feedback-external/userPerformanceCycleId/${this.userPerformanceCycleId}`, this.feedback, false).subscribe(
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
