import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { SharedService } from './../../../../services/shared.service';
import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { UserLookupComponent } from '../../user-lookup/user-lookup.component';

@Component({
    selector: "app-add-equipment",
    templateUrl: "./add-equipment.component.html",
    styleUrls: ["./add-equipment.component.scss"]
})
export class AddEquipmentComponent implements OnInit {
    equipment: any ;
    public currentTab: any;
    public tabs: any;
    public dropDownsData: any = {};
    public editMode: boolean;
    componentRef: any;
    constructor(
        private _sharedService: SharedService,
        private _apiService: ApiService,
        private _alertsService: AlertsLoaderService,
        private route: ActivatedRoute,
        private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
        this.initEquipment();
        this.tabs = this._sharedService.getTabstoShow(this.equipment);
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
                this.getEquipmentById(Id);
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
    initEquipment(){
        this.equipment = {
            id: null,
            assets: null,
            statusFlag: null,
            equipmentId: null,
            equipmentDetails: null,
            serialNumber: null,
            assetCategory: {
                id: "EQUIPMENT",
                description:"Equipment"
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
            equipmentName: null,
            equipmentTag: null,
            equipmentCost: null,
            equipmentLength: null,
            equipmentWidth: null,
            equipmentHeight: null,
            equipmentWeight: null,
            equipmentQuantity: null,
            equipmentMake: null,
            equipmentModel: null,
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
            equipmentPurchasedDate: null,
            equipmentPurchasedFrom: null,
            equipmentCompanyPhone: null,
            equipmentCompanyEmail: null,
            equipmentCompanyContactPerson: null,
            equipmentCompanyComments: null,
            orderNumber: null,
            invoiceNumber: null,
            equipmentDamageDesc: null,
            equipmentReturnedDate: null,
            refundAmount: null,
            equipmentReturned: null,
            equipmentReturnedReason: null,
            organization: {
                id: null
            },
            department: {
                id: null
            },
            regulatoryCompliance: null,
            regulatoryAuthorityName: null,
            regCompObtainedDate: null,
            fireExtinguishers: null,
            fireExits: null,
            amcPresent: "N",
            insurancePresent: "N",
            loanPresent: "N",
            licensePresent: "N",
            warrantyPresent: "N",
            inspectionPresent: "N",
            rentalOrLeasePresent:"N",
            servicePresent: "N",
            fireExitsLoc: null,
            fireExtinguisherLoc: null,
            fireExtinguisherTypes: []
        };
    }
    changeTab(tab: string) {
        if (!this.equipment.id) {
            this._alertsService.error("Please save equipment details first.");
            return;
        }
        this.currentTab = tab;
    }
    getEquipmentById(id: number) {
        this._apiService.get("/equipment/equipmentId/" + id).subscribe(
            data => {
                this.equipment = data;
                this.updateTabs();
            },
            error => {
                this._alertsService.error(
                    "Unable to get equipment details. Try Again."
                );
            }
        );
    }

    updateTabs() {
        this.tabs = this._sharedService.getTabstoShow(this.equipment);
    }
    addedToAsset($event:any){
        this.equipment = $event;
    }
    save() {
        this._apiService
            .createOrUpdateEquipment(
                "/equipment/create-or-update-equipment",
                this.equipment
            )
            .subscribe(
                data => {
                    this.equipment = data;
                    this._alertsService.success("Equipment successfully saved");
                    //this.initEquipment();
                },
                error => {
                    this._alertsService.error(
                        "Error occured while saving equpment details"
                    );
                }
            );
    }

    userLookup() {
        if(!this.equipment.id){
            this._alertsService.error("Please save equipments details first.");
            return;
        }
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            UserLookupComponent
        );
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'equipment';
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
        if (!this.equipment.id) {
            this.equipment.assignees == null ? this.equipment.assignees = [] : "";
            this.equipment.assignees.push(user);
            return;
        }
        this._apiService.put(`/equipment/add-assignee-to-equipment-by-user-id/equipmentId/${this.equipment.id}/userId/${user.id}`,null).subscribe(
            (data)=>{
                this.equipment = data;
                this._alertsService.success("Equipment successfully assigned to user.")
            },
            (error)=>{
                this._alertsService.error("Some error occured try again.")
            }
        )
        console.log("assigning user")
    }

    deleteAssignee(user: any){
        //equipment/remove-assignee-from-equipment-by-user-id/equipmentId/116/userId/1
        this._apiService.delete(`/equipment/remove-assignee-from-equipment-by-user-id/equipmentId/${this.equipment.id}/userId/${user.id}`).subscribe(
            (data)=>{
                this.equipment = data;
                this._alertsService.success("Assignee successfully removed from equipment.");
            },
            (error)=>{
                this._alertsService.error("Some error occured try again.");
            }
        )
    }
}
