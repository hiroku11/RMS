import { ApiService } from '../../../../services/api.service';

import { HttpActionDirective } from '../../../../core.components.module/directives/http-action.directive';
import { AlertsLoaderService } from '../../../../services/alerts-loader.service';
import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
  NgZone
} from '@angular/core';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ConfigService } from '../../../../services/config.service';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  progressCount: any;
  itemsCount = 0;
  progressData: any;
  currentTab: string;
  config: any;
  module = "Learning Management System"
  searchParams: any = {
    paging: { currentPage: 0, pageSize: 10 },
    sorts: [

    ],
    filters: [{ "field": "userCourseLessonStatus", "operator": "EQ", "value": "not attempted" }]
  };

  course: any;
  public courseData = [];
  tabs: any;

  constructor(private _apiService: ApiService,
    private _alertService: AlertsLoaderService,
    private viewContainerRef: ViewContainerRef,
    private _configService: ConfigService, private ngzone: NgZone) {
    this.config = this._configService.config;
  }

  ngOnInit() {
    this.getProgress();
    this.changeTab('Not Started');
    // this.getCourse()
  }
  getProgress() {
    this._apiService
      .get("/user-course/my-progress")
      .subscribe(data => {
        this.progressData = data;
        this.ngzone.run(() => {
          this.tabs = [
            {
              name: "Not Started",
              tab: 0,
              count: this.progressData.notStarted || 0
            },
            {
              name: "In Progress",
              tab: 1,
              count: this.progressData.inProgress || 0
            },
            {
              name: "Completed",
              tab: 2,
              count: this.progressData.completed || 0
            },
            {
              name: "Passed",
              tab: 3,
              count: this.progressData.cancelled || 0
            },
            {
              name: "Failed",
              tab: 4,
              count: this.progressData.aborted || 0
            }
          ];
          this.currentTab = this.tabs[0];
        });
        // this.courseData = data.userCourses;

      });
  }
  getCourse() {
    this._apiService
      .get("/user-course/search-user-courses", { Search: JSON.stringify(this.searchParams) })
      .subscribe(data => {
        this.course = data.userCourses;
        this.changeTab('Not Started');
      });

  }
  changeTab(tab) {
    this.courseData = [];
    this.currentTab = tab;
    if (tab.name == 'Not Started') {
      this.searchParams.filters = [{ "field": "userCourseLessonStatus", "operator": "EQ", "value": "not attempted" }]
    }
    else if (tab.name == 'In Progress') {
      this.searchParams.filters = [{ "field": "userCourseLessonStatus", "operator": "EQ", "value": "incomplete" }]
    }
    else if (tab.name == 'Completed') {
      this.searchParams.filters = [{ "field": "userCourseLessonStatus", "operator": "EQ", "value": "completed" }]

    }
    else if (tab.name == 'Passed') {
      this.searchParams.filters = [{ "field": "userCourseLessonStatus", "operator": "EQ", "value": "passed" }]
    }
    else if (tab.name == 'Failed') {
      this.searchParams.filters = [{ "field": "userCourseLessonStatus", "operator": "EQ", "value": "failed" }]
    }


    this._apiService
      .get("/user-course/my-progress", { Search: JSON.stringify(this.searchParams) })
      .subscribe((data) => {
        this.courseData = data.userCourses;
        this.itemsCount = data.totalRecords;
      }, (error) => {
        this._alertService.error('Some error occured. Try Again')
      })
  }
  getPageData($event: any) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.changeTab(this.currentTab);
  }

}
