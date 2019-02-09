import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-performance-review',
  templateUrl: './performance-review.component.html',
  styleUrls: ['./performance-review.component.scss']
})
export class PerformanceReviewComponent implements OnInit {
  Id: number;
  headerCycle: any;
  isManager = false;
  goalStatus: any;
  dropDownsData: any;
  cycleForUser: any;
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
      name: 'Documents'
    }
  ];
  cycle: any;
  currentTab: any;
  constructor(private route: ActivatedRoute, private _api: ApiService, private _alert: AlertsLoaderService,
    private userService: UserService, private _sharedService: SharedService) {
    this.currentTab = this.tabs[0];
    this._sharedService.pmsDropDownService.subscribe((data) => {
      this.dropDownsData = data;
      if (this.dropDownsData.status && !this.goalStatus && this.cycle) {
        this.setCycleStatus();
      }
    });
    this.dropDownsData = this._sharedService.pmsDropDownnsData;
    if (!this._sharedService.pmsDropDownnsData.category) {
      this._sharedService.getPmsDropdownsData();
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.Id = params["cycleId"];
      let userId = params["name"];
      if (this.Id && userId) {
        this.isManager = true;
        this.tabs = [...this.tabs, {
          tab: 4,
          name: 'Incidents'
        },
        {
          tab: 5,
          name: 'LMS'
        }];
        this.getUserPerfomanceCycle(this.Id, userId);
      } else if (this.Id) {
        userId = this.userService.userDetails.loginId;
        this.isManager = false;
        this.getCycle(this.Id);
      }

      this.getUserById(userId);
      this.getHeaderInfo();
      // this.getUserPerfomanceCycle(this.Id, userId);
    });
  }

  getUserById(userId) {
    this._api.get(`/user/loginId/${userId}`).subscribe(
      (data) => {
        this.cycleForUser = data;
      }, (error) => {
        this._alert.error(error);
      }
    )
  }

  getCycle(id: number) {
    this._api.get(`/performance/employee-sub-view/userPerformanceCycleId/${id}`).subscribe(
      (data) => {
        this.cycle = data;
      }, (error) => {
        this._alert.error(error);
      }
    );
  }

  getHeaderInfo() {
    this._api.get(`/performance/performance-cycle-header-info/userPerformanceCycleId/${this.Id}`)
      .subscribe((data) => {
        this.headerCycle = data;
      }, (error) => {
        this._alert.error(error);
      });
  }
  getUserPerfomanceCycle(id: number, userId: string) {
    this._api.get(`/performance/employee-sub-view/userLoginId/${userId}/userPerformanceCycleId/${id}`).subscribe(
      (data) => {
        this.cycle = data;
        if (this.dropDownsData.status && !this.goalStatus) {
          this.setCycleStatus();
        }
        // this.goalStatus = this.cycle.userPerformanceCycleStatusCode;
      }, (error) => {
        this._alert.error(error);
      }
    )
  }

  setCycleStatus() {
    this.dropDownsData.status.forEach(element => {
      if (element.id === this.cycle.userPerformanceCycleStatusCode) {
        this.goalStatus = { ...element };
      }
    });
  }

  changeTab(tab: any) {
    this.currentTab = tab;
  }

  updatedCycle(cycle: any) {
    this.cycle = cycle;
    this.getHeaderInfo();
  }

  statusUpdate() {
    this._api.
      put(`/performance/update-employee-performance-review-status/userPerformanceCycleId/${this.Id}/statusCode/${this.goalStatus.id}`, '')
      .subscribe((data) => {
        this._alert.success('stauts updated successfully');
      }, (error) => {
        this._alert.error(error);
      })
  }
  selectCompareFunction(item1: any, item2: any) {
    if (item1 == null || item2 == null) {
      return false;
    }
    return item1.id === item2.id;
  }


}

