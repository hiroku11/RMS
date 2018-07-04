import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-course-list',
  templateUrl: './manage-course-list.component.html',
  styleUrls: ['./manage-course-list.component.scss']
})
export class ManageCourseListComponent implements OnInit {
  courses: any = [];
  itemsCount = 0;
  searchParams: any = {
    paging: { currentPage: 0, pageSize: 10 },
    sorts: [
      {
        field: "name",
        order: "ASC"
      }
    ],
    filters: []
  };
  constructor(private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
    this.getCourseList();
  }

  getCourseList() {
    this.api.get(`/course/search-courses`, { Search: JSON.stringify(this.searchParams) }).subscribe(
      (data) => {
        this.itemsCount = data.totalRecords;
        this.courses = data.courses;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  deleteCourse(course, index) {
    this.api.delete(`/course/delete-course/id/${course.id}`).subscribe(
      (data) => {
        this.alert.success('Course deleted successfully');
        this.courses.splice(index, 1);
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  getPageData($event: any) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.getCourseList();
  }

}
