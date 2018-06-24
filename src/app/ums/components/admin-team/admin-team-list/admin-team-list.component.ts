import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-team-list',
  templateUrl: './admin-team-list.component.html',
  styleUrls: ['./admin-team-list.component.scss']
})
export class AdminTeamListComponent implements OnInit {
  teamList: any = [];
  itemsCount = 0;
  searchParams: any = {
    paging: { currentPage: 0, pageSize: 10 },
    sorts: [
      {
        field: "teamName",
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
    this.getAdminTeamList();
  }
  getAdminTeamList() {
    this.api.get(`/admin-team/search-admin-teams-from-view`, { Search: JSON.stringify(this.searchParams) }).subscribe(
      (data) => {
        this.itemsCount = data.totalRecords;
        this.teamList = data.adminTeams;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  deleteTeam(team: any, index) {
    this.api.delete(`/admin-team/delete-admin-team/teamId/${team.id}`).subscribe(
      (data) => {
        this.alert.success('Admin team successfully deleted');
        this.teamList.splice(index, 1);
        this.itemsCount = this.itemsCount - 1;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }
}
