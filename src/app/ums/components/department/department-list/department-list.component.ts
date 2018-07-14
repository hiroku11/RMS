import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  departmentList: any = [];
  itemsCount = 0;
  filter: any;
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
  constructor(private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
  }
  getPageData($event: any) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.getDepartmentList();
  }
  getDepartmentList() {
    this.api.get(`/department/search-departments`, { Search: JSON.stringify(this.searchParams) }).subscribe(
      (data) => {
        this.itemsCount = data.totalRecords;
        this.departmentList = data.departments;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  deleteDepartment(dep: any, index: number) {
    if (!window.confirm("Are you sure you want to delete this item/record?")) {
      return;
    }
    this.api.delete(`/department/delete-department/departmentCode/${dep.id}`).subscribe(
      (data) => {
        this.alert.success('Organization successfully deleted');
        this.departmentList.splice(index, 1);
        this.itemsCount = this.itemsCount - 1;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

}
