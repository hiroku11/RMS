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
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.getRolesList();
  }

  deleteRole(role: any, index: number) {
    this.api.delete(`/role/delete-role/id/${role.id}`).subscribe(
      (data) => {
        this.alert.success('Role successfully deleted');
        this.rolesList.splice(index, 1);
        this.itemsCount = this.itemsCount - 1;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

}
