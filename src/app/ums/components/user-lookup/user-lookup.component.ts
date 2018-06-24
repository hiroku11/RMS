import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-lookup',
  templateUrl: './user-lookup.component.html',
  styleUrls: ['./user-lookup.component.scss']
})
export class UserLookupComponent implements OnInit {
  display: boolean;
  itemsCount: any;
  @Input() lookupType: string;
  searchUrl: string = '/search-user';
  lookupOptions: any = {};
  searchResult: any;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @Output() selectUser: EventEmitter<any> = new EventEmitter();
  searchParams: any = {
    paging: { currentPage: 0, pageSize: 10 },
    sorts: [],
    filters: []
  };
  constructor(private _apiService: ApiService,
    private _alertsService: AlertsLoaderService) { }

  ngOnInit() {
    if (this.lookupType == 'admin') {
      this.searchUrl = '/search-admin';
    }
    if (this.lookupType == 'manager') {
      this.searchUrl = '/search-manager';
    }
    if (this.lookupType == 'investigator') {
      this.searchUrl = '/search-investigator';
    }
    this.display = true;
    this.initSearchParams();
  }
  initSearchParams() {
    this.searchParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
    let propsArray = ['userLoginId', 'firstName', 'lastName', 'email'];
    propsArray.forEach((prop) => {
      this.lookupOptions[prop] = {
        field: prop,
        operator: "EQ",
        value: null,
        order: "ASC",
        sort: false
      }
    });
  }
  lookupFieldChange({ field, operator, value }) {
    let fil = {
      field,
      operator,
      value
    }
    const exists = this.searchParams.filters.filter(filt => filt.field === field);
    const obj = {};
    obj[field] = value;
    fil.value = this._apiService.parseDateToApiFormat(obj)[field];
    if (!exists.length) {
      this.searchParams.filters.push(fil);
    } else {
      exists[0].value = value;
      exists[0].operator = operator;
    }
  }

  lookupSortChange({ field, sort, order }) {
    let sor = {
      field,
      order
    }
    const exists = this.searchParams.sorts.filter(s => s.field === field);
    if (!exists.length && sort) {
      this.searchParams.sorts.push(sor);
    } else if (exists.length && sort) {
      exists[0].order = order;
    } else {
      const ind = this.searchParams.sorts.indexOf(exists[0]);
      this.searchParams.sorts.splice(ind, 1);
    }

  }

  searchUsers() {
    this._apiService
      .get(this.searchUrl, { Search: JSON.stringify(this.searchParams) })
      .subscribe((data) => {
        this.itemsCount = data.totalRecords;
        this.searchResult = data.users;
      }, (error) => {
        this._alertsService.error("Error getting search Data");
      });
  }

  close() {
    this.display = false;
    this.closeModal.emit();
  }

  userSelected(user: any) {
    this.selectUser.emit(user);
  }

  getPageData($event) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.searchUsers();
  }
}
