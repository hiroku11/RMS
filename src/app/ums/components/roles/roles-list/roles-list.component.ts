import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {
  rolesList: any = [];
  itemsCount = 0;
  filter: any;
  searchParams: any = {
    paging: { currentPage: 0, pageSize: 10 },
    sorts: [
      {
        field: "roleName",
        order: "ASC"
      }
    ],
    filters: []
  };
  constructor(private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
    this.getRolesList();
  }

  getRolesList() {
    this.api.get(`/role/search-roles`, { Search: JSON.stringify(this.searchParams) }).subscribe(
      (data) => {
        this.itemsCount = data.totalRecords;
        this.rolesList = data.roles;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }
  getPageData($event: any) {
    if (this.searchParams.paging.currentPage !== $event.pageNo - 1
      || this.searchParams.paging.pageSize !== $event.pageSize) {
      this.searchParams.paging.currentPage = $event.pageNo - 1;
      this.searchParams.paging.pageSize = $event.pageSize;
      this.getRolesList();
    }

  }

  deleteRole(role: any, index: number) {
    if (!window.confirm("Are you sure you want to delete this item/record?")) {
      return;
    }
    this.api.delete(`/role/delete-role/id/${role.id}`).subscribe(
      (data) => {
        this.rolesList.splice(index, 1);
        this.itemsCount = this.itemsCount - 1;
        this.alert.success('Role successfully deleted');
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

}
