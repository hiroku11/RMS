import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { SharedService } from './../../../services/shared.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-lookup',
  templateUrl: './user-lookup.component.html',
  styleUrls: ['./user-lookup.component.scss']
})
export class UserLookupComponent implements OnInit {

  display: boolean;
  lookupOptions: any = {};
  searchResult: any;
  @Input() assetType: string;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @Output() assignUser: EventEmitter<any> = new EventEmitter();
  searchUrl: string = "/user-lookup";
  searchParams: any = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
  constructor(private _sharedService: SharedService,
    private _apiService: ApiService,
    private _alertsService: AlertsLoaderService) { }

  ngOnInit() {
    this.display = true;
    this.initSearchParams();
  }

  initSearchParams() {
    this.searchParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
    let propsArray = ['userLoginId', 'firstName', 'lastName', 'fullName'];
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
    let existIndex: number;
    const exists = this.searchParams.filters.filter((filt, index) => {
      if (filt.field === field) {
        existIndex = index;
        return true;
      } else {
        return false;
      }
    });
    const obj = {};
    obj[field] = value;
    fil.value = this._apiService.parseDateToApiFormat(obj)[field];
    if (!exists.length) {
      this.searchParams.filters.push(fil);
    } else {
      exists[0].value = value;
      exists[0].operator = operator;
    }
    if (!fil.value) {
      this.searchParams.filters.splice(existIndex, 1);
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
        this.searchResult = data;

      },
        error => {
          this._alertsService.error("Error getting search Data");
        });
  }

  close() {
    this.display = false;
    this.closeModal.emit();
  }
  assignUserToAsset(user: any) {
    this.assignUser.emit(user);
  }
}
