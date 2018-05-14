webpackJsonp(["app.ams.module"],{

/***/ "./src/app/ams/ams.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_other_add_other_assets_add_other_assets_component__ = __webpack_require__("./src/app/ams/components/other/add-other-assets/add-other-assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_other_other_assets_list_other_assets_list_component__ = __webpack_require__("./src/app/ams/components/other/other-assets-list/other-assets-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_other_other_component__ = __webpack_require__("./src/app/ams/components/other/other.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vehicle_add_vehicle_add_vehicle_component__ = __webpack_require__("./src/app/ams/components/vehicle/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_vehicle_vehicle_list_vehicle_list_component__ = __webpack_require__("./src/app/ams/components/vehicle/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_vehicle_vehicle_component__ = __webpack_require__("./src/app/ams/components/vehicle/vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_equipment_add_equipment_add_equipment_component__ = __webpack_require__("./src/app/ams/components/equipment/add-equipment/add-equipment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_equipment_equipment_list_equipment_list_component__ = __webpack_require__("./src/app/ams/components/equipment/equipment-list/equipment-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_equipment_equipment_component__ = __webpack_require__("./src/app/ams/components/equipment/equipment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_building_add_building_add_building_component__ = __webpack_require__("./src/app/ams/components/building/add-building/add-building.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_building_building_list_building_list_component__ = __webpack_require__("./src/app/ams/components/building/building-list/building-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_building_building_component__ = __webpack_require__("./src/app/ams/components/building/building.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/ams/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var amsRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]] },
    { path: 'buildings', component: __WEBPACK_IMPORTED_MODULE_11__components_building_building_component__["a" /* BuildingComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_building_building_list_building_list_component__["a" /* BuildingListComponent */], pathMatch: 'full' },
            { path: 'add-building', component: __WEBPACK_IMPORTED_MODULE_9__components_building_add_building_add_building_component__["a" /* AddBuildingComponent */], pathMatch: 'full' },
            { path: 'edit-building/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_building_add_building_add_building_component__["a" /* AddBuildingComponent */], pathMatch: 'full' }
        ], canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]]
    },
    { path: 'equipments', component: __WEBPACK_IMPORTED_MODULE_8__components_equipment_equipment_component__["a" /* EquipmentComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_equipment_equipment_list_equipment_list_component__["a" /* EquipmentListComponent */], pathMatch: 'full' },
            { path: 'add-equipment', component: __WEBPACK_IMPORTED_MODULE_6__components_equipment_add_equipment_add_equipment_component__["a" /* AddEquipmentComponent */], pathMatch: 'full' },
            { path: 'edit-equipment/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_equipment_add_equipment_add_equipment_component__["a" /* AddEquipmentComponent */], pathMatch: 'full' }
        ], canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]]
    },
    { path: 'vehicles', component: __WEBPACK_IMPORTED_MODULE_5__components_vehicle_vehicle_component__["a" /* VehicleComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_vehicle_vehicle_list_vehicle_list_component__["a" /* VehicleListComponent */], pathMatch: 'full' },
            { path: 'add-vehicle', component: __WEBPACK_IMPORTED_MODULE_3__components_vehicle_add_vehicle_add_vehicle_component__["a" /* AddVehicleComponent */], pathMatch: 'full' },
            { path: 'edit-vehicle/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_vehicle_add_vehicle_add_vehicle_component__["a" /* AddVehicleComponent */], pathMatch: 'full' }
        ], canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]]
    },
    { path: 'others', component: __WEBPACK_IMPORTED_MODULE_2__components_other_other_component__["a" /* OtherComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_other_other_assets_list_other_assets_list_component__["a" /* OtherAssetsListComponent */], pathMatch: 'full' },
            { path: 'add-other-asset', component: __WEBPACK_IMPORTED_MODULE_0__components_other_add_other_assets_add_other_assets_component__["a" /* AddOtherAssetsComponent */], pathMatch: 'full' },
            { path: 'edit-other-asset/:id', component: __WEBPACK_IMPORTED_MODULE_0__components_other_add_other_assets_add_other_assets_component__["a" /* AddOtherAssetsComponent */], pathMatch: 'full' }
        ], canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */]]
    }
];
var AmsRoutingModule = /** @class */ (function () {
    function AmsRoutingModule() {
    }
    AmsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_14__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_15__angular_router__["e" /* RouterModule */].forChild(amsRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_15__angular_router__["e" /* RouterModule */]],
            providers: []
        })
    ], AmsRoutingModule);
    return AmsRoutingModule;
}());



/***/ }),

/***/ "./src/app/ams/app.ams.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_MOMENT_FORMATS", function() { return MY_MOMENT_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmsModule", function() { return AmsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sm_menu_sm_menu_component__ = __webpack_require__("./src/app/ams/components/sm-menu/sm-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_side_nav_side_nav_component__ = __webpack_require__("./src/app/ams/components/side-nav/side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_module_core_components_module__ = __webpack_require__("./src/app/core.components.module/core.components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_pick_datetime_moment__ = __webpack_require__("./node_modules/ng-pick-datetime-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_pick_datetime__ = __webpack_require__("./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_supporting_documents_supporting_documents_component__ = __webpack_require__("./src/app/ams/components/supporting-documents/supporting-documents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_lookup_user_lookup_component__ = __webpack_require__("./src/app/ams/components/user-lookup/user-lookup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_summary_summary_component__ = __webpack_require__("./src/app/ams/components/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_search_search_component__ = __webpack_require__("./src/app/ams/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_warranty_warranty_component__ = __webpack_require__("./src/app/ams/components/warranty/warranty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_service_service_component__ = __webpack_require__("./src/app/ams/components/service/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_rent_or_lease_rent_or_lease_component__ = __webpack_require__("./src/app/ams/components/rent-or-lease/rent-or-lease.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_policy_policy_component__ = __webpack_require__("./src/app/ams/components/policy/policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_loan_loan_component__ = __webpack_require__("./src/app/ams/components/loan/loan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_license_license_component__ = __webpack_require__("./src/app/ams/components/license/license.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_inspection_inspection_component__ = __webpack_require__("./src/app/ams/components/inspection/inspection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_maintenance_maintenance_component__ = __webpack_require__("./src/app/ams/components/maintenance/maintenance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_other_other_assets_list_other_assets_list_component__ = __webpack_require__("./src/app/ams/components/other/other-assets-list/other-assets-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_other_add_other_assets_add_other_assets_component__ = __webpack_require__("./src/app/ams/components/other/add-other-assets/add-other-assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_vehicle_vehicle_list_vehicle_list_component__ = __webpack_require__("./src/app/ams/components/vehicle/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_vehicle_add_vehicle_add_vehicle_component__ = __webpack_require__("./src/app/ams/components/vehicle/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_equipment_equipment_list_equipment_list_component__ = __webpack_require__("./src/app/ams/components/equipment/equipment-list/equipment-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_equipment_add_equipment_add_equipment_component__ = __webpack_require__("./src/app/ams/components/equipment/add-equipment/add-equipment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_equipment_equipment_component__ = __webpack_require__("./src/app/ams/components/equipment/equipment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_other_other_component__ = __webpack_require__("./src/app/ams/components/other/other.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_vehicle_vehicle_component__ = __webpack_require__("./src/app/ams/components/vehicle/vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_building_add_building_add_building_component__ = __webpack_require__("./src/app/ams/components/building/add-building/add-building.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_building_building_list_building_list_component__ = __webpack_require__("./src/app/ams/components/building/building-list/building-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_building_building_component__ = __webpack_require__("./src/app/ams/components/building/building.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/ams/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ngx_pagination_bootstrap__ = __webpack_require__("./node_modules/ngx-pagination-bootstrap/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ngx_select_dropdown__ = __webpack_require__("./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ams_routing_module__ = __webpack_require__("./src/app/ams/ams.routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var MY_MOMENT_FORMATS = {
    parseInput: 'DD/MM/YYYY HH:mm:ss',
    fullPickerInput: 'DD/MM/YYYY HH:mm:ss',
    datePickerInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};
var AmsModule = /** @class */ (function () {
    function AmsModule() {
    }
    AmsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_32__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_29__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_building_building_component__["a" /* BuildingComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_building_building_list_building_list_component__["a" /* BuildingListComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_building_add_building_add_building_component__["a" /* AddBuildingComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_vehicle_vehicle_component__["a" /* VehicleComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_other_other_component__["a" /* OtherComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_equipment_equipment_component__["a" /* EquipmentComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_equipment_add_equipment_add_equipment_component__["a" /* AddEquipmentComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_equipment_equipment_list_equipment_list_component__["a" /* EquipmentListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_vehicle_add_vehicle_add_vehicle_component__["a" /* AddVehicleComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_vehicle_vehicle_list_vehicle_list_component__["a" /* VehicleListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_other_add_other_assets_add_other_assets_component__["a" /* AddOtherAssetsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_other_other_assets_list_other_assets_list_component__["a" /* OtherAssetsListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_maintenance_maintenance_component__["a" /* MaintenanceComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_inspection_inspection_component__["a" /* InspectionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_license_license_component__["a" /* LicenseComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_loan_loan_component__["a" /* LoanComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_policy_policy_component__["a" /* PolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_rent_or_lease_rent_or_lease_component__["a" /* RentOrLeaseComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_service_service_component__["a" /* ServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_warranty_warranty_component__["a" /* WarrantyComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_supporting_documents_supporting_documents_component__["a" /* SupportingDocumentsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_user_lookup_user_lookup_component__["a" /* UserLookupComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_summary_summary_component__["a" /* SummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_side_nav_side_nav_component__["a" /* SideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_0__components_sm_menu_sm_menu_component__["a" /* SmMenuComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_30__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_31__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_35__ams_routing_module__["a" /* AmsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_33_ngx_pagination_bootstrap__["a" /* PaginationModule */], __WEBPACK_IMPORTED_MODULE_34_ngx_select_dropdown__["a" /* SelectDropDownModule */], __WEBPACK_IMPORTED_MODULE_4_ng_pick_datetime__["e" /* OwlDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_pick_datetime_moment__["a" /* OwlMomentDateTimeModule */], __WEBPACK_IMPORTED_MODULE_2__core_components_module_core_components_module__["a" /* CoreComponentsModule */]],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4_ng_pick_datetime__["b" /* OWL_DATE_TIME_FORMATS */], useValue: MY_MOMENT_FORMATS }
            ],
            exports: [],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_29__components_dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_8__components_search_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_6__components_user_lookup_user_lookup_component__["a" /* UserLookupComponent */]]
        })
    ], AmsModule);
    return AmsModule;
}());



/***/ }),

/***/ "./src/app/ams/components/building/add-building/add-building.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pb-3\">\n  <div class=\"col-md-12\">\n    <h4>\n      <span class=\"fa fa-building\"></span> Add Building</h4>\n  </div>\n</div>\n\n<ul class=\"row nav nav-tabs mb-2\">\n  <li class=\"nav-item\" (click)=\"changeTab(tab)\" *ngFor=\"let tab of tabs\">\n    <a class=\"nav-link\" [ngClass]=\"{'active': currentTab.tab == tab.tab}\">{{tab.name}}</a>\n  </li>\n</ul>\n<div class=\"tab-content\" *ngIf=\"currentTab.tab == 1\">\n  <h5>Building Details</h5>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Building ID</label>\n      <input class=\"form-control\" [(ngModel)]=\"building.buildingId\" name=\"buildingid\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Building Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"building.buildingName\" name=\"buildingName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>No. Of Floors</label>\n      <input class=\"form-control\" [(ngModel)]=\"building.numberOfFloors\" name=\"numberOfFloors\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Building Size</label>\n      <input class=\"form-control\" [(ngModel)]=\"building.buildingSize\" name=\"buildingSize\" />\n    </div>\n  </div>\n\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Asset Category</label>\n      <select class=\"form-control\" [compareWith]=\"selectCompareFunction\" disabled [(ngModel)]=\"building.assetCategory\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let category of dropDownsData.assetCategoriesList\" [ngValue]=\"category\">{{category.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Organization</label>\n      <select class=\"form-control\" disabled [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"building.department.organization\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let organization of dropDownsData.organizationList\" [ngValue]=\"organization\">{{organization.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Department</label>\n      <select class=\"form-control\" [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"building.department\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let department of dropDownsData.departmentList\" [ngValue]=\"department\">{{department.description}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Building Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"building.buildingDescription\" name=\"buildingDescription\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Regulatory Compliance</label>\n      <select class=\"form-control\" [(ngModel)]=\"building.regulatoryCompliance\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Regulatory Authority</label>\n      <input class=\"form-control\" [disabled]=\"building.regulatoryCompliance != 'Y'\" [(ngModel)]=\"building.regulatoryAuthorityName\" name=\"regulatoryAuthorityName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Compliance Obtained Date</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" [disabled]=\"building.regulatoryCompliance != 'Y'\"\n       [(ngModel)]=\"building.regCompObtainedDate\" name=\"regCompObtainedDate\" />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Exits</label>\n      <select class=\"form-control\" [(ngModel)]=\"building.fireExits\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n  </div>\n\n\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Exit Location</label>\n      <input class=\"form-control\" [disabled]=\"building.fireExits != 'Y'\" [(ngModel)]=\"building.fireExitsLoc\" name=\"fireExitsLoc\"\n      />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Exitinguishers Present</label>\n      <select class=\"form-control\" [(ngModel)]=\"building.fireExtinguishers\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Extinguisher</label>\n      <ngx-select-dropdown [ngClass]=\"{'disabled':building.fireExtinguishers != 'Y'}\" *ngIf=\"dropDownsData.fireExtinguisherTypeList\"\n        [multiple]=\"true\" [config]=\"multiselectConfig\" [(value)]=\"building.fireExtinguisherTypes\" [options]=\"dropDownsData.fireExtinguisherTypeList\"></ngx-select-dropdown>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Extinguisher Location</label>\n      <input class=\"form-control\" [disabled]=\"building.fireExtinguishers != 'Y'\" [(ngModel)]=\"building.fireExtinguisherLoc\" name=\"fireExtinguisherLoc\"\n      />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Annual Maintenance Contract</label>\n      <select class=\"form-control\" [(ngModel)]=\"building.amcPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Inspection</label>\n      <select class=\"form-control\" [(ngModel)]=\"building.inspectionPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>License</label>\n      <select class=\"form-control\" [(ngModel)]=\"building.licensePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Loan</label>\n      <select class=\"form-control\" [(ngModel)]=\"building.loanPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Policy</label>\n      <select class=\"form-control\" [(ngModel)]=\"building.insurancePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Rental/Lease</label>\n      <select class=\"form-control\" [(ngModel)]=\"building.rentalOrLeasePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Service</label>\n      <select class=\"form-control\" [(ngModel)]=\"building.servicePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Warranty</label>\n      <select class=\"form-control\" [(ngModel)]=\"building.warrantyPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Asset Condition</label>\n      <select [compareWith]=\"selectCompareFunction\" class=\"form-control\" [(ngModel)]=\"building.assetCondition\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let condition of dropDownsData.assetConditionList\" [ngValue]=\"condition\">{{condition.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If Other Specify</label>\n      <input class=\"form-control\" [disabled]=\"!building.assetCondition || building.assetCondition.id != 'OTHER'\" [(ngModel)]=\"building.assetConditionOther\"\n        name=\"assetConditionOther\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Asset Status</label>\n      <select [compareWith]=\"selectCompareFunction\" class=\"form-control\" [(ngModel)]=\"building.assetStatus\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let status of dropDownsData.assetStatusList\" [ngValue]=\"status\">{{status.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If Other Specify</label>\n      <input class=\"form-control\" [disabled]=\"!building.assetStatus || building.assetStatus.id != 'OTHER'\" [(ngModel)]=\"building.assetStatusOther\"\n        name=\"assetStatusOther\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Asset Type</label>\n      <select [compareWith]=\"selectCompareFunction\" class=\"form-control\" [(ngModel)]=\"building.assetType\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let type of dropDownsData.assetTypeList\" [ngValue]=\"type\">{{type.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If Other Specify</label>\n      <input class=\"form-control\" [disabled]=\"!building.assetType || building.assetType.id != 'OTHER'\" [(ngModel)]=\"building.assetTypeOther\"\n        name=\"description\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      Assigned To:\n      <button class=\"btn btn-primary btn-sm\" (click)=\"userLookup()\">Lookup</button>\n    </div>\n  </div>\n\n  <table class=\"table table-bordered\">\n    <thead>\n      <th>\n        Login Id\n      </th>\n      <th>\n        First Name\n      </th>\n      <th>\n        Last Name\n      </th>\n      <th></th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let assignee of building.assignees\">\n        \n        <td>{{assignee.userLoginId || assignee.loginId }}\n        </td>\n        <td>{{assignee.firstName}}</td>\n        <td>{{assignee.lastName}}</td>\n        <td>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-success\" (click)=\"deleteAssignee(assignee)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Notes</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"building.notes\"></textarea>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <button class=\"btn btn-primary\" (click)=\"save()\">{{editMode?'Update':'Save'}}</button>\n      <!-- <button class=\"btn btn-success float-right\">Next</button> -->\n    </div>\n  </div>\n</div>\n<app-maintenance *ngIf=\"currentTab.tab==2\" [asset]=\"building\" (addedToAsset)=\"addedToAsset($event)\"></app-maintenance>\n<app-inspection *ngIf=\"currentTab.tab==3\" [asset]=\"building\" (addedToAsset)=\"addedToAsset($event)\"></app-inspection>\n<app-license *ngIf=\"currentTab.tab==4\" [asset]=\"building\" (addedToAsset)=\"addedToAsset($event)\"></app-license>\n<app-loan *ngIf=\"currentTab.tab==5\" [asset]=\"building\" (addedToAsset)=\"addedToAsset($event)\"></app-loan>\n<app-policy *ngIf=\"currentTab.tab==6\" [asset]=\"building\" (addedToAsset)=\"addedToAsset($event)\"></app-policy>\n<app-rent-or-lease *ngIf=\"currentTab.tab==7\" [asset]=\"building\" (addedToAsset)=\"addedToAsset($event)\"></app-rent-or-lease>\n<app-service *ngIf=\"currentTab.tab==8\" [asset]=\"building\" (addedToAsset)=\"addedToAsset($event)\"></app-service>\n<app-warranty *ngIf=\"currentTab.tab==9\" [asset]=\"building\" (addedToAsset)=\"addedToAsset($event)\"></app-warranty>\n<app-supporting-documents *ngIf=\"currentTab.tab==10\" (addedToAsset)=\"addedToAsset($event)\" [docsObject]=\"building\" [addTo]=\"'building'\"></app-supporting-documents>\n<asset-summary [asset]=\"building\" *ngIf=\"currentTab.tab==11\"></asset-summary>\n"

/***/ }),

/***/ "./src/app/ams/components/building/add-building/add-building.component.scss":
/***/ (function(module, exports) {

module.exports = ".zero-margin {\n  margin: 0 !important; }\n\n.zero-padding {\n  padding: 0 !important; }\n\n.center-block {\n  display: block;\n  margin: auto; }\n\n.text-overflow {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.fa-6 {\n  font-size: 10em; }\n"

/***/ }),

/***/ "./src/app/ams/components/building/add-building/add-building.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBuildingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_lookup_user_lookup_component__ = __webpack_require__("./src/app/ams/components/user-lookup/user-lookup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddBuildingComponent = /** @class */ (function () {
    function AddBuildingComponent(_sharedService, _apiService, _alertsService, route, viewContainerRef, componentFactoryResolver) {
        var _this = this;
        this._sharedService = _sharedService;
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this.route = route;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.multiselectConfig = {
            search: false,
            displayKey: "description"
        };
        this.initBuilding();
        this.tabs = this._sharedService.getTabstoShow(this.building);
        this.currentTab = this.tabs[0];
        this.dropDownsData = this._sharedService.dropDownsData;
        this._sharedService.dropDownsService.subscribe(function (data) {
            _this.dropDownsData = data;
        });
    }
    AddBuildingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropDownsData = this._sharedService.dropDownsData;
        this.route.params.subscribe(function (params) {
            var Id = params["id"];
            if (Id) {
                _this.getBuildingById(Id);
                _this.editMode = true;
            }
        });
    };
    AddBuildingComponent.prototype.dateChanged = function ($event) {
        console.log($event);
        //alert(moment($event.value).format('DD/MM/YYYY'));
    };
    AddBuildingComponent.prototype.selectCompareFunction = function (item1, item2) {
        if (item1 == null || item2 == null) {
            return false;
        }
        return item1.id == item2.id;
    };
    AddBuildingComponent.prototype.initBuilding = function () {
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
            addresses: [],
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
    };
    AddBuildingComponent.prototype.handleNullOrganization = function (data) {
        if (data.assetCategory == null) {
            data.assetCategory = {
                id: "BUILDING",
                description: "Building"
            };
        }
        if (data.department === null) {
            data.department = {
                id: null,
                organization: {
                    id: null
                }
            };
        }
        return data;
    };
    AddBuildingComponent.prototype.getBuildingById = function (buidingId) {
        var _this = this;
        this._apiService.get("/building/buildingId/" + buidingId).subscribe(function (data) {
            data = _this.handleNullOrganization(data);
            _this.building = data;
            _this.updateTabs();
        }, function (error) {
            _this._alertsService.error("Unable to get building details. Try Again.");
        });
    };
    AddBuildingComponent.prototype.addedToAsset = function ($event) {
        this.building = $event;
    };
    AddBuildingComponent.prototype.changeTab = function (tab) {
        if (!this.building.id && tab.tab != 11 && tab.tab != 1) {
            this._alertsService.error("Please save building details first.");
            return;
        }
        this.currentTab = tab;
    };
    AddBuildingComponent.prototype.updateTabs = function () {
        this.tabs = this._sharedService.getTabstoShow(this.building);
    };
    AddBuildingComponent.prototype.save = function () {
        var _this = this;
        this._apiService
            .createOrUpdateBuilding("/building/create-or-update-building", this.building)
            .subscribe(function (data) {
            data = _this.handleNullOrganization(data);
            _this.building = data;
            _this._alertsService.success("Building successfully saved");
            //this.initBuilding();
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    AddBuildingComponent.prototype.userLookup = function () {
        var _this = this;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__user_lookup_user_lookup_component__["a" /* UserLookupComponent */]);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'building';
        //
        this.componentRef.instance.assignUser.subscribe(function (data) {
            _this.assignUser(data);
        });
        this.componentRef.instance.closeModal.subscribe(function () {
            _this.closeModal();
        });
    };
    AddBuildingComponent.prototype.closeModal = function () {
        this.componentRef.instance.assignUser.unsubscribe();
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
    };
    AddBuildingComponent.prototype.assignUser = function (user) {
        var _this = this;
        if (!this.building.id) {
            this.building.assignees == null ? this.building.assignees = [] : "";
            this.building.assignees.push(user);
            return;
        }
        this._apiService.put("/building/add-assignee-to-building-by-user-id/buildingId/" + this.building.id + "/userId/" + user.id, null).subscribe(function (data) {
            _this.building = data;
            _this._alertsService.success("Building successfully assigned to user.");
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    AddBuildingComponent.prototype.deleteAssignee = function (user) {
        var _this = this;
        //building/remove-assignee-from-building-by-user-id/buildingId/116/userId/1
        if (!this.building.id) {
            this.building.assignees.forEach(function (element, index) {
                _this.building.assignees.splice(index, 1);
            });
            return;
        }
        this._apiService.delete("/building/remove-assignee-from-building-by-user-id/buildingId/" + this.building.id + "/userId/" + user.id).subscribe(function (data) {
            _this.building = data;
            _this._alertsService.success("Assignee successfully removed from building.");
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    AddBuildingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: "app-add-building",
            template: __webpack_require__("./src/app/ams/components/building/add-building/add-building.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/building/add-building/add-building.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["p" /* ComponentFactoryResolver */]])
    ], AddBuildingComponent);
    return AddBuildingComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/building/building-list/building-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h4>\n      <span class=\"fa fa-building\"></span> Building(s) |\n      <button class=\"btn btn-info btn-sm\" [routerLink]=\"'add-building'\">\n        <span class=\"fa fa-plus\"></span> Add</button>\n    </h4>\n  </div>\n  <div class=\"col-md-6\">\n    <button class=\"btn btn-info btn-sm float-right ml-2\" (click)=\"advancedSearch()\">\n      <span class=\"fa fa-search\"></span> Advance Search</button>\n    <div class=\"input-group search float-right\">\n      <input class=\"form-control form-control-sm \" placeholder=\"Search\" [(ngModel)]=\"searchText\"/>\n      <span class=\"input-group-addon\">\n        <span class=\"fa fa-search\"></span>\n      </span>\n    </div>\n\n  </div>\n</div>\n<table class=\"table table-bordered\" >\n  <thead>\n    <th>\n      Building ID\n    </th>\n    <th>\n      Building Name\n    </th>\n    <th>\n      Organization\n    </th>\n    <th>\n      Department\n    </th>\n    <th>\n      Reg. Authority\n    </th>\n    <th></th>\n  </thead>\n  <tbody *ngIf=\"buildingList.length\">\n    <tr *ngFor=\"let building of buildingList | searchFilter: searchText\">\n      <td>\n        <a [routerLink]=\"['edit-building', building.id]\">{{building.buildingId}}</a>\n      </td>\n      <td>\n        {{building.buildingName}}\n      </td>\n      <td>\n        {{building.department?.organization?.description}}\n      </td>\n      <td>\n        {{building.department?.description}}\n      </td>\n      <td>\n        {{building.regulatoryAuthorityName}}\n      </td>\n      <td>\n        <span class=\"fa fa-trash btn btn-sm btn-outline-danger\" (click)=\"deleteBuilding(building)\"></span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<ng-pagination *ngIf=\"itemsCount\" [position]=\"'left'\" [pageSize]=\"pageSize\" [itemsCount]=\"itemsCount\" (getPageData)=\"getPageData($event)\"></ng-pagination>\n<app-ajax-loader *ngIf=\"!buildingList\"></app-ajax-loader>"

/***/ }),

/***/ "./src/app/ams/components/building/building-list/building-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/building/building-list/building-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search_component__ = __webpack_require__("./src/app/ams/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuildingListComponent = /** @class */ (function () {
    function BuildingListComponent(_apiService, _alertService, viewContainerRef, componentFactoryResolver) {
        this._apiService = _apiService;
        this._alertService = _alertService;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.pageSize = 10;
        this.itemsCount = 0;
        this.buildingList = [];
        this.searchParams = {
            paging: { currentPage: 0, pageSize: 10 },
            sorts: [
                {
                    field: "buildingName",
                    order: "ASC"
                }
            ],
            filters: []
        };
        this.getBuildingsList();
    }
    BuildingListComponent.prototype.ngOnInit = function () { };
    BuildingListComponent.prototype.getPageData = function ($event) {
        this.searchParams.paging.currentPage = $event.pageNo - 1;
        this.searchParams.paging.pageSize = $event.pageSize;
        this.getBuildingsList();
    };
    BuildingListComponent.prototype.getBuildingsList = function () {
        var _this = this;
        this._apiService
            .get("/building/search-buildings", { Search: JSON.stringify(this.searchParams) })
            .subscribe(function (data) {
            _this.itemsCount = data.totalRecords;
            _this.buildingList = data.buildings;
        });
    };
    BuildingListComponent.prototype.deleteBuilding = function (building) {
        var _this = this;
        this._apiService.delete("/building/delete-building/buildingId/" + building.id).subscribe(function (data) {
            _this._alertService.success("Building deleted successfully.");
            _this.buildingList.splice(_this.buildingList.indexOf(building), 1);
        }, function (error) {
            _this._alertService.error(error);
        });
    };
    BuildingListComponent.prototype.advancedSearch = function () {
        var _this = this;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__search_search_component__["a" /* SearchComponent */]);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'building';
        this.componentRef.instance.parentSearchParams = this.searchParams;
        this.componentRef.instance.searchResult.subscribe(function (data) {
            _this.advancedSearchResult(data);
        });
        this.componentRef.instance.closeModal.subscribe(function (searchParams) {
            _this.closeModal(searchParams);
        });
    };
    BuildingListComponent.prototype.closeModal = function (searchParams) {
        this.componentRef.instance.searchResult.unsubscribe();
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
        if (JSON.stringify(this.searchParams) == JSON.stringify(searchParams)) {
            this.getBuildingsList();
        }
    };
    BuildingListComponent.prototype.advancedSearchResult = function ($event) {
        this.itemsCount = $event.data.totalRecords;
        this.buildingList = $event.data.buildings;
        this.searchParams = $event.searchParams;
    };
    BuildingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "app-building-list",
            template: __webpack_require__("./src/app/ams/components/building/building-list/building-list.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/building/building-list/building-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["p" /* ComponentFactoryResolver */]])
    ], BuildingListComponent);
    return BuildingListComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/building/building.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header class=\"d-none d-lg-block\"></app-header>\n<div class=\"row view\">\n  <div class=\"col-lg-2 col-md-12 pl-0 pr-0 d-none d-lg-block\" >\n    <app-side-nav [thisView]=\"'building'\"></app-side-nav>\n  </div>\n  <div class=\"col-lg-2 pl-0 pr-0 d-lg-none\">\n    <app-sm-menu [thisView]=\"'building'\"></app-sm-menu>\n  </div>\n  <div class=\"col-lg-10 col-md-12 col-sm-12 content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ams/components/building/building.component.scss":
/***/ (function(module, exports) {

module.exports = ".zero-margin {\n  margin: 0 !important; }\n\n.zero-padding {\n  padding: 0 !important; }\n\n.center-block {\n  display: block;\n  margin: auto; }\n\n.text-overflow {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.fa-6 {\n  font-size: 10em; }\n\n.content {\n  border-color: #0b4d8a; }\n\nthead {\n  background-color: #0b4d8a;\n  color: white; }\n\n.btn:hover {\n  background-color: #0b4d8a; }\n\n.nav-tabs {\n  border-bottom: 1px solid #0b4d8a; }\n\n.nav-tabs .nav-link {\n    border-color: #0b4d8a;\n    color: #0b4d8a; }\n\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link.active {\n      color: white !important;\n      background-color: #0b4d8a;\n      border-color: #0b4d8a; }\n"

/***/ }),

/***/ "./src/app/ams/components/building/building.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuildingComponent = /** @class */ (function () {
    function BuildingComponent() {
    }
    BuildingComponent.prototype.ngOnInit = function () {
    };
    BuildingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-building',
            template: __webpack_require__("./src/app/ams/components/building/building.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/building/building.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BuildingComponent);
    return BuildingComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header class=\"d-none d-lg-block\"></app-header>\n<div class=\"row view\">\n  <div class=\"col-lg-2 pl-0 pr-0 d-none d-lg-block\">\n    <app-side-nav [thisView]=\"'dashboard'\"></app-side-nav>\n  </div>\n  <div class=\"col-lg-2 pl-0 pr-0 d-lg-none\">\n    <app-sm-menu [thisView]=\"'dashboard'\"></app-sm-menu>\n  </div>\n  <div class=\"col-lg-10 pl-0 pr-0 col-md-12 content\" >\n    <div class=\"row  dashboard\">\n      <div class=\"col-sm-12 col-md-6 text-center\">\n          <a [routerLink]=\"['/ams/buildings']\"><img src=\"./assets/images/building_icon.png\" alt=\"gotorisk.co.uk\" /><h4>Building</h4></a>\n      </div>\n      <div class=\"col-sm-12 col-md-6 text-center\">\n          <a [routerLink]=\"['/ams/equipments']\"><img src=\"./assets/images/equipment_icon.png\" alt=\"gotorisk.co.uk\" />\n            <h4>Equipment</h4></a>\n      </div>\n      <div class=\"col-sm-12 col-md-6 text-center\">\n          <a [routerLink]=\"['/ams/vehicles']\"><img src=\"./assets/images/vehicle_icon.png\" alt=\"gotorisk.co.uk\" /> <h4>Vehicle</h4></a>\n      </div>\n      <div class=\"col-sm-12 col-md-6 text-center\">\n          <a [routerLink]=\"['/ams/others']\"><img src=\"./assets/images/other_icon.png\" alt=\"gotorisk.co.uk\" /><h4>Other</h4></a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ams/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ".zero-margin, .row {\n  margin: 0 !important; }\n\n.zero-padding {\n  padding: 0 !important; }\n\n.center-block {\n  display: block;\n  margin: auto; }\n\n.text-overflow {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.fa-6 {\n  font-size: 10em; }\n\n.row .dashboard img {\n  height: 200px; }\n\n.content {\n  border-color: #0b4d8a; }\n\nthead {\n  background-color: #0b4d8a;\n  color: white; }\n\n.btn:hover {\n  background-color: #0b4d8a; }\n\n.nav-tabs {\n  border-bottom: 1px solid #0b4d8a; }\n\n.nav-tabs .nav-link {\n    border-color: #0b4d8a;\n    color: #0b4d8a; }\n\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link.active {\n      color: white !important;\n      background-color: #0b4d8a;\n      border-color: #0b4d8a; }\n"

/***/ }),

/***/ "./src/app/ams/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/ams/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/equipment/add-equipment/add-equipment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pb-3\">\n  <div class=\"col-md-12\">\n    <h4>\n      <span class=\"fa fa-print\"></span> Add Equipment</h4>\n  </div>\n</div>\n<ul class=\"row nav nav-tabs mb-2\">\n  <li class=\"nav-item\" (click)=\"changeTab(tab)\" *ngFor=\"let tab of tabs\">\n    <a class=\"nav-link\" [ngClass]=\"{'active': currentTab.tab == tab.tab}\">{{tab.name}}</a>\n  </li>\n</ul>\n<div class=\"tab-content\" *ngIf=\"currentTab.tab == 1\">\n  <h5>Equipment Details</h5>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Equipment ID</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentId\" name=\"equipmentid\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Equipment Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentName\" name=\"equipmentname\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Equipment Details</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentDetails\" name=\"floor\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Equipment Tag</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentTag\" name=\"floor\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Asset Category</label>\n      <select disabled class=\"form-control\" [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"equipment.assetCategory\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let category of dropDownsData.assetCategoriesList\" [ngValue]=\"category\">{{category.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Organization</label>\n      <select class=\"form-control\" disabled [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"equipment.department.organization\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let org of dropDownsData.organizationList\" [ngValue]=\"org\">{{org.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Department</label>\n      <select class=\"form-control\" [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"equipment.department\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let dep of dropDownsData.departmentList\" [ngValue]=\"dep\">{{dep.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Equipment Cost</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentCost\" name=\"equipmentCost\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Length</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentLength\" name=\"equipmentLength\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Width</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentWidth\" name=\"equipmentWidth\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Height</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentHeight\" name=\"equipmentHeight\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Weight</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentWeight\" name=\"equipmentWeight\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Quantity</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentQuantity\" name=\"equipmentQuantity\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Serial #</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.serialNumber\" name=\"serialNumber\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Make</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentMake\" name=\"equipmentMake\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Model</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentModel\" name=\"equipmentModel\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Purchased Date</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentPurchasedDate\" \n      name=\"equipmentPurchasedDate\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" />\n     <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Purchased From</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentPurchasedFrom\" name=\"equipmentPurchasedFrom\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Phone</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentCompanyPhone\" name=\"equipmentCompanyPhone\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Email</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentCompanyEmail\" name=\"equipmentCompanyEmail\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Contact Person</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.equipmentCompanyContactPerson\" name=\"equipmentCompanyContactPerson\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Order #</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.orderNumber\" name=\"orderNumber\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Invoice #</label>\n      <input class=\"form-control\" [(ngModel)]=\"equipment.invoiceNumber\" name=\"invoiceNumber\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Purchase Comments</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"equipment.equipmentCompanyComments\" name=\"equipmentCompanyComments\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Equipment Returned</label>\n      <select class=\"form-control\" [(ngModel)]=\"equipment.equipmentReturned\" (change)=\"equipmentReturnedChange()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Return Date</label>\n      <input class=\"form-control\" [disabled]=\"equipment.equipmentReturned !='Y'\" \n      [(ngModel)]=\"equipment.equipmentReturnedDate\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\" name=\"equipmentReturnedDate\" />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt2></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Refund Amount</label>\n      <input class=\"form-control\" [disabled]=\"equipment.equipmentReturned !='Y'\" [(ngModel)]=\"equipment.refundAmount\" name=\"refundAmount\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Return Reason</label>\n      <textarea [disabled]=\"equipment.equipmentReturned !='Y'\" class=\"form-control\" [(ngModel)]=\"equipment.equipmentReturnedReason\" name=\"equipmentReturnedReason\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Regulatory Compliance</label>\n      <select class=\"form-control\" [(ngModel)]=\"equipment.regulatoryCompliance\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Regulatory Authority</label>\n      <input class=\"form-control\" [disabled]=\"equipment.regulatoryCompliance != 'Y'\" [(ngModel)]=\"equipment.regulatoryAuthorityName\" name=\"regulatoryAuthorityName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Compliance Obtained Date</label>\n      <input class=\"form-control\" [disabled]=\"equipment.regulatoryCompliance != 'Y'\"  [owlDateTime]=\"dt8\" [owlDateTimeTrigger]=\"dt8\"\n      [(ngModel)]=\"equipment.regCompObtainedDate\" name=\"regCompObtainedDate\" />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt8></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Exits</label>\n      <select class=\"form-control\" [(ngModel)]=\"equipment.fireExits\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n  </div>\n\n\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Exit Location</label>\n      <input class=\"form-control\" [disabled]=\"equipment.fireExits != 'Y'\" [(ngModel)]=\"equipment.fireExitsLoc\" name=\"fireExitsLoc\"\n      />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Exitinguishers Present</label>\n      <select class=\"form-control\" [(ngModel)]=\"equipment.fireExtinguishers\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Extinguisher</label>\n      <ngx-select-dropdown [ngClass]=\"{'disabled':equipment.fireExtinguishers != 'Y'}\" *ngIf=\"dropDownsData.fireExtinguisherTypeList\"\n        [multiple]=\"true\" [config]=\"multiselectConfig\" [(value)]=\"equipment.fireExtinguisherTypes\" [options]=\"dropDownsData.fireExtinguisherTypeList\"></ngx-select-dropdown>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Extinguisher Location</label>\n      <input class=\"form-control\" [disabled]=\"equipment.fireExtinguishers != 'Y'\" [(ngModel)]=\"equipment.fireExtinguisherLoc\" name=\"fireExtinguisherLoc\"\n      />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Annual Maintenance Contract</label>\n      <select class=\"form-control\" [(ngModel)]=\"equipment.amcPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Inspection</label>\n      <select class=\"form-control\" [(ngModel)]=\"equipment.inspectionPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>License</label>\n      <select class=\"form-control\" [(ngModel)]=\"equipment.licensePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Loan</label>\n      <select class=\"form-control\" [(ngModel)]=\"equipment.loanPresent\" (change)=\"updateTabs()\">\n          <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Policy</label>\n      <select class=\"form-control\" [(ngModel)]=\"equipment.insurancePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Rental/Lease</label>\n      <select class=\"form-control\" [(ngModel)]=\"equipment.rentalOrLeasePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Service</label>\n      <select class=\"form-control\" [(ngModel)]=\"equipment.servicePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Warranty</label>\n      <select class=\"form-control\" [(ngModel)]=\"equipment.warrantyPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Asset Condition</label>\n      <select [compareWith]=\"selectCompareFunction\" class=\"form-control\" [(ngModel)]=\"equipment.assetCondition\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let condition of dropDownsData.assetConditionList\" [ngValue]=\"condition\">{{condition.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If Other Specify</label>\n      <input class=\"form-control\" [disabled]=\"!equipment.assetCondition || equipment.assetCondition.id != 'OTHER'\" [(ngModel)]=\"equipment.assetConditionOther\"\n        name=\"description\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Asset Status</label>\n      <select [compareWith]=\"selectCompareFunction\" class=\"form-control\" [(ngModel)]=\"equipment.assetStatus\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let status of dropDownsData.assetStatusList\" [ngValue]=\"status\">{{status.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If Other Specify</label>\n      <input class=\"form-control\" [disabled]=\"!equipment.assetStatus || equipment.assetStatus.id != 'OTHER'\" [(ngModel)]=\"equipment.assetStatusOther\"\n        name=\"description\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Asset Type</label>\n      <select [compareWith]=\"selectCompareFunction\" class=\"form-control\" [(ngModel)]=\"equipment.assetType\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let type of dropDownsData.assetTypeList\" [ngValue]=\"type\">{{type.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If Other Specify</label>\n      <input class=\"form-control\" [disabled]=\"!equipment.assetType || equipment.assetType.id != 'OTHER'\" [(ngModel)]=\"equipment.assetTypeOther\"\n        name=\"description\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      Assigned To:\n      <button class=\"btn btn-primary btn-sm\" (click)=\"userLookup()\">Lookup</button>\n    </div>\n  </div>\n\n  <table class=\"table table-bordered\">\n    <thead>\n      <th>\n        Login Id\n      </th>\n      <th>\n        First Name\n      </th>\n      <th>\n        Last Name\n      </th>\n      <th></th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let assignee of equipment.assignees\">\n        \n        <td>{{assignee.userLoginId || assignee.loginId}}\n        </td>\n        <td>{{assignee.firstName}}</td>\n        <td>{{assignee.lastName}}</td>\n        <td>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-success\" (click)=\"deleteAssignee(assignee)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Damage Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"equipment.equipmentDamageDesc\"></textarea>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <button class=\"btn btn-primary\" (click)=\"save()\">{{editMode?'Update':'Save'}}</button>\n      <!-- <button class=\"btn btn-success float-right\">Next</button> -->\n    </div>\n  </div>\n</div>\n<app-maintenance *ngIf=\"currentTab.tab==2\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"equipment\"></app-maintenance>\n<app-inspection *ngIf=\"currentTab.tab==3\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"equipment\"></app-inspection>\n<app-license *ngIf=\"currentTab.tab==4\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"equipment\"></app-license>\n<app-loan *ngIf=\"currentTab.tab==5\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"equipment\"></app-loan>\n<app-policy *ngIf=\"currentTab.tab==6\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"equipment\"></app-policy>\n<app-rent-or-lease *ngIf=\"currentTab.tab==7\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"equipment\"></app-rent-or-lease>\n<app-service *ngIf=\"currentTab.tab==8\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"equipment\"></app-service>\n<app-warranty *ngIf=\"currentTab.tab==9\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"equipment\"></app-warranty>\n<app-supporting-documents *ngIf=\"currentTab.tab==10\" (addedToAsset)=\"addedToAsset($event)\" [docsObject]=\"equipment\" [addTo]=\"'equipment'\"></app-supporting-documents>\n<asset-summary [asset]=\"equipment\" *ngIf=\"currentTab.tab==11\"></asset-summary>"

/***/ }),

/***/ "./src/app/ams/components/equipment/add-equipment/add-equipment.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/equipment/add-equipment/add-equipment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEquipmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_lookup_user_lookup_component__ = __webpack_require__("./src/app/ams/components/user-lookup/user-lookup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddEquipmentComponent = /** @class */ (function () {
    function AddEquipmentComponent(_sharedService, _apiService, _alertsService, route, viewContainerRef, componentFactoryResolver) {
        var _this = this;
        this._sharedService = _sharedService;
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this.route = route;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.dropDownsData = {};
        this.initEquipment();
        this.tabs = this._sharedService.getTabstoShow(this.equipment);
        this.currentTab = this.tabs[0];
        this.dropDownsData = this._sharedService.dropDownsData;
        this._sharedService.dropDownsService.subscribe(function (data) {
            _this.dropDownsData = data;
        });
    }
    AddEquipmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropDownsData = this._sharedService.dropDownsData;
        this.route.params.subscribe(function (params) {
            var Id = params["id"];
            if (Id) {
                _this.getEquipmentById(Id);
                _this.editMode = true;
            }
        });
    };
    AddEquipmentComponent.prototype.selectCompareFunction = function (item1, item2) {
        if (item1 == null || item2 == null) {
            return false;
        }
        return item1.id == item2.id;
    };
    AddEquipmentComponent.prototype.initEquipment = function () {
        this.equipment = {
            id: null,
            assets: null,
            statusFlag: null,
            equipmentId: null,
            equipmentDetails: null,
            serialNumber: null,
            assetCategory: {
                id: "EQUIPMENT",
                description: "Equipment"
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
                id: null,
                organization: null
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
            rentalOrLeasePresent: "N",
            servicePresent: "N",
            fireExitsLoc: null,
            fireExtinguisherLoc: null,
            fireExtinguisherTypes: []
        };
    };
    AddEquipmentComponent.prototype.changeTab = function (tab) {
        if (!this.equipment.id && tab.tab != 11 && tab.tab != 1) {
            this._alertsService.error("Please save equipment details first.");
            return;
        }
        this.currentTab = tab;
    };
    AddEquipmentComponent.prototype.handleNullOrganization = function (data) {
        if (data.assetCategory == null) {
            data.assetCategory = {
                id: "EQUIPMENT",
                description: "Equipment"
            };
        }
        if (data.department === null) {
            data.department = {
                id: null,
                organization: {
                    id: null
                }
            };
        }
        return data;
    };
    AddEquipmentComponent.prototype.getEquipmentById = function (id) {
        var _this = this;
        this._apiService.get("/equipment/equipmentId/" + id).subscribe(function (data) {
            data = _this.handleNullOrganization(data);
            _this.equipment = data;
            _this.updateTabs();
        }, function (error) {
            _this._alertsService.error("Unable to get equipment details. Try Again.");
        });
    };
    AddEquipmentComponent.prototype.updateTabs = function () {
        this.tabs = this._sharedService.getTabstoShow(this.equipment);
    };
    AddEquipmentComponent.prototype.addedToAsset = function ($event) {
        this.equipment = $event;
    };
    AddEquipmentComponent.prototype.save = function () {
        var _this = this;
        this._apiService
            .createOrUpdateEquipment("/equipment/create-or-update-equipment", this.equipment)
            .subscribe(function (data) {
            data = _this.handleNullOrganization(data);
            _this.equipment = data;
            _this._alertsService.success("Equipment successfully saved.");
            //this.initEquipment();
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    AddEquipmentComponent.prototype.userLookup = function () {
        var _this = this;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__user_lookup_user_lookup_component__["a" /* UserLookupComponent */]);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'equipment';
        this.componentRef.instance.assignUser.subscribe(function (data) {
            _this.assignUser(data);
        });
        this.componentRef.instance.closeModal.subscribe(function () {
            _this.closeModal();
        });
    };
    AddEquipmentComponent.prototype.closeModal = function () {
        this.componentRef.instance.assignUser.unsubscribe();
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
    };
    AddEquipmentComponent.prototype.assignUser = function (user) {
        var _this = this;
        if (!this.equipment.id) {
            this.equipment.assignees == null ? this.equipment.assignees = [] : "";
            this.equipment.assignees.push(user);
            return;
        }
        this._apiService.put("/equipment/add-assignee-to-equipment-by-user-id/equipmentId/" + this.equipment.id + "/userId/" + user.id, null).subscribe(function (data) {
            _this.equipment = data;
            _this._alertsService.success("Equipment successfully assigned to user.");
        }, function (error) {
            _this._alertsService.error(error);
        });
        console.log("assigning user");
    };
    AddEquipmentComponent.prototype.deleteAssignee = function (user) {
        var _this = this;
        //equipment/remove-assignee-from-equipment-by-user-id/equipmentId/116/userId/1
        if (!this.equipment.id) {
            this.equipment.assignees.forEach(function (element, index) {
                _this.equipment.assignees.splice(index, 1);
            });
            return;
        }
        this._apiService.delete("/equipment/remove-assignee-from-equipment-by-user-id/equipmentId/" + this.equipment.id + "/userId/" + user.id).subscribe(function (data) {
            _this.equipment = data;
            _this._alertsService.success("Assignee successfully removed from equipment.");
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    AddEquipmentComponent.prototype.equipmentReturnedChange = function () {
        if (this.equipment.equipmentReturned === 'N') {
            this.equipment.equipmentReturnedDate = null;
            this.equipment.refundAmount = null;
        }
    };
    AddEquipmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "app-add-equipment",
            template: __webpack_require__("./src/app/ams/components/equipment/add-equipment/add-equipment.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/equipment/add-equipment/add-equipment.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["p" /* ComponentFactoryResolver */]])
    ], AddEquipmentComponent);
    return AddEquipmentComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/equipment/equipment-list/equipment-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h4>\n      <span class=\"fa fa-print\"></span>Equipment |\n      <button class=\"btn btn-info btn-sm\" [routerLink]=\"'add-equipment'\">\n        <span class=\"fa fa-plus\"></span> Add</button>\n    </h4>\n  </div>\n  <div class=\"col-md-6\">\n    <button class=\"btn btn-info btn-sm float-right ml-2\" (click)=\"advancedSearch()\">\n      <span class=\"fa fa-search\"></span> Advance Search</button>\n    <div class=\"input-group search float-right\">\n      <input class=\"form-control form-control-sm \" placeholder=\"Search\" [(ngModel)]=\"searchText\" />\n      <span class=\"input-group-addon\">\n        <span class=\"fa fa-search\"></span>\n      </span>\n    </div>\n  </div>\n</div>\n<table class=\"table table-bordered\">\n  <thead>\n    <th>\n      Equipment ID\n    </th>\n    <th>\n      Equipment Name\n    </th>\n    <th>\n      Organization\n    </th>\n    <th>\n      Department\n    </th>\n    <th>\n      Reg. Authority\n    </th>\n    <th></th>\n  </thead>\n  <tbody *ngIf=\"equipmentList.length\">\n    <tr *ngFor=\"let equipment of equipmentList | searchFilter: searchText\">\n      <td>\n        <a [routerLink]=\"['edit-equipment', equipment.id]\">{{equipment.equipmentId}}</a>\n      </td>\n      <td>\n        {{equipment.equipmentName}}\n      </td>\n      <td>\n        {{equipment.department?.organization?.description}}\n      </td>\n      <td>\n        {{equipment.department?.description}}\n      </td>\n      <td>\n        {{equipment.regulatoryAuthorityName}}\n      </td>\n      <td>\n        <span class=\"fa fa-trash btn btn-sm btn-outline-danger\" (click)=\"deleteEquipment(equipment)\"></span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<ng-pagination *ngIf=\"itemsCount\" [position]=\"'left'\" [pageSize]=\"pageSize\" [itemsCount]=\"itemsCount\" (getPageData)=\"getPageData($event)\"></ng-pagination>\n<app-ajax-loader *ngIf=\"!equipmentList\"></app-ajax-loader>"

/***/ }),

/***/ "./src/app/ams/components/equipment/equipment-list/equipment-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/equipment/equipment-list/equipment-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search_component__ = __webpack_require__("./src/app/ams/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EquipmentListComponent = /** @class */ (function () {
    function EquipmentListComponent(_apiService, _alertService, viewContainerRef, componentFactoryResolver) {
        this._apiService = _apiService;
        this._alertService = _alertService;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.pageSize = 10;
        this.itemsCount = 0;
        this.equipmentList = [];
        this.searchParams = {
            paging: { currentPage: 0, pageSize: 10 },
            sorts: [
                {
                    field: "equipmentName",
                    order: "ASC"
                }
            ],
            filters: []
        };
        this.getEquipmentList();
    }
    EquipmentListComponent.prototype.ngOnInit = function () { };
    EquipmentListComponent.prototype.getPageData = function ($event) {
        this.searchParams.paging.currentPage = $event.pageNo - 1;
        this.searchParams.paging.pageSize = $event.pageSize;
        this.getEquipmentList();
    };
    EquipmentListComponent.prototype.getEquipmentList = function () {
        var _this = this;
        this._apiService
            .get("/equipment/search-equipments", { Search: JSON.stringify(this.searchParams) })
            .subscribe(function (data) {
            _this.itemsCount = data.totalRecords;
            _this.equipmentList = data.equipments;
        });
    };
    EquipmentListComponent.prototype.deleteEquipment = function (equipment) {
        var _this = this;
        this._apiService.delete("/equipment/delete-equipment/equipmentId/" + equipment.id).subscribe(function (data) {
            _this._alertService.success("Equipment deleteed successfully.");
            _this.equipmentList.splice(_this.equipmentList.indexOf(equipment), 1);
        }, function (error) {
            _this._alertService.error(error);
        });
    };
    EquipmentListComponent.prototype.advancedSearch = function () {
        var _this = this;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__search_search_component__["a" /* SearchComponent */]);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'equipment';
        this.componentRef.instance.parentSearchParams = this.searchParams;
        this.componentRef.instance.searchResult.subscribe(function (data) {
            _this.advancedSearchResult(data);
        });
        this.componentRef.instance.closeModal.subscribe(function () {
            _this.closeModal();
        });
    };
    EquipmentListComponent.prototype.closeModal = function () {
        this.componentRef.instance.searchResult.unsubscribe();
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
    };
    EquipmentListComponent.prototype.advancedSearchResult = function ($event) {
        this.itemsCount = $event.data.totalRecords;
        this.equipmentList = $event.data.equipments;
        this.searchParams = $event.searchParams;
    };
    EquipmentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "app-equipment-list",
            template: __webpack_require__("./src/app/ams/components/equipment/equipment-list/equipment-list.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/equipment/equipment-list/equipment-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["p" /* ComponentFactoryResolver */]])
    ], EquipmentListComponent);
    return EquipmentListComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/equipment/equipment.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header class=\"d-none d-lg-block\"></app-header>\n<div class=\"row view\">\n  <div class=\"col-lg-2 pl-0 pr-0 d-none d-lg-block\">\n    <app-side-nav [thisView]=\"'equipment'\"></app-side-nav>\n  </div>\n  <div class=\"col-lg-2 pl-0 pr-0 d-lg-none\">\n    <app-sm-menu [thisView]=\"'equipment'\"></app-sm-menu>\n  </div>\n  <div class=\"col-lg-10 col-sm-12 content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/equipment/equipment.component.scss":
/***/ (function(module, exports) {

module.exports = ".zero-margin {\n  margin: 0 !important; }\n\n.zero-padding {\n  padding: 0 !important; }\n\n.center-block {\n  display: block;\n  margin: auto; }\n\n.text-overflow {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.fa-6 {\n  font-size: 10em; }\n\n.content {\n  border-color: #0b4d8a; }\n\nthead {\n  background-color: #0b4d8a;\n  color: white; }\n\n.btn:hover {\n  background-color: #0b4d8a; }\n\n.nav-tabs {\n  border-bottom: 1px solid #0b4d8a; }\n\n.nav-tabs .nav-link {\n    border-color: #0b4d8a;\n    color: #0b4d8a; }\n\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link.active {\n      color: white !important;\n      background-color: #0b4d8a;\n      border-color: #0b4d8a; }\n"

/***/ }),

/***/ "./src/app/ams/components/equipment/equipment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EquipmentComponent = /** @class */ (function () {
    function EquipmentComponent() {
    }
    EquipmentComponent.prototype.ngOnInit = function () {
    };
    EquipmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-equipment',
            template: __webpack_require__("./src/app/ams/components/equipment/equipment.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/equipment/equipment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EquipmentComponent);
    return EquipmentComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/inspection/inspection.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-content\">\n  <h5>Inspection Details</h5>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Inspection Number</label>\n      <input class=\"form-control\" [(ngModel)]=\"inspection.inspectionNumber\" name=\"inspectionNumber\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"inspection.inspectionCompanyName\" name=\"inspectionCompanyName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Phone</label>\n      <input class=\"form-control\" [(ngModel)]=\"inspection.inspectionCompanyPhone\" name=\"inspectionCompanyPhone\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Email</label>\n      <input class=\"form-control\" [(ngModel)]=\"inspection.inspectionCompanyEmail\" name=\"inspectionCompanyEmail\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Company Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"inspection.inspectionCompanyDescription\" name=\"inspectionCompanyDescription\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Contact Person Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"inspection.inspectionCompanyContactPerson\" name=\"inspectionCompanyContactPerson\"\n      />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Inspection Due Date</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" [(ngModel)]=\"inspection.inspectionDueDate\" name=\"inspectionDueDate\"\n      />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Inspection Done By</label>\n      <input class=\"form-control\" [(ngModel)]=\"inspection.inspectionDoneBy\" name=\"inspectionDoneBy\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Inspection Done Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\" [(ngModel)]=\"inspection.inspectionDoneDateTime\"\n        name=\"inspectionDoneDateTime\" />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt2></owl-date-time>\n    </div>\n  </div>\n\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Inspection Duration in hrs</label>\n      <input class=\"form-control\" [(ngModel)]=\"inspection.inspectionDurationInHours\" name=\"inspectionDurationInHours\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Inspection Amount</label>\n      <input class=\"form-control\" [(ngModel)]=\"inspection.inspectionAmount\" name=\"inspectionAmount\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Next Inspection Date</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt3\" [owlDateTimeTrigger]=\"dt3\" [(ngModel)]=\"inspection.nextInspectionDueDate\"\n        name=\"nextInspectionDueDate\" />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt3></owl-date-time>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Comments/Observations</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"inspection.comments\" name=\"comments\"></textarea>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <button class=\"btn btn-primary\" (click)=\"save()\">{{editMode?'Update':'Save'}}</button>\n    </div>\n    <div class=\"col-6\">\n      <button class=\"btn btn-success float-right\" data-toggle=\"modal\" data-target=\"#lookUp\">Lookup</button>\n    </div>\n  </div>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Inspection #</th>\n        <th>Due Date</th>\n        <th>Done By</th>\n        <th>Done Date</th>\n        <th>Duration in hrs</th>\n        <th>Amount</th>\n        <th>Next Insp. Date</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let inspection of asset.inspections\">\n        <td>{{inspection.inspectionNumber}}</td>\n        <td>{{inspection.inspectionDueDate | date:'dd/MM/yyyy'}}</td>\n        <td>{{inspection.inspectionDoneBy}}</td>\n        <td>{{inspection.inspectionDoneDateTime | date:'dd/MM/yyyy HH:mm:ss'}}</td>\n        <td>{{inspection.inspectionDurationInHours}}</td>\n        <td>{{inspection.inspectionAmount}}</td>\n        <td>{{inspection.nextInspectionDueDate | date:'dd/MM/yyyy'}}</td>\n        <td>\n          <span class=\"fa fa-pencil btn btn-sm btn-outline-primary\" (click)=\"editThisInspection(inspection)\">\n          </span>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-danger\" (click)=\"removeInspectionFromAsset(inspection)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <app-supporting-documents [docsObject]=\"inspection\" [addTo]=\"'inspection'\"></app-supporting-documents>\n\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"lookUp\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\">Inspection Lookup</h6>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Inspection #</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.inspectionNumber.value\" (change)=\"lookupFieldChange(lookupOptions.inspectionNumber)\"/>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\"(change)=\"lookupFieldChange(lookupOptions.inspectionNumber)\" [(ngModel)]=\"lookupOptions.inspectionNumber.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.inspectionNumber.sort\" (change)=\"lookupSortChange(lookupOptions.inspectionNumber)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.inspectionNumber)\" [(ngModel)]=\"lookupOptions.inspectionNumber.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <!-- <div class=\"row\">\n            <div class=\"col-sm-12 col-md-4\">\n              <label>Inspection Name</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" />\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <select class=\"form-control\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n          </div> -->\n          <!-- <div class=\"row\">\n            <div class=\"col-sm-12 col-md-4\">\n              <label>Inspection Description</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" />\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <select class=\"form-control\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n          </div> -->\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Company Name</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.inspectionCompanyName.value\" (change)=\"lookupFieldChange(lookupOptions.inspectionCompanyName)\"/>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\"(change)=\"lookupFieldChange(lookupOptions.inspectionCompanyName)\" [(ngModel)]=\"lookupOptions.inspectionCompanyName.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.inspectionCompanyName.sort\" (change)=\"lookupSortChange(lookupOptions.inspectionCompanyName)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.inspectionCompanyName)\" [(ngModel)]=\"lookupOptions.inspectionCompanyName.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Company Contact Person</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.inspectionCompanyContactPerson.value\" (change)=\"lookupFieldChange(lookupOptions.inspectionCompanyContactPerson)\"/>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\"(change)=\"lookupFieldChange(lookupOptions.inspectionCompanyContactPerson)\" [(ngModel)]=\"lookupOptions.inspectionCompanyContactPerson.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.inspectionCompanyContactPerson.sort\" (change)=\"lookupSortChange(lookupOptions.inspectionCompanyContactPerson)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\"(change)=\"lookupSortChange(lookupOptions.inspectionCompanyContactPerson)\" [(ngModel)]=\"lookupOptions.inspectionCompanyContactPerson.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Done By</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.inspectionDoneBy.value\" (change)=\"lookupFieldChange(lookupOptions.inspectionDoneBy)\"/>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\"(change)=\"lookupFieldChange(lookupOptions.inspectionDoneBy)\" [(ngModel)]=\"lookupOptions.inspectionDoneBy.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.inspectionDoneBy.sort\" (change)=\"lookupSortChange(lookupOptions.inspectionDoneBy)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.inspectionDoneBy)\" [(ngModel)]=\"lookupOptions.inspectionDoneBy.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Done Date Time</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtdt\" [owlDateTimeTrigger]=\"dtdt\" [(ngModel)]=\"lookupOptions.inspectionDoneDateTime.value\" (dateTimeChange)=\"lookupFieldChange(lookupOptions.inspectionDoneDateTime)\"/>\n              <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dtdt></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.inspectionDoneDateTime)\" [(ngModel)]=\"lookupOptions.inspectionDoneDateTime.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.inspectionDoneDateTime.sort\" (change)=\"lookupSortChange(lookupOptions.inspectionDoneDateTime)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\"(change)=\"lookupSortChange(lookupOptions.inspectionDoneDateTime)\" [(ngModel)]=\"lookupOptions.inspectionDoneDateTime.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Due Date</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtd\" [owlDateTimeTrigger]=\"dtd\" [(ngModel)]=\"lookupOptions.inspectionDueDate.value\" (dateTimeChange)=\"lookupFieldChange(lookupOptions.inspectionDueDate)\"/>\n              <owl-date-time [pickerType]=\"'calendar'\"  #dtd></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.inspectionDueDate)\" [(ngModel)]=\"lookupOptions.inspectionDueDate.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.inspectionDueDate.sort\" (change)=\"lookupSortChange(lookupOptions.inspectionDueDate)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\"(change)=\"lookupSortChange(lookupOptions.inspectionDueDate)\" [(ngModel)]=\"lookupOptions.inspectionDueDate.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Next Due Date</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\"[owlDateTime]=\"dtn\" [owlDateTimeTrigger]=\"dtn\" [(ngModel)]=\"lookupOptions.nextInspectionDueDate.value\" (dateTimeChange)=\"lookupFieldChange(lookupOptions.nextInspectionDueDate)\"/>\n              <owl-date-time [pickerType]=\"'calendar'\" #dtn></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.nextInspectionDueDate)\" [(ngModel)]=\"lookupOptions.nextInspectionDueDate.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.nextInspectionDueDate.sort\" (change)=\"lookupSortChange(lookupOptions.nextInspectionDueDate)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\"(change)=\"lookupSortChange(lookupOptions.nextInspectionDueDate)\" [(ngModel)]=\"lookupOptions.nextInspectionDueDate.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n         \n          <table class=\"table table-bordered table-hover\">\n            <thead>\n              <tr>\n                <th>Inspection #</th>\n                <th>Due Date</th>\n                <th>Done By</th>\n                <th>Done Date</th>\n                <th>Amount</th>\n                <th>Next Insp. Date</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"lookupItems\">\n              <tr *ngFor=\"let insp of lookupItems.inspections\">\n                <td>{{insp.inspectionNumber}}</td>\n                <td>{{insp.inspectionDueDate | date:'dd/MM/yyyy'}}</td>\n                <td>{{insp.inspectionDoneBy}}</td>\n                <td>{{insp.inspectionDoneDateTime | date:'dd/MM/yyyy HH:mm:ss'}}</td>\n                <td>{{insp.inspectionAmount}}</td>\n                <td>{{insp.nextInspectionDueDate | date:'dd/MM/yyyy'}}</td>\n                <td><span class=\"fa fa-plus btn btn-sm btn-outline-danger\" (click)=\"addExistingInspectionToAsset(insp)\"></span></td>\n              </tr>\n            </tbody>\n          </table>\n          <ng-pagination *ngIf=\"lookupItems\" [itemsCount]=\"lookupItems.totalRecords\" [pageSize]=\"10\" (getPageData)=\"lookupInspection($event)\"></ng-pagination>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary float-right\" (click)=\"lookupInspection()\">Search</button>\n          <button type=\"button\" (click)=\"initLookupParams()\" class=\"btn btn-primary\">Clear</button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/inspection/inspection.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/inspection/inspection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InspectionComponent = /** @class */ (function () {
    function InspectionComponent(_apiService, _alertsService) {
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this.addedToAsset = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        this.editMode = false;
        this.initInspection();
    }
    InspectionComponent.prototype.ngOnInit = function () {
        this.initLookupParams();
    };
    InspectionComponent.prototype.initInspection = function () {
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
    };
    InspectionComponent.prototype.initLookupParams = function () {
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
        };
    };
    InspectionComponent.prototype.save = function () {
        var _this = this;
        if (this.editMode) {
            this.updateInspection();
            return;
        }
        var url = "/building/add-inspection-to-building/buildingId/";
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
        this._apiService.put(url, this.inspection).subscribe(function (data) {
            _this._alertsService.success("Inspection successfully added to " +
                _this.asset.assetCategory.description);
            _this.initInspection();
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    InspectionComponent.prototype.editThisInspection = function (inspection) {
        this.inspection = JSON.parse(JSON.stringify(inspection));
        this.editing = inspection;
        this.editMode = true;
    };
    InspectionComponent.prototype.updateInspection = function () {
        var _this = this;
        this._apiService
            .put("/inspection/update-inspection", this.inspection)
            .subscribe(function (data) {
            _this.inspection = data;
            _this.editing = Object.assign(_this.editing, data);
            _this._alertsService.success("Inspection successfully updated.");
            _this.initInspection();
            _this.editMode = false;
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    InspectionComponent.prototype.removeInspectionFromAsset = function (inspection) {
        var _this = this;
        var url = "/building/remove-inspection-from-building/buildingId/" + this.asset.id + "/inspectionId/" + inspection.id;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/remove-inspection-from-vehicle/vehicleId/" + this.asset.id + "/inspectionId/" + inspection.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/remove-inspection-from-equipment/equipmentId/" + this.asset.id + "/inspectionId/" + inspection.id;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/remove-inspection-from-asset-type-other/assetTypeOtherId/" + this.asset.id + "/inspectionId/" + inspection.id;
            ;
        }
        this._apiService.delete(url).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("Inspection successfully removed from " + _this.asset.assetCategory.description);
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    InspectionComponent.prototype.lookupFieldChange = function (_a) {
        var field = _a.field, operator = _a.operator, value = _a.value;
        var fil = {
            field: field,
            operator: operator,
            value: value
        };
        var exists = this.lookupParams.filters.filter(function (filt) { return filt.field === field; });
        var obj = {};
        obj[field] = value;
        fil.value = this._apiService.parseDateToApiFormat(obj)[field];
        if (!exists.length) {
            this.lookupParams.filters.push(fil);
        }
        else {
            exists[0].value = value;
            exists[0].operator = operator;
        }
    };
    InspectionComponent.prototype.lookupSortChange = function (_a) {
        var field = _a.field, sort = _a.sort, order = _a.order;
        var sor = {
            field: field,
            order: order
        };
        var exists = this.lookupParams.sorts.filter(function (s) { return s.field === field; });
        if (!exists.length && sort) {
            this.lookupParams.sorts.push(sor);
        }
        else if (exists.length && sort) {
            exists[0].order = order;
        }
        else {
            var ind = this.lookupParams.sorts.indexOf(exists[0]);
            this.lookupParams.sorts.splice(ind, 1);
        }
    };
    InspectionComponent.prototype.lookupInspection = function ($event) {
        var _this = this;
        if ($event) {
            this.lookupParams.paging.currentPage = $event.pageNo - 1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/inspection/search-inspections', { "Search": JSON.stringify(this.lookupParams) }).subscribe(function (data) {
            _this.lookupItems = data;
        }, function (error) {
        });
    };
    InspectionComponent.prototype.addExistingInspectionToAsset = function (inspection) {
        var _this = this;
        var url = "/building/add-existing-inspection-to-building/buildingId/" + this.asset.id + "/inspectionId/" + inspection.id;
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/add-existing-inspection-to-asset-type-other/assetTypeOtherId/" + this.asset.id + "/inspectionId/" + inspection.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-existing-inspection-to-equipment/equipmentId/" + this.asset.id + "/inspectionId/" + inspection.id;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = "/vehicle/add-existing-inspection-to-vehicle/vehicleId/" + this.asset.id + "/inspectionId/" + inspection.id;
        }
        this._apiService.put(url, null).subscribe(function (data) {
            _this.addedToAsset.emit(data);
            _this._alertsService.success("Inspection successfully added to " + _this.asset.assetCategory.description);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], InspectionComponent.prototype, "asset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */])
    ], InspectionComponent.prototype, "addedToAsset", void 0);
    InspectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-inspection",
            template: __webpack_require__("./src/app/ams/components/inspection/inspection.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/inspection/inspection.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__["a" /* AlertsLoaderService */]])
    ], InspectionComponent);
    return InspectionComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/license/license.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-content\">\n  <h5>License Details</h5>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>License Number</label>\n      <input class=\"form-control\" [(ngModel)]=\"license.licenseNumber\" name=\"licenseNumber\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>License Holder Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"license.licenseHolderName\" name=\"licenseHolderName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>License Holder Company</label>\n      <input class=\"form-control\" [(ngModel)]=\"license.licenseHoldingCompany\" name=\"licenseHoldingCompany\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>License Holder Email</label>\n      <input class=\"form-control\" [(ngModel)]=\"license.licenseHolderEmail\" name=\"licenseHolderEmail\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>License Holder Phone</label>\n      <input class=\"form-control\" [(ngModel)]=\"license.licenseHolderPhone\" name=\"licenseHolderPhone\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Provided By</label>\n      <input class=\"form-control\" [(ngModel)]=\"license.licenseProvidedBy\" name=\"licenseProvidedBy\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Provider Phone</label>\n      <input class=\"form-control\" [(ngModel)]=\"license.licenseProviderPhone\" name=\"licenseProviderPhone\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Provider Email</label>\n      <input class=\"form-control\" [(ngModel)]=\"license.licenseProviderEmail\" name=\"licenseProviderEmail\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>License Holder Company Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"license.licenseHolderDescription\" name=\"licenseHolderDescription\"></textarea>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Provider Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"license.licenseProviderDescription\" name=\"licenseProviderDescription\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Providing Authority</label>\n      <input class=\"form-control\" [(ngModel)]=\"license.licenseProvidingAuthority\" name=\"licenseProvidingAuthority\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Issued Date</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt4\" [owlDateTimeTrigger]=\"dt4\" [(ngModel)]=\"license.issuedDate\" name=\"issuedDate\"\n      />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt4></owl-date-time>\n\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Place Of Issue</label>\n      <input class=\"form-control\" [(ngModel)]=\"license.placeIssued\" name=\"placeIssued\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Renewal Date</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt5\" [owlDateTimeTrigger]=\"dt5\" [(ngModel)]=\"license.renewalDate\" name=\"renewalDate\"\n      />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt5></owl-date-time>\n    </div>\n  </div>\n\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Start Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" [(ngModel)]=\"license.startDateTime\" name=\"startDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt1></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>End Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\" [(ngModel)]=\"license.endDateTime\" name=\"endDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt2></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Grace Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt3\" [owlDateTimeTrigger]=\"dt3\" [(ngModel)]=\"license.graceDateTime\" name=\"graceDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt3></owl-date-time>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Grace Period In Months</label>\n      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"license.gracePeriodInMonths\" name=\"gracePeriodInMonths\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>License Amount</label>\n      <input class=\"form-control\" [(ngModel)]=\"license.licenseAmount\" name=\"licenseAmount\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Renewal Amount</label>\n      <input class=\"form-control\" [(ngModel)]=\"license.renewalAmount\" name=\"renewalAmount\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Comments</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"license.comments\" name=\"comments\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <button class=\"btn btn-primary\" (click)=\"save()\">{{editMode?'Update':'Save'}}</button>\n    </div>\n    <div class=\"col-6\">\n      <button class=\"btn btn-success float-right\" data-toggle=\"modal\" data-target=\"#lookUp\">Lookup</button>\n    </div>\n  </div>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>License #</th>\n        <th>Start Date</th>\n        <th>End Date</th>\n        <th>Renewal Date</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let license of asset.licenses\">\n        <td>{{license.licenseNumber}}</td>\n        <td>{{license.startDateTime | date:'dd/MM/yyyy HH:mm:ss'}}</td>\n        <td>{{license.endDateTime | date:'dd/MM/yyyy HH:mm:ss'}}</td>\n        <td>{{license.renewalDate | date:'dd/MM/yyyy'}}</td>\n        <td>\n          <span class=\"fa fa-pencil btn btn-sm btn-outline-primary\" (click)=\"editLicense(license)\"></span>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-danger\" (click)=\"removeLicenseFromAsset(license)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <app-supporting-documents [docsObject]=\"license\" [addTo]=\"'license'\"></app-supporting-documents>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"lookUp\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\">Inspection Lookup</h6>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>License #</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.licenseNumber.value\" (change)=\"lookupFieldChange(lookupOptions.licenseNumber)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.licenseNumber)\" [(ngModel)]=\"lookupOptions.licenseNumber.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.licenseNumber.sort\" (change)=\"lookupSortChange(lookupOptions.licenseNumber)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.licenseNumber)\" [(ngModel)]=\"lookupOptions.licenseNumber.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Holding Company</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.licenseHoldingCompany.value\" (change)=\"lookupFieldChange(lookupOptions.licenseHoldingCompany)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.licenseHoldingCompany)\" [(ngModel)]=\"lookupOptions.licenseHoldingCompany.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.licenseHoldingCompany.sort\" (change)=\"lookupSortChange(lookupOptions.licenseHoldingCompany)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.licenseHoldingCompany)\" [(ngModel)]=\"lookupOptions.licenseHoldingCompany.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Holder Name</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.licenseHolderName.value\" (change)=\"lookupFieldChange(lookupOptions.licenseHolderName)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.licenseHolderName)\" [(ngModel)]=\"lookupOptions.licenseHolderName.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.licenseHolderName.sort\" (change)=\"lookupSortChange(lookupOptions.licenseHolderName)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.licenseHolderName)\" [(ngModel)]=\"lookupOptions.licenseHolderName.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Provided By</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.licenseProvidedBy.value\" (change)=\"lookupFieldChange(lookupOptions.licenseProvidedBy)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.licenseProvidedBy)\" [(ngModel)]=\"lookupOptions.licenseProvidedBy.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.licenseProvidedBy.sort\" (change)=\"lookupSortChange(lookupOptions.licenseProvidedBy)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.licenseProvidedBy)\" [(ngModel)]=\"lookupOptions.licenseProvidedBy.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Provided Authority</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.licenseProvidingAuthority.value\" (change)=\"lookupFieldChange(lookupOptions.licenseProvidingAuthority)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.licenseProvidingAuthority)\" [(ngModel)]=\"lookupOptions.licenseProvidingAuthority.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.licenseProvidingAuthority.sort\" (change)=\"lookupSortChange(lookupOptions.licenseProvidingAuthority)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.licenseProvidingAuthority)\" [(ngModel)]=\"lookupOptions.licenseProvidingAuthority.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Place Issued</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.placeIssued.value\" (change)=\"lookupFieldChange(lookupOptions.placeIssued)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.placeIssued)\" [(ngModel)]=\"lookupOptions.placeIssued.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.placeIssued.sort\" (change)=\"lookupSortChange(lookupOptions.placeIssued)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.placeIssued)\" [(ngModel)]=\"lookupOptions.placeIssued.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Start Date Time</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtdt\" [owlDateTimeTrigger]=\"dtdt\" [(ngModel)]=\"lookupOptions.startDateTime.value\"\n                (dateTimeChange)=\"lookupFieldChange(lookupOptions.startDateTime)\" />\n              <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dtdt></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.startDateTime)\" [(ngModel)]=\"lookupOptions.startDateTime.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.startDateTime.sort\" (change)=\"lookupSortChange(lookupOptions.startDateTime)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.startDateTime)\" [(ngModel)]=\"lookupOptions.startDateTime.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>End Date Time</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtd\" [owlDateTimeTrigger]=\"dtd\" [(ngModel)]=\"lookupOptions.endDateTime.value\"\n                (dateTimeChange)=\"lookupFieldChange(lookupOptions.endDateTime)\" />\n              <owl-date-time [pickerType]=\"'calendar'\" #dtd></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.endDateTime)\" [(ngModel)]=\"lookupOptions.endDateTime.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.endDateTime.sort\" (change)=\"lookupSortChange(lookupOptions.endDateTime)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.endDateTime)\" [(ngModel)]=\"lookupOptions.endDateTime.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <table class=\"table table-bordered table-hover\">\n            <thead>\n              <tr>\n                <th>License #</th>\n                <th>Start Date</th>\n                <th>End Date</th>\n                <th>Renewal Date</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"lookupItems\">\n              <tr *ngFor=\"let licns of lookupItems.licenses\">\n                <td>{{licns.licenseNumber}}</td>\n                <td>{{licns.startDateTime | date:'dd/MM/yyyy HH:mm:ss'}}</td>\n                <td>{{licns.endDateTime | date:'dd/MM/yyyy HH:mm:ss'}}</td>\n                <td>{{licns.renewalDate | date:'dd/MM/yyyy'}}</td>\n                <td><span class=\"fa fa-plus btn btn-sm btn-outline-danger\" (click)=\"addExistingLicenseToAsset(licns)\"></span></td>\n              </tr>\n            </tbody>\n          </table>\n          <ng-pagination *ngIf=\"lookupItems\" [itemsCount]=\"lookupItems.totalRecords\" [pageSize]=\"10\" (getPageData)=\"lookupLicense($event)\"></ng-pagination>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary float-right\" (click)=\"lookupLicense()\">Search</button>\n          <button type=\"button\" (click)=\"initLookupParams()\" class=\"btn btn-primary\">Clear</button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/license/license.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/license/license.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicenseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LicenseComponent = /** @class */ (function () {
    function LicenseComponent(_alertsService, _apiService) {
        this._alertsService = _alertsService;
        this._apiService = _apiService;
        this.editMode = false;
        this.addedToAsset = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        this.initLicense();
    }
    LicenseComponent.prototype.ngOnInit = function () {
        this.initLookupParams();
    };
    LicenseComponent.prototype.initLookupParams = function () {
        this.lookupParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
        this.lookupOptions = {
            licenseNumber: {
                field: 'licenseNumber',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            licenseHolderName: {
                field: 'licenseHolderName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            licenseHoldingCompany: {
                field: 'licenseHoldingCompany',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            licenseProvidedBy: {
                field: 'licenseProvidedBy',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            licenseProvidingAuthority: {
                field: 'licenseProvidingAuthority',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            placeIssued: {
                field: 'placeIssued',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            startDateTime: {
                field: 'startDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            endDateTime: {
                field: 'endDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            }
        };
    };
    LicenseComponent.prototype.initLicense = function () {
        this.license = {
            id: null,
            statusFlag: null,
            licenseNumber: null,
            licenseHolderName: null,
            licenseHoldingCompany: null,
            licenseHolderDescription: null,
            licenseHolderPhone: null,
            licenseHolderEmail: null,
            licenseProvidedBy: null,
            licenseProvidingAuthority: null,
            licenseProviderDescription: null,
            licenseProviderPhone: null,
            licenseProviderEmail: null,
            placeIssued: null,
            issuedDate: null,
            startDateTime: null,
            endDateTime: null,
            graceDateTime: null,
            renewalDate: null,
            gracePeriodInMonths: null,
            licenseAmount: null,
            renewalAmount: null,
            comments: null
        };
    };
    LicenseComponent.prototype.save = function () {
        var _this = this;
        if (this.editMode) {
            this.updateLicense();
            return;
        }
        var url = "/building/add-license-to-building/buildingId/";
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/add-license-to-vehicle/vehicleId/";
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-license-to-equipment/equipmentId/";
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url =
                "/asset-type-other/add-license-to-asset-type-other/assetTypeOtherId/";
        }
        url = url + this.asset.id;
        this._apiService.put(url, this.license).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("License successfully added to " +
                _this.asset.assetCategory.description);
            _this.initLicense();
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    LicenseComponent.prototype.editLicense = function (license) {
        this.license = JSON.parse(JSON.stringify(license));
        this.editing = license;
        this.editMode = true;
    };
    LicenseComponent.prototype.updateLicense = function () {
        var _this = this;
        this._apiService
            .put("/license/update-license", this.license)
            .subscribe(function (data) {
            _this.license = data;
            _this.editing = Object.assign(_this.editing, data);
            _this._alertsService.success("License successfully updated.");
            _this.initLicense();
            _this.editMode = false;
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    LicenseComponent.prototype.removeLicenseFromAsset = function (license) {
        var _this = this;
        var url = "/building/remove-license-from-building/buildingId/" + this.asset.id + "/licenseId/" + license.id;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/remove-license-from-vehicle/vehicleId/" + this.asset.id + "/licenseId/" + license.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/remove-license-from-equipment/equipmentId/" + this.asset.id + "/licenseId/" + license.id;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/remove-license-from-asset-type-other/assetTypeOtherId/" + this.asset.id + "/licenseId/" + license.id;
        }
        this._apiService.delete(url).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("License successfully removed from " +
                _this.asset.assetCategory.description);
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    LicenseComponent.prototype.lookupFieldChange = function (_a) {
        var field = _a.field, operator = _a.operator, value = _a.value;
        var fil = {
            field: field,
            operator: operator,
            value: value
        };
        var exists = this.lookupParams.filters.filter(function (filt) { return filt.field === field; });
        var obj = {};
        obj[field] = value;
        fil.value = this._apiService.parseDateToApiFormat(obj)[field];
        if (!exists.length) {
            this.lookupParams.filters.push(fil);
        }
        else {
            exists[0].value = value;
            exists[0].operator = operator;
        }
    };
    LicenseComponent.prototype.lookupSortChange = function (_a) {
        var field = _a.field, sort = _a.sort, order = _a.order;
        var sor = {
            field: field,
            order: order
        };
        var exists = this.lookupParams.sorts.filter(function (s) { return s.field === field; });
        if (!exists.length && sort) {
            this.lookupParams.sorts.push(sor);
        }
        else if (exists.length && sort) {
            exists[0].order = order;
        }
        else {
            var ind = this.lookupParams.sorts.indexOf(exists[0]);
            this.lookupParams.sorts.splice(ind, 1);
        }
    };
    LicenseComponent.prototype.lookupLicense = function ($event) {
        var _this = this;
        if ($event) {
            this.lookupParams.paging.currentPage = $event.pageNo - 1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/license/search-licenses', { "Search": JSON.stringify(this.lookupParams) }).subscribe(function (data) {
            _this.lookupItems = data;
        }, function (error) {
        });
    };
    LicenseComponent.prototype.addExistingLicenseToAsset = function (license) {
        var _this = this;
        var url = "/building/add-existing-license-to-building/buildingId/" + this.asset.id + "/licenseId/" + license.id;
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/add-existing-license-to-asset-type-other/assetTypeOtherId/" + this.asset.id + "/licenseId/" + license.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-existing-license-to-equipment/equipmentId/" + this.asset.id + "/licenseId/" + license.id;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = "/vehicle/add-existing-license-to-vehicle/vehicleId/" + this.asset.id + "/licenseId/" + license.id;
        }
        this._apiService.put(url, null).subscribe(function (data) {
            _this.addedToAsset.emit(data);
            _this._alertsService.success("License successfully added to " + _this.asset.assetCategory.description);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LicenseComponent.prototype, "asset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */])
    ], LicenseComponent.prototype, "addedToAsset", void 0);
    LicenseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-license",
            template: __webpack_require__("./src/app/ams/components/license/license.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/license/license.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]])
    ], LicenseComponent);
    return LicenseComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/loan/loan.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-content\">\n  <h5>Loan Details</h5>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Agreement ID</label>\n      <input class=\"form-control\" [(ngModel)]=\"loan.agreementId\" name=\"agreementId\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Agreement Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"loan.agreementName\" name=\"agreementName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"loan.companyName\" name=\"companyName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Phone</label>\n      <input class=\"form-control\" [(ngModel)]=\"loan.companyPhone\" name=\"companyPhone\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Agreement Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"loan.agreementDescription\" name=\"agreementDescription\"></textarea>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Company Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"loan.companyDescription\" name=\"companyDescription\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Email</label>\n      <input class=\"form-control\" [(ngModel)]=\"loan.companyEmail\" name=\"companyEmail\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Contact Person Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"loan.companyContactPerson\" name=\"companyContactPerson\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Start Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\"\n       [(ngModel)]=\"loan.startDateTime\" name=\"startDateTime\" />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt1></owl-date-time>  \n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>End Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\"\n       [(ngModel)]=\"loan.endDateTime\" name=\"endDateTime\" />\n      <owl-date-time [pickerType]=\"'both'\"[showSecondsTimer]=\"true\" #dt2></owl-date-time>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Amount</label>\n      <input class=\"form-control\" [(ngModel)]=\"loan.loanAmount\" name=\"loanAmount\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>EMI Amount</label>\n      <input class=\"form-control\" [(ngModel)]=\"loan.loanEmi\" name=\"loanEmi\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Interest Rate</label>\n      <input class=\"form-control\" [(ngModel)]=\"loan.interestPercentage\" name=\"interestPercentage\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Grace Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt3\" [owlDateTimeTrigger]=\"dt3\"\n      [(ngModel)]=\"loan.graceDateTime\" name=\"graceDateTime\" />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt3></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Grace Period In Months</label>\n      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"loan.gracePeriodInMonths\" name=\"gracePeriodInMonths\" />\n    </div>\n  </div>\n  \n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Comments</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"loan.comments\" name=\"comments\"></textarea>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <button class=\"btn btn-primary\" (click)=\"save()\">{{editMode?'Update':'Save'}}</button>\n    </div>\n    <div class=\"col-6\">\n      <button class=\"btn btn-success float-right\" data-toggle=\"modal\" data-target=\"#lookUp\">Lookup</button>\n    </div>\n  </div>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th>Start Date</th>\n        <th>End Date</th>\n        <th>Amount</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let loan of asset.loanAgreements\">\n        <td>\n          {{loan.agreementId}}\n        </td>\n        <td>\n          {{loan.agreementName}}\n        </td>\n        <td>\n            {{loan.startDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n            {{loan.endDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n            {{loan.loanAmount}}\n        </td>\n        <td>\n            <span class=\"fa fa-pencil btn btn-sm btn-outline-primary\"(click)=\"editLoan(loan)\">\n            </span><span class=\"fa fa-trash btn btn-sm btn-outline-danger\" (click)=\"removeLoanFromAsset(loan)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <app-supporting-documents [docsObject]=\"loan\" [addTo]=\"'loan'\"></app-supporting-documents>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"lookUp\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\">Inspection Lookup</h6>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Agreement ID</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.agreementId.value\" (change)=\"lookupFieldChange(lookupOptions.agreementId)\"/>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\"(change)=\"lookupFieldChange(lookupOptions.agreementId)\" [(ngModel)]=\"lookupOptions.agreementId.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.agreementId.sort\" (change)=\"lookupSortChange(lookupOptions.agreementId)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.agreementId)\" [(ngModel)]=\"lookupOptions.agreementId.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Agreement Name</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.agreementName.value\" (change)=\"lookupFieldChange(lookupOptions.agreementName)\"/>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\"(change)=\"lookupFieldChange(lookupOptions.agreementName)\" [(ngModel)]=\"lookupOptions.agreementName.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.agreementName.sort\" (change)=\"lookupSortChange(lookupOptions.agreementName)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.agreementName)\" [(ngModel)]=\"lookupOptions.agreementName.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Agreement Description</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.agreementDescription.value\" (change)=\"lookupFieldChange(lookupOptions.agreementDescription)\"/>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\"(change)=\"lookupFieldChange(lookupOptions.agreementDescription)\" [(ngModel)]=\"lookupOptions.agreementDescription.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.agreementDescription.sort\" (change)=\"lookupSortChange(lookupOptions.agreementDescription)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\"(change)=\"lookupSortChange(lookupOptions.agreementDescription)\" [(ngModel)]=\"lookupOptions.agreementDescription.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Company Name</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.companyName.value\" (change)=\"lookupFieldChange(lookupOptions.companyName)\"/>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\"(change)=\"lookupFieldChange(lookupOptions.companyName)\" [(ngModel)]=\"lookupOptions.companyName.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.companyName.sort\" (change)=\"lookupSortChange(lookupOptions.companyName)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.companyName)\" [(ngModel)]=\"lookupOptions.companyName.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Company Description</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.companyDescription.value\" (change)=\"lookupFieldChange(lookupOptions.companyDescription)\"/>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\"(change)=\"lookupFieldChange(lookupOptions.companyDescription)\" [(ngModel)]=\"lookupOptions.companyDescription.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.companyDescription.sort\" (change)=\"lookupSortChange(lookupOptions.companyDescription)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.companyDescription)\" [(ngModel)]=\"lookupOptions.companyDescription.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Loan Amount</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.loanAmount.value\" (change)=\"lookupFieldChange(lookupOptions.loanAmount)\"/>\n              \n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.loanAmount)\" [(ngModel)]=\"lookupOptions.loanAmount.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.loanAmount.sort\" (change)=\"lookupSortChange(lookupOptions.loanAmount)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\"(change)=\"lookupSortChange(lookupOptions.loanAmount)\" [(ngModel)]=\"lookupOptions.loanAmount.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Start Date Time</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtdt\" [owlDateTimeTrigger]=\"dtdt\" [(ngModel)]=\"lookupOptions.startDateTime.value\" (dateTimeChange)=\"lookupFieldChange(lookupOptions.startDateTime)\"/>\n              <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dtdt></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.startDateTime)\" [(ngModel)]=\"lookupOptions.startDateTime.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.startDateTime.sort\" (change)=\"lookupSortChange(lookupOptions.startDateTime)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\"(change)=\"lookupSortChange(lookupOptions.startDateTime)\" [(ngModel)]=\"lookupOptions.startDateTime.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>End Date Time</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtd\" [owlDateTimeTrigger]=\"dtd\" [(ngModel)]=\"lookupOptions.endDateTime.value\" (dateTimeChange)=\"lookupFieldChange(lookupOptions.endDateTime)\"/>\n              <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\"  #dtd></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.endDateTime)\" [(ngModel)]=\"lookupOptions.endDateTime.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.endDateTime.sort\" (change)=\"lookupSortChange(lookupOptions.endDateTime)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\"(change)=\"lookupSortChange(lookupOptions.endDateTime)\" [(ngModel)]=\"lookupOptions.endDateTime.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          \n         \n          <table class=\"table table-bordered table-hover\">\n            <thead>\n              <tr>\n                <th>ID</th>\n                <th>Name</th>\n                <th>Start Date</th>\n                <th>End Date</th>\n                <th>Amount</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"lookupItems\">\n              <tr *ngFor=\"let lon of lookupItems.loans\">\n                <td>\n                  {{lon.agreementId}}\n                </td>\n                <td>\n                  {{lon.agreementName}}\n                </td>\n                <td>\n                    {{lon.startDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n                </td>\n                <td>\n                    {{lon.endDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n                </td>\n                <td>\n                    {{lon.loanAmount}}\n                </td>\n                <td><span class=\"fa fa-plus btn btn-sm btn-outline-danger\" (click)=\"addExistingLoanToAsset(lon)\"></span></td>\n              </tr>\n            </tbody>\n          </table>\n          <ng-pagination *ngIf=\"lookupItems\" [itemsCount]=\"lookupItems.totalRecords\" [pageSize]=\"10\" (getPageData)=\"lookupLoan($event)\"></ng-pagination>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary float-right\" (click)=\"lookupLoan()\">Search</button>\n          <button type=\"button\" (click)=\"initLookupParams()\" class=\"btn btn-primary\">Clear</button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/loan/loan.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/loan/loan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoanComponent = /** @class */ (function () {
    function LoanComponent(_alertsService, _apiService) {
        this._alertsService = _alertsService;
        this._apiService = _apiService;
        this.editMode = false;
        this.addedToAsset = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        this.initLoan();
    }
    LoanComponent.prototype.ngOnInit = function () {
        this.initLookupParams();
    };
    LoanComponent.prototype.initLookupParams = function () {
        this.lookupParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
        this.lookupOptions = {
            agreementId: {
                field: 'agreementId',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            agreementName: {
                field: 'agreementName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            agreementDescription: {
                field: 'agreementDescription',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            companyName: {
                field: 'companyName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            companyDescription: {
                field: 'companyDescription',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            loanAmount: {
                field: 'loanAmount',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            startDateTime: {
                field: 'startDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            }, endDateTime: {
                field: 'endDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            }
        };
    };
    LoanComponent.prototype.initLoan = function () {
        this.loan = {
            id: null,
            statusFlag: null,
            agreementId: null,
            agreementName: null,
            agreementDescription: null,
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
    };
    LoanComponent.prototype.save = function () {
        var _this = this;
        if (this.editMode) {
            this.updateLoan();
            return;
        }
        var url = "/building/add-loan-to-building/buildingId/";
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
        this._apiService.put(url, this.loan).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("Loan successfully added to " +
                _this.asset.assetCategory.description);
            _this.initLoan();
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    LoanComponent.prototype.editLoan = function (loan) {
        this.loan = JSON.parse(JSON.stringify(loan));
        this.editing = loan;
        this.editMode = true;
    };
    LoanComponent.prototype.updateLoan = function () {
        var _this = this;
        this._apiService.put("/loan/update-loan", this.loan).subscribe(function (data) {
            _this.loan = data;
            _this.editing = Object.assign(_this.editing, data);
            _this._alertsService.success("Loan successfully updated.");
            _this.initLoan();
            _this.editMode = false;
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    LoanComponent.prototype.removeLoanFromAsset = function (loan) {
        var _this = this;
        var url = "/building/remove-loan-from-building/buildingId/" + this.asset.id + "/loanId/" + loan.id;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/remove-loan-from-vehicle/vehicleId/" + this.asset.id + "/loanId/" + loan.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/remove-loan-from-equipment/equipmentId/" + this.asset.id + "/loanId/" + loan.id;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/remove-loan-from-asset-type-other/assetTypeOtherId/" + this.asset.id + "/loanId/" + loan.id;
            ;
        }
        this._apiService.delete(url).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("Loan successfully removed from " + _this.asset.assetCategory.description);
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    LoanComponent.prototype.lookupFieldChange = function (_a) {
        var field = _a.field, operator = _a.operator, value = _a.value;
        var fil = {
            field: field,
            operator: operator,
            value: value
        };
        var exists = this.lookupParams.filters.filter(function (filt) { return filt.field === field; });
        var obj = {};
        obj[field] = value;
        fil.value = this._apiService.parseDateToApiFormat(obj)[field];
        if (!exists.length) {
            this.lookupParams.filters.push(fil);
        }
        else {
            exists[0].value = value;
            exists[0].operator = operator;
        }
    };
    LoanComponent.prototype.lookupSortChange = function (_a) {
        var field = _a.field, sort = _a.sort, order = _a.order;
        var sor = {
            field: field,
            order: order
        };
        var exists = this.lookupParams.sorts.filter(function (s) { return s.field === field; });
        if (!exists.length && sort) {
            this.lookupParams.sorts.push(sor);
        }
        else if (exists.length && sort) {
            exists[0].order = order;
        }
        else {
            var ind = this.lookupParams.sorts.indexOf(exists[0]);
            this.lookupParams.sorts.splice(ind, 1);
        }
    };
    LoanComponent.prototype.lookupLoan = function ($event) {
        var _this = this;
        if ($event) {
            this.lookupParams.paging.currentPage = $event.pageNo - 1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/loan/search-loans', { "Search": JSON.stringify(this.lookupParams) }).subscribe(function (data) {
            _this.lookupItems = data;
        }, function (error) {
        });
    };
    LoanComponent.prototype.addExistingLoanToAsset = function (loan) {
        var _this = this;
        var url = "/building/add-existing-loan-to-building/buildingId/" + this.asset.id + "/loanId/" + loan.id;
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/add-existing-loan-to-asset-type-other/assetTypeOtherId/" + this.asset.id + "/loanId/" + loan.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-existing-loan-to-equipment/equipmentId/" + this.asset.id + "/loanId/" + loan.id;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = "/vehicle/add-existing-loan-to-vehicle/vehicleId/" + this.asset.id + "/loanId/" + loan.id;
        }
        this._apiService.put(url, null).subscribe(function (data) {
            _this.addedToAsset.emit(data);
            _this._alertsService.success("Loan successfully added to " + _this.asset.assetCategory.description);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LoanComponent.prototype, "asset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */])
    ], LoanComponent.prototype, "addedToAsset", void 0);
    LoanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-loan",
            template: __webpack_require__("./src/app/ams/components/loan/loan.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/loan/loan.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]])
    ], LoanComponent);
    return LoanComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/maintenance/maintenance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-content\">\n  <h5>Annual Maintenance Contract Details</h5>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Agreement ID</label>\n      <input class=\"form-control\" [(ngModel)]=\"maintenance.agreementId\" name=\"agreementId\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Agreement Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"maintenance.agreementName\" name=\"agreementName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"maintenance.companyName\" name=\"companyName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Phone</label>\n      <input class=\"form-control\" [(ngModel)]=\"maintenance.companyPhone\" name=\"companyPhone\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Agreement Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"maintenance.agreementDescription\" name=\"agreementDescription\"></textarea>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Company Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"maintenance.companyDescription\" name=\"companyDescription\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Email</label>\n      <input class=\"form-control\" [(ngModel)]=\"maintenance.companyEmail\" name=\"companyEmail\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Contact Person Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"maintenance.companyContactPerson\" name=\"companyContactPerson\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Start Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" [(ngModel)]=\"maintenance.startDateTime\" name=\"startDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt1></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>End Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\" [(ngModel)]=\"maintenance.endDateTime\" name=\"endDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt2></owl-date-time>\n    </div>\n  </div>\n\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Amount</label>\n      <input class=\"form-control\" [(ngModel)]=\"maintenance.amcAmount\" name=\"amcAmount\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Grace Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt3\" [owlDateTimeTrigger]=\"dt3\" [(ngModel)]=\"maintenance.graceDateTime\" name=\"graceDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt3></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Grace Period In Months</label>\n      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"maintenance.gracePeriodInMonths\" name=\"gracePeriodInMonths\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Comments</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"maintenance.comments\" name=\"comments\"></textarea>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <button class=\"btn btn-primary\" (click)=\"save()\">{{editMode?'Update':'Save'}}</button>\n      <button class=\"btn btn-success float-right\" data-toggle=\"modal\" data-target=\"#lookUp\">Lookup</button>\n    </div>\n  </div>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th>Start Date</th>\n        <th>End Date</th>\n        <th>Amount</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let amc of asset.annualMaintenanceContracts\">\n        <td>\n          {{amc.agreementId}}\n        </td>\n        <td>\n          {{amc.agreementName}}\n        </td>\n        <td>\n          {{amc.startDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{amc.endDateTime| date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{amc.amcAmount}}\n        </td>\n        <td>\n          <span class=\"fa fa-pencil btn btn-sm btn-outline-primary\" (click)=\"editMaintenance(amc)\"></span>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-danger\" (click)=\"removeMaintenanceFromAsset(amc)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <app-supporting-documents [docsObject]=\"maintenance\" [addTo]=\"'amc'\"></app-supporting-documents>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"lookUp\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\">Inspection Lookup</h6>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Agreement ID</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.agreementId.value\" (change)=\"lookupFieldChange(lookupOptions.agreementId)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.agreementId)\" [(ngModel)]=\"lookupOptions.agreementId.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.agreementId.sort\" (change)=\"lookupSortChange(lookupOptions.agreementId)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.agreementId)\" [(ngModel)]=\"lookupOptions.agreementId.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Agreement Name Company</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.agreementName.value\" (change)=\"lookupFieldChange(lookupOptions.agreementName)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.agreementName)\" [(ngModel)]=\"lookupOptions.agreementName.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.agreementName.sort\" (change)=\"lookupSortChange(lookupOptions.agreementName)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.agreementName)\" [(ngModel)]=\"lookupOptions.agreementName.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Agreement Description</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.agreementDescription.value\" (change)=\"lookupFieldChange(lookupOptions.agreementDescription)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.agreementDescription)\" [(ngModel)]=\"lookupOptions.agreementDescription.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.agreementDescription.sort\" (change)=\"lookupSortChange(lookupOptions.agreementDescription)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.agreementDescription)\" [(ngModel)]=\"lookupOptions.agreementDescription.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Company Name</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.companyName.value\" (change)=\"lookupFieldChange(lookupOptions.companyName)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.companyName)\" [(ngModel)]=\"lookupOptions.companyName.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.companyName.sort\" (change)=\"lookupSortChange(lookupOptions.companyName)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.companyName)\" [(ngModel)]=\"lookupOptions.companyName.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Company Description</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.companyDescription.value\" (change)=\"lookupFieldChange(lookupOptions.companyDescription)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.companyDescription)\" [(ngModel)]=\"lookupOptions.companyDescription.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.companyDescription.sort\" (change)=\"lookupSortChange(lookupOptions.companyDescription)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.companyDescription)\" [(ngModel)]=\"lookupOptions.companyDescription.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Start Date Time</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtdt\" [owlDateTimeTrigger]=\"dtdt\" [(ngModel)]=\"lookupOptions.startDateTime.value\"\n                (dateTimeChange)=\"lookupFieldChange(lookupOptions.startDateTime)\" />\n              <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dtdt></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.startDateTime)\" [(ngModel)]=\"lookupOptions.startDateTime.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.startDateTime.sort\" (change)=\"lookupSortChange(lookupOptions.startDateTime)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.startDateTime)\" [(ngModel)]=\"lookupOptions.startDateTime.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>End Date Time</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtd\" [owlDateTimeTrigger]=\"dtd\" [(ngModel)]=\"lookupOptions.endDateTime.value\"\n                (dateTimeChange)=\"lookupFieldChange(lookupOptions.endDateTime)\" />\n              <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dtd></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.endDateTime)\" [(ngModel)]=\"lookupOptions.endDateTime.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.endDateTime.sort\" (change)=\"lookupSortChange(lookupOptions.endDateTime)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.endDateTime)\" [(ngModel)]=\"lookupOptions.endDateTime.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <table class=\"table table-bordered table-hover\">\n            <thead>\n              <tr>\n                <th>ID</th>\n                <th>Name</th>\n                <th>Start Date</th>\n                <th>End Date</th>\n                <th>Amount</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"lookupItems\">\n              <tr *ngFor=\"let amc of lookupItems.annualMaintenanceContracts\">\n                <td>\n                  {{amc.agreementId}}\n                </td>\n                <td>\n                  {{amc.agreementName}}\n                </td>\n                <td>\n                  {{amc.startDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n                </td>\n                <td>\n                  {{amc.endDateTime| date:'dd/MM/yyyy HH:mm:ss'}}\n                </td>\n                <td>\n                  {{amc.amcAmount}}\n                </td>\n                <td><span class=\"fa fa-plus btn btn-sm btn-outline-danger\" (click)=\"addExistingAmcToAsset(amc)\"></span></td>\n              </tr>\n            </tbody>\n          </table>\n          <ng-pagination *ngIf=\"lookupItems\" [itemsCount]=\"lookupItems.totalRecords\" [pageSize]=\"10\" (getPageData)=\"lookupAmc($event)\"></ng-pagination>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary float-right\" (click)=\"lookupAmc()\">Search</button>\n          <button type=\"button\" (click)=\"initLookupParams()\" class=\"btn btn-primary\">Clear</button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/maintenance/maintenance.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/maintenance/maintenance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent(_apiService, _alertsService) {
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this.editMode = false;
        this.addedToAsset = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        this.initMaintenance();
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
        this.initLookupParams();
    };
    MaintenanceComponent.prototype.initLookupParams = function () {
        this.lookupParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
        this.lookupOptions = {
            agreementId: {
                field: 'agreementId',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            agreementName: {
                field: 'agreementName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            agreementDescription: {
                field: 'agreementDescription',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            companyName: {
                field: 'companyName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            companyDescription: {
                field: 'companyDescription',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            startDateTime: {
                field: 'startDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            endDateTime: {
                field: 'endDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            }
        };
    };
    MaintenanceComponent.prototype.initMaintenance = function () {
        this.maintenance = {
            id: null,
            statusFlag: null,
            agreementId: null,
            agreementName: null,
            agreementDescription: null,
            companyName: null,
            companyDescription: null,
            companyPhone: null,
            companyEmail: null,
            companyContactPerson: null,
            startDateTime: null,
            endDateTime: null,
            graceDateTime: null,
            amcAmount: null,
            gracePeriodInMonths: null,
            comments: null,
            buildings: null,
            equipments: null,
            vehicles: null,
            assetTypeOthers: null,
            existingBuildings: null,
            existingEquipments: null,
            existingVehicles: null,
            existingAssetTypeOthers: null
        };
    };
    MaintenanceComponent.prototype.save = function () {
        var _this = this;
        if (this.editMode) {
            this.updateAMC();
            return;
        }
        var url = "/building/add-amc-to-building/buildingId/";
        if (this.asset.assetCategory.id == "OTHER") {
            url =
                "/asset-type-other/add-amc-to-asset-type-other/assetTypeOtherId/";
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-amc-to-equipment/equipmentId/";
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/add-amc-to-vehicle/vehicleId/";
        }
        url = url + this.asset.id;
        this._apiService.put(url, this.maintenance).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("Asset Management Contract successfully added to " +
                _this.asset.assetCategory.description);
            _this.initMaintenance();
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    MaintenanceComponent.prototype.editMaintenance = function (amc) {
        this.maintenance = JSON.parse(JSON.stringify(amc));
        this.editing = amc;
        this.editMode = true;
    };
    MaintenanceComponent.prototype.updateAMC = function () {
        var _this = this;
        this._apiService.put("/amc/update-amc", this.maintenance).subscribe(function (data) {
            _this.maintenance = data;
            _this.editing = Object.assign(_this.editing, data);
            _this._alertsService.success("Annual maintenace contract successfully updated.");
            _this.initMaintenance();
            _this.editMode = false;
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    MaintenanceComponent.prototype.removeMaintenanceFromAsset = function (amc) {
        var _this = this;
        var url = "/building/remove-amc-from-building/buildingId/" + this.asset.id + "/amcId/" + amc.id;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/remove-amc-from-vehicle/vehicleId/" + this.asset.id + "/amcId/" + amc.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/remove-amc-from-equipment/equipmentId/" + this.asset.id + "/amcId/" + amc.id;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/remove-amc-from-asset-type-other/assetTypeOtherId/" + this.asset.id + "/amcId/" + amc.id;
        }
        this._apiService.delete(url).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("Annual maintenanace contract successfully removed from " +
                _this.asset.assetCategory.description);
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    MaintenanceComponent.prototype.lookupFieldChange = function (_a) {
        var field = _a.field, operator = _a.operator, value = _a.value;
        var fil = {
            field: field,
            operator: operator,
            value: value
        };
        var exists = this.lookupParams.filters.filter(function (filt) { return filt.field === field; });
        var obj = {};
        obj[field] = value;
        fil.value = this._apiService.parseDateToApiFormat(obj)[field];
        if (!exists.length) {
            this.lookupParams.filters.push(fil);
        }
        else {
            exists[0].value = value;
            exists[0].operator = operator;
        }
    };
    MaintenanceComponent.prototype.lookupSortChange = function (_a) {
        var field = _a.field, sort = _a.sort, order = _a.order;
        var sor = {
            field: field,
            order: order
        };
        var exists = this.lookupParams.sorts.filter(function (s) { return s.field === field; });
        if (!exists.length && sort) {
            this.lookupParams.sorts.push(sor);
        }
        else if (exists.length && sort) {
            exists[0].order = order;
        }
        else {
            var ind = this.lookupParams.sorts.indexOf(exists[0]);
            this.lookupParams.sorts.splice(ind, 1);
        }
    };
    MaintenanceComponent.prototype.lookupAmc = function ($event) {
        var _this = this;
        if ($event) {
            this.lookupParams.paging.currentPage = $event.pageNo - 1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/amc/search-amc', { "Search": JSON.stringify(this.lookupParams) }).subscribe(function (data) {
            _this.lookupItems = data;
        }, function (error) {
        });
    };
    MaintenanceComponent.prototype.addExistingAmcToAsset = function (amc) {
        var _this = this;
        var url = "/building/add-existing-amc-to-building/buildingId/" + this.asset.id + "/amcId/" + amc.id;
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/add-existing-amc-to-asset-type-other/assetTypeOtherId/" + this.asset.id + "/amcId/" + amc.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-existing-amc-to-equipment/equipmentId/" + this.asset.id + "/amcId/" + amc.id;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = "/vehicle/add-existing-amc-to-vehicle/vehicleId/" + this.asset.id + "/amcId/" + amc.id;
        }
        this._apiService.put(url, null).subscribe(function (data) {
            _this.addedToAsset.emit(data);
            _this._alertsService.success("amc successfully added to " + _this.asset.assetCategory.description);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MaintenanceComponent.prototype, "asset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */])
    ], MaintenanceComponent.prototype, "addedToAsset", void 0);
    MaintenanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-maintenance",
            template: __webpack_require__("./src/app/ams/components/maintenance/maintenance.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/maintenance/maintenance.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__["a" /* AlertsLoaderService */]])
    ], MaintenanceComponent);
    return MaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/other/add-other-assets/add-other-assets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pb-3\">\n  <div class=\"col-md-12\">\n    <h4>\n      <span class=\"fa fa-folder-open\"></span> Add Asset</h4>\n  </div>\n</div>\n<ul class=\"row nav nav-tabs mb-2\">\n  <li class=\"nav-item\" (click)=\"changeTab(tab)\" *ngFor=\"let tab of tabs\">\n    <a class=\"nav-link\" [ngClass]=\"{'active': currentTab.tab == tab.tab}\">{{tab.name}}</a>\n  </li>\n</ul>\n<div class=\"tab-content\" *ngIf=\"currentTab.tab == 1\">\n  <h5>Asset Details</h5>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Asset ID</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.assetTypeOtherId\" name=\"assetTypeOtherId\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Asset Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.assetTypeOtherName\" name=\"assetTypeOtherName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Asset Description</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.assetTypeOtherDescription\" name=\"assetTypeOtherDescription\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Asset Tag</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.assetTag\" name=\"assetTag\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Asset Category</label>\n      <select class=\"form-control\" [compareWith]=\"selectCompareFunction\" disabled [(ngModel)]=\"asset.assetCategory\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let category of dropDownsData.assetCategoriesList\" [ngValue]=\"category\">{{category.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Organization</label>\n      <select class=\"form-control\" disabled [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"asset.department.organization\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let organization of dropDownsData.organizationList\" [ngValue]=\"organization\">{{organization.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Department</label>\n      <select class=\"form-control\" [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"asset.department\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let department of dropDownsData.departmentList\" [ngValue]=\"department\">{{department.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Asset Cost</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.assetCost\" name=\"assetCost\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Length</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.assetLength\" name=\"assetLength\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Height</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.assetHeight\" name=\"assetHeight\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Width</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.assetWidth\" name=\"assetWidth\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Weight</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.assetWeight\" name=\"assetWeight\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Quantity</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.assetQuantity\" name=\"assetQuantity\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Serial #</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.assetSerialNumber\" name=\"assetSerialNumber\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Make</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.assetMake\" name=\"assetMake\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Model</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.assetModel\" name=\"assetModel\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Purchase Date</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\"\n      [(ngModel)]=\"asset.purchasedDate\" name=\"purchasedDate\" />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.purchasedFrom\" name=\"purchasedFrom\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Phone</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.purchaseCompanyPhone\" name=\"purchaseCompanyPhone\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Email</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.purchaseCompanyEmail\" name=\"purchaseCompanyEmail\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Company Contact Person</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.purchaseCompanyContactPerson\" name=\"purchaseCompanyContactPerson\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Order #</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.orderNumber\" name=\"orderNumber\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Invoice #</label>\n      <input class=\"form-control\" [(ngModel)]=\"asset.invoiceNumber\" name=\"invoiceNumber\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Purchase Comments</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"asset.purchaseComments\" name=\"purchaseComments\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Asset Returned</label>\n      <select class=\"form-control\" [(ngModel)]=\"asset.assetReturned\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Return Date</label>\n      <input class=\"form-control\" [disabled]=\"asset.assetReturned !='Y'\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\"\n      [(ngModel)]=\"asset.assetReturnedDate\" name=\"assetReturnedDate\" />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt2></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Refund Amount</label>\n      <input class=\"form-control\" [disabled]=\"asset.assetReturned !='Y'\" [(ngModel)]=\"asset.refundAmount\" name=\"refundAmount\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Return Reason</label>\n      <textarea class=\"form-control\" [disabled]=\"asset.assetReturned !='Y'\" [(ngModel)]=\"asset.assetReturnReason\" name=\"assetReturnReason\"></textarea>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Asset Damage Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"asset.assetDamageDescription\" name=\"assetDamageDescription\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Regulatory Compliance</label>\n      <select class=\"form-control\" [(ngModel)]=\"asset.regulatoryCompliance\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Regulatory Authority</label>\n      <input class=\"form-control\" [disabled]=\"asset.regulatoryCompliance != 'Y'\" [(ngModel)]=\"asset.regulatoryAuthorityName\" name=\"regulatoryAuthorityName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Compliance Obtained Date</label>\n      <input class=\"form-control\" [disabled]=\"asset.regulatoryCompliance != 'Y'\" [owlDateTime]=\"dt8\" [owlDateTimeTrigger]=\"dt8\"\n      [(ngModel)]=\"asset.regCompObtainedDate\" name=\"regCompObtainedDate\" />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt8></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Exits</label>\n      <select class=\"form-control\" [(ngModel)]=\"asset.fireExits\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n  </div>\n\n\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Exit Location</label>\n      <input class=\"form-control\" [disabled]=\"asset.fireExits !='Y'\" [(ngModel)]=\"asset.fireExitsLoc\" name=\"description\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Exitinguishers Present</label>\n      <select class=\"form-control\" [(ngModel)]=\"asset.fireExtinguishers\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Extinguisher</label>\n      <ngx-select-dropdown [ngClass]=\"{'disabled': asset.fireExtinguishers != 'Y'}\" *ngIf=\"dropDownsData.fireExtinguisherTypeList\"\n        [multiple]=\"true\" [config]=\"multiselectConfig\" [(value)]=\"asset.fireExtinguisherTypes\" [options]=\"dropDownsData.fireExtinguisherTypeList\"></ngx-select-dropdown>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Extinguisher Location</label>\n      <input class=\"form-control\" [disabled]=\"asset.fireExtinguishers !='Y'\" [(ngModel)]=\"asset.fireExtinguisherLoc\" name=\"fireExtinguisherLoc\"\n      />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Annual Maintenance Contract</label>\n      <select class=\"form-control\" [(ngModel)]=\"asset.amcPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Inspection</label>\n      <select class=\"form-control\" [(ngModel)]=\"asset.inspectionPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>License</label>\n      <select class=\"form-control\" [(ngModel)]=\"asset.licensePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Loan</label>\n      <select class=\"form-control\" [(ngModel)]=\"asset.loanPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Policy</label>\n      <select class=\"form-control\" [(ngModel)]=\"asset.insurancePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Rental/Lease</label>\n      <select class=\"form-control\" [(ngModel)]=\"asset.rentalOrLeasePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Service</label>\n      <select class=\"form-control\" [(ngModel)]=\"asset.servicePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Warranty</label>\n      <select class=\"form-control\" [(ngModel)]=\"asset.warrantyPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Asset Condition</label>\n      <select [compareWith]=\"selectCompareFunction\" class=\"form-control\" [(ngModel)]=\"asset.assetCondition\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let condition of dropDownsData.assetConditionList\" [ngValue]=\"condition\">{{condition.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If Other Specify</label>\n      <input class=\"form-control\" [disabled]=\"!asset.assetCondition || asset.assetCondition.id != 'OTHER'\" [(ngModel)]=\"asset.assetConditionOther\"\n        name=\"assetConditionOther\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Asset Status</label>\n      <select [compareWith]=\"selectCompareFunction\" class=\"form-control\" [(ngModel)]=\"asset.assetStatus\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let status of dropDownsData.assetStatusList\" [ngValue]=\"status\">{{status.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If Other Specify</label>\n      <input class=\"form-control\" [disabled]=\"!asset.assetStatus || asset.assetStatus.id != 'OTHER'\" [(ngModel)]=\"asset.assetStatusOther\"\n        name=\"assetStatusOther\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Asset Type</label>\n      <select [compareWith]=\"selectCompareFunction\" class=\"form-control\" [(ngModel)]=\"asset.assetType\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let type of dropDownsData.assetTypeList\" [ngValue]=\"type\">{{type.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If Other Specify</label>\n      <input class=\"form-control\" [disabled]=\"!asset.assetType || asset.assetType.id != 'OTHER'\" [(ngModel)]=\"asset.assetTypeOther\"\n        name=\"assetTypeOther\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      Assigned To:\n      <button class=\"btn btn-primary btn-sm\" (click)=\"userLookup()\">Lookup</button>\n    </div>\n  </div>\n\n  <table class=\"table table-bordered\">\n    <thead>\n      <th>\n        Login Id\n      </th>\n      <th>\n        First Name\n      </th>\n      <th>\n        Last Name\n      </th>\n      <th></th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let assignee of asset.assignees\">\n        \n        <td>{{assignee.userLoginId || assignee.loginId }}\n        </td>\n        <td>{{assignee.firstName}}</td>\n        <td>{{assignee.lastName}}</td>\n        <td>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-success\" (click)=\"deleteAssignee(assignee)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Notes</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"asset.notes\"></textarea>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <button class=\"btn btn-primary\" (click)=\"save()\">{{editMode?'Update':'Save'}}</button>\n      <!-- <button class=\"btn btn-success float-right\">Next</button> -->\n    </div>\n  </div>\n</div>\n<app-maintenance *ngIf=\"currentTab.tab==2\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"asset\"></app-maintenance>\n<app-inspection *ngIf=\"currentTab.tab==3\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"asset\"></app-inspection>\n<app-license *ngIf=\"currentTab.tab==4\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"asset\"></app-license>\n<app-loan *ngIf=\"currentTab.tab==5\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"asset\"></app-loan>\n<app-policy *ngIf=\"currentTab.tab==6\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"asset\"></app-policy>\n<app-rent-or-lease *ngIf=\"currentTab.tab==7\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"asset\"></app-rent-or-lease>\n<app-service *ngIf=\"currentTab.tab==8\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"asset\"></app-service>\n<app-warranty *ngIf=\"currentTab.tab==9\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"asset\"></app-warranty>\n<app-supporting-documents *ngIf=\"currentTab.tab==10\" (addedToAsset)=\"addedToAsset($event)\" [docsObject]=\"asset\" [addTo]=\"'asset-type-other'\"></app-supporting-documents>\n<asset-summary [asset]=\"asset\" *ngIf=\"currentTab.tab==11\"></asset-summary>"

/***/ }),

/***/ "./src/app/ams/components/other/add-other-assets/add-other-assets.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/other/add-other-assets/add-other-assets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOtherAssetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_lookup_user_lookup_component__ = __webpack_require__("./src/app/ams/components/user-lookup/user-lookup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddOtherAssetsComponent = /** @class */ (function () {
    function AddOtherAssetsComponent(_sharedService, _apiService, _alertsService, route, viewContainerRef, componentFactoryResolver) {
        var _this = this;
        this._sharedService = _sharedService;
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this.route = route;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.initAssetOther();
        this.tabs = this._sharedService.getTabstoShow(this.asset);
        this.currentTab = this.tabs[0];
        this.dropDownsData = this._sharedService.dropDownsData;
        this._sharedService.dropDownsService.subscribe(function (data) {
            _this.dropDownsData = data;
        });
    }
    AddOtherAssetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropDownsData = this._sharedService.dropDownsData;
        this.route.params.subscribe(function (params) {
            var Id = params["id"];
            if (Id) {
                _this.getAssetById(Id);
                _this.editMode = true;
            }
        });
    };
    AddOtherAssetsComponent.prototype.selectCompareFunction = function (item1, item2) {
        if (item1 == null || item2 == null) {
            return false;
        }
        return item1.id == item2.id;
    };
    AddOtherAssetsComponent.prototype.initAssetOther = function () {
        this.asset = {
            id: null,
            assets: null,
            statusFlag: null,
            assetTypeOtherId: null,
            assetTypeOtherDescription: null,
            assetTypeOtherName: null,
            assetCategory: {
                id: "OTHER",
                description: "Other"
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
                id: null,
                organization: null
            },
            amcPresent: "N",
            insurancePresent: "N",
            loanPresent: "N",
            licensePresent: "N",
            warrantyPresent: "N",
            inspectionPresent: "N",
            servicePresent: "N",
            rentalOrLeasePresent: "N",
            fireExtinguishers: null,
            fireExits: null,
            fireExitsLoc: null,
            fireExtinguisherLoc: null,
            fireExtinguisherTypes: []
        };
    };
    AddOtherAssetsComponent.prototype.changeTab = function (tab) {
        if (!this.asset.id && tab.tab != 11 && tab.tab != 1) {
            this._alertsService.error("Please save asset details first.");
            return;
        }
        this.currentTab = tab;
    };
    AddOtherAssetsComponent.prototype.updateTabs = function () {
        this.tabs = this._sharedService.getTabstoShow(this.asset);
    };
    AddOtherAssetsComponent.prototype.handleNullOrganization = function (data) {
        if (data.assetCategory == null) {
            data.assetCategory = {
                id: "OTHER",
                description: "Other"
            };
        }
        if (data.department === null) {
            data.department = {
                id: null,
                organization: {
                    id: null
                }
            };
        }
        return data;
    };
    AddOtherAssetsComponent.prototype.getAssetById = function (id) {
        var _this = this;
        this._apiService
            .get("/asset-type-other/assetTypeOtherId/" + id)
            .subscribe(function (data) {
            data = _this.handleNullOrganization(data);
            _this.asset = data;
            _this.updateTabs();
        }, function (error) {
            _this._alertsService.error("Unable to get asset details. Try Again.");
        });
    };
    AddOtherAssetsComponent.prototype.addedToAsset = function ($event) {
        this.asset = $event;
    };
    AddOtherAssetsComponent.prototype.save = function () {
        var _this = this;
        this._apiService
            .createOrUpdateOtherAsset("/asset-type-other/create-or-update-asset-type-other", this.asset)
            .subscribe(function (data) {
            data = _this.handleNullOrganization(data);
            _this.asset = data;
            _this._alertsService.success("Asset details saved successfully.");
            //this.initAssetOther();
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    AddOtherAssetsComponent.prototype.userLookup = function () {
        var _this = this;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__user_lookup_user_lookup_component__["a" /* UserLookupComponent */]);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'asset-type-other';
        this.componentRef.instance.assignUser.subscribe(function (data) {
            _this.assignUser(data);
        });
        this.componentRef.instance.closeModal.subscribe(function () {
            _this.closeModal();
        });
    };
    AddOtherAssetsComponent.prototype.closeModal = function () {
        this.componentRef.instance.assignUser.unsubscribe();
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
    };
    AddOtherAssetsComponent.prototype.assignUser = function (user) {
        var _this = this;
        if (!this.asset.id) {
            this.asset.assignees == null ? this.asset.assignees = [] : "";
            this.asset.assignees.push(user);
            return;
        }
        this._apiService.put("/asset-type-other/add-assignee-to-asset-type-other-by-user-id/assetTypeOtherId/" + this.asset.id + "/userId/" + user.id, null).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("Asset successfully assigned to user.");
        }, function (error) {
            _this._alertsService.error(error);
        });
        console.log("assigning user");
    };
    AddOtherAssetsComponent.prototype.deleteAssignee = function (user) {
        var _this = this;
        //building/remove-assignee-from-building-by-user-id/buildingId/116/userId/1
        if (!this.asset.id) {
            this.asset.assignees.forEach(function (element, index) {
                _this.asset.assignees.splice(index, 1);
            });
            return;
        }
        this._apiService.delete("/asset-type-other/remove-assignee-from-asset-type-other-by-user-id/assetTypeOtherId/" + this.asset.id + "/userId/" + user.id).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("Assignee successfully removed from asset.");
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    AddOtherAssetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "app-add-other-assets",
            template: __webpack_require__("./src/app/ams/components/other/add-other-assets/add-other-assets.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/other/add-other-assets/add-other-assets.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["p" /* ComponentFactoryResolver */]])
    ], AddOtherAssetsComponent);
    return AddOtherAssetsComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/other/other-assets-list/other-assets-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h4>\n      <span class=\"fa fa-folder-open\"></span> Other(s) |\n      <button class=\"btn btn-info btn-sm\" [routerLink]=\"'add-other-asset'\">\n        <span class=\"fa fa-plus\"></span> Add</button>\n    </h4>\n  </div>\n  <div class=\"col-md-6\">\n    <button class=\"btn btn-info btn-sm float-right ml-2\" (click)=\"advancedSearch()\">\n      <span class=\"fa fa-search\"></span> Advance Search</button>\n    <div class=\"input-group search float-right\">\n      <input class=\"form-control form-control-sm \" [(ngModel)]=\"searchText\" placeholder=\"Search\" />\n      <span class=\"input-group-addon\">\n        <span class=\"fa fa-search\"></span>\n      </span>\n    </div>\n  </div>\n</div>\n<table class=\"table table-bordered\">\n  <thead>\n    <th>\n      Asset ID\n    </th>\n    <th>\n      Asset Name\n    </th>\n    <th>\n      Organization\n    </th>\n    <th>\n      Department\n    </th>\n\n    <th>\n      Reg. Authority\n    </th>\n    <th></th>\n  </thead>\n  <tbody *ngIf=\"otherAssetList.length\">\n    <tr *ngFor=\"let other of otherAssetList | searchFilter : searchText\">\n      <td>\n        <a [routerLink]=\"['edit-other-asset', other.id]\">{{other.assetTypeOtherId}}</a>\n      </td>\n      <td>\n        {{other.assetTypeOtherName}}\n      </td>\n      <td>\n        {{other.department?.organization?.description}}\n      </td>\n      <td>\n        {{other.department?.description}}\n      </td>\n      <td>\n        {{other.regulatoryAuthorityName}}\n      </td>\n      <td>\n        <span class=\"fa fa-trash btn btn-sm btn-outline-danger\" (click)=\"deleteAsset(other)\"></span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<ng-pagination *ngIf=\"itemsCount\" [position]=\"'left'\" [pageSize]=\"pageSize\" [itemsCount]=\"itemsCount\" (getPageData)=\"getPageData($event)\"></ng-pagination>\n<app-ajax-loader *ngIf=\"!otherAssetList\"></app-ajax-loader>"

/***/ }),

/***/ "./src/app/ams/components/other/other-assets-list/other-assets-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/other/other-assets-list/other-assets-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherAssetsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_component__ = __webpack_require__("./src/app/ams/components/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtherAssetsListComponent = /** @class */ (function () {
    function OtherAssetsListComponent(_apiService, _alertService, viewContainerRef, componentFactoryResolver) {
        this._apiService = _apiService;
        this._alertService = _alertService;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.pageSize = 10;
        this.itemsCount = 0;
        this.otherAssetList = [];
        this.searchParams = {
            paging: { currentPage: 0, pageSize: 10 },
            sorts: [
                {
                    field: "assetTypeOtherName",
                    order: "ASC"
                }
            ],
            filters: []
        };
        this.getOtherAssetList();
    }
    OtherAssetsListComponent.prototype.ngOnInit = function () { };
    OtherAssetsListComponent.prototype.getPageData = function ($event) {
        this.searchParams.paging.currentPage = $event.pageNo - 1;
        this.searchParams.paging.pageSize = $event.pageSize;
        this.getOtherAssetList();
    };
    OtherAssetsListComponent.prototype.getOtherAssetList = function () {
        var _this = this;
        this._apiService
            .get("/asset-type-other/search-asset-type-others", { Search: JSON.stringify(this.searchParams) })
            .subscribe(function (data) {
            _this.itemsCount = data.totalRecords;
            _this.otherAssetList = data.assetTypeOthers;
        });
    };
    OtherAssetsListComponent.prototype.deleteAsset = function (asset) {
        var _this = this;
        this._apiService.delete("/asset-type-other/delete-asset-type-other/assetTypeOtherId/" + asset.id).subscribe(function (data) {
            _this._alertService.success("Asset deleteed successfully.");
            _this.otherAssetList.splice(_this.otherAssetList.indexOf(asset), 1);
        }, function (error) {
            _this._alertService.error(error);
        });
    };
    OtherAssetsListComponent.prototype.advancedSearch = function () {
        var _this = this;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* SearchComponent */]);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'asset-type-other';
        this.componentRef.instance.parentSearchParams = this.searchParams;
        this.componentRef.instance.searchResult.subscribe(function (data) {
            _this.advancedSearchResult(data);
        });
        this.componentRef.instance.closeModal.subscribe(function () {
            _this.closeModal();
        });
    };
    OtherAssetsListComponent.prototype.closeModal = function () {
        this.componentRef.instance.searchResult.unsubscribe();
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
    };
    OtherAssetsListComponent.prototype.advancedSearchResult = function ($event) {
        this.itemsCount = $event.data.totalRecords;
        this.otherAssetList = $event.data.assetTypeOthers;
        this.searchParams = $event.searchParams;
    };
    OtherAssetsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-other-assets-list",
            template: __webpack_require__("./src/app/ams/components/other/other-assets-list/other-assets-list.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/other/other-assets-list/other-assets-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["p" /* ComponentFactoryResolver */]])
    ], OtherAssetsListComponent);
    return OtherAssetsListComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/other/other.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header class=\"d-none d-lg-block\"></app-header>\n<div class=\"row view\">\n  <div class=\"col-lg-2 d-none d-lg-block pl-0 pr-0\">\n    <app-side-nav [thisView]=\"'other'\"></app-side-nav>\n  </div>\n  <div class=\"col-lg-2 pl-0 pr-0 d-lg-none\">\n    <app-sm-menu [thisView]=\"'other'\"></app-sm-menu>\n  </div>\n  <div class=\"col-lg-10 col-sm-12 content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/other/other.component.scss":
/***/ (function(module, exports) {

module.exports = ".zero-margin {\n  margin: 0 !important; }\n\n.zero-padding {\n  padding: 0 !important; }\n\n.center-block {\n  display: block;\n  margin: auto; }\n\n.text-overflow {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.fa-6 {\n  font-size: 10em; }\n\n.content {\n  border-color: #0b4d8a; }\n\nthead {\n  background-color: #0b4d8a;\n  color: white; }\n\n.btn:hover {\n  background-color: #0b4d8a; }\n\n.nav-tabs {\n  border-bottom: 1px solid #0b4d8a; }\n\n.nav-tabs .nav-link {\n    border-color: #0b4d8a;\n    color: #0b4d8a; }\n\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link.active {\n      color: white !important;\n      background-color: #0b4d8a;\n      border-color: #0b4d8a; }\n"

/***/ }),

/***/ "./src/app/ams/components/other/other.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtherComponent = /** @class */ (function () {
    function OtherComponent() {
    }
    OtherComponent.prototype.ngOnInit = function () {
    };
    OtherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-other',
            template: __webpack_require__("./src/app/ams/components/other/other.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/other/other.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherComponent);
    return OtherComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/policy/policy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-content\">\n  <h5>Policy Details</h5>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Policy #</label>\n      <input class=\"form-control\" [(ngModel)]=\"policy.policyNumber\" name=\"policyNumber\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Policy Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"policy.policyName\" name=\"policyName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Policy Cover Amount</label>\n      <input class=\"form-control\" [(ngModel)]=\"policy.policyCoverAmount\" name=\"policyCoverAmount\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Policy Premium Amount</label>\n      <input class=\"form-control\" [(ngModel)]=\"policy.policyPremiumAmount\" name=\"policyPremiumAmount\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Policy Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"policy.policyDescription\" name=\"policyDescription\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Policy Start Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" [(ngModel)]=\"policy.policyStartDateTime\" name=\"policyStartDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt1></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Policy End Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\" [(ngModel)]=\"policy.policyEndDateTime\" name=\"policyEndDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt2></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Grace Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt3\" [owlDateTimeTrigger]=\"dt3\" [(ngModel)]=\"policy.graceDateTime\" name=\"graceDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt3></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Grace Period In Months</label>\n      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"policy.gracePeriodInMonths\" name=\"gracePeriodInMonths\" />\n    </div>\n  </div>\n\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Policy Type</label>\n      <select class=\"form-control\" [(ngModel)]=\"policy.policyType\" name=\"policyType\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let type of dropDownsData.policyTypeList\" [ngValue]=\"type\">{{type.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Policy Type Other</label>\n      <input class=\"form-control\" [disabled]=\"!policy.policyType || policy.policyType.id != 'OTHER'\" [(ngModel)]=\"policy.policyTypeOther\"\n        name=\"policyTypeOther\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Renewal Type</label>\n      <select class=\"form-control\" [(ngModel)]=\"policy.policyRenewalType\" name=\"policyRenewalType\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let renew of dropDownsData.renewalTypeList\" [ngValue]=\"renew\">{{renew.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Policy Renewal Type Other</label>\n      <input class=\"form-control\" [disabled]=\"!policy.policyRenewalType || policy.policyRenewalType.id != 'OTHER'\" [(ngModel)]=\"policy.policyRenewalTypeOther\"\n        name=\"policyRenewalTypeOther\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Provider Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"policy.providerName\" name=\"providerName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Provider Phone</label>\n      <input class=\"form-control\" [(ngModel)]=\"policy.providerPhone\" name=\"providerPhone\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Provider Email</label>\n      <input class=\"form-control\" [(ngModel)]=\"policy.providerEmail\" name=\"providerEmail\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Provider Contact Person</label>\n      <input class=\"form-control\" [(ngModel)]=\"policy.providerContactPerson\" name=\"providerContactPerson\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Provider Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"policy.providerDescription\" name=\"providerDescription\"></textarea>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Comments</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"policy.comments\" name=\"comments\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <button class=\"btn btn-primary\" (click)=\"save()\">{{editMode?'Update':'Save'}}</button>\n    </div>\n    <div class=\"col-6\">\n      <button class=\"btn btn-success float-right\" data-toggle=\"modal\" data-target=\"#lookUp\">Lookup</button>\n    </div>\n  </div>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Policy #</th>\n        <th>Name</th>\n        <th>Start Date</th>\n        <th>End Date</th>\n        <th>Cover Amount</th>\n        <th>Policy Type</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let policy of asset.insurancePolicies\">\n        <td>\n          {{policy.policyNumber}}\n        </td>\n        <td>\n          {{policy.policyName}}\n        </td>\n        <td>\n          {{policy.policyStartDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{policy.policyEndDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{policy.policyCoverAmount}}\n        </td>\n        <td>\n          {{policy.policyType?.id}}\n        </td>\n        <td>\n          <span class=\"fa fa-pencil btn btn-sm btn-outline-primary\" (click)=\"editPolicy(policy)\"></span>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-danger\" (click)=\"removePolicyFromAsset(policy)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <app-supporting-documents [docsObject]=\"policy\" [addTo]=\"'policy'\"></app-supporting-documents>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"lookUp\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\">Inspection Lookup</h6>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Policy #</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.policyNumber.value\" (change)=\"lookupFieldChange(lookupOptions.policyNumber)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.policyNumber)\" [(ngModel)]=\"lookupOptions.policyNumber.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.policyNumber.sort\" (change)=\"lookupSortChange(lookupOptions.policyNumber)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.policyNumber)\" [(ngModel)]=\"lookupOptions.policyNumber.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Policy Name</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.policyName.value\" (change)=\"lookupFieldChange(lookupOptions.policyName)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.policyName)\" [(ngModel)]=\"lookupOptions.policyName.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.policyName.sort\" (change)=\"lookupSortChange(lookupOptions.policyName)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.policyName)\" [(ngModel)]=\"lookupOptions.policyName.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Policy Description</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.policyDescription.value\" (change)=\"lookupFieldChange(lookupOptions.policyDescription)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.policyDescription)\" [(ngModel)]=\"lookupOptions.policyDescription.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.policyDescription.sort\" (change)=\"lookupSortChange(lookupOptions.policyDescription)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.policyDescription)\" [(ngModel)]=\"lookupOptions.policyDescription.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Provider Name</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.providerName.value\" (change)=\"lookupFieldChange(lookupOptions.providerName)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.providerName)\" [(ngModel)]=\"lookupOptions.providerName.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.providerName.sort\" (change)=\"lookupSortChange(lookupOptions.providerName)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.providerName)\" [(ngModel)]=\"lookupOptions.providerName.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Provider Description</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.providerDescription.value\" (change)=\"lookupFieldChange(lookupOptions.providerDescription)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.providerDescription)\" [(ngModel)]=\"lookupOptions.providerDescription.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.providerDescription.sort\" (change)=\"lookupSortChange(lookupOptions.providerDescription)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.providerDescription)\" [(ngModel)]=\"lookupOptions.providerDescription.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Start Date Time</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtdt\" [owlDateTimeTrigger]=\"dtdt\" [(ngModel)]=\"lookupOptions.policyStartDateTime.value\"\n                (dateTimeChange)=\"lookupFieldChange(lookupOptions.policyStartDateTime)\" />\n              <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dtdt></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.policyStartDateTime)\" [(ngModel)]=\"lookupOptions.policyStartDateTime.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.policyStartDateTime.sort\" (change)=\"lookupSortChange(lookupOptions.policyStartDateTime)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.policyStartDateTime)\" [(ngModel)]=\"lookupOptions.policyStartDateTime.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>End Date Time</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtd\" [owlDateTimeTrigger]=\"dtd\" [(ngModel)]=\"lookupOptions.policyEndDateTime.value\"\n                (dateTimeChange)=\"lookupFieldChange(lookupOptions.policyEndDateTime)\" />\n              <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dtd></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.policyEndDateTime)\" [(ngModel)]=\"lookupOptions.policyEndDateTime.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.policyEndDateTime.sort\" (change)=\"lookupSortChange(lookupOptions.policyEndDateTime)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.policyEndDateTime)\" [(ngModel)]=\"lookupOptions.policyEndDateTime.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n         \n          <table class=\"table table-bordered table-hover\">\n            <thead>\n              <tr>\n                <th>Policy #</th>\n                <th>Name</th>\n                <th>Start Date</th>\n                <th>End Date</th>\n                <th>Cover Amount</th>\n                <th>Policy Type</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"lookupItems\">\n              <tr *ngFor=\"let pol of lookupItems.policies\">\n                <td>\n                  {{pol.policyNumber}}\n                </td>\n                <td>\n                  {{pol.policyName}}\n                </td>\n                <td>\n                  {{pol.policyStartDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n                </td>\n                <td>\n                  {{pol.policyEndDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n                </td>\n                <td>\n                  {{pol.policyCoverAmount}}\n                </td>\n                <td>\n                  {{pol.policyType?.id}}\n                </td>\n                <td><span class=\"fa fa-plus btn btn-sm btn-outline-danger\" (click)=\"addExistingPolicyToAsset(pol)\"></span></td>\n              </tr>\n            </tbody>\n          </table>\n          <ng-pagination *ngIf=\"lookupItems\" [itemsCount]=\"lookupItems.totalRecords\" [pageSize]=\"10\" (getPageData)=\"lookupPolicy($event)\"></ng-pagination>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary float-right\" (click)=\"lookupPolicy()\">Search</button>\n          <button type=\"button\" (click)=\"initLookupParams()\" class=\"btn btn-primary\">Clear</button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/policy/policy.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/policy/policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PolicyComponent = /** @class */ (function () {
    function PolicyComponent(_apiService, _alertsService, _sharedService) {
        var _this = this;
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this._sharedService = _sharedService;
        this.addedToAsset = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */]();
        this.editMode = false;
        this.dropDownsData = this._sharedService.dropDownsData;
        this._sharedService.dropDownsService.subscribe(function (data) {
            _this.dropDownsData = data;
        });
        this.initPolicy();
    }
    PolicyComponent.prototype.ngOnInit = function () {
        this.initLookupParams();
    };
    PolicyComponent.prototype.initLookupParams = function () {
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
        };
    };
    PolicyComponent.prototype.initPolicy = function () {
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
    };
    PolicyComponent.prototype.save = function () {
        var _this = this;
        if (this.editMode) {
            this.updatePolicy();
            return;
        }
        var url = "/building/add-policy-to-building/buildingId/";
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
        this._apiService.put(url, this.policy).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("Policy successfully added to" + _this.asset.assetCategory.description);
            _this.initPolicy();
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    PolicyComponent.prototype.editPolicy = function (policy) {
        this.policy = JSON.parse(JSON.stringify(policy));
        this.editing = policy;
        this.editMode = true;
    };
    PolicyComponent.prototype.updatePolicy = function () {
        var _this = this;
        this._apiService.put("/policy/update-policy", this.policy).subscribe(function (data) {
            _this.policy = data;
            _this.editing = Object.assign(_this.editing, data);
            _this._alertsService.success("Policy successfully updated.");
            _this.initPolicy();
            _this.editMode = false;
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    PolicyComponent.prototype.removePolicyFromAsset = function (policy) {
        var _this = this;
        var url = "/building/remove-policy-from-building/buildingId/" + this.asset.id + "/policyId/" + policy.id;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/remove-policy-from-vehicle/vehicleId/" + this.asset.id + "/policyId/" + policy.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/remove-policy-from-equipment/equipmentId/" + this.asset.id + "/policyId/" + policy.id;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/remove-policy-from-asset-type-other/assetTypeOtherId/" + this.asset.id + "/policyId/" + policy.id;
            ;
        }
        this._apiService.delete(url).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("Policy successfully removed from " + _this.asset.assetCategory.description);
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    PolicyComponent.prototype.lookupFieldChange = function (_a) {
        var field = _a.field, operator = _a.operator, value = _a.value;
        var fil = {
            field: field,
            operator: operator,
            value: value
        };
        var exists = this.lookupParams.filters.filter(function (filt) { return filt.field === field; });
        var obj = {};
        obj[field] = value;
        fil.value = this._apiService.parseDateToApiFormat(obj)[field];
        if (!exists.length) {
            this.lookupParams.filters.push(fil);
        }
        else {
            exists[0].value = value;
            exists[0].operator = operator;
        }
    };
    PolicyComponent.prototype.lookupSortChange = function (_a) {
        var field = _a.field, sort = _a.sort, order = _a.order;
        var sor = {
            field: field,
            order: order
        };
        var exists = this.lookupParams.sorts.filter(function (s) { return s.field === field; });
        if (!exists.length && sort) {
            this.lookupParams.sorts.push(sor);
        }
        else if (exists.length && sort) {
            exists[0].order = order;
        }
        else {
            var ind = this.lookupParams.sorts.indexOf(exists[0]);
            this.lookupParams.sorts.splice(ind, 1);
        }
    };
    PolicyComponent.prototype.lookupPolicy = function ($event) {
        var _this = this;
        if ($event) {
            this.lookupParams.paging.currentPage = $event.pageNo - 1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/policy/search-policies', { "Search": JSON.stringify(this.lookupParams) }).subscribe(function (data) {
            _this.lookupItems = data;
        }, function (error) {
        });
    };
    PolicyComponent.prototype.addExistingPolicyToAsset = function (policy) {
        var _this = this;
        var url = "/building/add-existing-policy-to-building/buildingId/" + this.asset.id + "/policyId/" + policy.id;
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/add-existing-policy-to-asset-type-other/assetTypeOtherId/" + this.asset.id + "/policyId/" + policy.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-existing-policy-to-equipment/equipmentId/" + this.asset.id + "/policyId/" + policy.id;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = "/vehicle/add-existing-policy-to-vehicle/vehicleId/" + this.asset.id + "/policyId/" + policy.id;
        }
        this._apiService.put(url, null).subscribe(function (data) {
            _this.addedToAsset.emit(data);
            _this._alertsService.success("Policy successfully added to " + _this.asset.assetCategory.description);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PolicyComponent.prototype, "asset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */])
    ], PolicyComponent.prototype, "addedToAsset", void 0);
    PolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "app-policy",
            template: __webpack_require__("./src/app/ams/components/policy/policy.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/policy/policy.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]])
    ], PolicyComponent);
    return PolicyComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/rent-or-lease/rent-or-lease.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-content\">\n  <h5>Rent/Lease Details</h5>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Agreement ID</label>\n      <input class=\"form-control\" [(ngModel)]=\"rent.agreementId\" name=\"agreementId\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Agreement Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"rent.agreementName\" name=\"agreementName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"rent.companyName\" name=\"companyName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Phone</label>\n      <input class=\"form-control\" [(ngModel)]=\"rent.companyPhone\" name=\"companyPhone\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Rental or Lease Type</label>\n      <select class=\"form-control\" [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"rent.rentalOrLeaseType\" name=\"rentalOrLeaseType\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let type of dropDownsData.rentOrLeaseTypeList\" [ngValue]=\"type\">{{type.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If Others, Specify</label>\n      <input disabled class=\"form-control\" [disabled]=\"!rent.rentalOrLeaseType || rent.rentalOrLeaseType.id != 'OTHER'\" [(ngModel)]=\"rent.rentalOrLeaseTypeOther\"\n        name=\"rentalOrLeaseTypeOther\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Agreement Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"rent.agreementDescription\" name=\"agreementDescription\"></textarea>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Company Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"rent.companyDescription\" name=\"companyDescription\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Email</label>\n      <input class=\"form-control\" [(ngModel)]=\"rent.companyEmail\" name=\"companyEmail\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Contact Person Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"rent.companyContactPerson\" name=\"companyContactPerson\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Start Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt3\" [owlDateTimeTrigger]=\"dt3\" [(ngModel)]=\"rent.startDateTime\" name=\"startDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt3></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>End Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\" [(ngModel)]=\"rent.endDateTime\" name=\"endDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt2></owl-date-time>\n    </div>\n  </div>\n\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Amount</label>\n      <input class=\"form-control\" [(ngModel)]=\"rent.agreementAmount\" name=\"agreementAmount\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Renewal Amount</label>\n      <input class=\"form-control\" [(ngModel)]=\"rent.renewalAmount\" name=\"renewalAmount\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Grace Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" [(ngModel)]=\"rent.graceDateTime\" name=\"graceDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt1></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Grace Period In Months</label>\n      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"rent.gracePeriodInMonths\" name=\"gracePeriodInMonths\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Comments</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"rent.comments\" name=\"comments\"></textarea>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <button class=\"btn btn-primary\" (click)=\"save()\">{{editMode?'Update':'Save'}}</button>\n    </div>\n    <div class=\"col-6\">\n      <button class=\"btn btn-success float-right\" data-toggle=\"modal\" data-target=\"#lookUp\">Lookup</button>\n    </div>\n  </div>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Agreement ID</th>\n        <th>Name</th>\n        <th>Start Date</th>\n        <th>End Date</th>\n        <th>Amount</th>\n        <th>Rental/Lease Type</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let rol of asset.rentalOrLeaseAgreements\">\n        <td>\n          {{rol.agreementId}}\n        </td>\n        <td>\n          {{rol.agreementName}}\n        </td>\n        <td>\n          {{rol.startDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{rol.endDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{rol.agreementAmount}}\n        </td>\n        <td>\n          {{rol.rentalOrLeaseType?.description}}\n        </td>\n        <td>\n          <!-- <span class=\"fa fa-pencil btn btn-sm btn-outline-primary\" (click)=\"editRentOrLease(rol)\"></span>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-dangerr\" (click)=\"removeRentOrLeaseFromAsset(rol)\"></span> -->\n\n          <span class=\"fa fa-pencil btn btn-sm btn-outline-primary\" (click)=\"editRentOrLease(rol)\"></span>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-danger\" (click)=\"removeRentOrLeaseFromAsset(rol)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <app-supporting-documents [docsObject]=\"rent\" [addTo]=\"'rental-or-lease'\"></app-supporting-documents>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"lookUp\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\">Inspection Lookup</h6>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Agreement ID</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.agreementId.value\" (change)=\"lookupFieldChange(lookupOptions.agreementId)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.agreementId)\" [(ngModel)]=\"lookupOptions.agreementId.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.agreementId.sort\" (change)=\"lookupSortChange(lookupOptions.agreementId)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.agreementId)\" [(ngModel)]=\"lookupOptions.agreementId.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Agreement Name</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.agreementName.value\" (change)=\"lookupFieldChange(lookupOptions.agreementName)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.agreementName)\" [(ngModel)]=\"lookupOptions.agreementName.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.agreementName.sort\" (change)=\"lookupSortChange(lookupOptions.agreementName)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.agreementName)\" [(ngModel)]=\"lookupOptions.agreementName.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Agreement Description</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.agreementDescription.value\" (change)=\"lookupFieldChange(lookupOptions.agreementDescription)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.agreementDescription)\" [(ngModel)]=\"lookupOptions.agreementDescription.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.agreementDescription.sort\" (change)=\"lookupSortChange(lookupOptions.agreementDescription)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.agreementDescription)\" [(ngModel)]=\"lookupOptions.agreementDescription.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Company Name</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.companyName.value\" (change)=\"lookupFieldChange(lookupOptions.companyName)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.companyName)\" [(ngModel)]=\"lookupOptions.companyName.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.companyName.sort\" (change)=\"lookupSortChange(lookupOptions.companyName)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.companyName)\" [(ngModel)]=\"lookupOptions.companyName.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Contact Person</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.companyContactPerson.value\" (change)=\"lookupFieldChange(lookupOptions.companyContactPerson)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.companyContactPerson)\" [(ngModel)]=\"lookupOptions.companyContactPerson.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.companyContactPerson.sort\" (change)=\"lookupSortChange(lookupOptions.companyContactPerson)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.companyContactPerson)\" [(ngModel)]=\"lookupOptions.companyContactPerson.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Start Date Time</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtdt\" [owlDateTimeTrigger]=\"dtdt\" [(ngModel)]=\"lookupOptions.startDateTime.value\"\n                (dateTimeChange)=\"lookupFieldChange(lookupOptions.startDateTime)\" />\n              <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dtdt></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.startDateTime)\" [(ngModel)]=\"lookupOptions.startDateTime.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.startDateTime.sort\" (change)=\"lookupSortChange(lookupOptions.startDateTime)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.startDateTime)\" [(ngModel)]=\"lookupOptions.startDateTime.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>End Date Time</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtd\" [owlDateTimeTrigger]=\"dtd\" [(ngModel)]=\"lookupOptions.endDateTime.value\"\n                (dateTimeChange)=\"lookupFieldChange(lookupOptions.endDateTime)\" />\n              <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dtd></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.endDateTime)\" [(ngModel)]=\"lookupOptions.endDateTime.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.endDateTime.sort\" (change)=\"lookupSortChange(lookupOptions.endDateTime)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.endDateTime)\" [(ngModel)]=\"lookupOptions.endDateTime.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <table class=\"table table-bordered table-hover\">\n            <thead>\n              <tr>\n                <th>Agreement ID</th>\n                <th>Name</th>\n                <th>Start Date</th>\n                <th>End Date</th>\n                <th>Amount</th>\n                <th>Rental/Lease Type</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"lookupItems\">\n              <tr *ngFor=\"let rol of lookupItems.rentalOrLeaseAgreements\">\n                <td>\n                  {{rol.agreementId}}\n                </td>\n                <td>\n                  {{rol.agreementName}}\n                </td>\n                <td>\n                  {{rol.startDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n                </td>\n                <td>\n                  {{rol.endDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n                </td>\n                <td>\n                  {{rol.agreementAmount}}\n                </td>\n                <td>\n                  {{rol.rentalOrLeaseType?.description}}\n                </td>\n                <td>\n                  <span class=\"fa fa-plus btn btn-sm btn-outline-danger\" (click)=\"addExistingRentalOrLeaseToAsset(rol)\"></span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <ng-pagination *ngIf=\"lookupItems\" [itemsCount]=\"lookupItems.totalRecords\" [pageSize]=\"10\" (getPageData)=\"lookupRentOrLease($event)\"></ng-pagination>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-primary float-right\" (click)=\"lookupRentOrLease()\">Search</button>\n          <button type=\"button\" (click)=\"initLookupParams()\" class=\"btn btn-primary\">Clear</button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/rent-or-lease/rent-or-lease.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/rent-or-lease/rent-or-lease.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentOrLeaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RentOrLeaseComponent = /** @class */ (function () {
    function RentOrLeaseComponent(_apiService, _alertsService, _sharedService) {
        var _this = this;
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this._sharedService = _sharedService;
        this.addedToAsset = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */]();
        this.editMode = false;
        this.dropDownsData = this._sharedService.dropDownsData;
        this._sharedService.dropDownsService.subscribe(function (data) {
            _this.dropDownsData = data; //rentOrLeaseTypeList
        });
        this.initRentOrLease();
    }
    RentOrLeaseComponent.prototype.ngOnInit = function () {
        this.initLookupParams();
    };
    RentOrLeaseComponent.prototype.initLookupParams = function () {
        this.lookupParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
        this.lookupOptions = {
            agreementId: {
                field: 'agreementId',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            agreementName: {
                field: 'agreementName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            agreementDescription: {
                field: 'agreementDescription',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            companyName: {
                field: 'companyName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            companyContactPerson: {
                field: 'companyContactPerson',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            startDateTime: {
                field: 'startDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            endDateTime: {
                field: 'endDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            rentalOrLeaseType: {
                field: 'rentalOrLeaseType',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            }
        };
    };
    RentOrLeaseComponent.prototype.initRentOrLease = function () {
        this.rent = {
            id: null,
            statusFlag: null,
            agreementId: null,
            agreementName: null,
            agreementDescription: null,
            companyName: null,
            companyDescription: null,
            companyPhone: null,
            companyEmail: null,
            companyContactPerson: null,
            startDateTime: null,
            endDateTime: null,
            graceDateTime: null,
            gracePeriodInMonths: null,
            agreementAmount: null,
            renewalAmount: null,
            rentalOrLeaseType: {
                id: null
            },
            rentalOrLeaseTypeOther: null,
            comments: null,
            buildings: null,
            equipments: null,
            vehicles: null,
            assetTypeOthers: null,
            existingBuildings: null,
            existingEquipments: null,
            existingVehicles: null,
            existingAssetTypeOthers: null
        };
    };
    RentOrLeaseComponent.prototype.save = function () {
        var _this = this;
        if (this.editMode) {
            this.updateRentOrLease();
            return;
        }
        var url = "/building/add-rental-or-lease-agreement-to-building/buildingId/";
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/add-rental-or-lease-agreement-to-vehicle/vehicleId/";
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-rental-or-lease-agreement-to-equipment/equipmentId/";
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url =
                "/asset-type-other/add-rental-or-lease-agreement-to-asset-type-other/assetTypeOtherId/";
        }
        url = url + this.asset.id;
        this._apiService.put(url, this.rent).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("rental or lease agreement successfully added to " +
                _this.asset.assetCategory.description);
            _this.initRentOrLease();
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    RentOrLeaseComponent.prototype.editRentOrLease = function (rol) {
        this.rent = JSON.parse(JSON.stringify(rol));
        this.editing = rol;
        this.editMode = true;
    };
    RentOrLeaseComponent.prototype.updateRentOrLease = function () {
        var _this = this;
        this._apiService.put("/rental-or-lease/update-rental-or-lease-agreement", this.rent).subscribe(function (data) {
            _this.rent = data;
            _this.editing = Object.assign(_this.editing, data);
            _this._alertsService.success("Rental or lease agreement successfully updated.");
            _this.initRentOrLease();
            _this.editMode = false;
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    RentOrLeaseComponent.prototype.removeRentOrLeaseFromAsset = function (rol) {
        var _this = this;
        var url = "/building/remove-rental-or-lease-from-building/buildingId/" + this.asset.id + "/rentalOrLeaseId/" + rol.id;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/remove-rental-or-lease-from-vehicle/vehicleId/" + this.asset.id + "/rentalOrLeaseId/" + rol.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/remove-rental-or-lease-from-equipment/equipmentId/" + this.asset.id + "/rentalOrLeaseId/" + rol.id;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/remove-rental-or-lease-from-asset-type-other/assetTypeOtherId/" + this.asset.id + "/rentalOrLeaseId/" + rol.id;
            ;
        }
        this._apiService.delete(url).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("Rental or Lease successfully removed from " + _this.asset.assetCategory.description);
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    RentOrLeaseComponent.prototype.lookupFieldChange = function (_a) {
        var field = _a.field, operator = _a.operator, value = _a.value;
        var fil = {
            field: field,
            operator: operator,
            value: value
        };
        var exists = this.lookupParams.filters.filter(function (filt) { return filt.field === field; });
        var obj = {};
        obj[field] = value;
        fil.value = this._apiService.parseDateToApiFormat(obj)[field];
        if (!exists.length) {
            this.lookupParams.filters.push(fil);
        }
        else {
            exists[0].value = value;
            exists[0].operator = operator;
        }
    };
    RentOrLeaseComponent.prototype.lookupSortChange = function (_a) {
        var field = _a.field, sort = _a.sort, order = _a.order;
        var sor = {
            field: field,
            order: order
        };
        var exists = this.lookupParams.sorts.filter(function (s) { return s.field === field; });
        if (!exists.length && sort) {
            this.lookupParams.sorts.push(sor);
        }
        else if (exists.length && sort) {
            exists[0].order = order;
        }
        else {
            var ind = this.lookupParams.sorts.indexOf(exists[0]);
            this.lookupParams.sorts.splice(ind, 1);
        }
    };
    RentOrLeaseComponent.prototype.lookupRentOrLease = function ($event) {
        var _this = this;
        if ($event) {
            this.lookupParams.paging.currentPage = $event.pageNo - 1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/rental-or-lease/search-rental-or-lease-agreements', { "Search": JSON.stringify(this.lookupParams) }).subscribe(function (data) {
            _this.lookupItems = data;
        }, function (error) {
        });
    };
    RentOrLeaseComponent.prototype.addExistingRentalOrLeaseToAsset = function (rol) {
        var _this = this;
        var url = "/building/add-existing-rental-or-lease-agreement-to-building/buildingId/" + this.asset.id + "/rentalOrLeaseId/" + rol.id;
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/add-existing-rental-or-lease-agreement-to-asset-type-other/assetTypeOtherId/" + this.asset.id + "/rentalOrLeaseId/" + rol.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-existing-rental-or-lease-agreement-to-equipment/equipmentId/" + this.asset.id + "/rentalOrLeaseId/" + rol.id;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = "/vehicle/add-existing-rental-or-lease-agreement-to-vehicle/vehicleId/" + this.asset.id + "/rentalOrLeaseId/" + rol.id;
        }
        this._apiService.put(url, null).subscribe(function (data) {
            _this.addedToAsset.emit(data);
            _this._alertsService.success("Rental or lease agreement successfully added to " + _this.asset.assetCategory.description);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    RentOrLeaseComponent.prototype.selectCompareFunction = function (item1, item2) {
        if (item1 == null || item2 == null) {
            return false;
        }
        return item1.id == item2.id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RentOrLeaseComponent.prototype, "asset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */])
    ], RentOrLeaseComponent.prototype, "addedToAsset", void 0);
    RentOrLeaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "app-rent-or-lease",
            template: __webpack_require__("./src/app/ams/components/rent-or-lease/rent-or-lease.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/rent-or-lease/rent-or-lease.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */]])
    ], RentOrLeaseComponent);
    return RentOrLeaseComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" [ngClass]=\"{'show backdrop d-block':display}\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h3 class=\"modal-title\">Advanced Search</h3>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"close()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n\n                <div *ngIf=\"assetType == 'building'\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Building ID</label>\n                        </div>\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.buildingId)\" [(ngModel)]=\"lookupOptions.buildingId.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"lookupOptions.buildingId.value\" \n                            (change)=\"lookupFieldChange(lookupOptions.buildingId)\" name=\"buildingId\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.buildingId.sort\" (change)=\"lookupSortChange(lookupOptions.buildingId)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.buildingId)\" [(ngModel)]=\"lookupOptions.buildingId.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Building Name</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.buildingName)\" [(ngModel)]=\"lookupOptions.buildingName.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"lookupOptions.buildingName.value\"\n                             (change)=\"lookupFieldChange(lookupOptions.buildingName)\" name=\"buildingName\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.buildingName.sort\" (change)=\"lookupSortChange(lookupOptions.buildingName)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.buildingName)\" [(ngModel)]=\"lookupOptions.buildingName.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Building Description</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.buildingDescription)\" [(ngModel)]=\"lookupOptions.buildingDescription.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"lookupOptions.buildingDescription.value\" \n                            (change)=\"lookupFieldChange(lookupOptions.buildingDescription)\" name=\"buildingDescription\">\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.buildingDescription.sort\" (change)=\"lookupSortChange(lookupOptions.buildingDescription)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.buildingDescription)\" [(ngModel)]=\"lookupOptions.buildingDescription.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"assetType == 'equipment'\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Equipment ID</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.equipmentId)\" [(ngModel)]=\"lookupOptions.equipmentId.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"equipmentId\" \n                            (change)=\"lookupFieldChange(lookupOptions.equipmentId)\" name=\"equipmentid\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.equipmentId.sort\" \n                                (change)=\"lookupSortChange(lookupOptions.equipmentId)\" name=\"equipmentidsort\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.equipmentId)\" [(ngModel)]=\"lookupOptions.equipmentId.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Equipment Name</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.equipmentName)\"\n                             [(ngModel)]=\"lookupOptions.equipmentName.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"lookupOptions.equipmentName.value\" \n                            (change)=\"lookupFieldChange(lookupOptions.equipmentName)\" name=\"equipmentName\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.equipmentName.sort\" \n                                (change)=\"lookupSortChange(lookupOptions.equipmentName)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\"  \n                            (change)=\"lookupSortChange(lookupOptions.equipmentName)\" \n                            [(ngModel)]=\"lookupOptions.equipmentName.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Equipment Tag</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\" >\n                            <select name=\"equipmentTagoperator\" class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.equipmentTag)\" \n                            [(ngModel)]=\"lookupOptions.equipmentTag.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" \n                            [(ngModel)]=\"lookupOptions.equipmentTag.value\" \n                            (change)=\"lookupFieldChange(lookupOptions.equipmentTag)\" name=\"equipmentTag\"/>\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.equipmentTag.sort\" (change)=\"lookupSortChange(lookupOptions.equipmentTag)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.equipmentTag)\" [(ngModel)]=\"lookupOptions.equipmentTag.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Make</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.equipmentMake)\" [(ngModel)]=\"lookupOptions.equipmentMake.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"lookupOptions.equipmentMake.value\" \n                            (change)=\"lookupFieldChange(lookupOptions.equipmentMake)\" name=\"equipmentMake\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.equipmentMake.sort\" (change)=\"lookupSortChange(lookupOptions.equipmentMake)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.equipmentMake)\" [(ngModel)]=\"lookupOptions.equipmentMake.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Model</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.equipmentModel)\" [(ngModel)]=\"lookupOptions.equipmentModel.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"lookupOptions.equipmentModel.value\" \n                            (change)=\"lookupFieldChange(lookupOptions.equipmentModel)\" name=\"equipmentModel\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.equipmentModel.sort\" (change)=\"lookupSortChange(lookupOptions.equipmentModel)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.equipmentModel)\" [(ngModel)]=\"lookupOptions.equipmentModel.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Order No.</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.orderNumber)\" [(ngModel)]=\"lookupOptions.orderNumber.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"lookupOptions.orderNumber.value\"\n                             (change)=\"lookupFieldChange(lookupOptions.orderNumber)\" name=\"orderNumber\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.orderNumber.sort\" (change)=\"lookupSortChange(lookupOptions.orderNumber)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.orderNumber)\" [(ngModel)]=\"lookupOptions.orderNumber.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Invoice No.</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.invoiceNumber)\" [(ngModel)]=\"lookupOptions.invoiceNumber.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"lookupOptions.invoiceNumber.value\" \n                            (change)=\"lookupFieldChange(lookupOptions.invoiceNumber)\"  name=\"invoiceNumber\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.invoiceNumber.sort\" (change)=\"lookupSortChange(lookupOptions.invoiceNumber)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.invoiceNumber)\" [(ngModel)]=\"lookupOptions.invoiceNumber.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Serial No.</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.serialNumber)\" [(ngModel)]=\"lookupOptions.serialNumber.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"lookupOptions.serialNumber.value\"\n                             (change)=\"lookupFieldChange(lookupOptions.serialNumber)\" name=\"serialNumber\" />\n\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.serialNumber.sort\" (change)=\"lookupSortChange(lookupOptions.serialNumber)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.serialNumber)\" [(ngModel)]=\"lookupOptions.serialNumber.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"assetType == 'vehicle'\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Vehicle Reg ID</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" \n                            (change)=\"lookupFieldChange(lookupOptions.vehicleRegistrationId)\" \n                            [(ngModel)]=\"lookupOptions.vehicleRegistrationId.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" \n                            [(ngModel)]=\"lookupOptions.vehicleRegistrationId.value\" \n                            (change)=\"lookupFieldChange(lookupOptions.vehicleRegistrationId)\" name=\"vehicleRegistrationId\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.vehicleRegistrationId.sort\" (change)=\"lookupSortChange(lookupOptions.vehicleRegistrationId)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.vehicleRegistrationId)\" [(ngModel)]=\"lookupOptions.vehicleRegistrationId.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Engine No</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.engineNumber)\" [(ngModel)]=\"lookupOptions.engineNumber.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.engineNumber)\"\n                             [(ngModel)]=\"lookupOptions.engineNumber.value\" name=\"engineNumber\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.engineNumber.sort\" (change)=\"lookupSortChange(lookupOptions.engineNumber)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.engineNumber)\" [(ngModel)]=\"lookupOptions.engineNumber.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Chassis No</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.chassisNumber)\" [(ngModel)]=\"lookupOptions.chassisNumber.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.chassisNumber)\" [(ngModel)]=\"lookupOptions.chassisNumber.value\" name=\"chassisNumber\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.chassisNumber.sort\" (change)=\"lookupSortChange(lookupOptions.chassisNumber)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.chassisNumber)\" [(ngModel)]=\"lookupOptions.chassisNumber.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Make</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.make)\" [(ngModel)]=\"lookupOptions.make.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"make\" (change)=\"lookupFieldChange(lookupOptions.make)\" name=\"make\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.make.sort\" (change)=\"lookupSortChange(lookupOptions.make)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.make)\" [(ngModel)]=\"lookupOptions.make.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\" col-sm-12 col-md-3\">\n                            <label>Model</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.model)\" [(ngModel)]=\"lookupOptions.model.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.model)\" [(ngModel)]=\"lookupOptions.model.value\" name=\"model\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.model.sort\" (change)=\"lookupSortChange(lookupOptions.model)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.model)\" [(ngModel)]=\"lookupOptions.model.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Month of Manufacturing.</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.monthOfManufacturing)\" [(ngModel)]=\"lookupOptions.monthOfManufacturing.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.monthOfManufacturing)\" [(ngModel)]=\"lookupOptions.monthOfManufacturing.value\">\n                                <option [ngValue]=\"null\"></option>\n                                <option *ngFor=\"let month of dropDownsData.monthTypeList\" [ngValue]=\"month.description\">{{month.description}}</option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.monthOfManufacturing.sort\" (change)=\"lookupSortChange(lookupOptions.monthOfManufacturing)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.monthOfManufacturing)\" [(ngModel)]=\"lookupOptions.monthOfManufacturing.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Year of Manufacturing</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.yearOfManufacturing)\" [(ngModel)]=\"lookupOptions.yearOfManufacturing.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.yearOfManufacturing)\" [(ngModel)]=\"lookupOptions.yearOfManufacturing.value\" name=\"yearOfManufacturing\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.yearOfManufacturing.sort\" (change)=\"lookupSortChange(lookupOptions.yearOfManufacturing)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.yearOfManufacturing)\" [(ngModel)]=\"lookupOptions.yearOfManufacturing.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>MOT Obtained Date</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.yearOfManufacturing)\" [(ngModel)]=\"lookupOptions.motObtainedDate.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" (dateTimeChange)=\"lookupFieldChange(lookupOptions.yearOfManufacturing)\" [owlDateTime]=\"dt5\" [owlDateTimeTrigger]=\"dt5\" [(ngModel)]=\"lookupOptions.motObtainedDate.value\"\n                                name=\"motObtainedDate\" />\n                            <owl-date-time [pickerType]=\"'calendar'\" #dt5></owl-date-time>\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.motObtainedDate.sort\" (change)=\"lookupSortChange(lookupOptions.motObtainedDate)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.motObtainedDate)\" [(ngModel)]=\"lookupOptions.motObtainedDate.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"assetType == 'asset-type-other'\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>ID</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetTypeOtherId)\" [(ngModel)]=\"lookupOptions.assetTypeOtherId.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetTypeOtherId)\" [(ngModel)]=\"lookupOptions.assetTypeOtherId.value\" name=\"assetTypeOtherId\" />\n\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.assetTypeOtherId.sort\" (change)=\"lookupSortChange(lookupOptions.assetTypeOtherId)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.assetTypeOtherId)\" [(ngModel)]=\"lookupOptions.assetTypeOtherId.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Name</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetTypeOtherName)\" [(ngModel)]=\"lookupOptions.assetTypeOtherName.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetTypeOtherName)\" [(ngModel)]=\"lookupOptions.assetTypeOtherName.value\" name=\"assetTypeOtherName\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.assetTypeOtherName.sort\" (change)=\"lookupSortChange(lookupOptions.assetTypeOtherName)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.assetTypeOtherName)\" [(ngModel)]=\"lookupOptions.assetTypeOtherName.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Description</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetTypeOtherDescription)\" [(ngModel)]=\"lookupOptions.assetTypeOtherDescription.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetTypeOtherDescription)\" [(ngModel)]=\"lookupOptions.assetTypeOtherDescription.value\" name=\"assetTypeOtherDescription\"\n                            />\n\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.assetTypeOtherDescription.sort\" (change)=\"lookupSortChange(lookupOptions.assetTypeOtherDescription)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.assetTypeOtherDescription)\" [(ngModel)]=\"lookupOptions.assetTypeOtherDescription.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Asset Tag</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetTag)\" [(ngModel)]=\"lookupOptions.assetTag.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetTag)\" [(ngModel)]=\"lookupOptions.assetTag.value\" name=\"assetTag\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.assetTag.sort\" (change)=\"lookupSortChange(lookupOptions.assetTag)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.assetTag)\" [(ngModel)]=\"lookupOptions.assetTag.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Make</label>\n                        </div>\n\n                        <div class=\"ol-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetMake)\" [(ngModel)]=\"lookupOptions.assetMake.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetMake)\" [(ngModel)]=\"lookupOptions.assetMake.value\" name=\"assetMake\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.assetMake.sort\" (change)=\"lookupSortChange(lookupOptions.assetMake)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.assetMake)\" [(ngModel)]=\"lookupOptions.assetMake.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Model</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetModel)\" [(ngModel)]=\"lookupOptions.assetModel.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetModel)\" [(ngModel)]=\"lookupOptions.assetModel.value\" name=\"assetModel\" />\n\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.assetModel.sort\" (change)=\"lookupSortChange(lookupOptions.assetModel)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.assetModel)\" [(ngModel)]=\"lookupOptions.assetModel.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Serial No.</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetSerialNumber)\" [(ngModel)]=\"lookupOptions.assetSerialNumber.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetSerialNumber)\" [(ngModel)]=\"lookupOptions.assetSerialNumber.value\" name=\"assetSerialNumber\" />\n\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.assetSerialNumber.sort\" (change)=\"lookupSortChange(lookupOptions.assetSerialNumber)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.assetSerialNumber)\" [(ngModel)]=\"lookupOptions.assetSerialNumber.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Purchased date</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.purchasedDate)\" [(ngModel)]=\"lookupOptions.purchasedDate.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" (dateTimeChange)=\"lookupFieldChange(lookupOptions.purchasedDate)\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" [(ngModel)]=\"lookupOptions.purchasedDate.value\"\n                                name=\"purchasedDate\" />\n                            <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.purchasedDate.sort\" (change)=\"lookupSortChange(lookupOptions.purchasedDate)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.purchasedDate)\" [(ngModel)]=\"lookupOptions.purchasedDate.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-3\">\n                        <label>Department</label>\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-3\">\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.department)\" \n                        [(ngModel)]=\"lookupOptions.department.operator\">\n                            <option value=\"EQ\" selected>Equals</option>\n                            <option value=\"NEQ\">Not equals</option>\n                            <option value=\"STARTS_WITH\">Starts with</option>\n                            <option value=\"ENDS_WITH\">Ends with</option>\n                            <option value=\"CONTAINS\">Contains</option>\n                            <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.department)\" [compareWith]=\"selectCompareFunction\" \n                        [(ngModel)]=\"lookupOptions.department.value\">\n                            <option [ngValue]=\"null\"></option>\n                            <option *ngFor=\"let department of dropDownsData.departmentList\" [ngValue]=\"department.description\">{{department.description}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                        <span>\n                            <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.department.sort\" (change)=\"lookupSortChange(lookupOptions.department)\"> Sort\n                        </span>\n                        <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.department)\" [(ngModel)]=\"lookupOptions.department.order\">\n                            <option value=\"ASC\">ASC</option>\n                            <option value=\"DESC\">DESC</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <label>Asset Condition</label>\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-3\">\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetCondition)\" [(ngModel)]=\"lookupOptions.assetCondition.operator\">\n                            <option value=\"EQ\" selected>Equals</option>\n                            <option value=\"NEQ\">Not equals</option>\n                            <option value=\"STARTS_WITH\">Starts with</option>\n                            <option value=\"ENDS_WITH\">Ends with</option>\n                            <option value=\"CONTAINS\">Contains</option>\n                            <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <select [compareWith]=\"selectCompareFunction\" (change)=\"lookupFieldChange(lookupOptions.assetCondition)\" class=\"form-control\" [(ngModel)]=\"lookupOptions.assetCondition.value\">\n                            <option [ngValue]=\"null\"></option>\n                            <option *ngFor=\"let condition of dropDownsData.assetConditionList\" [ngValue]=\"condition.description\">{{condition.description}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                        <span>\n                            <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.assetCondition.sort\" (change)=\"lookupSortChange(lookupOptions.assetCondition)\"> Sort\n                        </span>\n                        <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.assetCondition)\" [(ngModel)]=\"lookupOptions.assetCondition.order\">\n                            <option value=\"ASC\">ASC</option>\n                            <option value=\"DESC\">DESC</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-3\">\n                        <label>Asset Status</label>\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-3\">\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetStatus)\" [(ngModel)]=\"lookupOptions.assetStatus.operator\">\n                            <option value=\"EQ\" selected>Equals</option>\n                            <option value=\"NEQ\">Not equals</option>\n                            <option value=\"STARTS_WITH\">Starts with</option>\n                            <option value=\"ENDS_WITH\">Ends with</option>\n                            <option value=\"CONTAINS\">Contains</option>\n                            <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <select [compareWith]=\"selectCompareFunction\" (change)=\"lookupFieldChange(lookupOptions.assetStatus)\"\n                         class=\"form-control\" [(ngModel)]=\"lookupOptions.assetStatus.value\">\n                            <option [ngValue]=\"null\"></option>\n                            <option *ngFor=\"let status of dropDownsData.assetStatusList\" [ngValue]=\"status.description\">{{status.description}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                        <span>\n                            <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.assetStatus.sort\" (change)=\"lookupSortChange(lookupOptions.assetStatus)\"> Sort\n                        </span>\n                        <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.assetStatus)\" [(ngModel)]=\"lookupOptions.assetStatus.order\">\n                            <option value=\"ASC\">ASC</option>\n                            <option value=\"DESC\">DESC</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-3\">\n                        <label>Asset Type</label>\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-3\">\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.assetType)\" [(ngModel)]=\"lookupOptions.assetType.operator\">\n                            <option value=\"EQ\" selected>Equals</option>\n                            <option value=\"NEQ\">Not equals</option>\n                            <option value=\"STARTS_WITH\">Starts with</option>\n                            <option value=\"ENDS_WITH\">Ends with</option>\n                            <option value=\"CONTAINS\">Contains</option>\n                            <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <select [compareWith]=\"selectCompareFunction\" (change)=\"lookupFieldChange(lookupOptions.assetType)\"\n                         class=\"form-control\" [(ngModel)]=\"lookupOptions.assetType.value\">\n                            <option [ngValue]=\"null\"></option>\n                            <option *ngFor=\"let type of dropDownsData.assetTypeList\" [ngValue]=\"type.description\">{{type.description}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                        <span>\n                            <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.assetType.sort\" (change)=\"lookupSortChange(lookupOptions.assetType)\"> Sort\n                        </span>\n                        <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.assetType)\" [(ngModel)]=\"lookupOptions.assetType.order\">\n                            <option value=\"ASC\">ASC</option>\n                            <option value=\"DESC\">DESC</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-4 \">\n                        <label>Regulatory</label>\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.regulatoryCompliance)\"\n                         [(ngModel)]=\"lookupOptions.regulatoryCompliance.value\">\n                            <option [ngValue]=\"null\"></option>\n                            <option value=\"Y\">Yes</option>\n                            <option value=\"N\">No</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4 \">\n                        <label>AMC</label>\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.amcPresent)\"\n                         [(ngModel)]=\"lookupOptions.amcPresent.value\">\n                            <option [ngValue]=\"null\"></option>\n                            <option value=\"Y\">Yes</option>\n                            <option value=\"N\">No</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <label>Insurance</label>\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.insurancePresent)\"\n                        [(ngModel)]=\"lookupOptions.insurancePresent.value\">\n                            <option [ngValue]=\"null\"></option>\n                            <option value=\"Y\">Yes</option>\n                            <option value=\"N\">No</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-4 \">\n                        <label>Loan</label>\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.loanPresent)\"\n                        [(ngModel)]=\"lookupOptions.loanPresent.value\">\n                            <option value=\"Y\">Yes</option>\n                            <option value=\"N\">No</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4 \">\n                        <label>License</label>\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.licensePresent)\"\n                        [(ngModel)]=\"lookupOptions.licensePresent.value\">\n                            <option [ngValue]=\"null\"></option>\n                            <option value=\"Y\">Yes</option>\n                            <option value=\"N\">No</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12  col-md-4 \">\n                        <label>Warranty</label>\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.warrantyPresent)\"\n                        [(ngModel)]=\"lookupOptions.warrantyPresent.value\">\n                            <option [ngValue]=\"null\"></option>\n                            <option value=\"Y\">Yes</option>\n                            <option value=\"N\">No</option>\n                        </select>\n                    </div>\n\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-4\">\n                        <label>Inspection</label>\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.inspectionPresent)\"\n                        [(ngModel)]=\"lookupOptions.inspectionPresent.value\">\n                            <option [ngValue]=\"null\"></option>\n                            <option value=\"Y\">Yes</option>\n                            <option value=\"N\">No</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <label>Service</label>\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.servicePresent)\"\n                        [(ngModel)]=\"lookupOptions.servicePresent.value\">\n                            <option [ngValue]=\"null\"></option>\n                            <option value=\"Y\">Yes</option>\n                            <option value=\"N\">No</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <label>Rental or Lease</label>\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.rentalOrLeasePresent)\"\n                        [(ngModel)]=\"lookupOptions.rentalOrLeasePresent.value\">\n                            <option [ngValue]=\"null\"></option>\n                            <option value=\"Y\">Yes</option>\n                            <option value=\"N\">No</option>\n                        </select>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"searchAsset()\">Submit</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"initSearchParams(true)\">Clear</button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = ".backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh; }\n\n.modal-body {\n  max-height: 375px;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/ams/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(_sharedService, _apiService, _alertsService) {
        var _this = this;
        this._sharedService = _sharedService;
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this.lookupOptions = {};
        this.searchResult = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */]();
        this.closeModal = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */]();
        this.searchParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
        this.dropDownsData = this._sharedService.dropDownsData;
        this._sharedService.dropDownsService.subscribe(function (data) {
            _this.dropDownsData = data;
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.initSearchParams(false);
        this.searchUrl = "/" + this.assetType + "/search-" + this.assetType + "s";
        this.display = true;
        this.searchParams = this.parentSearchParams;
    };
    SearchComponent.prototype.selectCompareFunction = function (item1, item2) {
        if (item1 == null || item2 == null) {
            return false;
        }
        return item1.id == item2.id;
    };
    SearchComponent.prototype.initSearchParams = function (clear) {
        var _this = this;
        this.searchParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
        var buildingProps = ['buildingId', 'buildingName', 'buildingDescription'];
        var equipmentProps = ['equipmentId', 'equipmentName', 'equipmentTag', 'equipmentMake', 'equipmentModel', 'orderNumber', 'invoiceNumber', 'serialNumber'];
        var assetotherProps = ['assetTypeOtherId', 'assetTypeOtherName', 'assetTypeOtherDescription', 'assetTag', 'assetMake',
            'assetModel', 'assetSerialNumber', 'purchasedDate'];
        var vehicletProps = ['vehicleRegistrationId', 'engineNumber', 'chassisNumber', 'make', 'model', 'motObtainedDate', 'yearOfManufacturing',
            'monthOfManufacturing'];
        var propsArray = ['department', 'assetCondition', 'assetStatus', 'assetType', 'regulatoryCompliance', 'amcPresent', 'insurancePresent', 'loanPresent',
            'licensePresent', 'warrantyPresent', 'inspectionPresent', 'servicePresent', 'rentalOrLeasePresent'];
        if (this.assetType == 'equipment') {
            propsArray = propsArray.concat(equipmentProps);
        }
        if (this.assetType == 'building') {
            propsArray = propsArray.concat(buildingProps);
        }
        if (this.assetType == 'asset-type-other') {
            propsArray = propsArray.concat(assetotherProps);
        }
        if (this.assetType == 'vehicle') {
            propsArray = propsArray.concat(vehicletProps);
        }
        propsArray.forEach(function (prop) {
            var parentFilter = {};
            var parentSort = {};
            if (!clear) {
                parentFilter = _this.parentSearchParams.filters.filter(function (item) { return item.field == prop; });
                parentSort = _this.parentSearchParams.sorts.filter(function (item) { return item.field == prop; });
                parentFilter.length != 0 ? parentFilter = parentFilter[0] : parentFilter = {};
                parentSort.length != 0 ? parentSort = parentSort[0] : parentSort = {};
            }
            _this.lookupOptions[prop] = {
                field: prop,
                operator: parentFilter.operator || "EQ",
                value: parentFilter.value || null,
                order: parentSort.order || "ASC",
                sort: typeof parentSort.order === 'undefined' ? false : true
            };
        });
        this.parentSearchParams.filters.forEach(function (element) {
        });
    };
    SearchComponent.prototype.lookupFieldChange = function (_a) {
        var field = _a.field, operator = _a.operator, value = _a.value;
        var fil = {
            field: field,
            operator: operator,
            value: value
        };
        var exists = this.searchParams.filters.filter(function (filt) { return filt.field === field; });
        var obj = {};
        obj[field] = value;
        fil.value = this._apiService.parseDateToApiFormat(obj)[field];
        if (!exists.length) {
            this.searchParams.filters.push(fil);
        }
        else {
            exists[0].value = value;
            exists[0].operator = operator;
        }
    };
    SearchComponent.prototype.lookupSortChange = function (_a) {
        var field = _a.field, sort = _a.sort, order = _a.order;
        var sor = {
            field: field,
            order: order
        };
        var exists = this.searchParams.sorts.filter(function (s) { return s.field === field; });
        if (!exists.length && sort) {
            this.searchParams.sorts.push(sor);
        }
        else if (exists.length && sort) {
            exists[0].order = order;
        }
        else {
            var ind = this.searchParams.sorts.indexOf(exists[0]);
            this.searchParams.sorts.splice(ind, 1);
        }
    };
    SearchComponent.prototype.searchAsset = function () {
        var _this = this;
        this._apiService
            .get(this.searchUrl, { Search: JSON.stringify(this.searchParams) })
            .subscribe(function (data) {
            _this.searchResult.emit({ data: data, searchParams: _this.searchParams });
            _this.close();
        }, function (error) {
            _this._alertsService.error("Error getting search Data");
        });
    };
    SearchComponent.prototype.close = function () {
        this.display = false;
        this.closeModal.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SearchComponent.prototype, "assetType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */])
    ], SearchComponent.prototype, "searchResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */])
    ], SearchComponent.prototype, "closeModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "parentSearchParams", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/ams/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alerts_loader_service__["a" /* AlertsLoaderService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/service/service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-content\">\n  <h5>Service Details</h5>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Service #</label>\n      <input class=\"form-control\" [(ngModel)]=\"service.serviceNumber\" name=\"serviceNumber\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"service.serviceCompanyName\" name=\"serviceCompanyName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Phone</label>\n      <input class=\"form-control\" [(ngModel)]=\"service.serviceCompanyPhone\" name=\"serviceCompanyPhone\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Email</label>\n      <input class=\"form-control\" [(ngModel)]=\"service.serviceCompanyEmail\" name=\"serviceCompanyEmail\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Company Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"service.serviceCompanyDescription\" name=\"serviceCompanyDescription\"></textarea>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Company Contact Person</label>\n      <input class=\"form-control\" [(ngModel)]=\"service.serviceCompanyContactPerson\" name=\"serviceCompanyContactPerson\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Service Due Date</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\"\n      [(ngModel)]=\"service.serviceDueDate\" name=\"serviceDueDate\" />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>   \n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Service Done By</label>\n      <input class=\"form-control\" [(ngModel)]=\"service.serviceDoneBy\" name=\"serviceDoneBy\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Service Done Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\"\n      [(ngModel)]=\"service.serviceDoneDateTime\" name=\"serviceDoneDateTime\" />\n      <owl-date-time [pickerType]=\"'calendar'\" [showSecondsTimer]=\"true\" #dt2></owl-date-time>   \n    </div>\n  </div>\n\n\n\n\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Service Amount</label>\n      <input class=\"form-control\" [(ngModel)]=\"service.serviceAmount\" name=\"serviceAmount\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Service Duration in hrs</label>\n      <input class=\"form-control\" [(ngModel)]=\"service.serviceDurationInHours\" name=\"serviceDurationInHours\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Next Service Date</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt3\" [owlDateTimeTrigger]=\"dt3\"\n      [(ngModel)]=\"service.nextServiceDueDate\" name=\"nextServiceDueDate\" />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt3></owl-date-time>   \n    </div>\n  </div>\n\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Comments</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"service.comments\" name=\"comments\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <button class=\"btn btn-primary\" (click)=\"save()\">{{editMode?'Update':'Save'}}</button>\n    </div>\n    <div class=\"col-6\">\n      <button class=\"btn btn-success float-right\" data-toggle=\"modal\" data-target=\"#lookUp\">Lookup</button>\n    </div>\n  </div>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Service #</th>\n        <th>Due Date</th>\n        <th>Done By</th>\n        <th>Done Date</th>\n        <th>Duration in hrs</th>\n        <th>Amount</th>\n        <th>Next Service Date</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let service of asset.services\">\n        <td>\n          {{service.serviceNumber}}\n        </td>\n        <td>\n          {{service.serviceDueDate | date:'dd/MM/yyyy'}}\n        </td>\n        <td>\n          {{service.serviceDoneBy}}\n        </td>\n        <td>\n          {{service.serviceDoneDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{service.serviceDurationInHours}}\n        </td>\n        <td>\n          {{service.serviceAmount}}\n        </td>\n        <td>\n          {{service.nextServiceDueDate | date:'dd/MM/yyyy'}}\n        </td>\n        <td>\n          <span class=\"fa fa-pencil btn btn-sm btn-outline-primary\" (click)=\"editService(service)\"></span>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-danger\" (click)=\"removeServiceFromAsset(service)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <app-supporting-documents [docsObject]=\"service\" [addTo]=\"'service'\"></app-supporting-documents>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"lookUp\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\">Inspection Lookup</h6>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Service #</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.serviceNumber.value\" (change)=\"lookupFieldChange(lookupOptions.serviceNumber)\"/>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\"(change)=\"lookupFieldChange(lookupOptions.serviceNumber)\" [(ngModel)]=\"lookupOptions.serviceNumber.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.serviceNumber.sort\" (change)=\"lookupSortChange(lookupOptions.serviceNumber)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.serviceNumber)\" [(ngModel)]=\"lookupOptions.serviceNumber.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Service Company</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.serviceCompanyName.value\" (change)=\"lookupFieldChange(lookupOptions.serviceCompanyName)\"/>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\"(change)=\"lookupFieldChange(lookupOptions.serviceCompanyName)\" [(ngModel)]=\"lookupOptions.serviceCompanyName.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.serviceCompanyName.sort\" (change)=\"lookupSortChange(lookupOptions.serviceCompanyName)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.serviceCompanyName)\" [(ngModel)]=\"lookupOptions.serviceCompanyName.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Company Description</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.serviceCompanyDescription.value\" (change)=\"lookupFieldChange(lookupOptions.serviceCompanyDescription)\"/>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\"(change)=\"lookupFieldChange(lookupOptions.serviceCompanyDescription)\" [(ngModel)]=\"lookupOptions.serviceCompanyDescription.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.serviceCompanyDescription.sort\" (change)=\"lookupSortChange(lookupOptions.serviceCompanyDescription)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\"(change)=\"lookupSortChange(lookupOptions.serviceCompanyDescription)\" [(ngModel)]=\"lookupOptions.serviceCompanyDescription.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Company Contact Person</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.serviceCompanyContactPerson.value\" (change)=\"lookupFieldChange(lookupOptions.serviceCompanyContactPerson)\"/>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\"(change)=\"lookupFieldChange(lookupOptions.serviceCompanyContactPerson)\" [(ngModel)]=\"lookupOptions.serviceCompanyContactPerson.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.serviceCompanyContactPerson.sort\" (change)=\"lookupSortChange(lookupOptions.serviceCompanyContactPerson)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.serviceCompanyContactPerson)\" [(ngModel)]=\"lookupOptions.serviceCompanyContactPerson.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Service Done By</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.serviceDoneBy.value\" (change)=\"lookupFieldChange(lookupOptions.serviceDoneBy)\"/>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\"(change)=\"lookupFieldChange(lookupOptions.serviceDoneBy)\" [(ngModel)]=\"lookupOptions.serviceDoneBy.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.serviceDoneBy.sort\" (change)=\"lookupSortChange(lookupOptions.serviceDoneBy)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.serviceDoneBy)\" [(ngModel)]=\"lookupOptions.serviceDoneBy.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Done Date Time</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\"[owlDateTime]=\"dtn\" [owlDateTimeTrigger]=\"dtn\" [(ngModel)]=\"lookupOptions.serviceDoneDateTime.value\" (dateTimeChange)=\"lookupFieldChange(lookupOptions.serviceDoneDateTime)\"/>\n              <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dtn></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.serviceDoneDateTime)\" [(ngModel)]=\"lookupOptions.serviceDoneDateTime.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.serviceDoneDateTime.sort\" (change)=\"lookupSortChange(lookupOptions.serviceDoneDateTime)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\"(change)=\"lookupSortChange(lookupOptions.serviceDoneDateTime)\" [(ngModel)]=\"lookupOptions.serviceDoneDateTime.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Next Due Date</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtdt\" [owlDateTimeTrigger]=\"dtdt\" [(ngModel)]=\"lookupOptions.nextServiceDueDate.value\" (dateTimeChange)=\"lookupFieldChange(lookupOptions.nextServiceDueDate)\"/>\n              <owl-date-time [pickerType]=\"'calendar'\" #dtdt></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.nextServiceDueDate)\" [(ngModel)]=\"lookupOptions.nextServiceDueDate.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.nextServiceDueDate.sort\" (change)=\"lookupSortChange(lookupOptions.nextServiceDueDate)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\"(change)=\"lookupSortChange(lookupOptions.nextServiceDueDate)\" [(ngModel)]=\"lookupOptions.nextServiceDueDate.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Due Date</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtd\" [owlDateTimeTrigger]=\"dtd\" [(ngModel)]=\"lookupOptions.serviceDueDate.value\" (dateTimeChange)=\"lookupFieldChange(lookupOptions.serviceDueDate)\"/>\n              <owl-date-time [pickerType]=\"'calendar'\"  #dtd></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.serviceDueDate)\" [(ngModel)]=\"lookupOptions.serviceDueDate.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\"[(ngModel)]=\"lookupOptions.serviceDueDate.sort\" (change)=\"lookupSortChange(lookupOptions.serviceDueDate)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\"(change)=\"lookupSortChange(lookupOptions.serviceDueDate)\" [(ngModel)]=\"lookupOptions.serviceDueDate.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          \n         \n          <table class=\"table table-bordered table-hover\">\n            <thead>\n              <tr>\n                <th>Service #</th>\n                <th>Due Date</th>\n                <th>Done By</th>\n                <th>Done Date</th>\n                <th>Duration in hrs</th>\n                <th>Amount</th>\n                <th>Next Service Date</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"lookupItems\">\n              <tr *ngFor=\"let service of lookupItems.services\">\n                <td>\n                  {{service.serviceNumber}}\n                </td>\n                <td>\n                  {{service.serviceDueDate | date:'dd/MM/yyyy'}}\n                </td>\n                <td>\n                  {{service.serviceDoneBy}}\n                </td>\n                <td>\n                  {{service.serviceDoneDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n                </td>\n                <td>\n                  {{service.serviceDurationInHours}}\n                </td>\n                <td>\n                  {{service.serviceAmount}}\n                </td>\n                <td>\n                  {{service.nextServiceDueDate | date:'dd/MM/yyyy'}}\n                </td>\n                <td><span class=\"fa fa-plus btn btn-sm btn-outline-success\" (click)=\"addExistingServiceToAsset(service)\"></span></td>\n              </tr>\n            </tbody>\n          </table>\n          <ng-pagination *ngIf=\"lookupItems\" [itemsCount]=\"lookupItems.totalRecords\" [pageSize]=\"10\" (getPageData)=\"lookupService($event)\"></ng-pagination>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary float-right\" (click)=\"lookupService()\">Search</button>\n          <button type=\"button\" (click)=\"initLookupParams()\" class=\"btn btn-primary\">Clear</button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/service/service.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/service/service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceComponent = /** @class */ (function () {
    function ServiceComponent(_alertsService, _apiService) {
        this._alertsService = _alertsService;
        this._apiService = _apiService;
        this.editMode = false;
        this.addedToAsset = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        this.initService();
    }
    ServiceComponent.prototype.ngOnInit = function () {
        this.initLookupParams();
    };
    ServiceComponent.prototype.initLookupParams = function () {
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
        };
    };
    ServiceComponent.prototype.initService = function () {
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
    };
    ServiceComponent.prototype.save = function () {
        var _this = this;
        if (this.editMode) {
            this.updateService();
            return;
        }
        var url = "/building/add-service-to-building/buildingId/";
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
        this._apiService.put(url, this.service).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("Service successfully added to " +
                _this.asset.assetCategory.description);
            _this.initService();
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    ServiceComponent.prototype.editService = function (service) {
        this.service = JSON.parse(JSON.stringify(service));
        this.editing = service;
        this.editMode = true;
    };
    ServiceComponent.prototype.updateService = function () {
        var _this = this;
        this._apiService.put("/service/create-or-update-service", this.service).subscribe(function (data) {
            _this.service = data;
            _this.editing = Object.assign(_this.editing, data);
            _this._alertsService.success("Service successfully updated.");
            _this.initService();
            _this.editMode = false;
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    ServiceComponent.prototype.removeServiceFromAsset = function (service) {
        var _this = this;
        var url = "/building/remove-service-from-building/buildingId/" + this.asset.id + "/serviceId/" + service.id;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/remove-service-from-vehicle/vehicleId/" + this.asset.id + "/serviceId/" + service.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/remove-service-from-equipment/equipmentId/" + this.asset.id + "/serviceId/" + service.id;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/remove-service-from-asset-type-other/assetTypeOtherId/" + this.asset.id + "/serviceId/" + service.id;
            ;
        }
        this._apiService.delete(url).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("Service successfully removed from " + _this.asset.assetCategory.description);
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    ServiceComponent.prototype.lookupFieldChange = function (_a) {
        var field = _a.field, operator = _a.operator, value = _a.value;
        var fil = {
            field: field,
            operator: operator,
            value: value
        };
        var exists = this.lookupParams.filters.filter(function (filt) { return filt.field === field; });
        var obj = {};
        obj[field] = value;
        fil.value = this._apiService.parseDateToApiFormat(obj)[field];
        if (!exists.length) {
            this.lookupParams.filters.push(fil);
        }
        else {
            exists[0].value = value;
            exists[0].operator = operator;
        }
    };
    ServiceComponent.prototype.lookupSortChange = function (_a) {
        var field = _a.field, sort = _a.sort, order = _a.order;
        var sor = {
            field: field,
            order: order
        };
        var exists = this.lookupParams.sorts.filter(function (s) { return s.field === field; });
        if (!exists.length && sort) {
            this.lookupParams.sorts.push(sor);
        }
        else if (exists.length && sort) {
            exists[0].order = order;
        }
        else {
            var ind = this.lookupParams.sorts.indexOf(exists[0]);
            this.lookupParams.sorts.splice(ind, 1);
        }
    };
    ServiceComponent.prototype.lookupService = function ($event) {
        var _this = this;
        if ($event) {
            this.lookupParams.paging.currentPage = $event.pageNo - 1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/service/search-services', { "Search": JSON.stringify(this.lookupParams) }).subscribe(function (data) {
            _this.lookupItems = data;
        }, function (error) {
        });
    };
    ServiceComponent.prototype.addExistingServiceToAsset = function (service) {
        var _this = this;
        var url = "/building/add-existing-service-to-building/buildingId/" + this.asset.id + "/serviceId/" + service.id;
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/add-existing-service-to-asset-type-other/assetTypeOtherId/" + this.asset.id + "/serviceId/" + service.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-existing-service-to-equipment/equipmentId/" + this.asset.id + "/serviceId/" + service.id;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = "/vehicle/add-existing-service-to-vehicle/vehicleId/" + this.asset.id + "/serviceId/" + service.id;
        }
        this._apiService.put(url, null).subscribe(function (data) {
            _this.addedToAsset.emit(data);
            _this._alertsService.success("Service successfully added to " + _this.asset.assetCategory.description);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ServiceComponent.prototype, "asset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */])
    ], ServiceComponent.prototype, "addedToAsset", void 0);
    ServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-service",
            template: __webpack_require__("./src/app/ams/components/service/service.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/service/service.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_0__services_api_service__["a" /* ApiService */]])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/side-nav/side-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pr-1 pb-3 pt-3 zero-margin\">\n    <div class=\"col-3\" style=\"vertical-align:middle\">\n        <img src=\"./assets/images/logo@1x.png\" alt=\"gotorisk.co.uk\" class=\"user-image\"/>\n    </div>\n    <div class=\"col-6\" style=\"vertical-align:middle;\">\n        <span>{{userDetails.roles[0].roleName}}</span><br>\n        <span class=\"fa fa-circle text-success\" > Online</span>\n    </div>\n    <div class=\"col-3\">\n        <button class=\"btn float-right btn-info btn-sm\" style=\"vertical-align:middle\" (click)=\"logOut()\">\n            <span class=\"fa fa-power-off \"></span>\n        </button>\n        \n    </div>\n</div>\n<div class=\"navbar\">\n    <ul>\n        <li [ngClass]=\"{active:thisView=='dashboard'}\">\n            <a [routerLink]=\"['/ams/dashboard']\" title=\"\">\n                <i class=\"fa fa-tasks\"></i> Dashboard\n            </a>\n        </li>\n        <li [ngClass]=\"{active:thisView=='building'}\">\n            <a [routerLink]=\"['/ams/buildings']\" title=\"\">\n                <i class=\"fa fa-building\"></i> Building\n            </a>\n        </li>\n        <li [ngClass]=\"{active:thisView=='equipment'}\">\n            <a [routerLink]=\"['/ams/equipments']\" title=\"\">\n                <i class=\"fa fa-print\"></i> Equipment\n            </a>\n        </li>\n        <li [ngClass]=\"{active:thisView=='vehicle'}\">\n            <a [routerLink]=\"['/ams/vehicles']\" title=\"\">\n                <i class=\"fa fa-bus\"></i> Vehicle\n            </a>\n        </li>\n        <li [ngClass]=\"{active:thisView=='other'}\">\n            <a [routerLink]=\"['/ams/others']\" title=\"\">\n                <i class=\"fa fa-folder-open\"></i> Other\n            </a>\n        </li>\n    </ul>\n\n</div>"

/***/ }),

/***/ "./src/app/ams/components/side-nav/side-nav.component.scss":
/***/ (function(module, exports) {

module.exports = ".zero-margin, .navbar ul {\n  margin: 0 !important; }\n\n.zero-padding, .navbar {\n  padding: 0 !important; }\n\n.center-block {\n  display: block;\n  margin: auto; }\n\n.text-overflow, .user-role {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.fa-6 {\n  font-size: 10em; }\n\n.navbar {\n  height: 100%;\n  position: relative;\n  -webkit-box-align: initial;\n      -ms-flex-align: initial;\n          align-items: initial; }\n\n.navbar ul {\n    list-style: none;\n    padding-left: 5px;\n    padding-right: 5px;\n    width: 100%; }\n\n.navbar ul li {\n      cursor: pointer;\n      background-color: #2e2e2e;\n      border-bottom: 2px solid white;\n      font-size: 13px; }\n\n.navbar ul li.active a {\n        background-color: #0b4d8a;\n        color: #fff; }\n\n.navbar ul li:hover a {\n        background-color: #0b4d8a;\n        color: #fff; }\n\n.navbar ul li a {\n        display: block;\n        padding: 10px;\n        font-size: 1.1em;\n        color: #d2d2d2; }\n\n.user-image {\n  width: 50px; }\n\n.user-role {\n  min-width: 100px; }\n"

/***/ }),

/***/ "./src/app/ams/components/side-nav/side-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(userService, _sharedService) {
        this.userService = userService;
        this._sharedService = _sharedService;
        this.userDetails = this.userService.userDetails;
    }
    SideNavComponent.prototype.ngOnInit = function () {
        //this.thisView = this._sharedService.activeView;
    };
    SideNavComponent.prototype.logOut = function () {
        this.userService.logOut();
        localStorage.removeItem('rmsAuthToken');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SideNavComponent.prototype, "thisView", void 0);
    SideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-side-nav',
            template: __webpack_require__("./src/app/ams/components/side-nav/side-nav.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/side-nav/side-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/sm-menu/sm-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light d-lg-none\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"/assets/images/logo@0,5x.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> GoToRisk\n    </a>\n    <span class=\"fa fa-2x fa-bars\" (click)=\"toggleSideNav()\"></span>\n</nav>\n<div class=\"side-nav\" [ngClass]=\"{'menu-open':menuOpen}\">\n    <span class=\"fa fa-close close-btn float-right\" (click)=\"closeMenu()\">Close</span>\n    <ul class=\"menu\">\n\n        <li>\n            <div class=\"row pr-1 pb-3 pt-3 zero-margin\">\n                <div class=\"col-3\" style=\"vertical-align:middle\">\n                    <img src=\"./assets/images/logo@0_5x.png\" alt=\"gotorisk.co.uk\" class=\"user-image\" />\n                </div>\n                <div class=\"col-6\" style=\"vertical-align:middle;\">\n                    <span>{{userDetails.roles[0].roleName}}</span>\n                    <br>\n                    <span class=\"fa fa-circle text-success\"> Online</span>\n                </div>\n                <div class=\"col-3\">\n                    <button class=\"btn float-right btn-info btn-sm\" style=\"vertical-align:middle\" (click)=\"logOut()\">\n                        <span class=\"fa fa-power-off \"></span>\n                    </button>\n\n                </div>\n            </div>\n        </li>\n        <li [ngClass]=\"{active:thisView=='dashboard'}\">\n            <a title=\"\" [routerLink]=\"['/ams/dashboard']\">\n                <i class=\"fa fa-tasks\"></i> Dashboard\n            </a>\n        </li>\n        <li [ngClass]=\"{active:thisView=='building'}\">\n            <a title=\"\" [routerLink]=\"['/ams/buildings']\">\n                <i class=\"fa fa-building\"></i> Building\n            </a>\n        </li>\n        <li [ngClass]=\"{active:thisView=='equipment'}\">\n            <a title=\"\" [routerLink]=\"['/ams/equipments']\">\n                <i class=\"fa fa-print\"></i> Equipment\n            </a>\n        </li>\n        <li [ngClass]=\"{active:thisView=='vehicle'}\">\n            <a title=\"\" [routerLink]=\"['/ams/vehicles']\">\n                <i class=\"fa fa-bus\"></i> Vehicle\n            </a>\n        </li>\n        <li [ngClass]=\"{active:thisView=='other'}\">\n            <a title=\"\" [routerLink]=\"['/ams/others']\">\n                <i class=\"fa fa-folder-open\"></i> Other\n            </a>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/sm-menu/sm-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ".zero-margin {\n  margin: 0 !important; }\n\n.zero-padding {\n  padding: 0 !important; }\n\n.center-block {\n  display: block;\n  margin: auto; }\n\n.text-overflow, .side-nav .user-role {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.fa-6 {\n  font-size: 10em; }\n\n.side-nav {\n  height: 100%;\n  overflow: hidden;\n  position: fixed;\n  width: 0;\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  overflow-x: hidden;\n  -webkit-transition: width 0.5s;\n  transition: width 0.5s;\n  padding-top: 25px; }\n\n.side-nav.menu-open {\n    width: 250px;\n    padding: 5px; }\n\n.side-nav ul {\n    padding: 5px;\n    padding-top: 25px;\n    background-color: #fff;\n    height: 100%; }\n\n.side-nav ul li:first-child {\n      background-color: transparent;\n      color: black; }\n\n.side-nav ul li {\n      cursor: pointer;\n      background-color: #2e2e2e;\n      border-bottom: 2px solid white;\n      font-size: 13px; }\n\n.side-nav ul li {\n      text-decoration: none;\n      color: #fff;\n      display: block; }\n\n.side-nav ul li.active a {\n        background-color: #9e1d90;\n        color: #fff; }\n\n.side-nav ul li:hover a {\n        background-color: #9e1d90;\n        color: #fff; }\n\n.side-nav ul li a {\n        display: block;\n        padding: 10px;\n        font-size: 1.1em;\n        color: #d2d2d2; }\n\n.side-nav .close-btn {\n    color: #2e2e2e;\n    padding: 2px; }\n\n.side-nav .user-image {\n    width: 50px; }\n\n.side-nav .user-role {\n    min-width: 100px; }\n"

/***/ }),

/***/ "./src/app/ams/components/sm-menu/sm-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmMenuComponent = /** @class */ (function () {
    function SmMenuComponent(userService) {
        this.userService = userService;
        this.menuOpen = false;
        this.userDetails = this.userService.userDetails;
    }
    SmMenuComponent.prototype.ngOnInit = function () {
        //this.thisView = this._sharedService.activeView;
    };
    SmMenuComponent.prototype.logOut = function () {
        this.userService.logOut();
    };
    SmMenuComponent.prototype.toggleSideNav = function () {
        this.menuOpen = !this.menuOpen;
    };
    SmMenuComponent.prototype.closeMenu = function () {
        this.menuOpen = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SmMenuComponent.prototype, "thisView", void 0);
    SmMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-sm-menu',
            template: __webpack_require__("./src/app/ams/components/sm-menu/sm-menu.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/sm-menu/sm-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]])
    ], SmMenuComponent);
    return SmMenuComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/summary/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-content\">\n  <h5>Summary</h5>\n\n  <div class=\"tab-content\" *ngIf=\"asset.assetCategory.id == 'BUILDING'\">\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Building ID</label>: {{asset.buildingId}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Building Name</label>: {{asset.buildingName}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>No. Of Floors</label>: {{asset.numberOfFloors}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Building Size</label>: {{asset.buildingSize}}\n      </div>\n    </div>\n\n\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Asset Category</label>: {{asset.assetCategory?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Organization</label>: {{asset.department?.organization?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Department</label>: {{asset.department?.description}}\n      </div>\n    </div>\n\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12\">\n        <label>Building Description</label>: {{asset.buildingDescription}}\n      </div>\n    </div>\n\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Regulatory Compliance</label>: {{asset.regulatoryCompliance}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Regulatory Authority</label>: {{asset.regulatoryAuthorityName}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Compliance Obtained Date</label>: {{asset.regCompObtainedDate | date:'dd/MM/yyyy'}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Exits</label>: {{asset.fireExits}}\n      </div>\n    </div>\n\n\n\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Exit Location</label>: {{asset.fireExitsLoc}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Exitinguishers Present</label>: {{asset.fireExtinguishers}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Extinguisher</label>: {{getFireExtinguishersDisplay(asset.fireExtinguisherTypes)}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Extinguisher Location</label>: {{asset.fireExtinguisherLoc}}\n      </div>\n    </div>\n\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Annual Maintenance Contract</label>: {{asset.amcPresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Inspection</label>: {{asset.inspectionPresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>License</label>: {{asset.licensePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Loan</label>: {{asset.loanPresent}}\n      </div>\n    </div>\n\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Policy</label>: {{asset.insurancePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Rental/Lease</label>:{{asset.rentalOrLeasePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Service</label>: {{asset.servicePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Warranty</label>: {{asset.warrantyPresent}}\n      </div>\n    </div>\n\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Condition</label>: {{asset.assetCondition?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Condition Other</label>: {{asset.assetConditionOther}}\n      </div>\n    </div>\n\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Status</label>: {{asset.assetStatus?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Status Other</label>{{asset.assetStatusOther}}\n      </div>\n    </div>\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Type</label>: {{asset.assetType?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Type Other</label>: {{asset.assetTypeOther}}\n      </div>\n    </div>\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12\">\n        <label>Notes</label>: {{asset.notes}}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"tab-content\" *ngIf=\"asset.assetCategory.id == 'EQUIPMENT'\">\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Equipment ID</label>: {{asset.equipmentId}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Equipment Name</label>: {{asset.equipmentName}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Equipment Details</label>: {{asset.equipmentDetails}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Equipment Tag</label>: {{asset.equipmentTag}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Asset Category</label>: {{asset.assetCategory?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Organization</label>: {{asset.department?.organization?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Department</label>: {{asset.department?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Equipment Cost</label>: {{asset.equipmentCost}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Length</label>: {{asset.equipmentLength}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Width</label>: {{asset.equipmentWidth}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Height</label>: {{asset.equipmentHeight}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Weight</label>: {{asset.equipmentWeight}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Quantity</label>: {{asset.equipmentQuantity}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Serial #</label>: {{asset.serialNumber}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Make</label>: {{asset.equipmentMake}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Model</label>: {{asset.equipmentModel}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Purchased Date</label>: {{asset.equipmentPurchasedDate | date:'dd/MM/yyyy'}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Purchased From</label>: {{asset.equipmentPurchasedFrom}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Company Phone</label>: {{asset.equipmentCompanyPhone}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Company Email</label>: {{asset.equipmentCompanyEmail}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Contact Person</label>: {{asset.equipmentCompanyContactPerson}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Order #</label>: {{asset.orderNumber}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Invoice #</label>: {{asset.invoiceNumber}}\n      </div>\n    </div>\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12\">\n        <label>Purchase Comments</label>: {{asset.equipmentCompanyComments}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Equipment Returned</label>: {{asset.equipmentReturned}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Return Date</label>: {{asset.equipmentReturnedDate | date:'dd/MM/yyyy'}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Refund Amount</label>: {{asset.refundAmount}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12\">\n        <label>Return Reason</label>: {{asset.equipmentReturnedReason}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Regulatory Compliance</label>: {{asset.regulatoryCompliance}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Regulatory Authority</label>: {{asset.regulatoryAuthorityName}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Compliance Obtained Date</label>: {{asset.regCompObtainedDate | date:'dd/MM/yyyy'}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Exits</label>: {{asset.fireExits}}\n      </div>\n    </div>\n  \n  \n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Exit Location</label>: {{asset.fireExitsLoc}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Exitinguishers Present</label>: {{asset.fireExtinguishers}}\n      </div>\n  \n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Extinguisher</label>: {{getFireExtinguishersDisplay(asset.fireExtinguisherTypes)}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Extinguisher Location</label>: {{asset.fireExtinguisherLoc}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Annual Maintenance Contract</label>: {{asset.amcPresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Inspection</label>: {{asset.inspectionPresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>License</label>: {{asset.licensePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Loan</label>: {{asset.loanPresent}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Policy</label>: {{asset.insurancePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Rental/Lease</label>: {{asset.rentalOrLeasePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Service</label>: {{asset.servicePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Warranty</label>: {{asset.warrantyPresent}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Condition</label>: {{asset.assetCondition?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Condition Other</label>: {{asset.assetConditionOther}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Status</label>: {{asset.assetStatus?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Status Other</label>: {{asset.assetStatusOther}}\n      </div>\n    </div>\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Type</label>: {{asset.assetType?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Type Other</label>: {{asset.assetTypeOther}}\n      </div>\n    </div>  \n    \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12\">\n        <label>Damage Description</label>: {{asset.equipmentDamageDesc}}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"tab-content\" *ngIf=\"asset.assetCategory.id == 'OTHER'\">\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Asset ID</label>: {{asset.assetTypeOtherId}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Asset Name</label>: {{asset.assetTypeOtherName}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Asset Description</label>: {{asset.assetTypeOtherDescription}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Asset Tag</label>: {{asset.assetTag}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Asset Category</label>: {{asset.assetCategory?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Organization</label>: {{asset.department?.organization?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Department</label>: {{asset.department?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Asset Cost</label>: {{asset.assetCost}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Length</label>: {{asset.assetLength}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Height</label>: {{asset.assetHeight}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Width</label>: {{asset.assetWidth}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Weight</label>: {{asset.assetWeight}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Quantity</label>: {{asset.assetQuantity}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Serial #</label>: {{asset.assetSerialNumber}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Make</label>: {{asset.assetMake}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Model</label>: {{asset.assetModel}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Purchase Date</label>: {{asset.purchasedDate | date:'dd/MM/yyyy'}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Company Name</label>: {{asset.purchasedFrom}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Company Phone</label>: {{asset.purchaseCompanyPhone}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Company Email</label>: {{asset.purchaseCompanyEmail}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Company Contact Person</label>: {{asset.purchaseCompanyContactPerson}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Order #</label>: {{asset.orderNumber}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Invoice #</label>: {{asset.invoiceNumber}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12\">\n        <label>Purchase Comments</label>: {{asset.purchaseComments}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Asset Returned</label>: {{asset.assetReturned}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Return Date</label> : {{asset.assetReturnedDate|date:'dd/MM/yyyy'}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Refund Amount</label>: {{asset.refundAmount}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Return Reason</label>: {{asset.assetReturnReason}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Damage Description</label>: {{asset.assetDamageDescription}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-\">\n        <label>Regulatory Compliance</label>: {{asset.regulatoryCompliance}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Regulatory Authority</label>: {{asset.regulatoryAuthorityName}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Compliance Obtained Date</label>: {{asset.regCompObtainedDate|date:'dd/MM/yyyy'}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Exits</label>: {{asset.fireExits}}\n      </div>\n    </div>\n  \n  \n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Exit Location</label>: {{asset.fireExitsLoc}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Exitinguishers Present</label>: {{asset.fireExtinguishers}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Extinguisher</label>: {{getFireExtinguishersDisplay(asset.fireExtinguisherTypes)}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Extinguisher Location</label>: {{asset.fireExtinguisherLoc}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Annual Maintenance Contract</label>: {{asset.amcPresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Inspection</label>: {{asset.inspectionPresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>License</label>: {{asset.licensePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Loan</label>: {{asset.loanPresent}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Policy</label>: {{asset.insurancePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Rental/Lease</label>: {{asset.rentalOrLeasePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Service</label>: {{asset.servicePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Warranty</label>: {{asset.warrantyPresent}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Condition</label>: {{asset.assetCondition?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Condition Other</label>: {{asset.assetConditionOther}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Status</label>: {{asset.assetStatus?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Status Other</label>: {{asset.assetStatusOther}}\n      </div>\n    </div>\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Type</label>: {{asset.assetType?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Type Other</label>: {{asset.assetTypeOther}}\n      </div>\n    </div>\n\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12\">\n        <label>Notes</label>: {{asset.notes}}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"tab-content\" *ngIf=\"asset.assetCategory.id == 'VEHICLE'\">\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Vehicle Reg. No.</label>: {{asset.vehicleRegistrationId}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Engine #</label>: {{asset.engineNumber}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Chasis #</label>: {{asset.chassisNumber}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Asset Category</label>: {{asset.assetCategory?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Organization</label>: {{asset.department?.organization?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>Department</label>: {{asset.department?.description}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Make</label>: {{asset.make}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Model</label>: {{asset.model}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Year Of Manufacturing</label>: {{asset.yearOfManufacturing}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Month Of Manufacturing</label>: {{asset.monthOfManufacturing?.description}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Vehicle Type</label>: {{asset.vehicleType?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Type Other</label>: {{asset.vehicleTypeOther}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Tax</label>: {{asset.taxApplicable}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Tax Amount</label>: {{asset.taxAmount}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Tax Start Date Time</label>: {{asset.taxStartDateTime| date:'dd/MM/yyyy HH:mm:ss'}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Tax End Date Time</label>: {{asset.taxEndDateTime| date:'dd/MM/yyyy HH:mm:ss'}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-4\">\n        <label>MOT</label>: {{asset.motApplicable}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>MOT Authority Name</label>: {{asset.motAuthorityName}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>MOT Place</label>: {{asset.motPlace}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-4\">\n        <label>MOT Start Date Time</label>: {{asset.motStartDateTime | date:'dd/MM/yyyy'}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>MOT End Date Time</label>: {{asset.motEndDateTime | date:'dd/MM/yyyy'}}\n      </div>\n      <div class=\"col-sm-12 col-md-4\">\n        <label>MOT Obtained Date</label>: {{asset.motObtainedDate | date: 'dd/MM/yyyy'}}\n      </div>\n    </div>\n  \n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Vehicle Damage Type</label>: {{getFireExtinguishersDisplay(asset.vehicleDamageTypes)}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Vehicle Damage Type Other</label> : {{asset.vehicleDamageTypeOther}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Regulatory Compliance</label>: {{asset.regulatoryCompliance}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Regulatory Authority</label>: {{asset.regulatoryAuthorityName}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Compliance Obtained Date</label>: {{asset.regCompObtainedDate| date:'dd/MM/yyyy'}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Exits</label>: {{asset.fireExits}}\n      </div>\n    </div>\n  \n  \n  \n    <div class=\"row pb-2\">\n  \n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Exit Location</label>: {{asset.fireExitsLoc}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Exitinguishers Present</label>: {{asset.fireExtinguishers}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Extinguisher</label>:{{getFireExtinguishersDisplay(asset.fireExtinguisherTypes)}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Fire Extinguisher Location</label>:{{asset.fireExtinguisherLoc}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Annual Maintenance Contract</label>: {{asset.amcPresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Inspection</label>: {{asset.inspectionPresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>License</label>: {{asset.licensePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Loan</label>: {{asset.loanPresent}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Policy</label>: {{asset.insurancePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Rental/Lease</label>: {{asset.rentalOrLeasePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Service</label>: {{asset.servicePresent}}\n      </div>\n      <div class=\"col-sm-12 col-md-3\">\n        <label>Warranty</label>: {{asset.warrantyPresent}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Condition</label>: {{asset.assetCondition?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Condition Other</label>: {{asset.assetConditionOther}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Status</label>: {{asset.assetStatus?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Status Other</label>: {{asset.assetStatusOther}}\n      </div>\n    </div>\n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Type</label>: {{asset.assetType?.description}}\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <label>Asset Type Other</label>: {{asset.assetTypeOther}}\n      </div>\n    </div>\n  \n    <div class=\"row pb-2\">\n      <div class=\"col-sm-12\">\n        <label>Comment/Description</label>: {{asset.commentDescription}}\n      </div>\n    </div>\n  </div>\n\n  <label>Assignees</label>\n  <table class=\"table table-bordered\">\n    <thead>\n      <th>\n        Login Id\n      </th>\n      <th>\n        First Name\n      </th>\n      <th>\n        Last Name\n      </th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let assignee of asset.assignees\">\n\n        <td>{{assignee.loginId || assignee.userLoginId}}\n        </td>\n        <td>{{assignee.firstName}}</td>\n        <td>{{assignee.lastName}}</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <label>Inspections</label>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Inspection #</th>\n        <th>Due Date</th>\n        <th>Done By</th>\n        <th>Done Date</th>\n        <th>Duration in hrs</th>\n        <th>Amount</th>\n        <th>Next Insp. Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let inspection of asset.inspections\">\n        <td>{{inspection.inspectionNumber}}</td>\n        <td>{{inspection.inspectionDueDate | date:'dd/MM/yyyy'}}</td>\n        <td>{{inspection.inspectionDoneBy}}</td>\n        <td>{{inspection.inspectionDoneDateTime | date:'dd/MM/yyyy HH:mm:ss'}}</td>\n        <td>{{inspection.inspectionDurationInHours}}</td>\n        <td>{{inspection.inspectionAmount}}</td>\n        <td>{{inspection.nextInspectionDueDate | date:'dd/MM/yyyy'}}</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <label>Licenses</label>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>License #</th>\n        <th>Start Date</th>\n        <th>End Date</th>\n        <th>Renewal Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let license of asset.licenses\">\n        <td>{{license.licenseNumber}}</td>\n        <td>{{license.startDateTime | date:'dd/MM/yyyy HH:mm:ss'}}</td>\n        <td>{{license.endDateTime | date:'dd/MM/yyyy HH:mm:ss'}}</td>\n        <td>{{license.renewalDate | date:'dd/MM/yyyy'}}</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <label>Loans</label>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th>Start Date</th>\n        <th>End Date</th>\n        <th>Amount</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let loan of asset.loanAgreements\">\n        <td>\n          {{loan.agreementId}}\n        </td>\n        <td>\n          {{loan.agreementName}}\n        </td>\n        <td>\n          {{loan.startDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{loan.endDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{loan.loanAmount}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <label>AMC Contracts</label>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th>Start Date</th>\n        <th>End Date</th>\n        <th>Amount</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let amc of asset.annualMaintenanceContracts\">\n        <td>\n          {{amc.agreementId}}\n        </td>\n        <td>\n          {{amc.agreementName}}\n        </td>\n        <td>\n          {{amc.startDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{amc.endDateTime| date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{amc.amcAmount}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <label>Policies</label>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Policy #</th>\n        <th>Name</th>\n        <th>Start Date</th>\n        <th>End Date</th>\n        <th>Cover Amount</th>\n        <th>Policy Type</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let policy of asset.insurancePolicies\">\n        <td>\n          {{policy.policyNumber}}\n        </td>\n        <td>\n          {{policy.policyName}}\n        </td>\n        <td>\n          {{policy.policyStartDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{policy.policyEndDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{policy.policyCoverAmount}}\n        </td>\n        <td>\n          {{policy.policyType?.id}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <label>Rent or Lease Agreements</label>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Agreement ID</th>\n        <th>Name</th>\n        <th>Start Date</th>\n        <th>End Date</th>\n        <th>Amount</th>\n        <th>Rental/Lease Type</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let rol of asset.rentalOrLeaseAgreements\">\n        <td>\n          {{rol.agreementId}}\n        </td>\n        <td>\n          {{rol.agreementName}}\n        </td>\n        <td>\n          {{rol.startDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{rol.endDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{rol.agreementAmount}}\n        </td>\n        <td>\n          {{rol.rentalOrLeaseType?.description}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <label>Services</label>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Service #</th>\n        <th>Due Date</th>\n        <th>Done By</th>\n        <th>Done Date</th>\n        <th>Duration in hrs</th>\n        <th>Amount</th>\n        <th>Next Service Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let service of asset.services\">\n        <td>\n          {{service.serviceNumber}}\n        </td>\n        <td>\n          {{service.serviceDueDate | date:'dd/MM/yyyy'}}\n        </td>\n        <td>\n          {{service.serviceDoneBy}}\n        </td>\n        <td>\n          {{service.serviceDoneDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{service.serviceDurationInHours}}\n        </td>\n        <td>\n          {{service.serviceAmount}}\n        </td>\n        <td>\n          {{service.nextServiceDueDate | date:'dd/MM/yyyy'}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <label>Warranties</label>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Warranty #</th>\n        <th>Provided By</th>\n        <th>Start Date</th>\n        <th>End Date</th>\n        <th>Amount</th>\n        <th>Renewal Date</th>\n        <th>Renewal Amount</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let warranty of asset.warrantyAgreements\">\n        <td>\n          {{warranty.warrantyNumber}}\n        </td>\n        <td>\n          {{warranty.warrantyName}}\n        </td>\n        <td>\n          {{warranty.warrantyStartDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{warranty.warrantyEndDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{warranty.warrantyAmount}}\n        </td>\n        <td>\n          {{warranty.warrantyRenewalDate | date:'dd/MM/yyyy'}}\n        </td>\n        <td>\n          {{warranty.warrantyRenewalAmount}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n  <label>Supporting Documnets</label>\n  <table class=\"table table-bordered\" *ngIf=\"asset.id\">\n    <thead>\n      <tr>\n        <th>File Name</th>\n        <th>File Description</th>\n        <th>File Content Type</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let doc of asset.documents; let i = index;\">\n        <td>\n          {{doc.fileName || \"\"}}\n        </td>\n        <td>\n          {{doc.fileDescription || \"\"}}\n        </td>\n        <td>\n          {{doc.fileContentType || \"\"}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/summary/summary.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/summary/summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryComponent = /** @class */ (function () {
    function SummaryComponent() {
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent.prototype.getFireExtinguishersDisplay = function (fireExtinguisherTypes) {
        if (fireExtinguisherTypes.length > 1) {
            return fireExtinguisherTypes[0].description + " +" + (fireExtinguisherTypes.length - 1) + "more";
        }
        if (fireExtinguisherTypes.length === 1) {
            return fireExtinguisherTypes[0].description;
        }
        return "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SummaryComponent.prototype, "asset", void 0);
    SummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'asset-summary',
            template: __webpack_require__("./src/app/ams/components/summary/summary.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/summary/summary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/supporting-documents/supporting-documents.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 *ngIf=\"docsObject.id\">Supporting Documents</h5>\n<div class=\"row pb-4\" *ngIf=\"docsObject.id\">\n  <div class=\"col-sm-12 col-md-3\">\n    <label>File Name</label>\n    <input class=\"form-control\" [(ngModel)]=\"fileName\" name=\"fileName\" />\n  </div>\n  <div class=\"col-sm-12 col-md-3\">\n    <label>File Description</label>\n    <input class=\"form-control\" [(ngModel)]=\"fileDescription\" name=\"fileDescription\" />\n  </div>\n  <div class=\"col-sm-12 col-md-3\">\n    <label>File</label>\n    <input class=\"form-control\" [disabled]=\"!fileName || !fileDescription\" (change)=\"documentSelected($event)\" style=\"padding-top:5px;padding-bottom:5px;\"\n      type=\"file\" name=\"description\" />\n  </div>\n  <div class=\"col-sm-12 col-md-3\">\n    <button class=\"btn btn-primary\" [disabled]=\"!fileName || !fileDescription\" style=\"margin-top:32px;\" (click)=\"addDocuments()\">Add</button>\n  </div>\n</div>\n<table class=\"table table-bordered\" *ngIf=\"docsObject.id\">\n  <thead>\n    <tr>\n      <th>File Name</th>\n      <th>File Description</th>\n      <th>File Content Type</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let doc of docsObject.documents; let i = index;\">\n      <td>\n        {{doc.fileName || \"\"}}\n      </td>\n      <td>\n        {{doc.fileDescription || \"\"}}\n      </td>\n      <td>\n        {{doc.fileContentType || \"\"}}\n      </td>\n      <td>\n        <span class=\"fa fa-trash btn btn-sm btn-outline-danger\" (click)=\"deleteDocument(doc,i)\"></span>\n        <span class=\"fa fa-download btn btn-sm btn-outline-success\" (click)=\"downloadDocument(doc)\"></span>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/ams/components/supporting-documents/supporting-documents.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/supporting-documents/supporting-documents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportingDocumentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupportingDocumentsComponent = /** @class */ (function () {
    function SupportingDocumentsComponent(_apiService, _alertsService) {
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this.addedToAsset = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        this.files = [];
        this.formData = new FormData();
    }
    SupportingDocumentsComponent.prototype.ngOnInit = function () {
        this.uploadUrl = "/document/save-documents-for-" + this.addTo;
    };
    SupportingDocumentsComponent.prototype.clearSelectedFile = function () {
        this.fileDescription = null;
        this.fileName = null;
        this.fileInput.value = null;
    };
    SupportingDocumentsComponent.prototype.documentSelected = function ($event) {
        this.formData = new FormData();
        this.fileInput = $event.target;
        var addTo = this.addTo !== "rental-or-lease" ? this.addTo : "rentalOrLease";
        this.formData.append(addTo + "Id", this.docsObject.id);
        this.formData.append("file", $event.target.files[0]);
        this.formData.append("fileDescription", this.fileDescription);
    };
    SupportingDocumentsComponent.prototype.addDocuments = function () {
        var _this = this;
        if (!this.docsObject.id) {
            this._alertsService.error("Please select an item from the table to add documents to.");
            return;
        }
        this._apiService.post(this.uploadUrl, this.formData).subscribe(function (data) {
            _this._alertsService.success("Documents successfully uploaded");
            _this.docsObject.documents.length == 0 ? _this.docsObject.documents = data
                : _this.docsObject.documents.push(data[0]);
            _this.addedToAsset.emit(_this.docsObject);
            _this.clearSelectedFile();
        }, function (error) {
            _this._alertsService.error("Some error occured while uploading documents.");
        });
    };
    SupportingDocumentsComponent.prototype.deleteDocument = function (doc, index) {
        var _this = this;
        this._apiService.delete("/document/delete-document/" + doc.id).subscribe(function (data) {
            _this._alertsService.success("Document deleted successfully");
            _this.docsObject.documents.splice(index, 1);
            _this.addedToAsset.emit(_this.docsObject);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    SupportingDocumentsComponent.prototype.downloadDocument = function (doc) {
        var _this = this;
        this._apiService.get("/document/download-document/" + doc.id, {}, true, true).subscribe(function (data) {
            _this.saveFile(data, doc.originalFileName);
        }, function (error) {
            _this._alertsService.error("Some error occured while download document.");
            console.log(error);
        });
    };
    SupportingDocumentsComponent.prototype.saveFile = function (blobContent, fileName) {
        var blob = new Blob([blobContent], { type: 'application/octet-stream' });
        Object(__WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__["saveAs"])(blob, fileName);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SupportingDocumentsComponent.prototype, "docsObject", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SupportingDocumentsComponent.prototype, "addTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */])
    ], SupportingDocumentsComponent.prototype, "addedToAsset", void 0);
    SupportingDocumentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-supporting-documents',
            template: __webpack_require__("./src/app/ams/components/supporting-documents/supporting-documents.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/supporting-documents/supporting-documents.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__["a" /* AlertsLoaderService */]])
    ], SupportingDocumentsComponent);
    return SupportingDocumentsComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/user-lookup/user-lookup.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" [ngClass]=\"{'show backdrop d-block':display}\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h3 class=\"modal-title\">User Lookup</h3>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"close()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-3\">\n                        <label>User Login ID</label>\n                    </div>\n                    <div class=\"col-sm-12 col-md-3\">\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.userLoginId)\" [(ngModel)]=\"lookupOptions.userLoginId.operator\">\n                            <option value=\"EQ\" selected>Equals</option>\n                            <option value=\"NEQ\">Not equals</option>\n                            <option value=\"STARTS_WITH\">Starts with</option>\n                            <option value=\"ENDS_WITH\">Ends with</option>\n                            <option value=\"CONTAINS\">Contains</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <input class=\"form-control\" [(ngModel)]=\"lookupOptions.userLoginId.value\" (change)=\"lookupFieldChange(lookupOptions.userLoginId)\"\n                            name=\"userLoginId\" />\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                        <span>\n                            <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.userLoginId.sort\" (change)=\"lookupSortChange(lookupOptions.userLoginId)\"> Sort\n                        </span>\n                        <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.userLoginId)\" [(ngModel)]=\"lookupOptions.userLoginId.order\">\n                            <option value=\"ASC\">ASC</option>\n                            <option value=\"DESC\">DESC</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-3\">\n                        <label>First Name</label>\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-3\">\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.firstName)\" [(ngModel)]=\"lookupOptions.firstName.operator\">\n                            <option value=\"EQ\" selected>Equals</option>\n                            <option value=\"NEQ\">Not equals</option>\n                            <option value=\"STARTS_WITH\">Starts with</option>\n                            <option value=\"ENDS_WITH\">Ends with</option>\n                            <option value=\"CONTAINS\">Contains</option>\n\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <input class=\"form-control\" [(ngModel)]=\"lookupOptions.firstName.value\" (change)=\"lookupFieldChange(lookupOptions.firstName)\"\n                            name=\"buildingName\" />\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                        <span>\n                            <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.firstName.sort\" (change)=\"lookupSortChange(lookupOptions.firstName)\"> Sort\n                        </span>\n                        <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.firstName)\" [(ngModel)]=\"lookupOptions.firstName.order\">\n                            <option value=\"ASC\">ASC</option>\n                            <option value=\"DESC\">DESC</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-3\">\n                        <label>Last Name</label>\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-3\">\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.lastName)\" [(ngModel)]=\"lookupOptions.lastName.operator\">\n                            <option value=\"EQ\" selected>Equals</option>\n                            <option value=\"NEQ\">Not equals</option>\n                            <option value=\"STARTS_WITH\">Starts with</option>\n                            <option value=\"ENDS_WITH\">Ends with</option>\n                            <option value=\"CONTAINS\">Contains</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <input class=\"form-control\" [(ngModel)]=\"lookupOptions.lastName.value\" (change)=\"lookupFieldChange(lookupOptions.lastName)\"\n                            name=\"lastName\">\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                        <span>\n                            <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.lastName.sort\" (change)=\"lookupSortChange(lookupOptions.lastName)\"> Sort\n                        </span>\n                        <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.lastName)\" [(ngModel)]=\"lookupOptions.lastName.order\">\n                            <option value=\"ASC\">ASC</option>\n                            <option value=\"DESC\">DESC</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-3\">\n                        <label>Full Name</label>\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-3\">\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.fullName)\" [(ngModel)]=\"lookupOptions.fullName.operator\">\n                            <option value=\"EQ\" selected>Equals</option>\n                            <option value=\"NEQ\">Not equals</option>\n                            <option value=\"STARTS_WITH\">Starts with</option>\n                            <option value=\"ENDS_WITH\">Ends with</option>\n                            <option value=\"CONTAINS\">Contains</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <input class=\"form-control\" [(ngModel)]=\"lookupOptions.fullName.value\" (change)=\"lookupFieldChange(lookupOptions.fullName)\"\n                            name=\"fullName\">\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                        <span>\n                            <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.fullName.sort\" (change)=\"lookupSortChange(lookupOptions.fullName)\"> Sort\n                        </span>\n                        <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.fullName)\" [(ngModel)]=\"lookupOptions.fullName.order\">\n                            <option value=\"ASC\">ASC</option>\n                            <option value=\"DESC\">DESC</option>\n                        </select>\n                    </div>\n                </div>\n                <table class=\"table table-bordered\">\n                    <thead>\n                        <tr>\n                            <th>User Login Id</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Full Name</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let user of searchResult\">\n                            <td>{{user.userLoginId}}</td>\n                            <td>{{user.firstName}}</td>\n                            <td>{{user.lastName}}</td>\n                            <td>{{user.fullName}}</td>\n                            <td><span class=\"fa fa-user-plus btn btn-sm btn-outline-success\" (click)=\"assignUserToAsset(user)\"></span></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"searchUsers()\">Submit</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"initSearchParams()\">Clear</button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/user-lookup/user-lookup.component.scss":
/***/ (function(module, exports) {

module.exports = ".backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh; }\n\n.modal-body {\n  max-height: 375px;\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/ams/components/user-lookup/user-lookup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLookupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLookupComponent = /** @class */ (function () {
    function UserLookupComponent(_sharedService, _apiService, _alertsService) {
        this._sharedService = _sharedService;
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this.lookupOptions = {};
        this.closeModal = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */]();
        this.assignUser = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */]();
        this.searchUrl = "/user-lookup";
        this.searchParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
    }
    UserLookupComponent.prototype.ngOnInit = function () {
        this.display = true;
        this.initSearchParams();
    };
    UserLookupComponent.prototype.initSearchParams = function () {
        var _this = this;
        this.searchParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
        var propsArray = ['userLoginId', 'firstName', 'lastName', 'fullName'];
        propsArray.forEach(function (prop) {
            _this.lookupOptions[prop] = {
                field: prop,
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            };
        });
    };
    UserLookupComponent.prototype.lookupFieldChange = function (_a) {
        var field = _a.field, operator = _a.operator, value = _a.value;
        var fil = {
            field: field,
            operator: operator,
            value: value
        };
        var exists = this.searchParams.filters.filter(function (filt) { return filt.field === field; });
        var obj = {};
        obj[field] = value;
        fil.value = this._apiService.parseDateToApiFormat(obj)[field];
        if (!exists.length) {
            this.searchParams.filters.push(fil);
        }
        else {
            exists[0].value = value;
            exists[0].operator = operator;
        }
    };
    UserLookupComponent.prototype.lookupSortChange = function (_a) {
        var field = _a.field, sort = _a.sort, order = _a.order;
        var sor = {
            field: field,
            order: order
        };
        var exists = this.searchParams.sorts.filter(function (s) { return s.field === field; });
        if (!exists.length && sort) {
            this.searchParams.sorts.push(sor);
        }
        else if (exists.length && sort) {
            exists[0].order = order;
        }
        else {
            var ind = this.searchParams.sorts.indexOf(exists[0]);
            this.searchParams.sorts.splice(ind, 1);
        }
    };
    UserLookupComponent.prototype.searchUsers = function () {
        var _this = this;
        this._apiService
            .get(this.searchUrl, { Search: JSON.stringify(this.searchParams) })
            .subscribe(function (data) {
            _this.searchResult = data;
        }, function (error) {
            _this._alertsService.error("Error getting search Data");
        });
    };
    UserLookupComponent.prototype.close = function () {
        this.display = false;
        this.closeModal.emit();
    };
    UserLookupComponent.prototype.assignUserToAsset = function (user) {
        this.assignUser.emit(user);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], UserLookupComponent.prototype, "assetType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */])
    ], UserLookupComponent.prototype, "closeModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */])
    ], UserLookupComponent.prototype, "assignUser", void 0);
    UserLookupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-user-lookup',
            template: __webpack_require__("./src/app/ams/components/user-lookup/user-lookup.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/user-lookup/user-lookup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__["a" /* AlertsLoaderService */]])
    ], UserLookupComponent);
    return UserLookupComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/vehicle/add-vehicle/add-vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pb-3\">\n  <div class=\"col-md-12\">\n    <h4>\n      <span class=\"fa fa-bus\"></span> Add Vehicle</h4>\n  </div>\n</div>\n<ul class=\"row nav nav-tabs mb-2\">\n  <li class=\"nav-item\" (click)=\"changeTab(tab)\" *ngFor=\"let tab of tabs\">\n    <a class=\"nav-link\" [ngClass]=\"{'active': currentTab.tab == tab.tab}\">{{tab.name}}</a>\n  </li>\n</ul>\n<div class=\"tab-content\" *ngIf=\"currentTab.tab == 1\">\n  <h5>Vehicle Details</h5>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Vehicle Reg. No.</label>\n      <input class=\"form-control\" [(ngModel)]=\"vehicle.vehicleRegistrationId\" name=\"vehicleRegistrationId\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Engine #</label>\n      <input class=\"form-control\" [(ngModel)]=\"vehicle.engineNumber\" name=\"engineNumber\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Chasis #</label>\n      <input class=\"form-control\" [(ngModel)]=\"vehicle.chassisNumber\" name=\"chassisNumber\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Asset Category</label>\n      <select class=\"form-control\" [compareWith]=\"selectCompareFunction\" disabled [(ngModel)]=\"vehicle.assetCategory\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let category of dropDownsData.assetCategoriesList\" [ngValue]=\"category\">{{category.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Organization</label>\n      <select class=\"form-control\" disabled [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"vehicle.department.organization\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let organization of dropDownsData.organizationList\" [ngValue]=\"organization\">{{organization.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Department</label>\n      <select class=\"form-control\" [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"vehicle.department\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let department of dropDownsData.departmentList\" [ngValue]=\"department\">{{department.description}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Make</label>\n      <input class=\"form-control\" [(ngModel)]=\"vehicle.make\" name=\"make\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Model</label>\n      <input class=\"form-control\" [(ngModel)]=\"vehicle.model\" name=\"model\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Year Of Manufacturing</label>\n      <input class=\"form-control\" [(ngModel)]=\"vehicle.yearOfManufacturing\" name=\"yearOfManufacturing\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Month Of Manufacturing</label>\n      <select class=\"form-control\" [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"vehicle.monthOfManufacturing\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let month of dropDownsData.monthTypeList\" [ngValue]=\"month\">{{month.description}}</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Vehicle Type</label>\n      <select class=\"form-control\" [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"vehicle.vehicleType\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let veh of dropDownsData.vehicleTypeList\" [ngValue]=\"veh\">{{veh.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If other Specify</label>\n      <input class=\"form-control\" [disabled]=\"!vehicle.vehicleType || vehicle.vehicleType.id != 'OTHER'\" [(ngModel)]=\"vehicle.vehicleTypeOther\"\n        name=\"vehicleTypeOther\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Tax</label>\n      <select class=\"form-control\" [(ngModel)]=\"vehicle.taxApplicable\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Tax Amount</label>\n      <input class=\"form-control\" [disabled]=\"vehicle.taxApplicable == 'N'\" [(ngModel)]=\"vehicle.taxAmount\" name=\"taxAmount\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Tax Start Date Time</label>\n      <input [disabled]=\"vehicle.taxApplicable == 'N'\" class=\"form-control\" [owlDateTime]=\"dt3\" [owlDateTimeTrigger]=\"dt3\"\n      [(ngModel)]=\"vehicle.taxStartDateTime\" name=\"taxStartDateTime\" />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt3></owl-date-time> \n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Tax End Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\" [disabled]=\"vehicle.taxApplicable == 'N'\"\n      [(ngModel)]=\"vehicle.taxEndDateTime\" name=\"taxEndDateTime\" />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt2></owl-date-time>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>MOT</label>\n      <select class=\"form-control\" [(ngModel)]=\"vehicle.motApplicable\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>MOT Authority Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"vehicle.motAuthorityName\" name=\"motAuthorityName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>MOT Place</label>\n      <input class=\"form-control\" [(ngModel)]=\"vehicle.motPlace\" name=\"motPlace\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>MOT Start Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\"\n      [(ngModel)]=\"vehicle.motStartDateTime\" name=\"motStartDateTime\" />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt1></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>MOT End Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt4\" [owlDateTimeTrigger]=\"dt4\"\n      [(ngModel)]=\"vehicle.motEndDateTime\" name=\"motEndDateTime\" />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt4></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>MOT Obtained Date</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt5\" [owlDateTimeTrigger]=\"dt5\"\n      [(ngModel)]=\"vehicle.motObtainedDate\" name=\"motObtainedDate\" />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt5></owl-date-time>\n    </div>\n  </div>\n\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Vehicle Damage Type</label>\n      <ngx-select-dropdown *ngIf=\"dropDownsData.vehicleDamageTypeList\" [multiple]=\"true\" [config]=\"multiselectConfig\" [(value)]=\"vehicle.vehicleDamageTypes\"\n        [options]=\"dropDownsData.vehicleDamageTypeList\" (change)=\"damageTypeChanged()\"></ngx-select-dropdown>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If other Specify</label>\n      <input class=\"form-control\" [disabled]=\"enabledOthers\" [(ngModel)]=\"vehicle.vehicleDamageTypeOther\" name=\"vehicleDamageTypeOther\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Regulatory Compliance</label>\n      <select class=\"form-control\" [(ngModel)]=\"vehicle.regulatoryCompliance\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Regulatory Authority</label>\n      <input class=\"form-control\" [disabled]=\"vehicle.regulatoryCompliance != 'Y'\" [(ngModel)]=\"vehicle.regulatoryAuthorityName\" name=\"regulatoryAuthorityName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Compliance Obtained Date</label>\n      <input class=\"form-control\" [disabled]=\"vehicle.regulatoryCompliance != 'Y'\" [owlDateTime]=\"dt8\" [owlDateTimeTrigger]=\"dt8\"\n      [(ngModel)]=\"vehicle.regCompObtainedDate\" name=\"regCompObtainedDate\" />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt8></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Exits</label>\n      <select class=\"form-control\" [(ngModel)]=\"vehicle.fireExits\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n  </div>\n\n\n\n  <div class=\"row pb-2\">\n\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Exit Location</label>\n      <input class=\"form-control\" [disabled]=\"vehicle.fireExits !='Y'\" [(ngModel)]=\"vehicle.fireExitsLoc\" name=\"fireExitsLoc\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Exitinguishers Present</label>\n      <select class=\"form-control\" [(ngModel)]=\"vehicle.fireExtinguishers\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Extinguisher</label>\n      <ngx-select-dropdown [ngClass]=\"{'disabled': vehicle.fireExtinguishers != 'Y'}\" *ngIf=\"dropDownsData.fireExtinguisherTypeList\"\n        [multiple]=\"true\" [config]=\"multiselectConfig\" [(value)]=\"vehicle.fireExtinguisherTypes\" [options]=\"dropDownsData.fireExtinguisherTypeList\"></ngx-select-dropdown>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Fire Extinguisher Location</label>\n      <input class=\"form-control\" [disabled]=\"vehicle.fireExtinguishers !='Y'\" [(ngModel)]=\"vehicle.fireExtinguisherLoc\" name=\"description\"\n      />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Annual Maintenance Contract</label>\n      <select class=\"form-control\" [(ngModel)]=\"vehicle.amcPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Inspection</label>\n      <select class=\"form-control\" [(ngModel)]=\"vehicle.inspectionPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>License</label>\n      <select class=\"form-control\" [(ngModel)]=\"vehicle.licensePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Loan</label>\n      <select class=\"form-control\" [(ngModel)]=\"vehicle.loanPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Policy</label>\n      <select class=\"form-control\" [(ngModel)]=\"vehicle.insurancePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Rental/Lease</label>\n      <select class=\"form-control\" [(ngModel)]=\"vehicle.rentalOrLeasePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Service</label>\n      <select class=\"form-control\" [(ngModel)]=\"vehicle.servicePresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Warranty</label>\n      <select class=\"form-control\" [(ngModel)]=\"vehicle.warrantyPresent\" (change)=\"updateTabs()\">\n        <option [ngValue]=\"null\"></option>\n        <option [ngValue]=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Asset Condition</label>\n      <select [compareWith]=\"selectCompareFunction\" class=\"form-control\" [(ngModel)]=\"vehicle.assetCondition\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let condition of dropDownsData.assetConditionList\" [ngValue]=\"condition\">{{condition.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If Other Specify</label>\n      <input class=\"form-control\" [disabled]=\"!vehicle.assetCondition || vehicle.assetCondition.id != 'OTHER'\" [(ngModel)]=\"vehicle.assetConditionOther\"\n        name=\"assetConditionOther\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Asset Status</label>\n      <select [compareWith]=\"selectCompareFunction\" class=\"form-control\" [(ngModel)]=\"vehicle.assetStatus\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let status of dropDownsData.assetStatusList\" [ngValue]=\"status\">{{status.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If Other Specify</label>\n      <input class=\"form-control\" [disabled]=\"!vehicle.assetStatus || vehicle.assetStatus.id != 'OTHER'\" [(ngModel)]=\"vehicle.assetStatusOther\"\n        name=\"description\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Asset Type</label>\n      <select [compareWith]=\"selectCompareFunction\" class=\"form-control\" [(ngModel)]=\"vehicle.assetType\">\n        <option [ngValue]=\"null\"></option>\n        <option *ngFor=\"let type of dropDownsData.assetTypeList\" [ngValue]=\"type\">{{type.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>If Other Specify</label>\n      <input class=\"form-control\" [disabled]=\"!vehicle.assetType || vehicle.assetType.id != 'OTHER'\" [(ngModel)]=\"vehicle.assetTypeOther\"\n        name=\"description\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      Assigned To:\n      <button class=\"btn btn-primary\" (click)=\"userLookup()\">Lookup</button>\n    </div>\n  </div>\n\n  <table class=\"table table-bordered\">\n    <thead>\n      <th>\n        Login Id\n      </th>\n      <th>\n        First Name\n      </th>\n      <th>\n        Last Name\n      </th>\n      <th></th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let assignee of vehicle.assignees\">\n        \n        <td>{{assignee.userLoginId || assignee.loginId}}\n        </td>\n        <td>{{assignee.firstName}}</td>\n        <td>{{assignee.lastName}}</td>\n        <td>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-success\" (click)=\"deleteAssignee(assignee)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Comment/Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"vehicle.commentDescription\"></textarea>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <button class=\"btn btn-primary\" (click)=\"save()\">{{editMode?'Update':'Save'}}</button>\n      <!-- <button class=\"btn btn-success float-right\">Next</button> -->\n    </div>\n  </div>\n</div>\n<app-maintenance *ngIf=\"currentTab.tab==2\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"vehicle\"></app-maintenance>\n<app-inspection *ngIf=\"currentTab.tab==3\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"vehicle\"></app-inspection>\n<app-license *ngIf=\"currentTab.tab==4\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"vehicle\"></app-license>\n<app-loan *ngIf=\"currentTab.tab==5\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"vehicle\"></app-loan>\n<app-policy *ngIf=\"currentTab.tab==6\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"vehicle\"></app-policy>\n<app-rent-or-lease *ngIf=\"currentTab.tab==7\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"vehicle\"></app-rent-or-lease>\n<app-service *ngIf=\"currentTab.tab==8\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"vehicle\"></app-service>\n<app-warranty *ngIf=\"currentTab.tab==9\" (addedToAsset)=\"addedToAsset($event)\" [asset]=\"vehicle\"></app-warranty>\n<app-supporting-documents *ngIf=\"currentTab.tab==10\" (addedToAsset)=\"addedToAsset($event)\" [docsObject]=\"vehicle\" [addTo]=\"'vehicle'\"></app-supporting-documents>\n<asset-summary [asset]=\"vehicle\" *ngIf=\"currentTab.tab==11\"></asset-summary>"

/***/ }),

/***/ "./src/app/ams/components/vehicle/add-vehicle/add-vehicle.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/vehicle/add-vehicle/add-vehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_lookup_user_lookup_component__ = __webpack_require__("./src/app/ams/components/user-lookup/user-lookup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddVehicleComponent = /** @class */ (function () {
    function AddVehicleComponent(_sharedService, _apiService, _alertsService, route, viewContainerRef, componentFactoryResolver) {
        var _this = this;
        this._sharedService = _sharedService;
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this.route = route;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.enabledOthers = true;
        this.initVehicle();
        this.tabs = this._sharedService.getTabstoShow(this.vehicle);
        this.currentTab = this.tabs[0];
        this.dropDownsData = this._sharedService.dropDownsData;
        this._sharedService.dropDownsService.subscribe(function (data) {
            _this.dropDownsData = data;
        });
    }
    AddVehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropDownsData = this._sharedService.dropDownsData;
        this.route.params.subscribe(function (params) {
            var Id = params["id"];
            if (Id) {
                _this.getVehicleById(Id);
                _this.editMode = true;
            }
        });
    };
    AddVehicleComponent.prototype.selectCompareFunction = function (item1, item2) {
        if (item1 == null || item2 == null) {
            return false;
        }
        return item1.id == item2.id;
    };
    AddVehicleComponent.prototype.initVehicle = function () {
        this.vehicle = {
            id: null,
            assets: null,
            statusFlag: null,
            vehicleRegistrationId: null,
            engineNumber: null,
            chassisNumber: null,
            make: null,
            model: null,
            commentDescription: null,
            vehicleDamageTypes: [],
            assetCategory: {
                id: "VEHICLE",
                description: "Vehicle"
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
            vehicleDamageTypeOther: null,
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
            yearOfManufacturing: null,
            monthOfManufacturing: {
                id: null
            },
            motApplicable: null,
            motStartDateTime: null,
            motEndDateTime: null,
            motObtainedDate: null,
            motAuthorityName: null,
            motPlace: null,
            taxApplicable: null,
            taxStartDateTime: null,
            taxEndDateTime: null,
            taxAmount: null,
            vehicleType: {
                id: null
            },
            vehicleTypeOther: null,
            organization: {
                id: null
            },
            department: {
                id: null,
                organization: null
            },
            regulatoryCompliance: null,
            regulatoryAuthorityName: null,
            regCompObtainedDate: null,
            fireExits: null,
            fireExitsLoc: null,
            fireExtinguishers: null,
            fireExtinguisherLoc: null,
            amcPresent: "N",
            insurancePresent: "N",
            loanPresent: "N",
            licensePresent: "N",
            warrantyPresent: "N",
            inspectionPresent: "N",
            servicePresent: "N",
            rentalOrLeasePresent: "N",
            fireExtinguisherTypes: []
        };
    };
    AddVehicleComponent.prototype.getVehicleById = function (id) {
        var _this = this;
        this._apiService.get("/vehicle/vehicleId/" + id).subscribe(function (data) {
            data = _this.handleNullOrganization(data);
            _this.vehicle = data;
            _this.updateTabs();
        }, function (error) {
            _this._alertsService.error("Unable to get vehicle details. Try Again.");
        });
    };
    AddVehicleComponent.prototype.handleNullOrganization = function (data) {
        if (data.assetCategory == null) {
            data.assetCategory = {
                id: "VEHICLE",
                description: "Vehicle"
            };
        }
        if (data.department === null) {
            data.department = {
                id: null,
                organization: {
                    id: null
                }
            };
        }
        return data;
    };
    AddVehicleComponent.prototype.changeTab = function (tab) {
        if (!this.vehicle.id && tab.tab != 11 && tab.tab != 1) {
            this._alertsService.error("Please save vehicle details first.");
            return;
        }
        this.currentTab = tab;
    };
    AddVehicleComponent.prototype.updateTabs = function () {
        this.tabs = this._sharedService.getTabstoShow(this.vehicle);
    };
    AddVehicleComponent.prototype.addedToAsset = function ($event) {
        this.vehicle = $event;
    };
    AddVehicleComponent.prototype.save = function () {
        var _this = this;
        this._apiService
            .createOrUpdateVehicle("/vehicle/create-or-update-vehicle", this.vehicle)
            .subscribe(function (data) {
            data = _this.handleNullOrganization(data);
            _this.vehicle = data;
            _this._alertsService.success("Vehicle details successfully saved.");
            //this.initVehicle();
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    AddVehicleComponent.prototype.userLookup = function () {
        var _this = this;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_0__user_lookup_user_lookup_component__["a" /* UserLookupComponent */]);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'vehicle';
        this.componentRef.instance.assignUser.subscribe(function (data) {
            _this.assignUser(data);
        });
        this.componentRef.instance.closeModal.subscribe(function () {
            _this.closeModal();
        });
    };
    AddVehicleComponent.prototype.closeModal = function () {
        this.componentRef.instance.assignUser.unsubscribe();
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
    };
    AddVehicleComponent.prototype.assignUser = function (user) {
        var _this = this;
        if (!this.vehicle.id) {
            this.vehicle.assignees == null ? this.vehicle.assignees = [] : "";
            this.vehicle.assignees.push(user);
            return;
        }
        this._apiService.put("/vehicle/add-assignee-to-vehicle-by-user-id/vehicleId/" + this.vehicle.id + "/userId/" + user.id, null).subscribe(function (data) {
            _this.vehicle = data;
            _this._alertsService.success("Vehicle successfully assigned to user.");
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    AddVehicleComponent.prototype.damageTypeChanged = function () {
        var others = this.vehicle.vehicleDamageTypes.filter(function (item) {
            return item.id == 'OTHER';
        });
        if (others.length != 0) {
            this.enabledOthers = false;
            return;
        }
        this.enabledOthers = true;
    };
    AddVehicleComponent.prototype.deleteAssignee = function (user) {
        var _this = this;
        if (!this.vehicle.id) {
            this.vehicle.assignees.forEach(function (element, index) {
                _this.vehicle.assignees.splice(index, 1);
            });
            return;
        }
        this._apiService.delete("/vehicle/remove-assignee-from-vehicle-by-user-id/vehicleId/" + this.vehicle.id + "/userId/" + user.id).subscribe(function (data) {
            _this.vehicle = data;
            _this._alertsService.success("Assignee successfully removed from vehicle.");
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    AddVehicleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: "app-add-vehicle",
            template: __webpack_require__("./src/app/ams/components/vehicle/add-vehicle/add-vehicle.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/vehicle/add-vehicle/add-vehicle.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["p" /* ComponentFactoryResolver */]])
    ], AddVehicleComponent);
    return AddVehicleComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/vehicle/vehicle-list/vehicle-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h4>\n      <span class=\"fa fa-bus\"></span> Vehicle(s) |\n      <button class=\"btn btn-info btn-sm\" [routerLink]=\"'add-vehicle'\">\n        <span class=\"fa fa-plus\"></span> Add</button>\n    </h4>\n  </div>\n  <div class=\"col-md-6\">\n    <button class=\"btn btn-info btn-sm float-right ml-2\" (click)=\"advancedSearch()\">\n      <span class=\"fa fa-search\"></span> Advance Search</button>\n    <div class=\"input-group search float-right\">\n      <input class=\"form-control form-control-sm \" [(ngModel)]=\"searchText\" placeholder=\"Search\" />\n      <span class=\"input-group-addon\">\n        <span class=\"fa fa-search\"></span>\n      </span>\n    </div>\n  </div>\n</div>\n<table class=\"table table-bordered\">\n  <thead>\n    <th>\n      Vehicle Reg #\n    </th>\n    <th>\n      Make\n    </th>\n    <th>\n      Model\n    </th>\n    <th>\n      Engine #\n    </th>\n    <th>\n      Chasis #\n    </th>\n    <th></th>\n  </thead>\n  <tbody *ngIf=\"vehicleList.length\">\n    <tr *ngFor=\"let vehicle of vehicleList | searchFilter : searchText\">\n      <td>\n        <a [routerLink]=\"['edit-vehicle', vehicle.id]\">{{vehicle.vehicleRegistrationId}}</a>\n      </td>\n      <td>\n        {{vehicle.make}}\n      </td>\n      <td>\n        {{vehicle.model}}\n      </td>\n      <td>\n        {{vehicle?.engineNumber}}\n      </td>\n      <td>\n        {{vehicle.chassisNumber}}\n      </td>\n      <td>\n        <span class=\"fa fa-trash btn btn-sm btn-outline-danger\" (click)=\"deleteVehicle(vehicle)\"></span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<ng-pagination *ngIf=\"itemsCount\" [position]=\"'left'\" [pageSize]=\"pageSize\" [itemsCount]=\"itemsCount\" (getPageData)=\"getPageData($event)\"></ng-pagination>\n<app-ajax-loader *ngIf=\"!vehicleList\"></app-ajax-loader>"

/***/ }),

/***/ "./src/app/ams/components/vehicle/vehicle-list/vehicle-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/vehicle/vehicle-list/vehicle-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_component__ = __webpack_require__("./src/app/ams/components/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehicleListComponent = /** @class */ (function () {
    function VehicleListComponent(_apiService, _alertService, viewContainerRef, componentFactoryResolver) {
        this._apiService = _apiService;
        this._alertService = _alertService;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.pageSize = 10;
        this.itemsCount = 0;
        this.vehicleList = [];
        this.searchParams = {
            paging: { currentPage: 0, pageSize: 10 },
            sorts: [
                {
                    field: "vehicleRegistrationId",
                    order: "ASC"
                }
            ],
            filters: []
        };
        this.getVehicleList();
    }
    VehicleListComponent.prototype.ngOnInit = function () { };
    VehicleListComponent.prototype.getPageData = function ($event) {
        this.searchParams.paging.currentPage = $event.pageNo - 1;
        this.searchParams.paging.pageSize = $event.pageSize;
        this.getVehicleList();
    };
    VehicleListComponent.prototype.getVehicleList = function () {
        var _this = this;
        this._apiService
            .get("/vehicle/search-vehicles", { Search: JSON.stringify(this.searchParams) })
            .subscribe(function (data) {
            _this.itemsCount = data.totalRecords;
            _this.vehicleList = data.vehicles;
        });
    };
    VehicleListComponent.prototype.deleteVehicle = function (vehicle) {
        var _this = this;
        this._apiService.delete("/vehicle/delete-vehicle/vehicleId/" + vehicle.id).subscribe(function (data) {
            _this._alertService.success("Vehicle deleteed successfully.");
            _this.vehicleList.splice(_this.vehicleList.indexOf(vehicle), 1);
        }, function (error) {
            _this._alertService.error(error);
        });
    };
    VehicleListComponent.prototype.advancedSearch = function () {
        var _this = this;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* SearchComponent */]);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assetType = 'vehicle';
        this.componentRef.instance.parentSearchParams = this.searchParams;
        this.componentRef.instance.searchResult.subscribe(function (data) {
            _this.advancedSearchResult(data);
        });
        this.componentRef.instance.closeModal.subscribe(function () {
            _this.closeModal();
        });
    };
    VehicleListComponent.prototype.closeModal = function () {
        this.componentRef.instance.searchResult.unsubscribe();
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
    };
    VehicleListComponent.prototype.advancedSearchResult = function ($event) {
        this.itemsCount = $event.data.totalRecords;
        this.vehicleList = $event.data.vehicles;
        this.searchParams = $event.searchParams;
    };
    VehicleListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-vehicle-list",
            template: __webpack_require__("./src/app/ams/components/vehicle/vehicle-list/vehicle-list.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/vehicle/vehicle-list/vehicle-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["p" /* ComponentFactoryResolver */]])
    ], VehicleListComponent);
    return VehicleListComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/vehicle/vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header class=\"d-none d-lg-block\"></app-header>\n<div class=\"row view\">\n    <div class=\"col-lg-2 d-none d-lg-block pl-0 pr-0\">\n    <app-side-nav [thisView]=\"'vehicle'\"></app-side-nav>\n  </div>\n  <div class=\"col-lg-2 pl-0 pr-0 d-lg-none\">\n    <app-sm-menu [thisView]=\"'vehicle'\"></app-sm-menu>\n  </div>\n  <div class=\"col-lg-10 col-sm-12 content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/vehicle/vehicle.component.scss":
/***/ (function(module, exports) {

module.exports = ".zero-margin {\n  margin: 0 !important; }\n\n.zero-padding {\n  padding: 0 !important; }\n\n.center-block {\n  display: block;\n  margin: auto; }\n\n.text-overflow {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.fa-6 {\n  font-size: 10em; }\n\n.content {\n  border-color: #0b4d8a; }\n\nthead {\n  background-color: #0b4d8a;\n  color: white; }\n\n.btn:hover {\n  background-color: #0b4d8a; }\n\n.nav-tabs {\n  border-bottom: 1px solid #0b4d8a; }\n\n.nav-tabs .nav-link {\n    border-color: #0b4d8a;\n    color: #0b4d8a; }\n\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link.active {\n      color: white !important;\n      background-color: #0b4d8a;\n      border-color: #0b4d8a; }\n"

/***/ }),

/***/ "./src/app/ams/components/vehicle/vehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VehicleComponent = /** @class */ (function () {
    function VehicleComponent() {
    }
    VehicleComponent.prototype.ngOnInit = function () {
    };
    VehicleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vehicle',
            template: __webpack_require__("./src/app/ams/components/vehicle/vehicle.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/vehicle/vehicle.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VehicleComponent);
    return VehicleComponent;
}());



/***/ }),

/***/ "./src/app/ams/components/warranty/warranty.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-content\">\n  <h5>Warranty Details</h5>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Warranty #</label>\n      <input class=\"form-control\" [(ngModel)]=\"warranty.warrantyNumber\" name=\"warrantyNumber\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Warranty Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"warranty.warrantyName\" name=\"warrantyName\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Provided By</label>\n      <input class=\"form-control\" [(ngModel)]=\"warranty.warrantyProvidedBy\" name=\"warrantyProvidedBy\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Provider Phone</label>\n      <input class=\"form-control\" [(ngModel)]=\"warranty.warrantyProviderPhone\" name=\"warrantyProviderPhone\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Warranty Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"warranty.warrantyDescription\" name=\"warrantyDescription\"></textarea>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Provider Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"warranty.warrantyProviderDescription\" name=\"warrantyProviderDescription\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Provider Email</label>\n      <input class=\"form-control\" [(ngModel)]=\"warranty.warrantyProviderEmail\" name=\"warrantyProviderEmail\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Provider Contact Person</label>\n      <input class=\"form-control\" [(ngModel)]=\"warranty.warrantyProviderContactPerson\" name=\"warrantyProviderContactPerson\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Provided Date</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" [(ngModel)]=\"warranty.warrantyProvidedDate\" name=\"warrantyProvidedDate\"\n      />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Start Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\" [(ngModel)]=\"warranty.warrantyStartDateTime\" name=\"warrantywarrantyStartDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt2></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>End Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt3\" [owlDateTimeTrigger]=\"dt3\" [(ngModel)]=\"warranty.warrantyEndDateTime\" name=\"warrantyEndDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt3></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Grace Date Time</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt4\" [owlDateTimeTrigger]=\"dt4\" [(ngModel)]=\"warranty.warrantyGraceDateTime\" name=\"warrantyGraceDateTime\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dt4></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Grace Period In Months</label>\n      <input class=\"form-control\" type=\"number\" [(ngModel)]=\"warranty.gracePeriodInMonths\" name=\"gracePeriodInMonths\" />\n    </div>\n  </div>\n\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Amount</label>\n      <input class=\"form-control\" [(ngModel)]=\"warranty.warrantyAmount\" name=\"warrantyAmount\" />\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Renewal Date</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt5\" [owlDateTimeTrigger]=\"dt5\" [(ngModel)]=\"warranty.warrantyRenewalDate\" name=\"warrantyRenewalDate\"\n      />\n      <owl-date-time [pickerType]=\"'both'\" #dt5></owl-date-time>\n    </div>\n    <div class=\"col-sm-12 col-md-3\">\n      <label>Renewal Amount</label>\n      <input class=\"form-control\" [(ngModel)]=\"warranty.warrantyRenewalAmount\" name=\"warrantyRenewalAmount\" />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Comments</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"warranty.comments\" name=\"comments\"></textarea>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <button class=\"btn btn-primary\" (click)=\"save()\">{{editMode?'Update':'Save'}}</button>\n    </div>\n    <div class=\"col-6\">\n      <button class=\"btn btn-success float-right\" data-toggle=\"modal\" data-target=\"#lookUp\">Lookup</button>\n    </div>\n  </div>\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Warranty #</th>\n        <th>Provided By</th>\n        <th>Start Date</th>\n        <th>End Date</th>\n        <th>Amount</th>\n        <th>Renewal Date</th>\n        <th>Renewal Amount</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let warranty of asset.warrantyAgreements\">\n        <td>\n          {{warranty.warrantyNumber}}\n        </td>\n        <td>\n          {{warranty.warrantyName}}\n        </td>\n        <td>\n          {{warranty.warrantyStartDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{warranty.warrantyEndDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n        </td>\n        <td>\n          {{warranty.warrantyAmount}}\n        </td>\n        <td>\n          {{warranty.warrantyRenewalDate | date:'dd/MM/yyyy'}}\n        </td>\n        <td>\n          {{warranty.warrantyRenewalAmount}}\n        </td>\n        <td>\n          <span class=\"fa fa-pencil btn btn-sm btn-outline-primary\" (click)=\"editWarranty(warranty)\"></span>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-danger\" (click)=\"removeWarrantyFromAsset(warranty)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <app-supporting-documents [docsObject]=\"warranty\" [addTo]=\"'warranty'\"></app-supporting-documents>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" id=\"lookUp\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h6 class=\"modal-title\">Inspection Lookup</h6>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Warranty #</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.warrantyNumber.value\" (change)=\"lookupFieldChange(lookupOptions.warrantyNumber)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.warrantyNumber)\" [(ngModel)]=\"lookupOptions.warrantyNumber.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.warrantyNumber.sort\" (change)=\"lookupSortChange(lookupOptions.warrantyNumber)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.warrantyNumber)\" [(ngModel)]=\"lookupOptions.warrantyNumber.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Warranty Name</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.warrantyName.value\" (change)=\"lookupFieldChange(lookupOptions.warrantyName)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.warrantyName)\" [(ngModel)]=\"lookupOptions.warrantyName.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.warrantyName.sort\" (change)=\"lookupSortChange(lookupOptions.warrantyName)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.warrantyName)\" [(ngModel)]=\"lookupOptions.warrantyName.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Warranty Description</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.warrantyDescription.value\" (change)=\"lookupFieldChange(lookupOptions.warrantyDescription)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.warrantyDescription)\" [(ngModel)]=\"lookupOptions.warrantyDescription.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.warrantyDescription.sort\" (change)=\"lookupSortChange(lookupOptions.warrantyDescription)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.warrantyDescription)\" [(ngModel)]=\"lookupOptions.warrantyDescription.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Provided By</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.warrantyProvidedBy.value\" (change)=\"lookupFieldChange(lookupOptions.warrantyProvidedBy)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.warrantyProvidedBy)\" [(ngModel)]=\"lookupOptions.warrantyProvidedBy.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.warrantyProvidedBy.sort\" (change)=\"lookupSortChange(lookupOptions.warrantyProvidedBy)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.warrantyProvidedBy)\" [(ngModel)]=\"lookupOptions.warrantyProvidedBy.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Provider Description</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.warrantyProviderDescription.value\" (change)=\"lookupFieldChange(lookupOptions.warrantyProviderDescription)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.warrantyProviderDescription)\" [(ngModel)]=\"lookupOptions.warrantyProviderDescription.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"STARTS_WITH\">Starts With</option>\n                <option value=\"ENDS_WITH\">Ends With</option>\n                <option value=\"CONTAINS\">Contains</option>\n                <option value=\"NOT_CONTAINS\">Not Contains</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.warrantyProviderDescription.sort\" (change)=\"lookupSortChange(lookupOptions.warrantyProviderDescription)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.warrantyProviderDescription)\" [(ngModel)]=\"lookupOptions.warrantyProviderDescription.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Contact Person</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [(ngModel)]=\"lookupOptions.warrantyProviderContactPerson.value\" (change)=\"lookupFieldChange(lookupOptions.warrantyProviderContactPerson)\"\n              />\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.warrantyProviderContactPerson)\" [(ngModel)]=\"lookupOptions.warrantyProviderContactPerson.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.warrantyProviderContactPerson.sort\" (change)=\"lookupSortChange(lookupOptions.warrantyProviderContactPerson)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.warrantyProviderContactPerson)\" [(ngModel)]=\"lookupOptions.warrantyProviderContactPerson.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>Start Date Time</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtdt\" [owlDateTimeTrigger]=\"dtdt\" [(ngModel)]=\"lookupOptions.warrantyStartDateTime.value\"\n                (dateTimeChange)=\"lookupFieldChange(lookupOptions.warrantyStartDateTime)\" />\n              <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dtdt></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.warrantyStartDateTime)\" [(ngModel)]=\"lookupOptions.warrantyStartDateTime.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.warrantyStartDateTime.sort\" (change)=\"lookupSortChange(lookupOptions.warrantyStartDateTime)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.warrantyStartDateTime)\" [(ngModel)]=\"lookupOptions.warrantyStartDateTime.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">\n              <label>End Date Time</label>\n            </div>\n            <div class=\"col-sm-12 col-md-4\">\n              <input class=\"form-control\" [owlDateTime]=\"dtd\" [owlDateTimeTrigger]=\"dtd\" [(ngModel)]=\"lookupOptions.warrantyEndDateTime.value\"\n                (dateTimeChange)=\"lookupFieldChange(lookupOptions.warrantyEndDateTime)\" />\n              <owl-date-time [pickerType]=\"'both'\" [showSecondsTimer]=\"true\" #dtd></owl-date-time>\n            </div>\n            <div class=\"col-sm-12 col-md-3\">\n              <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.endDateTime)\" [(ngModel)]=\"lookupOptions.warrantyEndDateTime.operator\">\n                <option value=\"EQ\">Equals</option>\n                <option value=\"NEQ\">Not equals</option>\n                <option value=\"GT\"> Greater than</option>\n                <option value=\"LT\">Less than</option>\n              </select>\n            </div>\n            <div class=\"col-sm-12 col-md-2\">\n              <span>\n                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.warrantyEndDateTime.sort\" (change)=\"lookupSortChange(lookupOptions.warrantyEndDateTime)\"> Sort\n              </span>\n              <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.warrantyEndDateTime)\" [(ngModel)]=\"lookupOptions.warrantyEndDateTime.order\">\n                <option value=\"ASC\">ASC</option>\n                <option value=\"DESC\">DESC</option>\n              </select>\n            </div>\n          </div>\n\n          <table class=\"table table-bordered table-hover\">\n            <thead>\n              <tr>\n                <th>Warranty #</th>\n                <th>Provided By</th>\n                <th>Start Date</th>\n                <th>End Date</th>\n                <th>Amount</th>\n                <th>Renewal Date</th>\n                <th>Renewal Amount</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"lookupItems\">\n              <tr *ngFor=\"let warranty of lookupItems.warranties\">\n                <td>\n                  {{warranty.warrantyNumber}}\n                </td>\n                <td>\n                  {{warranty.warrantyName}}\n                </td>\n                <td>\n                  {{warranty.warrantyStartDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n                </td>\n                <td>\n                  {{warranty.warrantyEndDateTime | date:'dd/MM/yyyy HH:mm:ss'}}\n                </td>\n                <td>\n                  {{warranty.warrantyAmount}}\n                </td>\n                <td>\n                  {{warranty.warrantyRenewalDate | date:'dd/MM/yyyy'}}\n                </td>\n                <td>\n                  {{warranty.warrantyRenewalAmount}}\n                </td>\n                <td><span class=\"fa fa-plus btn btn-sm btn-outline-danger\" (click)=\"addExistingWarrantyToAsset(warranty)\"></span></td>\n              </tr>\n            </tbody>\n          </table>\n          <ng-pagination *ngIf=\"lookupItems\" [itemsCount]=\"lookupItems.totalRecords\" [pageSize]=\"10\" (getPageData)=\"lookupWarranty($event)\"></ng-pagination>\n        </div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-primary float-right\" (click)=\"lookupWarranty()\">Search</button>\n          <button type=\"button\" (click)=\"initLookupParams()\" class=\"btn btn-primary\">Clear</button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ams/components/warranty/warranty.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ams/components/warranty/warranty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarrantyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WarrantyComponent = /** @class */ (function () {
    function WarrantyComponent(_apiService, _alertsService) {
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this.editMode = false;
        this.addedToAsset = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        this.initWarranty();
    }
    WarrantyComponent.prototype.ngOnInit = function () {
        this.initLookupParams();
    };
    WarrantyComponent.prototype.initLookupParams = function () {
        this.lookupParams = { "paging": { "currentPage": 0, "pageSize": 10 }, "sorts": [], "filters": [] };
        this.lookupOptions = {
            warrantyNumber: {
                field: 'warrantyNumber',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            warrantyName: {
                field: 'warrantyName',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            warrantyDescription: {
                field: 'warrantyDescription',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            warrantyProvidedBy: {
                field: 'warrantyProvidedBy',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            warrantyProviderDescription: {
                field: 'warrantyProviderDescription',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            warrantyProviderContactPerson: {
                field: 'warrantyProviderContactPerson',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            warrantyStartDateTime: {
                field: 'warrantyStartDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            },
            warrantyEndDateTime: {
                field: 'warrantyEndDateTime',
                operator: "EQ",
                value: null,
                order: "ASC",
                sort: false
            }
        };
    };
    WarrantyComponent.prototype.initWarranty = function () {
        this.warranty = {
            id: null,
            statusFlag: null,
            warrantyNumber: null,
            warrantyName: null,
            warrantyDescription: null,
            warrantyProvidedBy: null,
            warrantyProviderDescription: null,
            warrantyProviderPhone: null,
            warrantyProviderEmail: null,
            warrantyProviderContactPerson: null,
            warrantyProvidedDate: null,
            warrantyStartDateTime: null,
            warrantyEndDateTime: null,
            warrantyRenewalDate: null,
            warrantyGraceDateTime: null,
            gracePeriodInMonths: null,
            warrantyAmount: null,
            warrantyRenewalAmount: null,
            comments: null,
            buildings: null,
            equipments: null,
            vehicles: null,
            assetTypeOthers: null,
            existingBuildings: null,
            existingEquipments: null,
            existingVehicles: null,
            existingAssetTypeOthers: null
        };
    };
    WarrantyComponent.prototype.save = function () {
        var _this = this;
        if (this.editMode) {
            this.updateWarranty();
            return;
        }
        var url = "/building/add-warranty-to-building/buildingId/";
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/add-warranty-to-vehicle/vehicleId/";
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-warranty-to-equipment/equipmentId/";
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/add-warranty-to-asset-type-other/assetTypeOtherId/";
        }
        url = url + this.asset.id;
        this._apiService.put(url, this.warranty).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("Warranty successfully added to " +
                _this.asset.assetCategory.description);
            _this.initWarranty();
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    WarrantyComponent.prototype.editWarranty = function (warranty) {
        this.warranty = JSON.parse(JSON.stringify(warranty));
        this.editing = warranty;
        this.editMode = true;
    };
    WarrantyComponent.prototype.updateWarranty = function () {
        var _this = this;
        this._apiService.put("/warranty/create-or-update-warranty", this.warranty).subscribe(function (data) {
            _this.warranty = data;
            _this.editing = Object.assign(_this.editing, data);
            _this._alertsService.success("Warranty successfully updated.");
            _this.initWarranty();
            _this.editMode = false;
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    WarrantyComponent.prototype.removeWarrantyFromAsset = function (warranty) {
        var _this = this;
        var url = "/building/remove-warranty-from-building/buildingId/" + this.asset.id + "/warrantyId/" + warranty.id;
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = "/vehicle/remove-warranty-from-vehicle/vehicleId/" + this.asset.id + "/warrantyId/" + warranty.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/remove-warranty-from-equipment/equipmentId/" + this.asset.id + "/warrantyId/" + warranty.id;
        }
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/remove-warranty-from-asset-type-other/assetTypeOtherId/" + this.asset.id + "/warrantyId/" + warranty.id;
            ;
        }
        this._apiService.delete(url).subscribe(function (data) {
            _this.asset = data;
            _this._alertsService.success("Warranty successfully removed from " + _this.asset.assetCategory.description);
            _this.addedToAsset.emit(data);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    WarrantyComponent.prototype.lookupFieldChange = function (_a) {
        var field = _a.field, operator = _a.operator, value = _a.value;
        var fil = {
            field: field,
            operator: operator,
            value: value
        };
        var exists = this.lookupParams.filters.filter(function (filt) { return filt.field === field; });
        var obj = {};
        obj[field] = value;
        fil.value = this._apiService.parseDateToApiFormat(obj)[field];
        if (!exists.length) {
            this.lookupParams.filters.push(fil);
        }
        else {
            exists[0].value = value;
            exists[0].operator = operator;
        }
    };
    WarrantyComponent.prototype.lookupSortChange = function (_a) {
        var field = _a.field, sort = _a.sort, order = _a.order;
        var sor = {
            field: field,
            order: order
        };
        var exists = this.lookupParams.sorts.filter(function (s) { return s.field === field; });
        if (!exists.length && sort) {
            this.lookupParams.sorts.push(sor);
        }
        else if (exists.length && sort) {
            exists[0].order = order;
        }
        else {
            var ind = this.lookupParams.sorts.indexOf(exists[0]);
            this.lookupParams.sorts.splice(ind, 1);
        }
    };
    WarrantyComponent.prototype.lookupWarranty = function ($event) {
        var _this = this;
        if ($event) {
            this.lookupParams.paging.currentPage = $event.pageNo - 1;
            this.lookupParams.paging.pageSize = $event.pageSize;
        }
        this._apiService.get('/warranty/search-warranties', { "Search": JSON.stringify(this.lookupParams) }).subscribe(function (data) {
            _this.lookupItems = data;
        }, function (error) {
        });
    };
    WarrantyComponent.prototype.addExistingWarrantyToAsset = function (warranty) {
        var _this = this;
        var url = "/building/add-existing-warranty-to-building/buildingId/" + this.asset.id + "/warrantyId/" + warranty.id;
        if (this.asset.assetCategory.id == "OTHER") {
            url = "/asset-type-other/add-existing-warranty-to-asset-type-other/assetTypeOtherId/" + this.asset.id + "/warrantyId/" + warranty.id;
        }
        if (this.asset.assetCategory.id == "EQUIPMENT") {
            url = "/equipment/add-existing-warranty-to-equipment/equipmentId/" + this.asset.id + "/warrantyId/" + warranty.id;
        }
        if (this.asset.assetCategory.id == "VEHICLE") {
            url = url = "/vehicle/add-existing-warranty-to-vehicle/vehicleId/" + this.asset.id + "/warrantyId/" + warranty.id;
        }
        this._apiService.put(url, null).subscribe(function (data) {
            _this.addedToAsset.emit(data);
            _this._alertsService.success("Warranty successfully added to " + _this.asset.assetCategory.description);
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WarrantyComponent.prototype, "asset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */])
    ], WarrantyComponent.prototype, "addedToAsset", void 0);
    WarrantyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "app-warranty",
            template: __webpack_require__("./src/app/ams/components/warranty/warranty.component.html"),
            styles: [__webpack_require__("./src/app/ams/components/warranty/warranty.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__["a" /* AlertsLoaderService */]])
    ], WarrantyComponent);
    return WarrantyComponent;
}());



/***/ })

});
//# sourceMappingURL=app.ams.module.chunk.js.map