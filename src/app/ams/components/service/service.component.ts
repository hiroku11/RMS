import { ApiService } from './../../../services/api.service';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";



@Component({
    selector: "app-service",
    templateUrl: "./service.component.html",
    styleUrls: ["./service.component.scss"]
})
export class ServiceComponent implements OnInit {
    service: any;
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
        this.initService();
    }

    ngOnInit() {
        this.initLookupParams();
    }
    initLookupParams() {
        this.lookupParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
        this.lookupOptions = {
            serviceNumber: {
                field: 'serviceNumber',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            serviceCompanyName: {
                field: 'serviceCompanyName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            serviceCompanyDescription: {
                field: 'serviceCompanyDescription',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            serviceCompanyContactPerson: {
                field: 'serviceCompanyContactPerson',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            serviceDoneBy: {
                field: 'serviceDoneBy',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            serviceDoneDateTime: {
                field: 'serviceDoneDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            serviceDueDate: {
                field: 'serviceDueDate',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            nextServiceDueDate: {
                field: 'nextServiceDueDate',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            }
        }
    }
    initService() {
        this.service = {
            id: null,
            statusFlag: null,
            serviceNumber: null,
            serviceCompanyName: null,
            serviceCompanyDescription: null,
            serviceDoneBy: null,
            serviceCompanyContactPerson: null,
            serviceCompanyPhone: null,
            serviceCompanyEmail: null,
            serviceDoneDateTime: null,
            serviceDueDate: null,
            nextServiceDueDate: null,
            serviceAmount: null,
            comments: null,
            serviceDurationInHours: null,
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
            this.updateService();
            return;
        }
        let url = "/building/add-service-to-building/buildingId/";
        if (this.asset.assetCategory.id == "OTHER") {
            url =
                "/asset-type-other/add-service-to-asset-type-other/assetTypeOtherId/";
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-service-to-equipment/equipmentId/";
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/add-service-to-vehicle/vehicleId/";
        }
        url = url + this.asset.id;
        this._apiService.put(url, this.service).subscribe(
            data => {
                this.asset = data;
                this._alertsService.success(
                    "Service successfully added to " +
                    this.asset.assetCategory.description
                );
                this.initService();
                this.addedToAsset.emit(data);
            },
            error => {
                this._alertsService.error(
                    error
                );
            }
        );
    }

    editService(service: any) {
        this.service = JSON.parse(JSON.stringify(service));
        this.editing = service;
        this.editMode = true;
    }
    updateService() {
        this._apiService.put("/service/create-or-update-service", this.service).subscribe(
            data => {
                this.service = data;
                this.editing = Object.assign(this.editing, data);
                this._alertsService.success(
                    "Service successfully updated."
                );
                this.initService();
                this.editMode = false;
            },
            error => {
                this._alertsService.error(
                    error
                );
            }
        );
    }
    removeServiceFromAsset(service: any) {
        if (!window.confirm("Are you sure you want to delete this item/record?")) {
            return;
        }
        let url = `/building/remove-service-from-building/buildingId/${this.asset.id}/serviceId/${service.id}`;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = `/vehicle/remove-service-from-vehicle/vehicleId/${this.asset.id}/serviceId/${service.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/remove-service-from-equipment/equipmentId/${this.asset.id}/serviceId/${service.id}`;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = `/asset-type-other/remove-service-from-asset-type-other/assetTypeOtherId/${this.asset.id}/serviceId/${service.id}`;;
        }
        this._apiService.delete(url).subscribe(
            data => {
                this.asset = data;
                this._alertsService.success(
                    "Service successfully removed from " + this.asset.assetCategory.description
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
    lookupService($event?: any) {
        if ($event) {
            this.lookupParams.paging.currentPage = $event.pageNo - 1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/service/search-services', { "Search": JSON.stringify(this.lookupParams) }).subscribe(
            (data) => {
                this.lookupItems = data;
            },
            (error) => {

            }
        )

    }

    addExistingServiceToAsset(service: any) {
        let url = `/building/add-existing-service-to-building/buildingId/${this.asset.id}/serviceId/${service.id}`;
        if (this.asset.assetCategory.id == "OTHER") {
            url = `/asset-type-other/add-existing-service-to-asset-type-other/assetTypeOtherId/${this.asset.id}/serviceId/${service.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/add-existing-service-to-equipment/equipmentId/${this.asset.id}/serviceId/${service.id}`;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = `/vehicle/add-existing-service-to-vehicle/vehicleId/${this.asset.id}/serviceId/${service.id}`;
        }
        this._apiService.put(url, null).subscribe(
            data => {
                this.addedToAsset.emit(data);
                this._alertsService.success("Service successfully added to " + this.asset.assetCategory.description);
            },
            error => {
                this._alertsService.error(error);
            }
        );
    }
}
