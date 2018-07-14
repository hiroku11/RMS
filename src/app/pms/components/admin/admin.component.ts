import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  performanceCycles: any;
  addCycle: any;
  editing: boolean = false;
  constructor(private _api: ApiService, private _alert: AlertsLoaderService) { }

  ngOnInit() {
    this.getPerformanceCycles();
    this.initAddCycle();
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
  getPerformanceCycles() {
    this._api.get("/performance/admin-view").subscribe(
      (data) => {
        this.performanceCycles = data;
      },
      (error) => {
        this._alert.error("Error getting performance cycles");
        console.log(error);
      }
    );
  }
  addUpdatePerformanceCycle() {
    this._api.put('/performance/add-or-update-performance-cycle', this.addCycle).subscribe(
      (data) => {
        if (!this.editing) {
          this.performanceCycles.push(data);
        }

        this._alert.success("Performance cycle successfully added/updated.");
        this.initAddCycle();
        this.editing = false;
      },
      (error) => {
        this._alert.error(error);
      }
    )
  }

  editCycle(cycle: any) {
    this.editing = true;
    this.addCycle = cycle;
  }
  deleteCycle(cycle: any, ind: number) {
    if (!window.confirm("Are you sure you want to delete this item/record?")) {
      return;
    }
    this._api.delete(`/performance/delete-performance-cycle/id/${cycle.id}`).subscribe(
      (data) => {
        this._alert.success("Performance cycle successfully deleted");
        this.performanceCycles.splice(ind, 1)
      },
      (error) => {
        this._alert.error(error);
      }
    )
  }

  publish(cycle: any) {
    this._api.put(`/performance/publish-performance-cycle-admin/performanceCycleId/${cycle.id}`, null).subscribe(
      (data) => {
        this._alert.success('Performance cycle successfully published');
      }, (error) => {
        this._alert.error(error);
      }
    )
  }
}
