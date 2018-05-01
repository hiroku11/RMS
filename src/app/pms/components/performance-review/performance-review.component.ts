import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-review',
  templateUrl: './performance-review.component.html',
  styleUrls: ['./performance-review.component.scss']
})
export class PerformanceReviewComponent implements OnInit {
  Id:number;
  tabs: any[] = [
    {
      tab: 1,
      name: 'Goal Details'
    },
    {
      tab: 2,
      name: '360 Feedback'
    },
    {
      tab: 3,
      name: 'Documnets'
    },
    {
      tab: 4,
      name: 'Incidents'
    },
    {
      tab: 5,
      name: 'LMS'
    }
  ];
  cycle: any;
  currentTab: any;
  constructor(private route: ActivatedRoute, private _api: ApiService, private _alert: AlertsLoaderService) {
    this.currentTab = this.tabs[0];
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.Id = params["cycleId"];
      if (this.Id) {
        //this.getCycle(Id);
        //this.getEmployees(Id);
      }
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
  changeTab(tab: any) {
    this.currentTab = tab;
  }
}
