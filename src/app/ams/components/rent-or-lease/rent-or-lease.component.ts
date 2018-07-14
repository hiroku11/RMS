import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { SharedService } from './../../../services/shared.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: "app-rent-or-lease",
    templateUrl: "./rent-or-lease.component.html",
    styleUrls: ["./rent-or-lease.component.scss"]
})
export class RentOrLeaseComponent implements OnInit {
    rent: any;
    dropDownsData: any;
    @Input() asset: any;
    @Output() addedToAsset: EventEmitter<any> = new EventEmitter();
    editMode: boolean = false;
    lookupParams: any;
    lookupItems: any;
    lookupOptions: any;
    editing: any;

    constructor(
        private _apiService: ApiService,
        private _alertsService: AlertsLoaderService,
        private _sharedService: SharedService
    ) {
        this.dropDownsData = this._sharedService.dropDownsData;
        this._sharedService.dropDownsService.subscribe((data) => {
            this.dropDownsData = data;//rentOrLeaseTypeList
        });
        this.initRentOrLease();
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
                order: "ASC",
                sort: false
            },
            agreementName: {
                field: 'agreementName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            agreementDescription: {
                field: 'agreementDescription',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            companyName: {
                field: 'companyName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            companyContactPerson: {
                field: 'companyContactPerson',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            startDateTime: {
                field: 'startDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            endDateTime: {
                field: 'endDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            rentalOrLeaseType: {
                field: 'rentalOrLeaseType',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            }
        }
    }
    initRentOrLease() {
        this.rent = {
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
            gracePeriodInMonths: null,
            agreementAmount: null,
            renewalAmount: null,
            rentalOrLeaseType: {
                id: null
            },
            rentalOrLeaseTypeOther: null,
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
            this.updateRentOrLease();
            return;
        }
        let url = "/building/add-rental-or-lease-agreement-to-building/buildingId/";
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/add-rental-or-lease-agreement-to-vehicle/vehicleId/";
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-rental-or-lease-agreement-to-equipment/equipmentId/";
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url =
                "/asset-type-other/add-rental-or-lease-agreement-to-asset-type-other/assetTypeOtherId/";

        }
        url = url + this.asset.id;
        this._apiService.put(url, this.rent).subscribe(
            data => {
                this.asset = data;
                this._alertsService.success(
                    "rental or lease agreement successfully added to " +
                    this.asset.assetCategory.description
                );
                this.initRentOrLease();
                this.addedToAsset.emit(data);
            },
            error => {
                this._alertsService.error(
                    error
                );
            }
        );
    }
    editRentOrLease(rol: any) {
        this.rent = JSON.parse(JSON.stringify(rol));
        this.editing = rol;
        this.editMode = true;
    }

    updateRentOrLease() {
        this._apiService.put("/rental-or-lease/update-rental-or-lease-agreement", this.rent).subscribe(
            data => {
                this.rent = data;
                this.editing = Object.assign(this.editing, data);
                this._alertsService.success(
                    "Rental or lease agreement successfully updated."
                );
                this.initRentOrLease();
                this.editMode = false;
            },
            error => {
                this._alertsService.error(
                    error
                );
            }
        );
    }
    removeRentOrLeaseFromAsset(rol: any) {
        if (!window.confirm("Are you sure you want to delete this item/record?")) {
            return;
        }
        let url = `/building/remove-rental-or-lease-from-building/buildingId/${this.asset.id}/rentalOrLeaseId/${rol.id}`;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = `/vehicle/remove-rental-or-lease-from-vehicle/vehicleId/${this.asset.id}/rentalOrLeaseId/${rol.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/remove-rental-or-lease-from-equipment/equipmentId/${this.asset.id}/rentalOrLeaseId/${rol.id}`;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = `/asset-type-other/remove-rental-or-lease-from-asset-type-other/assetTypeOtherId/${this.asset.id}/rentalOrLeaseId/${rol.id}`;;
        }
        this._apiService.delete(url).subscribe(
            data => {
                this.asset = data;
                this._alertsService.success(
                    "Rental or Lease successfully removed from " + this.asset.assetCategory.description
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
    lookupRentOrLease($event?: any) {
        if ($event) {
            this.lookupParams.paging.currentPage = $event.pageNo - 1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/rental-or-lease/search-rental-or-lease-agreements', { "Search": JSON.stringify(this.lookupParams) }).subscribe(
            (data) => {
                this.lookupItems = data;
            },
            (error) => {

            }
        )

    }
    addExistingRentalOrLeaseToAsset(rol: any) {
        let url = `/building/add-existing-rental-or-lease-agreement-to-building/buildingId/${this.asset.id}/rentalOrLeaseId/${rol.id}`;
        if (this.asset.assetCategory.id == "OTHER") {
            url = `/asset-type-other/add-existing-rental-or-lease-agreement-to-asset-type-other/assetTypeOtherId/${this.asset.id}/rentalOrLeaseId/${rol.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/add-existing-rental-or-lease-agreement-to-equipment/equipmentId/${this.asset.id}/rentalOrLeaseId/${rol.id}`;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = `/vehicle/add-existing-rental-or-lease-agreement-to-vehicle/vehicleId/${this.asset.id}/rentalOrLeaseId/${rol.id}`;
        }
        this._apiService.put(url, null).subscribe(
            data => {
                this.addedToAsset.emit(data);
                this._alertsService.success("Rental or lease agreement successfully added to " + this.asset.assetCategory.description);
            },
            error => {
                this._alertsService.error(error);
            }
        );
    }

    selectCompareFunction(item1: any, item2: any) {
        if (item1 == null || item2 == null) {
            return false;
        }
        return item1.id == item2.id;
    }
}
