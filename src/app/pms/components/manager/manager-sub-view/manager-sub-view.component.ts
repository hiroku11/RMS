import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../services/user.service';
@Component({
  selector: 'app-manager-sub-view',
  templateUrl: './manager-sub-view.component.html',
  styleUrls: ['./manager-sub-view.component.scss']
})
export class ManagerSubViewComponent implements OnInit {
  cycle: any;
  performanceCycles: any;
  userDetails: any;
  perfId: any;
  searchText: any;
  searchParams: any = {
    paging: { currentPage: 0, pageSize: 10 },
    sorts: [
      {
        field: "description",
        order: "ASC"
      }
    ],
    filters: []
  };
  constructor(private route: ActivatedRoute, private _api: ApiService, private _alert: AlertsLoaderService, private userService: UserService) {
    this.userDetails = this.userService.userDetails;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let Id = params["cycleId"];
      this.perfId = Id;
      if (Id) {
        this.getCycle(Id);
        this.getCycleData(Id);
      }
    });
  }

  getCycle(id: number) {
    this._api.get(`/performance/manager-sub-view/performanceCycleId/${id}`).subscribe(
      (data) => {
        this.cycle = data;
      }, (error) => {
        this._alert.error(error);
      }
    )
  }

  getEmployees(id: number) {
    this._api.get(`/performance/manager-sub-view/performanceCycleId/${id}`).subscribe(
      (data) => {
        console.log(data);
      }, (error) => {

      }
    )
  }

  getPageData($event: any) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.getCycleData(this.perfId);
  }
  getCycleData(id: number) {
    this._api.get(`/performance/manager-sub-view/performanceCycleId/${id}`).subscribe(
        (data) => {
          this.performanceCycles = data.employeePerformanceCycles;
        }, (error) => {
          this._alert.error('Error getting performance cycles.');
        }
      );
  }
}
