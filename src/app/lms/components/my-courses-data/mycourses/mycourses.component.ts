import { ApiService } from '../../../../services/api.service';

import { HttpActionDirective } from '../../../../core.components.module/directives/http-action.directive';
import { AlertsLoaderService } from '../../../../services/alerts-loader.service';
import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: 'app-courses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.scss']
})
export class MyCoursesComponent implements OnInit {

  constructor(private _apiService: ApiService,
    private _alertService: AlertsLoaderService,
    private viewContainerRef: ViewContainerRef) { }
    courseData =[];
    itemsCount = 0;
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
  getCourse(){
    this._apiService
    .get("/user-course/my-courses")
    .subscribe(data => {
      this.courseData = data.userCourses; 
      this.itemsCount = data.totalRecords;
    });
  }
  getPageData($event: any) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.getCourse();
  }
}
