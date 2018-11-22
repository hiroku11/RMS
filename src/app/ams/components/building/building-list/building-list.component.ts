import { ApiService } from './../../../../services/api.service';
import { SearchComponent } from './../../search/search.component';
import { HttpActionDirective } from './../../../../core.components.module/directives/http-action.directive';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import {
    Component,
    ComponentFactoryResolver,
    ViewContainerRef
} from '@angular/core';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
    selector: "app-building-list",
    templateUrl: "./building-list.component.html",
    styleUrls: ["./building-list.component.scss"]
})
export class BuildingListComponent implements OnInit {
    public componentRef: any;
    pageSize: number = 10;
    itemsCount: number = 0;
    searchText: string;
    buildingList: any = [];
    searchParams: any = {
        paging: { currentPage: 0, pageSize: 10 },
        sorts: [
            {
                field: "buildingName",
                order: "ASC"
            }
        ],
        filters: []
    };
    constructor(private _apiService: ApiService,
        private _alertService: AlertsLoaderService,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver) {
        this.getBuildingsList();
    }

    ngOnInit() { }

    getPageData($event: any) {
        this.searchParams.paging.currentPage = $event.pageNo - 1;
        this.searchParams.paging.pageSize = $event.pageSize;
        this.getBuildingsList();
    }


    getBuildingsList() {
        this._apiService
            .get("/building/search-buildings", { Search: JSON.stringify(this.searchParams) })
            .subscribe(data => {
                this.itemsCount = data.totalRecords;
                this.buildingList = data.buildings;
            });
    }

    deleteBuilding(building: any) {
        if (!window.confirm("Are you sure you want to delete this item/record?")) {
            return;
        }
        this._apiService.delete(`/building/delete-building/buildingId/${building.id}`).subscribe(
            (data) => {
                this._alertService.success("Building deleted successfully.");
                this.buildingList.splice(this.buildingList.indexOf(building), 1);
            },
            (error) => {
                this._alertService.error(error);
            }
        )

    }

    advancedSearch() {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            SearchComponent
        );
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'building';
        this.componentRef.instance.parentSearchParams = this.searchParams;
        this.componentRef.instance.searchResult.subscribe((data) => {
            this.advancedSearchResult(data);
        });
        this.componentRef.instance.closeModal.subscribe((searchParams: any) => {
            this.closeModal(searchParams);
        });
    }
    closeModal(searchParams: any) {
        this.componentRef.instance.searchResult.unsubscribe();
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
        if (JSON.stringify(this.searchParams) == JSON.stringify(searchParams)) {
            this.getBuildingsList();
        }
    }

    advancedSearchResult($event: any) {
        this.itemsCount = $event.data.totalRecords;
        this.buildingList = $event.data.buildings;
        this.searchParams = $event.searchParams;

    }
}
