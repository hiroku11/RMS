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
  cycles: any = [];
  addCycle: any;
  searchText: any;
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
    this._alert.showLoader();
    this._api.get(`/performance/employee-view`).subscribe(
      (data) => {
        this.cycles = data;
        this._alert.hideLoader();
      }, (error) => {
        this._alert.hideLoader();
        this._alert.error('Error getting performace cycles. Try again.')
      }
    )
  }


  removeCycle(cycle: any, index: number) {
    if (!window.confirm("Are you sure you want to delete this item/record?")) {
      return;
    }
    this._api.delete(`/performance/remove-performance-cycle-from-employee/userPerformanceCycleId/${cycle.userPerfCycleId}`).subscribe(
      (data) => {
        this._alert.success("Performance cycle successfully removed.");
        this.cycles.splice(index, 1);
      }, (error) => {
        this._alert.error(error);
      }
    )
  }
}

