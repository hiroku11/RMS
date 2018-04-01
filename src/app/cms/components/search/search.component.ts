import { SharedService } from './../../../services/shared.service';
import { ApiService } from './../../../services/api.service';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { Component, Directive, OnInit, Input, Output, EventEmitter, ViewContainerRef, } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    public dropDownsData: any;
    display: boolean;
    lookupOptions: any = {};
  
    @Output() searchResult: EventEmitter<any> = new EventEmitter();
    @Output() closeModal: EventEmitter<any> = new EventEmitter();
    searchUrl: string;
    searchParams: any = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
    @Input() parentSearchParams: any;
    constructor(
        private _sharedService: SharedService,
        private _apiService: ApiService,
        private _alertsService: AlertsLoaderService,
    ) {
        this.dropDownsData = this._sharedService.cmsDropDownsData;
        // this._sharedService.cmsDropDownsService.subscribe(data => {
        //     this.dropDownsData = data;
        // });


    }


    ngOnInit() {
        //this.searchUrl = `/${this.assetType}/search-${this.assetType}s`;
        this.display = true;
        this.initSearchParams(false);
        this.searchParams = this.parentSearchParams;
    }

    selectCompareFunction(item1: any, item2: any) {
        if (item1 == null || item2 == null) {
            return false;
        }
        return item1.id == item2.id;
    }
    initSearchParams(clear:boolean) {
        this.searchParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
     
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

    searchAsset() {
        this._apiService
            .get(this.searchUrl, { Search: JSON.stringify(this.searchParams) })
            .subscribe((data) => {
                this.searchResult.emit({ data: data, searchParams: this.searchParams });
                this.close();
            },
            error => {
                this._alertsService.error("Error getting search Data");
            });
    }

    close() {
        this.display = false;
        this.closeModal.emit();
    }

}
