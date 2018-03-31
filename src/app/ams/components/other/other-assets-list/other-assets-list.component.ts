import { ApiService } from './../../../../services/api.service';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { Component, OnInit,ComponentFactoryResolver , ViewContainerRef } from "@angular/core";
import { SearchComponent } from "../../search/search.component";

@Component({
    selector: "app-other-assets-list",
    templateUrl: "./other-assets-list.component.html",
    styleUrls: ["./other-assets-list.component.scss"]
})
export class OtherAssetsListComponent implements OnInit {
    pageSize: number = 10;
    itemsCount: number = 0;
    otherAssetList: any = [];
    componentRef: any;
    searchText: string;
    searchParams: any = {
        paging: { currentPage: 0, pageSize: 10 },
        sorts: [
            {
                field: "assetTypeOtherName",
                order: "ASC"
            }
        ],
        filters: []
    };
    constructor(private _apiService: ApiService, private _alertService: AlertsLoaderService,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver) {
        this.getOtherAssetList();
    }

    ngOnInit() {}

    getPageData($event: any) {
        this.searchParams.paging.currentPage = $event.pageNo - 1;
        this.searchParams.paging.pageSize = $event.pageSize;
        this.getOtherAssetList();
    }

    getOtherAssetList() {
        this._apiService
            .get("/asset-type-other/search-asset-type-others", { Search: JSON.stringify(this.searchParams) })
            .subscribe(data => {
                this.itemsCount = data.totalRecords;
                this.otherAssetList = data.assetTypeOthers;
            });
    }
    deleteAsset(asset:any){
        this._apiService.delete(`/asset-type-other/delete-asset-type-other/assetTypeOtherId/${asset.id}`).subscribe(
            (data)=>{
                this._alertService.success("Asset deleteed successfully.");
                this.otherAssetList.splice(this.otherAssetList.indexOf(asset), 1);
            },
            (error)=>{
                this._alertService.error("Asset type other cannot be deleted because it is associated to an incident.");
            }
        )

    }

    advancedSearch() {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            SearchComponent
        );
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'asset-type-other';
        this.componentRef.instance.parentSearchParams = this.searchParams;
        this.componentRef.instance.searchResult.subscribe((data) => {
            this.advancedSearchResult(data);
        });
        this.componentRef.instance.closeModal.subscribe(() => {
            this.closeModal();
        });
    }
    closeModal() {
        this.componentRef.instance.searchResult.unsubscribe();
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
    }

    advancedSearchResult($event: any) {
        this.itemsCount = $event.data.totalRecords;
        this.otherAssetList = $event.data.assetTypeOthers;
        this.searchParams = $event.searchParams;

    }
}
