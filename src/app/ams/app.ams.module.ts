import { SmMenuComponent } from './components/sm-menu/sm-menu.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CoreComponentsModule } from './../core.components.module/core.components.module';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { SupportingDocumentsComponent } from './components/supporting-documents/supporting-documents.component';
import { UserLookupComponent } from './components/user-lookup/user-lookup.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SearchComponent } from './components/search/search.component';
import { WarrantyComponent } from './components/warranty/warranty.component';
import { ServiceComponent } from './components/service/service.component';
import { RentOrLeaseComponent } from './components/rent-or-lease/rent-or-lease.component';
import { PolicyComponent } from './components/policy/policy.component';
import { LoanComponent } from './components/loan/loan.component';
import { LicenseComponent } from './components/license/license.component';
import { InspectionComponent } from './components/inspection/inspection.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { OtherAssetsListComponent } from './components/other/other-assets-list/other-assets-list.component';
import { AddOtherAssetsComponent } from './components/other/add-other-assets/add-other-assets.component';
import { VehicleListComponent } from './components/vehicle/vehicle-list/vehicle-list.component';
import { AddVehicleComponent } from './components/vehicle/add-vehicle/add-vehicle.component';
import { EquipmentListComponent } from './components/equipment/equipment-list/equipment-list.component';
import { AddEquipmentComponent } from './components/equipment/add-equipment/add-equipment.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { OtherComponent } from './components/other/other.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { AddBuildingComponent } from './components/building/add-building/add-building.component';
import { BuildingListComponent } from './components/building/building-list/building-list.component';
import { BuildingComponent } from './components/building/building.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PaginationModule } from "ngx-pagination-bootstrap";
import { SelectDropDownModule } from "ngx-select-dropdown";
import { AmsRoutingModule } from './ams.routing.module';

export const MY_MOMENT_FORMATS = {
    parseInput: 'DD/MM/YYYY HH:mm:ss',
    fullPickerInput: 'DD/MM/YYYY HH:mm:ss',
    datePickerInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  };


@NgModule({
    declarations: [
        DashboardComponent,
        BuildingComponent,
        BuildingListComponent,
        AddBuildingComponent,
        VehicleComponent,
        OtherComponent,
        EquipmentComponent,
        AddEquipmentComponent,
        EquipmentListComponent,
        AddVehicleComponent,
        VehicleListComponent,
        AddOtherAssetsComponent,
        OtherAssetsListComponent,
        MaintenanceComponent,
        InspectionComponent,
        LicenseComponent,
        LoanComponent,
        PolicyComponent,
        RentOrLeaseComponent,
        ServiceComponent,
        WarrantyComponent,
        SupportingDocumentsComponent,
        SearchComponent,
        UserLookupComponent,
        SummaryComponent,
        SideNavComponent,
        SmMenuComponent
    ],
    imports: [FormsModule, CommonModule, AmsRoutingModule,
        PaginationModule, SelectDropDownModule, OwlDateTimeModule,
        OwlMomentDateTimeModule, CoreComponentsModule],
    providers: [
        { provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS }
    ],
    exports: [ ],
    entryComponents: [DashboardComponent, SearchComponent, UserLookupComponent]
})
export class AmsModule { }
