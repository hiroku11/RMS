import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.scss']
})
export class ManagerViewComponent implements OnInit {
  performanceCycles: any;
  searchText: any;
  constructor(private _api: ApiService, private _alert: AlertsLoaderService) { }

  ngOnInit() {
    this.getPerformanceCycles();
  }
  getPerformanceCycles() {
    this._api.get("/performance/manager-view").subscribe(
      (data) => {
        this.performanceCycles = data;
      },
      (error) => {
        this._alert.error("Error getting performance cycles");
        console.log(error);
      }
    );
  }

  publish(cycle: any) {
    this._api.get(`/performance/publish-performance-cycle-manager/performanceCycleId/${cycle.id}`).subscribe(
      (data) => {
        this._alert.success('Performance cycle successfully published');
      }, (error) => {
        this._alert.error(error);
      }
    )
  }
}
