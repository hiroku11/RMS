import { AddressLookupComponent } from './../../address-lookup/address-lookup.component';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { SharedService } from './../../../../services/shared.service';
import { ApiService } from './../../../../services/api.service';
import { UserLookupComponent } from './../../user-lookup/user-lookup.component';
import { PostcodeLookupComponent } from './../../../../core.components.module/component/postcode-lookup/postcode-lookup.component';
import { OfficeAddressLookupComponent } from './../../office-address-lookup/office-address-lookup.component';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import * as moment from 'moment';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: "app-add-building",
    templateUrl: "./add-building.component.html",
    styleUrls: ["./add-building.component.scss"]
})
export class AddBuildingComponent implements OnInit {
    add: any;
    public building: any;
    public currentTab: any;
    public tabs: any;
    public editMode: boolean;
    public dropDownsData: any;
    public componentRef: any;
    public multiselectConfig: any = {
        search: false,
        displayKey: "description"
    };
    constructor(
        private _sharedService: SharedService,
        private _apiService: ApiService,
        private _alertsService: AlertsLoaderService,
        private route: ActivatedRoute,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
        this.initBuilding();
        this.tabs = this._sharedService.getTabstoShow(this.building);
        this.currentTab = this.tabs[0];
        this.dropDownsData = this._sharedService.dropDownsData;
        this._sharedService.dropDownsService.subscribe(data => {
            this.dropDownsData = data;
        });

    }
    ngOnInit() {
        this.dropDownsData = this._sharedService.dropDownsData;
        this.route.params.subscribe((params: Params) => {
            let Id = params["id"];
            if (Id) {
                this.getBuildingById(Id);
                this.editMode = true;
            }
        });
    }

    dateChanged($event) {
        console.log($event);
        //alert(moment($event.value).format('DD/MM/YYYY'));
    }
    selectCompareFunction(item1: any, item2: any) {
        if (item1 == null || item2 == null) {
            return false;
        }
        return item1.id == item2.id;
    }
    initBuilding() {
        this.building = {
            id: null,
            assets: null,
            statusFlag: null,
            buildingId: "",
            buildingDescription: null,
            buildingName: null,
            assetCategory: {
                id: "BUILDING",
                description: "Building"
            },
            addresses: [{
                "id": null,
                "statusFlag": "ACTIVE"
            }],
            organization: null,
            department: {
                id: null,
                organization: null
            },
            numberOfFloors: null,
            regulatoryCompliance: null,
            regulatoryAuthorityName: null,
            regCompObtainedDate: null,
            fireExits: null,
            fireExitsLoc: null,
            fireExtinguishers: null,
            fireExtinguisherLoc: null,
            fireExtinguisherTypes: [],
            amcPresent: "N",
            insurancePresent: "N",
            loanPresent: "N",
            licensePresent: "N",
            warrantyPresent: "N",
            inspectionPresent: "N",
            servicePresent: "N",
            rentalOrLeasePresent: "N",
            assetCondition: null,
            assetStatus: null,
            assetType: null,
            notes: null,
            buildingSize: null,
            assetConditionOther: null,
            assetStatusOther: null,
            assetTypeOther: null,
            assignees: [],
            insurancePolicies: null,
            rentalOrLeaseAgreements: null,
            loanAgreements: null,
            annualMaintenanceContracts: null,
            licenses: null,
            warrantyAgreements: null,
            inspections: null,
            services: null,
            existingInsurancePolicies: null,
            existingRentalOrLeaseAgreements: null,
            existingLoanAgreements: null,
            existingAnnualMaintenanceContracts: null,
            existingLicenses: null,
            existingWarrantyAgreements: null,
            existingInspections: null,
            existingServices: null
        };
    }

    handleNullOrganization(data: any) {
        if (data.assetCategory == null) {
            data.assetCategory = {
                id: "BUILDING",
                description: "Building"
            }
        }
        if (data.department === null) {
            data.department = {
                id: null,
                organization: {
                    id: null
                }
            }
        }
        if (!data.addresses || data.addresses.length === 0) {
            data.addresses = [];
            data.addresses.push({
                organizationName: '',
                blockNumber: '',
                equipmentName: '',
                postcode1: '',
                postcode2: '',
                localityName: '',
                city: '',
                doorNumber: '',
                apartmentNumber: '',
                streetName: '',
                postTown: '',
                county: '',
                country: '',
            })
        }
        return data;
    }
    getBuildingById(buidingId: number) {
        this._apiService.get("/building/buildingId/" + buidingId).subscribe(
            data => {

                data = this.handleNullOrganization(data);
                this.building = data;
                this.updateTabs();
            },
            (error: HttpErrorResponse) => {
                this._alertsService.error(
                    "Unable to get building details. Try Again."
                );
            }
        );
    }

    addedToAsset($event: any) {
        this.building = $event;
    }

    changeTab(tab: any) {
        if (!this.building.id && tab.tab != 11 && tab.tab != 1) {
            this._alertsService.error("Please save building details first.");
            return;
        }
        this.currentTab = tab;
    }

    updateTabs() {
        this.tabs = this._sharedService.getTabstoShow(this.building);
    }
    save() {
        this._apiService
            .createOrUpdateBuilding(
                "/building/create-or-update-building",
                this.building
            )
            .subscribe(
                data => {
                    data = this.handleNullOrganization(data);
                    this.building = data;
                    this._alertsService.success("Building successfully saved");
                    //this.initBuilding();
                },
                error => {
                    this._alertsService.error(error);
                }
            );
    }

    userLookup() {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            UserLookupComponent
        );
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'building';
        //
        this.componentRef.instance.assignUser.subscribe((data) => {
            this.assignUser(data);
        });
        this.componentRef.instance.closeModal.subscribe(() => {
            this.closeModal();
        });
    }

    assignUser(user: any) {
        if (!this.building.id) {
            this.building.assignees == null ? this.building.assignees = [] : "";
            this.building.assignees.push(user);
            return;
        }
        this._apiService.put(`/building/add-assignee-to-building-by-user-id/buildingId/${this.building.id}/userId/${user.id}`, null).subscribe(
            (data) => {
                this.building = data;
                this._alertsService.success("Building successfully assigned to user.")
            },
            (error) => {
                this._alertsService.error(error);
            }
        )
    }

    deleteAssignee(user: any) {
        if (!window.confirm("Are you sure you want to delete this item/record?")) {
            return;
        }
        //building/remove-assignee-from-building-by-user-id/buildingId/116/userId/1
        if (!this.building.id) {
            this.building.assignees.forEach((element, index) => {
                this.building.assignees.splice(index, 1);
            });
            return;
        }
        this._apiService.delete(`/building/remove-assignee-from-building-by-user-id/buildingId/${this.building.id}/userId/${user.id}`).subscribe(
            (data) => {
                this.building = data;
                this._alertsService.success("Assignee successfully removed from building.");
            },
            (error) => {
                this._alertsService.error(error);
            }
        )
    }
    lookup(type) {
        let comp: any = OfficeAddressLookupComponent;
        if (type == 'post') {
            comp = PostcodeLookupComponent
        }
        if (type === 'address') {
            comp = AddressLookupComponent
        }

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            comp
        );
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        if (type == 'post') {
            this.componentRef.instance.mod = 'ams';
        }
        this.componentRef.instance.selectAddress.subscribe((data) => {
            this.selectAddress(data);
        });
        this.componentRef.instance.closeModal.subscribe(() => {
            this.closeModal();
        });
    }

    selectAddress(data) {
        this.building.addresses[0] = data;;
    }

    closeModal() {
        if (this.componentRef.instance.selectAddress) {
            this.componentRef.instance.selectAddress.unsubscribe();
        }
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
    }
}
