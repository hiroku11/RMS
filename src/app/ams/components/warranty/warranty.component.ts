import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-warranty",
    templateUrl: "./warranty.component.html",
    styleUrls: ["./warranty.component.scss"]
})
export class WarrantyComponent implements OnInit {
    warranty: any;
    @Input() asset: any;
    editMode: boolean = false;
    @Output() addedToAsset: EventEmitter<any> = new EventEmitter();
    lookupParams: any;
    lookupItems: any;
    lookupOptions: any;
    editing: any;

    constructor(
        private _apiService: ApiService,
        private _alertsService: AlertsLoaderService
    ) {
        this.initWarranty();
    }

    ngOnInit() {
        this.initLookupParams();
    }
    initLookupParams() {
        this.lookupParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
        this.lookupOptions = {
            warrantyNumber: {
                field: 'warrantyNumber',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            warrantyName: {
                field: 'warrantyName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            warrantyDescription: {
                field: 'warrantyDescription',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            warrantyProvidedBy: {
                field: 'warrantyProvidedBy',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            warrantyProviderDescription: {
                field: 'warrantyProviderDescription',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            warrantyProviderContactPerson: {
                field: 'warrantyProviderContactPerson',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            warrantyStartDateTime: {
                field: 'warrantyStartDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            warrantyEndDateTime: {
                field: 'warrantyEndDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            }
        }
    }
    initWarranty() {
        this.warranty = {
            id: null,
            statusFlag: null,
            warrantyNumber: null,
            warrantyName: null,
            warrantyDescription: null,
            warrantyProvidedBy: null,
            warrantyProviderDescription: null,
            warrantyProviderPhone: null,
            warrantyProviderEmail: null,
            warrantyProviderContactPerson: null,
            warrantyProvidedDate: null,
            warrantyStartDateTime: null,
            warrantyEndDateTime: null,
            warrantyRenewalDate: null,
            warrantyGraceDateTime: null,
            gracePeriodInMonths: null,
            warrantyAmount: null,
            warrantyRenewalAmount: null,
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
            this.updateWarranty();
            return;
        }
        let url = "/building/add-warranty-to-building/buildingId/";
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/add-warranty-to-vehicle/vehicleId/";
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-warranty-to-equipment/equipmentId/";
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/add-warranty-to-asset-type-other/assetTypeOtherId/";
        }
        url = url + this.asset.id;
        this._apiService.put(url, this.warranty).subscribe(
            data => {
                this.asset = data;
                this._alertsService.success(
                    "Warranty successfully added to " +
                    this.asset.assetCategory.description
                );
                this.initWarranty();
                this.addedToAsset.emit(data);
            },
            error => {
                this._alertsService.error(
                    error
                );
            }
        );
    }
    editWarranty(warranty: any) {
        this.warranty = JSON.parse(JSON.stringify(warranty));
        this.editing = warranty;
        this.editMode = true;
    }
    updateWarranty() {
        this._apiService.put("/warranty/create-or-update-warranty", this.warranty).subscribe(
            data => {
                this.warranty = data;
                this.editing = Object.assign(this.editing,data);
                this._alertsService.success(
                    "Warranty successfully updated."
                );
                this.initWarranty();
                this.editMode = false;
            },
            error => {
                this._alertsService.error(
                    error
                );
            }
        );
    }
    removeWarrantyFromAsset(warranty: any) {
        let url = `/building/remove-warranty-from-building/buildingId/${this.asset.id}/warrantyId/${warranty.id}`;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = `/vehicle/remove-warranty-from-vehicle/vehicleId/${this.asset.id}/warrantyId/${warranty.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/remove-warranty-from-equipment/equipmentId/${this.asset.id}/warrantyId/${warranty.id}`;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = `/asset-type-other/remove-warranty-from-asset-type-other/assetTypeOtherId/${this.asset.id}/warrantyId/${warranty.id}`;;
        }
        this._apiService.delete(url).subscribe(
            data => {
                this.asset = data;
                this._alertsService.success(
                    "Warranty successfully removed from " + this.asset.assetCategory.description
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
    lookupFieldChange({ field, operator, value }) {
        let fil = {
            field,
            operator,
            value
        }
        const exists = this.lookupParams.filters.filter(filt => filt.field === field);
        const obj = {};
        obj[field] = value;
        fil.value = this._apiService.parseDateToApiFormat(obj)[field];
        if (!exists.length) {
            this.lookupParams.filters.push(fil);
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
        const exists = this.lookupParams.sorts.filter(s => s.field === field);
        if (!exists.length && sort) {
            this.lookupParams.sorts.push(sor);
        } else if (exists.length && sort) {
            exists[0].order = order;
        } else {
            const ind = this.lookupParams.sorts.indexOf(exists[0]);
            this.lookupParams.sorts.splice(ind, 1);
        }

    }
    lookupWarranty($event?: any) {
        if ($event) {
            this.lookupParams.paging.currentPage = $event.pageNo - 1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/warranty/search-warranties', { "Search": JSON.stringify(this.lookupParams) }).subscribe(
            (data) => {
                this.lookupItems = data;
            },
            (error) => {

            }
        )

    }

    addExistingWarrantyToAsset(warranty: any) {
        let url = `/building/add-existing-warranty-to-building/buildingId/${this.asset.id}/warrantyId/${warranty.id}`;
        if (this.asset.assetCategory.id == "OTHER") {
            url = `/asset-type-other/add-existing-warranty-to-asset-type-other/assetTypeOtherId/${this.asset.id}/warrantyId/${warranty.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/add-existing-warranty-to-equipment/equipmentId/${this.asset.id}/warrantyId/${warranty.id}`;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = `/vehicle/add-existing-warranty-to-vehicle/vehicleId/${this.asset.id}/warrantyId/${warranty.id}`;
        }
        this._apiService.put(url, null).subscribe(
            data => {
                this.addedToAsset.emit(data);
                this._alertsService.success("Warranty successfully added to " + this.asset.assetCategory.description);
            },
            error => {
                this._alertsService.error(error);
            }
        );
    }
}
