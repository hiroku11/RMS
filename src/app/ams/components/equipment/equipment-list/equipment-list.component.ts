import { ApiService } from './../../../../services/api.service';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { SearchComponent } from './../../search/search.component';
import { Component, OnInit,ComponentFactoryResolver , ViewContainerRef } from "@angular/core";



@Component({
    selector: "app-equipment-list",
    templateUrl: "./equipment-list.component.html",
    styleUrls: ["./equipment-list.component.scss"]
})
export class EquipmentListComponent implements OnInit {
    pageSize: number = 10;
    itemsCount: number = 0;
    equipmentList: any = [];
    componentRef: any;
    searchText: string;
    searchParams: any = {
        paging: { currentPage: 0, pageSize: 10 },
        sorts: [
            {
                field: "equipmentName",
                order: "ASC"
            }
        ],
        filters: []
    };
    constructor(private _apiService: ApiService,private _alertService: AlertsLoaderService,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver) {
        this.getEquipmentList();
    }

    ngOnInit() {}

    getPageData($event: any) {
        this.searchParams.paging.currentPage = $event.pageNo - 1;
        this.searchParams.paging.pageSize = $event.pageSize;
        this.getEquipmentList();
    }

    getEquipmentList() {
        this._apiService
            .get("/equipment/search-equipments", { Search: JSON.stringify(this.searchParams) })
            .subscribe(data => {
                this.itemsCount = data.totalRecords;
                this.equipmentList = data.equipments;
            });
    }

    deleteEquipment(equipment:any){
        if (!window.confirm("Are you sure you want to delete this item/record?")) {
            return;
        }
        this._apiService.delete(`/equipment/delete-equipment/equipmentId/${equipment.id}`).subscribe(
            (data)=>{
                this._alertService.success("Equipment deleteed successfully.");
                this.equipmentList.splice(this.equipmentList.indexOf(equipment), 1);
            },
            (error)=>{
                this._alertService.error(error);
            }
        )

    }

    advancedSearch() {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            SearchComponent
        );
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'equipment';
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
        this.equipmentList = $event.data.equipments;
        this.searchParams = $event.searchParams;

    }
}
