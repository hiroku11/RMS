import { ApiService } from '../../../../services/api.service';

import { HttpActionDirective } from '../../../../core.components.module/directives/http-action.directive';
import { AlertsLoaderService } from '../../../../services/alerts-loader.service';
import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { UserService } from './../../../../services/user.service';
declare var $: any;
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  userId: any;
  filter: any;
  itemsCount = 0;
  reason: any;
  plannedStartDate: any;
  plannedEndDate: any;
  cid: any;
  constructor(private _apiService: ApiService,
    private _alertService: AlertsLoaderService,
    private viewContainerRef: ViewContainerRef,
    private userService: UserService) {
    this.userId = userService.userDetails.id;
  }
  courseData: any = [];
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

  ngOnInit() {
    this.getCourse();
  }
  getCourse() {
    this._apiService
      .get("/course/search-courses", { Search: JSON.stringify(this.searchParams) })
      .subscribe(data => {
        this.courseData = data.courses;
        this.itemsCount = data.totalRecords;
      });
  }
  addCourse() {
    let payload = {
      "addReason": this.reason,
      "plannedStartDate": this.plannedStartDate,
      "plannedEndDate": this.plannedEndDate
    }
    this._apiService
      .put(`/user/add-course-to-user/userId/` + this.userId + `/courseId/` + this.cid, payload)
      .subscribe((data) => {
        this._alertService.success("Course Added successfully.");
        $('#myModal').modal('hide');
        this.reason = null;
      }, (error) => {
        this._alertService.error(error);
        this.reason = null;
        $('#myModal').modal('hide');
      });
  }
  getPageData($event: any) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.getCourse();
  }
}
