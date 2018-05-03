import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-request',
  templateUrl: './feedback-request.component.html'
})
export class FeedbackRequestComponent implements OnInit {
  cycle: any;
  userPerformanceCycleId: number;
  constructor(private route: ActivatedRoute, private _api: ApiService, private _alert: AlertsLoaderService) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.userPerformanceCycleId = params["cycleId"];
      // if (this.userPerformanceCycleId) {
      //   this.getCycle(Id);
      // }
    });
  }

  getCycle(id: number) {
    this._api.get(`/performance/employee-sub-view/userPerformanceCycleId/${id}`).subscribe(
      (data) => {
        this.cycle = data;
      }, (error) => {
        this._alert.error(error);
      }
    )
  }

  sendFeedbackRequest(){
    this._api.post(`/performance/send-feedback-request/userPerformanceCycleId/${this.userPerformanceCycleId}`,{})
    .subscribe((data)=>{

    },(error)=>{

    })
  }
}
