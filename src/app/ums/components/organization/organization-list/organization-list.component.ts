import { SearchFilterPipe } from './../../../../core.components.module/pipes/search-filter.pipe';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {
  organizationList: any = [];
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
    this.getOrganizationList();
  }

  getOrganizationList() {
    this.api.get(`/organization/search-organizations`, { Search: JSON.stringify(this.searchParams) }).subscribe(
      (data) => {
        this.itemsCount = data.totalRecords;
        this.organizationList = data.organizations;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  getPageData($event: any) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.getOrganizationList();
  }

  deleteOrganization(org: any, index: number) {
    this.api.delete(`/organization/delete-organization/organizationCode/${org.id}`).subscribe(
      (data) => {
        this.alert.success('Organization successfully deleted');
        this.organizationList.splice(index, 1);
        this.itemsCount = this.itemsCount - 1;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

}
