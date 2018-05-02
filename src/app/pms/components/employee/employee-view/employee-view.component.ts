import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../services/user.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {
  cycles: any;
  addCycle: any;
  constructor(private route: ActivatedRoute, private _api: ApiService, private _alert: AlertsLoaderService, private userService: UserService) {
    this.initAddCycle();
  }

  ngOnInit() {
    this.getPerfomanceCycles();

  }
  initAddCycle() {
    this.addCycle = {
      "id": null,
      "title": null,
      "cycleStartDate": null,
      "cycleEndDate": null,
      "openMidYearReview": null,
      "openFullYearReview": null,
      "statusFlag": null,
      "published": null
    }
  }
  getPerfomanceCycles() {
    this._api.get(`/performance/employee-view`).subscribe(
      (data) => {
        this.cycles = data;
      }, (error) => {
        console.log(error);
      }
    )
  }


  removeCycle(cycle: any) {
    this._api.delete(`/performance/remove-performance-cycle-from-employee/userPerformanceCycleId/${cycle.id}`).subscribe(
      (data) => {
        this._alert.success("Performance cycle successfully removed.")
      }, (error) => {
        this._alert.error(error);
      }
    )
  }
  addUpdatePerformanceCycle(id: number) {
    this._api.post('/performance/add-performance-cycle-for-employee/performanceCycleId/' + id, this.addCycle).subscribe(
      (data) => {
        // this.performanceCycles.push(data);
        this._alert.success("Performance cycle successfully added.");
        this.initAddCycle();
      },
      (error) => {
        this._alert.error(error);
      }
    )
  }

}

