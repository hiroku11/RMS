import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investigation-team-list',
  templateUrl: './investigation-team-list.component.html',
  styleUrls: ['./investigation-team-list.component.scss']
})
export class InvestigationTeamListComponent implements OnInit {
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
    this.getInvestigationTeamList();
  }
  getPageData($event: any) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.getInvestigationTeamList();
  }
  getInvestigationTeamList() {
    this.api.get(`/investigation-team/search-investigation-teams-basic`, { Search: JSON.stringify(this.searchParams) }).subscribe(
      (data) => {
        this.itemsCount = data.totalRecords;
        this.teamList = data.investigationTeams;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  deleteTeam(team: any, index) {
    this.api.delete(`/investigation-team/delete-investigation-team/investigationTeamId/${team.id}`).subscribe(
      (data) => {
        this.alert.success('Investigation team successfully deleted');
        this.teamList.splice(index, 1);
        this.itemsCount = this.itemsCount - 1;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

}
