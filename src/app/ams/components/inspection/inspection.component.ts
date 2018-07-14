import { ApiService } from './../../../services/api.service';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: "app-inspection",
    templateUrl: "./inspection.component.html",
    styleUrls: ["./inspection.component.scss"]
})
export class InspectionComponent implements OnInit {
    inspection: any;
    @Input() asset: any;
    @Output() addedToAsset: EventEmitter<any> = new EventEmitter();
    lookupParams: any;
    editMode: boolean = false;
    lookupItems: any;
    lookupOptions: any;
    editing: any;
    constructor(private _apiService: ApiService, private _alertsService: AlertsLoaderService) {
        this.initInspection();

    }

    ngOnInit() {
        this.initLookupParams();
    }
    initInspection() {
        this.inspection = {
            id: null,
            statusFlag: null,
            inspectionNumber: null,
            inspectionCompanyName: null,
            inspectionCompanyDescription: null,
            inspectionDoneBy: null,
            inspectionCompanyPhone: null,
            inspectionCompanyEmail: null,
            inspectionCompanyContactPerson: null,
            inspectionDoneDateTime: null,
            inspectionDueDate: null,
            nextInspectionDueDate: null,
            inspectionAmount: null,
            comments: null,
            inspectionDurationInHours: null,
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

    initLookupParams() {
        this.lookupParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
        this.lookupOptions = {
            inspectionNumber: {
                field: 'inspectionNumber',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            inspectionCompanyName: {
                field: 'inspectionCompanyName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            inspectionCompanyContactPerson: {
                field: 'inspectionCompanyContactPerson',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            inspectionDoneBy: {
                field: 'inspectionDoneBy',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            inspectionDoneDateTime: {
                field: 'inspectionDoneDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            inspectionDueDate: {
                field: 'inspectionDueDate',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            nextInspectionDueDate: {
                field: 'nextInspectionDueDate',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            }
        }
    }
    save() {
        if (this.editMode) {
            this.updateInspection();
            return;
        }
        let url = "/building/add-inspection-to-building/buildingId/";
        if (this.asset.assetCategory.id == "VEHICLE") {
            url =
                "/vehicle/add-inspection-to-vehicle/vehicleId/";
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-inspection-to-equipment/equipmentId/";
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/add-inspection-to-asset-type-other/assetTypeOtherId/";
        }
        url = url + this.asset.id;
        this._apiService.put(url, this.inspection).subscribe(
            data => {
                this._alertsService.success(
                    "Inspection successfully added to " +
                    this.asset.assetCategory.description
                );
                this.initInspection();
                this.addedToAsset.emit(data);
            },
            error => {
                this._alertsService.error(error);
            }
        );
    }

    editThisInspection(inspection: any) {
        this.inspection = JSON.parse(JSON.stringify(inspection));
        this.editing = inspection;
        this.editMode = true;
    }

    updateInspection() {
        this._apiService
            .put("/inspection/update-inspection", this.inspection)
            .subscribe(
                data => {
                    this.inspection = data;
                    this.editing = Object.assign(this.editing, data);
                    this._alertsService.success(
                        "Inspection successfully updated."
                    );
                    this.initInspection();
                    this.editMode = false;
                },
                error => {
                    this._alertsService.error(error);
                }
            );
    }
    removeInspectionFromAsset(inspection: any) {
        if (!window.confirm("Are you sure you want to delete this item/record?")) {
            return;
        }
        let url = `/building/remove-inspection-from-building/buildingId/${this.asset.id}/inspectionId/${inspection.id}`;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = `/vehicle/remove-inspection-from-vehicle/vehicleId/${this.asset.id}/inspectionId/${inspection.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/remove-inspection-from-equipment/equipmentId/${this.asset.id}/inspectionId/${inspection.id}`;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = `/asset-type-other/remove-inspection-from-asset-type-other/assetTypeOtherId/${this.asset.id}/inspectionId/${inspection.id}`;;
        }
        this._apiService.delete(url).subscribe(
            data => {
                this.asset = data;
                this._alertsService.success(
                    "Inspection successfully removed from " + this.asset.assetCategory.description
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
    lookupInspection($event?: any) {
        if ($event) {
            this.lookupParams.paging.currentPage = $event.pageNo - 1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/inspection/search-inspections', { "Search": JSON.stringify(this.lookupParams) }).subscribe(
            (data) => {
                this.lookupItems = data;
            },
            (error) => {

            }
        )

    }
    addExistingInspectionToAsset(inspection: any) {
        let url = `/building/add-existing-inspection-to-building/buildingId/${this.asset.id}/inspectionId/${inspection.id}`;
        if (this.asset.assetCategory.id == "OTHER") {
            url = `/asset-type-other/add-existing-inspection-to-asset-type-other/assetTypeOtherId/${this.asset.id}/inspectionId/${inspection.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/add-existing-inspection-to-equipment/equipmentId/${this.asset.id}/inspectionId/${inspection.id}`;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = `/vehicle/add-existing-inspection-to-vehicle/vehicleId/${this.asset.id}/inspectionId/${inspection.id}`;
        }
        this._apiService.put(url, null).subscribe(
            data => {
                this.addedToAsset.emit(data);
                this._alertsService.success("Inspection successfully added to " + this.asset.assetCategory.description);
            },
            error => {
                this._alertsService.error(error);
            }
        );
    }
}
