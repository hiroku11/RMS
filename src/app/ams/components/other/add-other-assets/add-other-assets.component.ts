import { SharedService } from './../../../../services/shared.service';
import { ApiService } from './../../../../services/api.service';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { UserLookupComponent } from "../../user-lookup/user-lookup.component";

@Component({
    selector: "app-add-other-assets",
    templateUrl: "./add-other-assets.component.html",
    styleUrls: ["./add-other-assets.component.scss"]
})
export class AddOtherAssetsComponent implements OnInit {
    asset: any ;
    public currentTab: any;
    public tabs: any;
    public dropDownsData: any;
    public editMode: boolean;
    componentRef:any;
    constructor(
        private _sharedService: SharedService,
        private _apiService: ApiService,
        private _alertsService: AlertsLoaderService,
        private route: ActivatedRoute,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
        this.initAssetOther();
        this.tabs = this._sharedService.getTabstoShow(this.asset);
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
                this.getAssetById(Id);
                this.editMode = true;
            }
        });
    }
    selectCompareFunction(item1:any,item2:any) {
        if(item1 == null || item2 ==null){
            return false;
        }
        return item1.id == item2.id;
    }
    initAssetOther(){
        this.asset= {
            id: null,
            assets: null,
            statusFlag: null,
            assetTypeOtherId: null,
            assetTypeOtherDescription: null,
            assetTypeOtherName: null,
            assetCategory: {
                id: "OTHER",
                description:"Other"
            },
            addresses: [],
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
            existingServices: null,
            assignees: null,
            assetTag: null,
            assetCost: null,
            assetLength: null,
            assetWidth: null,
            assetHeight: null,
            assetWeight: null,
            assetQuantity: null,
            assetMake: null,
            assetModel: null,
            assetSerialNumber: null,
            assetDamageDescription: null,
            assetCondition: {
                id: null
            },
            assetStatus: {
                id: null
            },
            assetType: {
                id: null
            },
            assetConditionOther: null,
            assetStatusOther: null,
            assetTypeOther: null,
            purchasedDate: null,
            purchasedFrom: null,
            purchaseCompanyPhone: null,
            purchaseCompanyEmail: null,
            purchaseCompanyContactPerson: null,
            purchaseComments: null,
            orderNumber: null,
            invoiceNumber: null,
            assetReturned: null,
            assetReturnedDate: null,
            refundAmount: null,
            assetReturnReason: null,
            regulatoryCompliance: null,
            regulatoryAuthorityName: null,
            regCompObtainedDate: null,
            organization: {
                id: null
            },
            department: {
                id:null,
                organization:null
            },
            amcPresent: "N",
            insurancePresent: "N",
            loanPresent: "N",
            licensePresent: "N",
            warrantyPresent: "N",
            inspectionPresent: "N",
            servicePresent: "N",
            rentalOrLeasePresent:"N",
            fireExtinguishers: null,
            fireExits: null,
            fireExitsLoc: null,
            fireExtinguisherLoc: null,
            fireExtinguisherTypes: []
        };
    }
    changeTab(tab: any) {
        if (!this.asset.id && tab.tab != 11 && tab.tab != 1) {
            this._alertsService.error("Please save asset details first.");
            return;
        }
        this.currentTab = tab;
    }
    updateTabs() {
        this.tabs = this._sharedService.getTabstoShow(this.asset);
    }
    handleNullOrganization(data: any) {
        if (data.assetCategory == null) {
            data.assetCategory = {
                id: "OTHER",
                description: "Other"
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
        return data;
    }
    getAssetById(id: number) {
        this._apiService
            .get("/asset-type-other/assetTypeOtherId/" + id)
            .subscribe(
                data => { 
                   data = this.handleNullOrganization(data);
                    this.asset = data;
                    this.updateTabs();
                },
                error => {
                    this._alertsService.error(
                        "Unable to get asset details. Try Again."
                    );
                }
            );
    }
    addedToAsset($event:any){
        this.asset = $event;
    }
    save() {
        this._apiService
            .createOrUpdateOtherAsset(
                "/asset-type-other/create-or-update-asset-type-other",
                this.asset
            )
            .subscribe(
                data => {
                    data = this.handleNullOrganization(data);
                    this.asset = data;
                    this._alertsService.success(
                        "Asset details saved successfully."
                    );
                    //this.initAssetOther();
                },
                error => {
                    this._alertsService.error(
                        error
                    );
                }
            );
    }
    userLookup() {

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            UserLookupComponent
        );
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'asset-type-other';
        this.componentRef.instance.assignUser.subscribe((data) => {
            this.assignUser(data);
        });
        this.componentRef.instance.closeModal.subscribe(() => {
            this.closeModal();
        });
    }
    closeModal(){
        this.componentRef.instance.assignUser.unsubscribe();
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
    }
    assignUser(user: any){
        if (!this.asset.id) {
            this.asset.assignees == null ? this.asset.assignees = [] : "";
            this.asset.assignees.push(user);
            return;
        }
        this._apiService.put(`/asset-type-other/add-assignee-to-asset-type-other-by-user-id/assetTypeOtherId/${this.asset.id}/userId/${user.id}`,null).subscribe(
            (data)=>{
                this.asset = data;
                this._alertsService.success("Asset successfully assigned to user.")
            },
            (error)=>{
                this._alertsService.error(error)
            }
        )
        console.log("assigning user")
    }

    deleteAssignee(user: any){
        if (!window.confirm("Are you sure you want to delete this item/record?")) {
            return;
        }
        //building/remove-assignee-from-building-by-user-id/buildingId/116/userId/1
        if (!this.asset.id) {
            this.asset.assignees.forEach((element, index) => {
                this.asset.assignees.splice(index, 1);
            });
            return;
        }
        this._apiService.delete(`/asset-type-other/remove-assignee-from-asset-type-other-by-user-id/assetTypeOtherId/${this.asset.id}/userId/${user.id}`).subscribe(
            (data)=>{
                this.asset = data;
                this._alertsService.success("Assignee successfully removed from asset.");
            },
            (error)=>{
                this._alertsService.error(error);
            }
        )
    }
}
