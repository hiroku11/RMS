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
  selector: 'app-approve-reject-course',
  templateUrl: './approve-reject-course.component.html',
  styleUrls: ['./approve-reject-course.component.scss']
})
export class ApproveRejectCourseComponent implements OnInit {
  filter: any;
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
  itemsCount = 0;
  courseData :any = [];
  currentTab :any;
  searchParams: any = {
    paging: { currentPage: 0, pageSize: 10 },
    sorts: [

    ],
    filters: [{ "field": "userCourseLessonStatus", "operator": "EQ", "value": "not attempted" }]
  };
  constructor(private _apiService: ApiService,
    private _alertService: AlertsLoaderService,
    private viewContainerRef: ViewContainerRef) { }
     
  ngOnInit() {
    this.changeTab(this.tabs[0]);
  }
  getPageData($event: any) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.changeTab(this.currentTab);
  }
 
  changeTab(tab) {
    this.courseData = [];
    this.currentTab = tab;
    if (tab.name == 'Active') {
      this._apiService
      .get("/manager-course-approval/search-all-active-mgr-course-approvals",{ Search: JSON.stringify(this.searchParams) })
      .subscribe((data) => {
        this.courseData = data.managerCourseApprovals;
     
      }, (error) => {
        this._alertService.error('Some error occured. Try Again')
      })
  
    }
    else if (tab.name == 'In Active') {
      this._apiService
      .get("/manager-course-approval/search-all-inactive-mgr-course-approvals",{ Search: JSON.stringify(this.searchParams) })
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
    setTimeout(() => {
      this.changeTab(this.currentTab);
    },0)
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
    setTimeout(() => {
      this.changeTab(this.currentTab);
    },0)
    $('#myModal1').modal('hide');
   
}
activate() {
  let payload = {
    "id": this.cid,
    "rejectedReason": this.reason
  }
  this._apiService
    .put(`/manager-course-approval/activate-user-course-approval-request` , payload)
    .subscribe((data) => {
      this._alertService.success("Course Rejected successfully.");
     
      this.reason = null;
    }, (error) => {
      this._alertService.error(error);
    });
    $('#myModal2').modal('hide');
    setTimeout(() => {
      this.changeTab(this.currentTab);
    },0)
  
}
}