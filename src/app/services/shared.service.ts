import { ApiService } from './api.service';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";


@Injectable()
export class SharedService {
    public activeView: string;
    public dropDownsData: any = {};
    public cmsDropDownsData: any = {};
    public pmsDropDownnsData: any = {};
    public lmsDropDownnsData: any = {};
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
    public cmsDropDownsService = new Subject();
    public pmsDropDownService = new Subject();
    public lmsDropDownService = new Subject();
    constructor(private _apiService: ApiService) {
        this.getAllDropdownData();

    }
    selectCompareFunction(item1: any, item2: any) {
        if (item1 == null || item2 == null) {
            return false;
        }
        return item1.id == item2.id;
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
            .get("/table-maintenance/asset-type/asset-types", {}, false)
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
        this.getAssetConditionList();
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
        this.getGenderTypes();
        this.getEmployeeTypes();
        this.getPositions();
        this.getRoles();
    }

    getRoles(){
        this._apiService.get(`/role/roles`, {}, false).subscribe(
            data => {
                this.dropDownsData.rolesList = data;
                this.propagateNewData();
            },
            error => {
                console.log(error);
            }
        );
    }

    getPositions() {
        //positionsList
        this._apiService.get(`/table-maintenance/position/positions`, {}, false).subscribe(
            data => {
                this.dropDownsData.positionsList = data;
                this.propagateNewData();
            },
            error => {
                console.log(error);
            }
        );

    }
    getOrganizationsList() {
        this._apiService
            .get("/table-maintenance/organization/organizations", {}, false)
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
            .get("/table-maintenance/department/departments", {}, false)
            .subscribe(
                data => {
                    this.dropDownsData.departmentList = data;
                    this.cmsDropDownsData.departmentList = data;
                    this.propagateNewData();
                },
                error => {
                    console.log(error);
                }
            );
    }

    getPolicyTypeList() {
        this._apiService
            .get("/table-maintenance/policy-type/policy-types", {}, false)
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
                "/table-maintenance/vehicle-damage-type/vehicle-damage-types", {}, false
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
                "/table-maintenance/fire-extinguisher-type/fire-extinguisher-types", {}, false
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
            .get("/table-maintenance/asset-category/asset-categories", {}, false)
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
            .get("/table-maintenance/rental-or-lease-type/rental-or-lease-types", {}, false)
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
            .get("/table-maintenance/asset-condition/asset-conditions", {}, false)
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
            .get("/table-maintenance/asset-status/asset-statuses", {}, false)
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
            .get("/table-maintenance/renewal-type/renewal-types", {}, false)
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
            .get("/table-maintenance/vehicle-type/vehicle-types", {}, false)
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
            .get("/table-maintenance/month-type/month-types", {}, false)
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

    getCmsDocumentStatuses() {
        this._apiService
            .get("/table-maintenance/document-status/document-statuses", {}, false)
            .subscribe(
                (data) => {
                    this.cmsDropDownsData.documentStatuses = data;
                    this.propagateNewCmsData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    getCmsDocumentClassifications() {
        this._apiService
            .get("/table-maintenance/document-classification/document-classifications", {}, false)
            .subscribe(
                (data) => {
                    this.cmsDropDownsData.documentClassifications = data;
                    this.propagateNewCmsData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    getCmsDocumentApprovalLevels() {
        this._apiService
            .get("/table-maintenance/approval-level/approval-levels", {}, false)
            .subscribe(
                (data) => {
                    this.cmsDropDownsData.approvalLevels = data;
                    this.propagateNewCmsData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    getCmsDocumentVersionStatuses() {
        this._apiService
            .get("/table-maintenance/document-history-status/document-history-statuses", {}, false)
            .subscribe(
                (data) => {
                    this.cmsDropDownsData.versionStatuses = data;
                    this.propagateNewCmsData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    getCmsDropdownsData() {
        this.getCmsDocumentApprovalLevels();
        this.getCmsDocumentClassifications();
        this.getCmsDocumentStatuses();
        this.getCmsDocumentVersionStatuses();
        this.getDepartmentList();
    }
 

    propagateNewData() {
        this.dropDownsService.next(this.dropDownsData);
    }
    propagateNewCmsData() {
        this.cmsDropDownsService.next(this.cmsDropDownsData);
    }
    propagateNewPmsData() {
        this.pmsDropDownService.next(this.pmsDropDownnsData);
    }

    getPmsCategory() {
        this._apiService
            .get("/table-maintenance/goal-category/goal-categories", {}, false)
            .subscribe(
                (data) => {
                    this.pmsDropDownnsData.category = data;
                    this.propagateNewPmsData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }
    getPmsRating() {
        this._apiService
            .get("/table-maintenance/performance-rating/performance-ratings", {}, false)
            .subscribe(
                (data) => {
                    this.pmsDropDownnsData.rating = data;
                    this.propagateNewPmsData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }
    getPmsCycleStauts() {
        this._apiService
            .get("/table-maintenance/performance-cycle-status/performance-cycle-statuses", {}, false)
            .subscribe(
                (data) => {
                    this.pmsDropDownnsData.status = data;
                    this.propagateNewPmsData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }
    getPmsDropdownsData() {
        this.getPmsCategory();
        this.getPmsCycleStauts();
        this.getPmsRating();
    }

    getGenderTypes() {
        this._apiService
            .get("/table-maintenance/gender-type/gender-types", {}, false)
            .subscribe(
                (data) => {
                    this.dropDownsData.genderTypes = data;
                    this.propagateNewData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    getEmployeeTypes() {
        this._apiService
            .get("/table-maintenance/employee-type/employee-types", {}, false)
            .subscribe(
                (data) => {
                    this.dropDownsData.employeeTypes = data;
                    this.propagateNewData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }
    getLmsDropdownsData() {
        this.getCourseTypes();
        this.getLearningTypes();
        this.getCourseDomain();
    }
    getCourseTypes() {
        this._apiService
            .get("/table-maintenance/course-type/course-types", {}, false)
            .subscribe(
                (data) => {
                    this.dropDownsData.courseTypes = data;
                    this.propagateNewData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }   
    getLearningTypes() {
        this._apiService
            .get("/table-maintenance/learning-type/learning-types", {}, false)
            .subscribe(
                (data) => {
                    this.dropDownsData.courseTypes = data;
                    this.propagateNewData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }
    getCourseDomain() {
        this._apiService
            .get("/table-maintenance/course-domain/course-domains", {}, false)
            .subscribe(
                (data) => {
                    this.dropDownsData.courseTypes = data;
                    this.propagateNewData();
                },
                (error) => {
                    console.log(error);
                }
            );
    }
}

