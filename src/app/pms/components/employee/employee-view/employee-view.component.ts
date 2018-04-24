import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {
  cycles: any;
  constructor(private _api: ApiService, private _alert: AlertsLoaderService) { }

  ngOnInit() {
    this.getPerfomanceCycles();
  }

  getPerfomanceCycles() {
    this._api.get('/performance/employee-view').subscribe(
      (data) => {
        this.cycles = data;
      }, (error) => {
        console.log(error);
      }
    )
  }


  removeCycle(cycle: any){
    this._api.delete(`/performance/remove-performance-cycle-from-employee/userPerformanceCycleId/${cycle.id}`).subscribe(
      (data) => {
        this._alert.success("Performance cycle successfully removed.")
      }, (error) => {
        this._alert.error(error);
      }
    )
  }
}

