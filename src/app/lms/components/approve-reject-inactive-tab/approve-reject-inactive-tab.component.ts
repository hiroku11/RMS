import { ApiService } from '../../../services/api.service';

import { HttpActionDirective } from '../../../core.components.module/directives/http-action.directive';
import { AlertsLoaderService } from '../../../services/alerts-loader.service';
import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
declare var $: any;

@Component({
  selector: 'app-approve-reject-inactive-tab',
  templateUrl: './approve-reject-inactive-tab.component.html',
  styleUrls: ['./approve-reject-inactive-tab.component.scss']
})
export class ApproveRejectInactiveTabComponent implements OnInit {

  tabs = [
    {
      name: "Active",
      tab: 0,
   
    },
    {
      name: "In Active",
      tab: 1,
  
    }
  ];
  cid:any;
  reason:any;
  courseData :any = [];
  currentTab :any;
  constructor(private _apiService: ApiService,
    private _alertService: AlertsLoaderService,
    private viewContainerRef: ViewContainerRef) { }
     
  ngOnInit() {
    this.changeTab(this.tabs[0]);
  }
  changeTab(tab) {
    this.courseData = [];
    this.currentTab = tab;
    if (tab.name == 'Active') {
      this._apiService
      .get("/manager-course-approval/search-all-active-mgr-course-approvals")
      .subscribe((data) => {
        this.courseData = data.managerCourseApprovals;
     
      }, (error) => {
        this._alertService.error('Some error occured. Try Again')
      })
  
    }
    else if (tab.name == 'In Active') {
      this._apiService
      .get("/manager-course-approval/search-all-inactive-mgr-course-approvals")
      .subscribe((data) => {
        this.courseData = data.managerCourseApprovals;
     
      }, (error) => {
        this._alertService.error('Some error occured. Try Again')
      })
    }
  



}
approve() {
  let payload = {
    "id": this.cid,
    "approveReason": this.reason
  }
  this._apiService
    .put(`/manager-course-approval/approve-user-course-approval-request` , payload)
    .subscribe((data) => {
      this._alertService.success("Course Approved successfully.");
     
      this.reason = null;
    }, (error) => {
      this._alertService.error(error);
    });
    $('#myModal').modal('hide');
}
reject() {
  let payload = {
    "id": this.cid,
    "rejectedReason": this.reason
  }
  this._apiService
    .put(`/manager-course-approval/reject-user-course-approval-request` , payload)
    .subscribe((data) => {
      this._alertService.success("Course Rejected successfully.");
     
      this.reason = null;
    }, (error) => {
      this._alertService.error(error);
    });
    $('#myModal1').modal('hide');
}

}
