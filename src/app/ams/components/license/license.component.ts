import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import * as moment from 'moment';

@Component({
    selector: "app-license",
    templateUrl: "./license.component.html",
    styleUrls: ["./license.component.scss"]
})
export class LicenseComponent implements OnInit {
    license: any;
    @Input() asset: any;
    editMode: boolean = false;
    @Output() addedToAsset: EventEmitter<any> = new EventEmitter();
    lookupParams: any;
    lookupItems: any;
    lookupOptions: any;
    editing: any;

    constructor(
        private _alertsService: AlertsLoaderService,
        private _apiService: ApiService
    ) {
        this.initLicense();
    }

    ngOnInit() {
        this.initLookupParams();
    }
    initLookupParams() {
        this.lookupParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
        this.lookupOptions = {
            licenseNumber: {
                field: 'licenseNumber',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            licenseHolderName: {
                field: 'licenseHolderName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            licenseHoldingCompany: {
                field: 'licenseHoldingCompany',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            licenseProvidedBy: {
                field: 'licenseProvidedBy',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            licenseProvidingAuthority: {
                field: 'licenseProvidingAuthority',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            placeIssued: {
                field: 'placeIssued',
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
            }
        }
    }
    initLicense() {
        this.license = {
            id: null,
            statusFlag: null,
            licenseNumber: null,
            licenseHolderName: null,
            licenseHoldingCompany: null,
            licenseHolderDescription: null,
            licenseHolderPhone: null,
            licenseHolderEmail: null,
            licenseProvidedBy: null,
            licenseProvidingAuthority: null,
            licenseProviderDescription: null,
            licenseProviderPhone: null,
            licenseProviderEmail: null,
            placeIssued: null,
            issuedDate: null,
            startDateTime: null,
            endDateTime: null,
            graceDateTime: null,
            renewalDate: null,
            gracePeriodInMonths: null,
            licenseAmount: null,
            renewalAmount: null,
            comments: null
        };
    }
    save() {
        if (this.editMode) {
            this.updateLicense();
            return;
        }
        let url = "/building/add-license-to-building/buildingId/";
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/add-license-to-vehicle/vehicleId/";

        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-license-to-equipment/equipmentId/";
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url =
                "/asset-type-other/add-license-to-asset-type-other/assetTypeOtherId/";
        }
        url = url + this.asset.id;
        this._apiService.put(url, this.license).subscribe(
            data => {
                this.asset = data;
                this._alertsService.success(
                    "License successfully added to " +
                    this.asset.assetCategory.description
                );
                this.initLicense();
                this.addedToAsset.emit(data);
            },
            error => {
                this._alertsService.error(error);
            }
        );
    }

    editLicense(license: any) {
        this.license = JSON.parse(JSON.stringify(license));
        this.editing = license;
        this.editMode = true;
    }
    updateLicense() {
        this._apiService
            .put("/license/update-license", this.license)
            .subscribe(
                data => {
                    this.license = data;
                    this.editing = Object.assign(this.editing, data);
                    this._alertsService.success(
                        "License successfully updated."
                    );
                    this.initLicense();
                    this.editMode = false;
                },
                error => {
                    this._alertsService.error(error);
                }
            );
    }
    removeLicenseFromAsset(license: any) {
        if (!window.confirm("Are you sure you want to delete this item/record?")) {
            return;
        }
        let url = `/building/remove-license-from-building/buildingId/${
            this.asset.id
            }/licenseId/${license.id}`;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = `/vehicle/remove-license-from-vehicle/vehicleId/${
                this.asset.id
                }/licenseId/${license.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/remove-license-from-equipment/equipmentId/${
                this.asset.id
                }/licenseId/${license.id}`;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = `/asset-type-other/remove-license-from-asset-type-other/assetTypeOtherId/${
                this.asset.id
                }/licenseId/${license.id}`;
        }
        this._apiService.delete(url).subscribe(
            data => {
                this.asset = data;
                this._alertsService.success(
                    "License successfully removed from " +
                    this.asset.assetCategory.description
                );
                this.addedToAsset.emit(data);
            },
            error => {
                this._alertsService.error(error);
            }
        );
    }

    lookupFieldChange({ field, operator, value }) {
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
    lookupLicense($event?: any) {
        if ($event) {
            this.lookupParams.paging.currentPage = $event.pageNo - 1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/license/search-licenses', { "Search": JSON.stringify(this.lookupParams) }).subscribe(
            (data) => {
                this.lookupItems = data;
            },
            (error) => {

            }
        )

    }
    addExistingLicenseToAsset(license: any) {
        let url = `/building/add-existing-license-to-building/buildingId/${this.asset.id}/licenseId/${license.id}`;
        if (this.asset.assetCategory.id == "OTHER") {
            url = `/asset-type-other/add-existing-license-to-asset-type-other/assetTypeOtherId/${this.asset.id}/licenseId/${license.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/add-existing-license-to-equipment/equipmentId/${this.asset.id}/licenseId/${license.id}`;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = `/vehicle/add-existing-license-to-vehicle/vehicleId/${this.asset.id}/licenseId/${license.id}`;
        }
        this._apiService.put(url, null).subscribe(
            data => {
                this.addedToAsset.emit(data);
                this._alertsService.success("License successfully added to " + this.asset.assetCategory.description);
            },
            error => {
                this._alertsService.error(error);
            }
        );
    }
}
