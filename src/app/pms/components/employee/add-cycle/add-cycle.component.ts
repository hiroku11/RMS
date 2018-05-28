import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cycle',
  templateUrl: './add-cycle.component.html',
  styleUrls: ['./add-cycle.component.scss']
})
export class AddCycleComponent implements OnInit {
  cycles: any;
  constructor(private _api: ApiService, private _alert: AlertsLoaderService) { }

  ngOnInit() {
    this.getCycles();
  }
  getCycles() {
    this._api.get('/performance/performance-cycle-for-employee-add').subscribe(
      (data) => {
        this.cycles = data;
      }, (error) => {
        [

        ]
      }
    )
  }

  addPerformanceCycle(cycle: any) {
    this._api.post(`/performance/add-performance-cycle-for-employee/performanceCycleId/${cycle.id}`, {}, false).subscribe(
      (data) => {
        this._alert.success("Performance Cycle successfully added.")
      }, (error) => {
        this._alert.error(error);
      }
    )
  }

}
