import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-loan",
    templateUrl: "./loan.component.html",
    styleUrls: ["./loan.component.scss"]
})
export class LoanComponent implements OnInit {
    loan: any ;
    @Input() asset: any;
    editMode: boolean=false;
    @Output() addedToAsset: EventEmitter<any> = new EventEmitter();
    lookupParams: any;
    lookupItems:any;
    lookupOptions: any;
    editing: any;

    constructor(
        private _alertsService: AlertsLoaderService,
        private _apiService: ApiService
    ) {
        this.initLoan();
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
                order:"ASC",
                sort:false
            },
            agreementName: {
                field: 'agreementName',
                operator: "EQ",
                value: null,
                order:"ASC",
                sort:false
            },
            agreementDescription: {
                field: 'agreementDescription',
                operator: "EQ",
                value: null,
                order:"ASC",
                sort:false
            },
            companyName: {
                field: 'companyName',
                operator: "EQ",
                value: null,
                order:"ASC",
                sort:false
            },
            companyDescription: {
                field: 'companyDescription',
                operator: "EQ",
                value: null,
                order:"ASC",
                sort:false
            },
            loanAmount: {
                field: 'loanAmount',
                operator: "EQ",
                value: null,
                order:"ASC",
                sort:false
            },
            startDateTime: {
                field: 'startDateTime',
                operator: "EQ",
                value: null,
                order:"ASC",
                sort:false
            },endDateTime: {
                field: 'endDateTime',
                operator: "EQ",
                value: null,
                order:"ASC",
                sort:false
            }
        }
    }
    initLoan(){
        this.loan = {
            id: null,
            statusFlag: null,
            agreementId: null,
            agreementName: null,
            agreementDescription:
            null,
            companyName: null,
            companyDescription: null,
            companyPhone: null,
            companyEmail: null,
            companyContactPerson: null,
            startDateTime: null,
            endDateTime: null,
            graceDateTime: null,
            loanAmount: null,
            loanEmi: null,
            gracePeriodInMonths: null,
            comments: null,
            interestPercentage: null,
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
        if(this.editMode){
            this.updateLoan();
            return;
        }
        let url = "/building/add-loan-to-building/buildingId/";
        if (this.asset.assetCategory.id == "OTHER") {
            url =
                "/asset-type-other/add-loan-to-asset-type-other/assetTypeOtherId/";
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-loan-to-equipment/equipmentId/";
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/add-loan-to-vehicle/vehicleId/";
        }
        url = url + this.asset.id;
        this._apiService.put(url, this.loan).subscribe(
            data => {
                this.asset = data;
                this._alertsService.success(
                    "Loan successfully added to " +
                        this.asset.assetCategory.description
                );
                this.initLoan();
                this.addedToAsset.emit(data);
            },
            error => {
                this._alertsService.error(
                   error
                );
            }
        );
    }

    editLoan(loan: any){
        this.loan = JSON.parse(JSON.stringify(loan));
        this.editing = loan;
        this.editMode = true;
    }
    updateLoan(){
        this._apiService.put("/loan/update-loan",this.loan).subscribe(
            data => {
                this.loan = data;
                this.editing = Object.assign(this.editing,data);
                this._alertsService.success(
                    "Loan successfully updated."
                );
                this.initLoan();
                this.editMode = false;
            },
            error => {
                this._alertsService.error(
                    error
                );
            }
        );
    }
    removeLoanFromAsset(loan: any){
        let url = `/building/remove-loan-from-building/buildingId/${this.asset.id}/loanId/${loan.id}`;
    if (this.asset.assetCategory.id == "VEHICLE") {
        url = `/vehicle/remove-loan-from-vehicle/vehicleId/${this.asset.id}/loanId/${loan.id}`;
    }
    if (this.asset.assetCategory.id == "EQUIPMENT") {
        url = `/equipment/remove-loan-from-equipment/equipmentId/${this.asset.id}/loanId/${loan.id}`;
    }
    if (this.asset.assetCategory.id == "OTHER") {
        url =  `/asset-type-other/remove-loan-from-asset-type-other/assetTypeOtherId/${this.asset.id}/loanId/${loan.id}`;;
    }
    this._apiService.delete(url).subscribe(
        data => {
            this.asset = data;
            this._alertsService.success(
                "Loan successfully removed from " +this.asset.assetCategory.description
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
    lookupFieldChange({field,operator,value}){
        let fil = {
            field,
            operator,
            value
        }
        const exists = this.lookupParams.filters.filter(filt=> filt.field === field);
        const obj = {};
        obj[field] = value;
        fil.value = this._apiService.parseDateToApiFormat(obj)[field];
        if(!exists.length){
            this.lookupParams.filters.push(fil);
        }else{
            exists[0].value = value;
            exists[0].operator = operator;
        }
    }

    lookupSortChange({field,sort,order}){
        let sor={
            field,
            order
        }
        const exists = this.lookupParams.sorts.filter(s=> s.field === field);
        if(!exists.length && sort){
            this.lookupParams.sorts.push(sor);
        }else if(exists.length && sort){
            exists[0].order = order;
        }else{
            const ind = this.lookupParams.sorts.indexOf(exists[0]);
            this.lookupParams.sorts.splice(ind,1);
        }

    }
    lookupLoan($event ?: any) {
        if($event){
            this.lookupParams.paging.currentPage = $event.pageNo -1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/loan/search-loans', { "Search": JSON.stringify(this.lookupParams) }).subscribe(
            (data) => {
                this.lookupItems = data;
            },
            (error) => {

            }
        )

    }

    addExistingLoanToAsset(loan: any){
        let url = `/building/add-existing-loan-to-building/buildingId/${this.asset.id}/loanId/${loan.id}`;
        if (this.asset.assetCategory.id == "OTHER") {
            url =`/asset-type-other/add-existing-loan-to-asset-type-other/assetTypeOtherId/${this.asset.id}/loanId/${loan.id}`;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = `/equipment/add-existing-loan-to-equipment/equipmentId/${this.asset.id}/loanId/${loan.id}`;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = `/vehicle/add-existing-loan-to-vehicle/vehicleId/${this.asset.id}/loanId/${loan.id}`;
        }
        this._apiService.put(url,null).subscribe(
            data=>{
                this.addedToAsset.emit(data);
                this._alertsService.success("Loan successfully added to " + this.asset.assetCategory.description);
            },
            error=>{
                this._alertsService.error(error);
            }
        );
    }
}
