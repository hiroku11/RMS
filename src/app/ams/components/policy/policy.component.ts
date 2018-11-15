import { ApiService } from './../../../services/api.service';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { SharedService } from './../../../services/shared.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: "app-policy",
    templateUrl: "./policy.component.html",
    styleUrls: ["./policy.component.scss"]
})
export class PolicyComponent implements OnInit {
    policy: any;
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
        this._sharedService.dropDownsService.subscribe(data => {
            this.dropDownsData = data;
        });
        this.initPolicy();
    }

    ngOnInit() {
        this.initLookupParams();
    }
    initLookupParams() {
        this.lookupParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
        this.lookupOptions = {
            policyNumber: {
                field: 'policyNumber',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            policyName: {
                field: 'policyName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            policyDescription: {
                field: 'policyDescription',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            providerName: {
                field: 'providerName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            providerDescription: {
                field: 'providerDescription',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            policyStartDateTime: {
                field: 'policyStartDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            policyEndDateTime: {
                field: 'policyEndDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            }, policyType: {
                field: 'policyType',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            }
        }
    }
    initPolicy() {
        this.policy = {
            id: null,
            statusFlag: null,
            policyNumber: null,
            policyName: null,
            policyDescription: null,
            policyStartDateTime: null,
            policyEndDateTime: null,
            graceDateTime: null,
            gracePeriodInMonths: null,
            policyCoverAmount: null,
            policyPremiumAmount: null,
            policyType: {
                id: null,
                description: null
            },
            policyRenewalType: {
                id: null,
                description: null
            },
            providerName: null,
            providerDescription: null,
            providerPhone: null,
            providerEmail: null,
            providerContactPerson: null,
            comments: null,
            policyTypeOther: null,
            policyRenewalTypeOther: null,
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
            this.updatePolicy();
            return;
        }
        let url = "/building/add-policy-to-building/buildingId/";
        if (this.asset.assetCategory.id == "OTHER") {
            url =
                "/asset-type-other/add-policy-to-asset-type-other/assetTypeOtherId/";
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-policy-to-equipment/equipmentId/";
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/add-policy-to-vehicle/vehicleId/";
        }
        url = url + this.asset.id;
        this._apiService.put(url, this.policy).subscribe(
            (data) => {
                this.asset = data;
                this._alertsService.success(
                    "Policy successfully added to" + this.asset.assetCategory.description
                );
                this.initPolicy();
                this.addedToAsset.emit(data);
            },
            (error) => {
                this._alertsService.error(
                    error
                );
            }
        );
    }

    selectCompareFunction(item1: any, item2: any) {
        if (item1 == null || item2 == null) {
            return false;
        }
        return item1.id == item2.id;
    }

    editPolicy(policy: any) {
        this.policy = JSON.parse(JSON.stringify(policy));
        this.editing = policy;
        this.editMode = true;
    }

    updatePolicy() {
        this._apiService.put("/policy/update-policy", this.policy).subscribe(
            data => {
                this.policy = data;
                this.editing = Object.assign(this.editing, data);
                this._alertsService.success(
                    "Policy successfully updated."
                );
                this.initPolicy();
                this.editMode = false;
            },
            error => {
                this._alertsService.error(
                    error
                );
            }
        );
    }
    removePolicyFromAsset(policy: any) {
        if (!window.confirm("Are you sure you want to delete this item/record?")) {
            return;
        }
        let url = `/building/remove-policy-from-building/buildingId/${this.asset.id}/policyId/${policy.id}`;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = `/vehicle/remove-policy-from-vehicle/vehicleId/${this.asset.id}/policyId/${policy.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/remove-policy-from-equipment/equipmentId/${this.asset.id}/policyId/${policy.id}`;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = `/asset-type-other/remove-policy-from-asset-type-other/assetTypeOtherId/${this.asset.id}/policyId/${policy.id}`;;
        }
        this._apiService.delete(url).subscribe(
            data => {
                this.asset = data;
                this._alertsService.success(
                    "Policy successfully removed from " + this.asset.assetCategory.description
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
    lookupPolicy($event?: any) {
        if ($event) {
            this.lookupParams.paging.currentPage = $event.pageNo - 1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/policy/search-policies', { "Search": JSON.stringify(this.lookupParams) }).subscribe(
            (data) => {
                this.lookupItems = data;
            },
            (error) => {

            }
        )

    }
    addExistingPolicyToAsset(policy: any) {
        let url = `/building/add-existing-policy-to-building/buildingId/${this.asset.id}/policyId/${policy.id}`;
        if (this.asset.assetCategory.id == "OTHER") {
            url = `/asset-type-other/add-existing-policy-to-asset-type-other/assetTypeOtherId/${this.asset.id}/policyId/${policy.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/add-existing-policy-to-equipment/equipmentId/${this.asset.id}/policyId/${policy.id}`;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = `/vehicle/add-existing-policy-to-vehicle/vehicleId/${this.asset.id}/policyId/${policy.id}`;
        }
        this._apiService.put(url, null).subscribe(
            data => {
                this.addedToAsset.emit(data);
                this._alertsService.success("Policy successfully added to " + this.asset.assetCategory.description);
            },
            error => {
                this._alertsService.error(error);
            }
        );
    }
}
