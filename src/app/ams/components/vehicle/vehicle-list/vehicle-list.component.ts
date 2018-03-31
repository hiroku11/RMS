import { ApiService } from './../../../../services/api.service';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { Component, OnInit,ComponentFactoryResolver , ViewContainerRef } from "@angular/core";

import { SearchComponent } from "../../search/search.component";

@Component({
    selector: "app-vehicle-list",
    templateUrl: "./vehicle-list.component.html",
    styleUrls: ["./vehicle-list.component.scss"]
})
export class VehicleListComponent implements OnInit {
    pageSize: number = 10;
    itemsCount: number = 0;
    vehicleList: any = [];
    componentRef: any;
    searchText: string;
    searchParams: any = {
        paging: { currentPage: 0, pageSize: 10 },
        sorts: [
            {
                field: "vehicleRegistrationId",
                order: "ASC"
            }
        ],
        filters: []
    };
    constructor(private _apiService: ApiService,private _alertService: AlertsLoaderService,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver) {
        this.getVehicleList();
    }

    ngOnInit() {}

    getPageData($event: any) {
        this.searchParams.paging.currentPage = $event.pageNo - 1;
        this.searchParams.paging.pageSize = $event.pageSize;
        this.getVehicleList();
    }

    getVehicleList() {
        this._apiService
            .get("/vehicle/search-vehicles", { Search: JSON.stringify(this.searchParams) })
            .subscribe(data => {
                this.itemsCount = data.totalRecords;
                this.vehicleList = data.vehicles;
            });
    }
    deleteVehicle (vehicle:any){
        this._apiService.delete(`/vehicle/delete-vehicle/vehicleId/${vehicle.id}`).subscribe(
            (data)=>{
                this._alertService.success("Vehicle deleteed successfully.");
                this.vehicleList.splice(this.vehicleList.indexOf(vehicle), 1);
            },
            (error)=>{
                this._alertService.error("Vehicle cannot be deleted because it is associated to an incident.");
            }
        )

    }
    advancedSearch() {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            SearchComponent
        );
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'vehicle';
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
        this.vehicleList = $event.data.vehicles;
        this.searchParams = $event.searchParams;

    }
}
