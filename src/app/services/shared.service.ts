import { ApiService } from './api.service';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";


@Injectable()
export class SharedService {
    public activeView: string;
    public dropDownsData: any = {};
    public conditionalTabs: [

        {
            name: "Rental/Lease";
            tab: 7;
        },
        {
            name: "Service";
            tab: 8;
        }
    ];
    public tabs = [
        {
            name: "Asset Details",
            tab: 1
        },
        {
            name: "Documents",
            tab: 10
        },
        {
            name: "Summary",
            tab: 11
        }
    ];
    public dropDownsService = new Subject();
    constructor(private _apiService: ApiService) {
        this.getAllDropdownData();

    }

    getTabstoShow(tabConditions: any) {
        const tabs = JSON.parse(JSON.stringify(this.tabs));
        if (tabConditions.amcPresent == "Y") {
            tabs.push({ name: "Maintenance", tab: 2 });
        }
        if (tabConditions.insurancePresent == "Y") {
            tabs.push({ name: "Policy", tab: 6 });
        }
        if (tabConditions.loanPresent == "Y") {
            tabs.push({ name: "Loan", tab: 5 });
        }
        if (tabConditions.licensePresent == "Y") {
            tabs.push({ name: "License", tab: 4 });
        }
        if (tabConditions.warrantyPresent == "Y") {
            tabs.push({ name: "Warranty", tab: 9 });
        }
        if (tabConditions.inspectionPresent == "Y") {
            tabs.push({ name: "Inspection", tab: 3 });
        }
        if (tabConditions.rentalOrLeasePresent == "Y") {
            tabs.push({ name: "Rental/Lease", tab: 7 });
        }
        if (tabConditions.servicePresent == "Y") {
            tabs.push({ name: "Service", tab: 8 });
        }
        return tabs.sort((a, b) => {
            return a.tab - b.tab;
        });
    }

    getAssetType() {
        this._apiService
            .get("/table-maintenance/asset-type/asset-types")
            .subscribe(
                data => {
                    this.dropDownsData.assetTypeList = data;
                    this.propagateNewData();
                },
                error => {
                    console.log(error);
                }
            );
    }

    getAllDropdownData() {
        // this.getAssetConditionList();
        this.getRentOrLeaseType();
        this.getAssetStatusList();
        this.getRenewalTypeList();
        this.getFireExtinguisherTypeList();
        this.getVehicleTypeList();
        this.getMonthTypeList();
        this.getAssetCategoriesList();
        this.getVehicleDamageTypeList();
        this.getPolicyTypeList();
        this.getDepartmentList();
        this.getOrganizationsList();
        this.getAssetType();
    }

    getOrganizationsList() {
        this._apiService
            .get("/table-maintenance/organization/organizations")
            .subscribe(
                data => {
                    this.dropDownsData.organizationList = data;
                    this.propagateNewData();
                },
                error => {
                    console.log(error);
                }
            );
    }

    getDepartmentList() {
        this._apiService
            .get("/table-maintenance/department/departments")
            .subscribe(
                data => {
                    this.dropDownsData.departmentList = data;
                    this.propagateNewData();
                },
                error => {
                    console.log(error);
                }
            );
    }

    getPolicyTypeList() {
        this._apiService
            .get("/table-maintenance/policy-type/policy-types")
            .subscribe(
                data => {
                    this.dropDownsData.policyTypeList = data;
                    this.propagateNewData();
                },
                error => {
                    console.log(error);
                }
            );
    }

    getVehicleDamageTypeList() {
        this._apiService
            .get(
                "/table-maintenance/vehicle-damage-type/vehicle-damage-types"
            )
            .subscribe(
                data => {
                    this.dropDownsData.vehicleDamageTypeList = data;
                    this.propagateNewData();
                },
                error => {
                    console.log(error);
                }
            );
    }

    getFireExtinguisherTypeList() {
        this._apiService
            .get(
                "/table-maintenance/fire-extinguisher-type/fire-extinguisher-types"
            )
            .subscribe(
                data => {
                    this.dropDownsData.fireExtinguisherTypeList = data;
                    this.propagateNewData();
                },
                error => {
                    console.log(error);
                }
            );
    }

    getAssetCategoriesList() {
        this._apiService
            .get("/table-maintenance/asset-category/asset-categories")
            .subscribe(
                (data) => {
                    this.dropDownsData.assetCategoriesList = data;
                    this.propagateNewData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }
    getRentOrLeaseType() {
        this._apiService
            .get("/table-maintenance/rental-or-lease-type/rental-or-lease-types")
            .subscribe(
                (data) => {
                    this.dropDownsData.rentOrLeaseTypeList = data;
                    this.propagateNewData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    getAssetConditionList() {
        this._apiService
            .get("/table-maintenance/asset-condition/asset-conditions")
            .subscribe(
                data => {
                    this.dropDownsData.assetConditionList = data;
                    this.propagateNewData();
                },
                error => {
                    console.log(error);
                }
            );
    }

    getAssetStatusList() {
        this._apiService
            .get("/table-maintenance/asset-status/asset-statuses")
            .subscribe(
                data => {
                    this.dropDownsData.assetStatusList = data;
                    this.propagateNewData();
                },
                error => {
                    console.log(error);
                }
            );
    }

    getRenewalTypeList() {
        this._apiService
            .get("/table-maintenance/renewal-type/renewal-types")
            .subscribe(
                (data) => {
                    this.dropDownsData.renewalTypeList = data;
                    this.propagateNewData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    getVehicleTypeList() {
        this._apiService
            .get("/table-maintenance/vehicle-type/vehicle-types")
            .subscribe(
                data => {
                    this.dropDownsData.vehicleTypeList = data;
                    this.propagateNewData();
                },
                error => {
                    console.log(error);
                }
            );
    }
    getMonthTypeList() {
        this._apiService
            .get("/table-maintenance/month-type/month-types")
            .subscribe(
                data => {
                    this.dropDownsData.monthTypeList = data;
                    this.propagateNewData();
                },
                error => {
                    console.log(error);
                }
            );
    }

    propagateNewData() {
        this.dropDownsService.next(this.dropDownsData);
    }
}
