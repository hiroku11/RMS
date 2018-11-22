import { ApiService } from './../../../services/api.service';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: "app-maintenance",
    templateUrl: "./maintenance.component.html",
    styleUrls: ["./maintenance.component.scss"]
})
export class MaintenanceComponent implements OnInit {
    maintenance: any ;
    @Input() asset: any;
    editMode: boolean = false;
    @Output() addedToAsset: EventEmitter<any> = new EventEmitter();
    lookupParams: any;
    lookupItems:any;
    lookupOptions: any;
    editing: any;

    constructor(
        private _apiService: ApiService,
        private _alertsService: AlertsLoaderService
    ) {
        this.initMaintenance();
    }

    ngOnInit() {
        this.initLookupParams();
    }
    initLookupParams() {
        this.lookupParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
        this.lookupOptions = {
            agreementId: {
                field: 'agreementId',
                operator: "EQ",
                value: null,
                order:"ASC",
                sort:false
            },
            agreementName: {
                field: 'agreementName',
                operator: "EQ",
                value: null,
                order:"ASC",
                sort:false
            },
            agreementDescription: {
                field: 'agreementDescription',
                operator: "EQ",
                value: null,
                order:"ASC",
                sort:false
            },
            companyName: {
                field: 'companyName',
                operator: "EQ",
                value: null,
                order:"ASC",
                sort:false
            },
            companyDescription: {
                field: 'companyDescription',
                operator: "EQ",
                value: null,
                order:"ASC",
                sort:false
            },
            startDateTime: {
                field: 'startDateTime',
                operator: "EQ",
                value: null,
                order:"ASC",
                sort:false
            },
            endDateTime: {
                field: 'endDateTime',
                operator: "EQ",
                value: null,
                order:"ASC",
                sort:false
            }
        }
    }
    initMaintenance(){
        this.maintenance = {
            id: null,
            statusFlag: null,
            agreementId: null,
            agreementName: null,
            agreementDescription: null,
            companyName: null,
            companyDescription: null,
            companyPhone: null,
            companyEmail: null,
            companyContactPerson: null,
            startDateTime: null,
            endDateTime: null,
            graceDateTime: null,
            amcAmount: null,
            gracePeriodInMonths: null,
            comments: null,
            buildings: null,
            equipments: null,
            vehicles: null,
            assetTypeOthers: null,
            existingBuildings: null,
            existingEquipments: null,
            existingVehicles: null,
            existingAssetTypeOthers: null
        };
    }
    save() {
        if (this.editMode) {
            this.updateAMC();
            return;
        }
        let url = "/building/add-amc-to-building/buildingId/";
        if (this.asset.assetCategory.id == "OTHER") {
            url =
                "/asset-type-other/add-amc-to-asset-type-other/assetTypeOtherId/";
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-amc-to-equipment/equipmentId/";
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/add-amc-to-vehicle/vehicleId/";
        }
        url = url + this.asset.id;
        this._apiService.put(url, this.maintenance).subscribe(
            data => {
                this.asset = data;
                this._alertsService.success(
                    "Asset Management Contract successfully added to " +
                        this.asset.assetCategory.description
                );
                this.initMaintenance();
                this.addedToAsset.emit(data);
            },
            error => {
                this._alertsService.error(
                    error
                );
            }
        );
    }

    editMaintenance(amc: any) {
        this.maintenance = JSON.parse(JSON.stringify(amc));
        this.editing = amc;
        this.editMode = true;
    }
    updateAMC() {
        this._apiService.put("/amc/update-amc", this.maintenance).subscribe(
            data => {
                this.maintenance = data;
                this.editing = Object.assign(this.editing,data);
                this._alertsService.success("Annual maintenace contract successfully updated.");
                this.initMaintenance();
                this.editMode = false;
            },
            error => {
                this._alertsService.error(
                    error
                );
            }
        );
    }
    removeMaintenanceFromAsset(amc: any) {
        if (!window.confirm("Are you sure you want to delete this item/record?")) {
            return;
        }
        let url = `/building/remove-amc-from-building/buildingId/${
            this.asset.id
        }/amcId/${amc.id}`;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = `/vehicle/remove-amc-from-vehicle/vehicleId/${
                this.asset.id
            }/amcId/${amc.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/remove-amc-from-equipment/equipmentId/${
                this.asset.id
            }/amcId/${amc.id}`;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = `/asset-type-other/remove-amc-from-asset-type-other/assetTypeOtherId/${
                this.asset.id
            }/amcId/${amc.id}`;
        }
        this._apiService.delete(url).subscribe(
            data => {
                this.asset = data;
                this._alertsService.success(
                    "Annual maintenanace contract successfully removed from " +
                        this.asset.assetCategory.description
                );
                this.addedToAsset.emit(data);
            },
            error => {
                this._alertsService.error(
                    error
                );
            }
        );
    }

    lookupFieldChange({field,operator,value}){
        let fil = {
            field,
            operator,
            value
          }
          let existIndex: number;
          const exists = this.lookupParams.filters.filter((filt, index) => {
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
            this.lookupParams.filters.push(fil);
          } else {
            exists[0].value = value;
            exists[0].operator = operator;
          }
          if (!fil.value) {
            this.lookupParams.filters.splice(existIndex, 1);
          }
    }

    lookupSortChange({field,sort,order}){
        let sor={
            field,
            order
        }
        const exists = this.lookupParams.sorts.filter(s=> s.field === field);
        if(!exists.length && sort){
            this.lookupParams.sorts.push(sor);
        }else if(exists.length && sort){
            exists[0].order = order;
        }else{
            const ind = this.lookupParams.sorts.indexOf(exists[0]);
            this.lookupParams.sorts.splice(ind,1);
        }

    }
    lookupAmc($event ? : any) {
        if($event){
            this.lookupParams.paging.currentPage = $event.pageNo -1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/amc/search-amc', { "Search": JSON.stringify(this.lookupParams) }).subscribe(
            (data) => {
                this.lookupItems = data;
            },
            (error) => {

            }
        )

    }

    addExistingAmcToAsset(amc: any){
        let url = `/building/add-existing-amc-to-building/buildingId/${this.asset.id}/amcId/${amc.id}`;
        if (this.asset.assetCategory.id == "OTHER") {
            url =`/asset-type-other/add-existing-amc-to-asset-type-other/assetTypeOtherId/${this.asset.id}/amcId/${amc.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/add-existing-amc-to-equipment/equipmentId/${this.asset.id}/amcId/${amc.id}`;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = `/vehicle/add-existing-amc-to-vehicle/vehicleId/${this.asset.id}/amcId/${amc.id}`;
        }
        this._apiService.put(url,null).subscribe(
            data=>{
                this.addedToAsset.emit(data);
                this._alertsService.success("amc successfully added to " + this.asset.assetCategory.description);
            },
            error=>{
                this._alertsService.error(error);
            }
        );
    }
}
