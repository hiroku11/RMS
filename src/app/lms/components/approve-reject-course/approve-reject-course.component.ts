import { ApiService } from '../../../services/api.service';

import { HttpActionDirective } from '../../../core.components.module/directives/http-action.directive';
import { AlertsLoaderService } from '../../../services/alerts-loader.service';
import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: 'app-approve-reject-course',
  templateUrl: './approve-reject-course.component.html',
  styleUrls: ['./approve-reject-course.component.scss']
})
export class ApproveRejectCourseComponent implements OnInit {
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
  courseData :any;
  currentTab :any;
  constructor(private _apiService: ApiService,
    private _alertService: AlertsLoaderService,
    private viewContainerRef: ViewContainerRef) { }
     
  ngOnInit() {
  }
  changeTab(tab) {
    this.courseData = [];
    this.currentTab = tab;
    if (tab.name == 'Active') {
      this._apiService
      .get("/manager-course-approval/search-all-active-mgr-course-approvals")
      .subscribe((data) => {
        this.courseData = data.userCourses;
     
      }, (error) => {
        this._alertService.error('Some error occured. Try Again')
      })
  
    }
    else if (tab.name == 'In Active') {
      this._apiService
      .get("/manager-course-approval/search-all-inactive-mgr-course-approvals")
      .subscribe((data) => {
        this.courseData = data.userCourses;
     
      }, (error) => {
        this._alertService.error('Some error occured. Try Again')
      })
    }
  



}
}