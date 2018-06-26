import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent implements OnInit {
  userList: any = [];
  itemsCount = 0;
  searchParams: any = {
    paging: { currentPage: 0, pageSize: 10 },
    sorts: [
      {
        field: "firstName",
        order: "ASC"
      }
    ],
    filters: [
      // { "field": "userLoginId", "operator": "NEQ" }
    ]
  };
  constructor(private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.api.get(`/search-user`, { Search: JSON.stringify(this.searchParams) }).subscribe(
      (data) => {
        this.itemsCount = data.totalRecords;
        this.userList = data.users;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  getPageData($event: any) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.getUsers();
  }

  deleteUser(id: number) {
    this.api.delete(`/user/delete-user/id/${id}`).subscribe(
      (data) => {
        this.alert.success('User successfully deleted');
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

}
