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
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  progressCount: any;
  progressData: any;
  currentTab: string;
  searchParams: any = {
    paging: { currentPage: 0, pageSize: 10 },
    filters:
    [{"field":"userCourseStatusCode","operator":"EQ","value":"NOT_STARTED"},
    {"field":"userCourseStatusCode","operator":"EQ","value":"PENDING"}]
};
  course:any;
  public courseData = [];
  tabs:any;

  constructor(private _apiService: ApiService,
    private _alertService: AlertsLoaderService,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.getProgress();
  //  this.getCourse()
  }
  getProgress() {
    this._apiService
      .get("/user-course/my-progress",{ Search: JSON.stringify(this.searchParams) })
      .subscribe(data => {
        this.progressData = data;
   
        this.courseData = data.userCourses;
        this.tabs = [
          {
            name: "Not Started",
            tab: 0,
            count: this.progressData.notStarted
          },
          {
            name: "In Progress",
            tab: 1,
            count: this.progressData.inProgress
          },
          {
            name: "Completed",
            tab: 2,
            count: this.progressData.completed
          },
          {
            name: "Cancelled",
            tab: 3,
            count: this.progressData.cancelled
          },
          {
            name: "Aborted",
            tab: 4,
            count: this.progressData.aborted
          },
          {
            name: "Overdue",
            tab: 5,
            count: this.progressData.overdue
          }
        ];
        this.currentTab = this.tabs[0];
      });
  }
  getCourse(){
    this._apiService
    .get("/user-course/search-user-courses")
    .subscribe(data => {
      this.course = data.userCourses;
      this.changeTab('Not Started');
    });
  
  }
  changeTab(tab){
    this.courseData = [];
    this.currentTab = tab;
    if(tab.name == 'Not Started'){
      this.searchParams =  [{"field":"userCourseStatusCode","operator":"EQ","value":"NOT_STARTED"},
      {"field":"userCourseStatusCode","operator":"EQ","value":"PENDING"}]
    }
    else if(tab.name == 'In Progress'){
      this.searchParams =  [{"field":"userCourseStatusCode","operator":"EQ","value":"IN_PROGRESS"},
      {"field":"userCourseStatusCode","operator":"EQ","value":"STARTED"}]
    }
    else if(tab.name == 'Completed'){
      this.searchParams =  [{"field":"userCourseStatusCode","operator":"EQ","value":"COMPLETED"}]
    
    }
    else if(tab.name == 'Aborted'){
      this.searchParams =  [{"field":"userCourseStatusCode","operator":"EQ","value":"ABORTED"}]
    }
    else if(tab.name == 'Cancelled'){
      this.searchParams =  [{"field":"userCourseStatusCode","operator":"EQ","value":"CANCELLED"}]
    }
    else if(tab.name == 'Overdue'){
      this.searchParams =  [{"field":"userCourseStatusCode","operator":"EQ","value":"OVERDUE"}]
    }

    this._apiService
      .get("/user-course/my-progress", { Search: JSON.stringify(this.searchParams) })
      .subscribe(data => {
  
        this.courseData = data.userCourses;})
  }

}
