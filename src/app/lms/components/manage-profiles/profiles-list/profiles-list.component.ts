import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { AlertsLoaderService } from '../../../../services/alerts-loader.service';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})
export class ProfilesListComponent implements OnInit {
  profiles: any = [];
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
  constructor(private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
    this.getProfilesList();
  }

  getProfilesList() {
    this.api.get(`/profile/search-profiles`, { Search: JSON.stringify(this.searchParams) }).subscribe(
      (data) => {
        this.itemsCount = data.totalRecords;
        this.profiles = data.profiles;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  deleteProfile(profile, index) {
    this.api.delete(`/profile/delete-profile/profileCode/${profile.id}`).subscribe(
      (data) => {
        this.alert.success('Profile deleted successfully');
        this.profiles.splice(index, 1);
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  getPageData($event: any) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.getProfilesList();
  }

}
