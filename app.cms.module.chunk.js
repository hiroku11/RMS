webpackJsonp(["app.cms.module"],{

/***/ "./src/app/cms/app.cms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_MOMENT_FORMATS", function() { return MY_MOMENT_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsModule", function() { return CmsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_sm_menu_sm_menu_component__ = __webpack_require__("./src/app/cms/components/sm-menu/sm-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_pagination_bootstrap__ = __webpack_require__("./node_modules/ngx-pagination-bootstrap/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_side_nav_side_nav_component__ = __webpack_require__("./src/app/cms/components/side-nav/side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_components_module_core_components_module__ = __webpack_require__("./src/app/core.components.module/core.components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_send_email_send_email_component__ = __webpack_require__("./src/app/cms/components/send-email/send-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_notify_admin_notify_admin_component__ = __webpack_require__("./src/app/cms/components/notify-admin/notify-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_document_add_document_add_document_component__ = __webpack_require__("./src/app/cms/components/document/add-document/add-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_document_document_component__ = __webpack_require__("./src/app/cms/components/document/document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_document_document_list_document_list_component__ = __webpack_require__("./src/app/cms/components/document/document-list/document-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_publish_email_publish_email_component__ = __webpack_require__("./src/app/cms/components/publish-email/publish-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cms_routing_module__ = __webpack_require__("./src/app/cms/cms.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_pick_datetime_moment__ = __webpack_require__("./node_modules/ng-pick-datetime-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_pick_datetime__ = __webpack_require__("./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_lookup_user_lookup_component__ = __webpack_require__("./src/app/cms/components/user-lookup/user-lookup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_select_dropdown__ = __webpack_require__("./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_search_search_component__ = __webpack_require__("./src/app/cms/components/search/search.component.ts");
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
var CmsModule = /** @class */ (function () {
    function CmsModule() {
    }
    CmsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_10__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__core_components_module_core_components_module__["a" /* CoreComponentsModule */], __WEBPACK_IMPORTED_MODULE_13__cms_routing_module__["a" /* CmsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng_pick_datetime__["e" /* OwlDateTimeModule */], __WEBPACK_IMPORTED_MODULE_14_ng_pick_datetime_moment__["a" /* OwlMomentDateTimeModule */], __WEBPACK_IMPORTED_MODULE_1_ngx_pagination_bootstrap__["a" /* PaginationModule */], __WEBPACK_IMPORTED_MODULE_17_ngx_select_dropdown__["a" /* SelectDropDownModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_16__components_user_lookup_user_lookup_component__["a" /* UserLookupComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__components_document_document_component__["a" /* DocumentComponent */], __WEBPACK_IMPORTED_MODULE_11__components_document_document_list_document_list_component__["a" /* DocumentListComponent */], __WEBPACK_IMPORTED_MODULE_7__components_document_add_document_add_document_component__["a" /* AddDocumentComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_notify_admin_notify_admin_component__["a" /* NotifyAdminComponent */], __WEBPACK_IMPORTED_MODULE_12__components_publish_email_publish_email_component__["a" /* PublishEmailComponent */], __WEBPACK_IMPORTED_MODULE_5__components_send_email_send_email_component__["a" /* SendEmailComponent */], __WEBPACK_IMPORTED_MODULE_2__components_side_nav_side_nav_component__["a" /* SideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_user_lookup_user_lookup_component__["a" /* UserLookupComponent */], __WEBPACK_IMPORTED_MODULE_18__components_search_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_0__components_sm_menu_sm_menu_component__["a" /* SmMenuComponent */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_15_ng_pick_datetime__["b" /* OWL_DATE_TIME_FORMATS */], useValue: MY_MOMENT_FORMATS }],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_16__components_user_lookup_user_lookup_component__["a" /* UserLookupComponent */], __WEBPACK_IMPORTED_MODULE_18__components_search_search_component__["a" /* SearchComponent */]]
        })
    ], CmsModule);
    return CmsModule;
}());



/***/ }),

/***/ "./src/app/cms/cms.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CmsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_notify_admin_notify_admin_component__ = __webpack_require__("./src/app/cms/components/notify-admin/notify-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_send_email_send_email_component__ = __webpack_require__("./src/app/cms/components/send-email/send-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_document_add_document_add_document_component__ = __webpack_require__("./src/app/cms/components/document/add-document/add-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_document_document_component__ = __webpack_require__("./src/app/cms/components/document/document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_document_document_list_document_list_component__ = __webpack_require__("./src/app/cms/components/document/document-list/document-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_publish_email_publish_email_component__ = __webpack_require__("./src/app/cms/components/publish-email/publish-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var cmsRoutes = [
    { path: '', redirectTo: "document" },
    {
        path: 'document', component: __WEBPACK_IMPORTED_MODULE_5__components_document_document_component__["a" /* DocumentComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_document_document_list_document_list_component__["a" /* DocumentListComponent */], pathMatch: 'full' },
            { path: 'edit-document/:id', component: __WEBPACK_IMPORTED_MODULE_2__components_document_add_document_add_document_component__["a" /* AddDocumentComponent */], pathMatch: 'full' },
            { path: 'document-list', component: __WEBPACK_IMPORTED_MODULE_6__components_document_document_list_document_list_component__["a" /* DocumentListComponent */], pathMatch: 'full' },
            { path: 'add-document', component: __WEBPACK_IMPORTED_MODULE_2__components_document_add_document_add_document_component__["a" /* AddDocumentComponent */], pathMatch: 'full' },
            { path: 'send-email/:id', component: __WEBPACK_IMPORTED_MODULE_1__components_send_email_send_email_component__["a" /* SendEmailComponent */], pathMatch: 'full' },
            { path: 'publish-document/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_publish_email_publish_email_component__["a" /* PublishEmailComponent */], pathMatch: 'full' },
            { path: 'notify-admin/:id', component: __WEBPACK_IMPORTED_MODULE_0__components_notify_admin_notify_admin_component__["a" /* NotifyAdminComponent */], pathMatch: 'full' },
        ], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */]]
    },
];
var CmsRoutingModule = /** @class */ (function () {
    function CmsRoutingModule() {
    }
    CmsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* RouterModule */].forChild(cmsRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* RouterModule */]],
            providers: []
        })
    ], CmsRoutingModule);
    return CmsRoutingModule;
}());



/***/ }),

/***/ "./src/app/cms/components/document/add-document/add-document.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pb-3\">\n  <div class=\"col-md-12\">\n    <h4>\n      <span class=\"fa fa-folder\"></span> {{editMode?'Edit':'Add'}} Document</h4>\n  </div>\n</div>\n\n\n<div class=\"tab-content\">\n  <h5>Document Details</h5>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Document ID</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.documentId\" readonly/>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Title</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.documentTitle\" name=\"documentTitle\" />\n    </div>\n\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Status</label>\n      <select class=\"form-control\" [disabled]=\"!editMode\" [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"document.documentStatus\">\n        <option value=\"null\"></option>\n        <option *ngFor=\"let opt of dropdownsData.documentStatuses\" [ngValue]=\"opt\">{{opt.description}}</option>\n      </select>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"document.documentDescription\" name=\"documentDescription\" maxlength=\"256\"></textarea>\n    </div>\n  </div>\n\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Document Classification</label>\n      <select class=\"form-control\" [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"document.documentClassification\">\n        <option value=\"null\"></option>\n        <option *ngFor=\"let opt of dropdownsData.documentClassifications\" [ngValue]=\"opt\">{{opt.description}}</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Published</label>\n      <select class=\"form-control\" disabled [(ngModel)]=\"document.isPublished\">\n        <option value=\"null\"></option>\n        <option value=\"Y\">Yes</option>\n        <option value=\"N\">No</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Published Date</label>\n      <input class=\"form-control\" disabled [owlDateTime]=\"dt1\" [owlDateTimeTrigger]=\"dt1\" [disabled]=\"true\" [(ngModel)]=\"document.publishedDate\"\n        name=\"publishedDate\" />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Publish Comments</label>\n      <textarea class=\"form-control\" disabled [(ngModel)]=\"document.publishComments\" name=\"publishComments\" maxlength=\"256\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-4\">\n      <label>LMS Notified</label>\n      <select class=\"form-control\" disabled [(ngModel)]=\"document.isLmsNotified\">\n        <option value=\"null\"></option>\n        <option value=\"N\">No</option>\n        <option value=\"Y\">Yes</option>\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>LMS Notified by</label>\n   \n      <input class=\"form-control\" disabled [ngModel]=\"document.lmsNotifiedBy?.fullName\" name=\"lmsNotifiedBy\" />\n    </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>LMS Notified Date</label>\n      <input class=\"form-control\" [owlDateTime]=\"dt2\" [owlDateTimeTrigger]=\"dt2\" [disabled]=\"true\" [(ngModel)]=\"document.lmsNotificationDate\"\n        name=\"lmsNotificationDate\" />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt2></owl-date-time>\n    </div>\n\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>LMS Notification Comments</label>\n      <textarea class=\"form-control\" disabled [(ngModel)]=\"document.lmsNotificationComments\" name=\"lmsNotificationComments\" maxlength=\"256\"></textarea>\n    </div>\n  </div>\n\n\n\n\n  <div class=\"row pb-2\">\n      <div class=\"col-sm-12 col-md-4\">\n          <label>Never Expires</label>\n          <select class=\"form-control\" [(ngModel)]=\"document.neverExpires\" (change)=\"neverExpireChange()\">\n            <option value=\"null\"></option>\n            <option value=\"N\">No</option>\n            <option value=\"Y\">Yes</option>\n          </select>\n        </div>\n    <div class=\"col-sm-12 col-md-4\">\n      <label>Expiry Date</label>\n      <input class=\"form-control\" [disabled]=\"document.neverExpires == 'Y'\" [owlDateTime]=\"dt3\" [owlDateTimeTrigger]=\"dt3\" [(ngModel)]=\"document.expiryDate\" name=\"expiryDate\"\n      />\n      <owl-date-time [pickerType]=\"'calendar'\" #dt3></owl-date-time>\n    </div>\n  \n    <div class=\"col-sm-12 col-md-4\">\n      <label>Approval Level</label>\n      <select class=\"form-control\" [compareWith]=\"selectCompareFunction\" [(ngModel)]=\"document.approvalLevel\">\n        <option value=\"null\"></option>\n        <option *ngFor=\"let opt of dropdownsData.approvalLevels\" [ngValue]=\"opt\">{{opt.description}}</option>\n      </select>\n    </div>\n\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <button class=\"btn btn-primary\" (click)=\"save()\">{{editMode? 'Update':'Save'}}</button>\n    </div>\n  </div>\n\n  <h5>Upload File</h5>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>File Description</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"file.fileDescription\" name=\"documentDescription\" maxlength=\"256\"></textarea>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    \n    <div class=\"col-sm-12 col-md-4\">\n      <label>File</label>\n      <input class=\"form-control\" (change)=\"documentSelected($event)\" type=\"file\" [disabled]=\"!file.fileDescription\"\n      />\n    </div>\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Status</label>\n      <select class=\"form-control\" [(ngModel)]=\"file.statusCode\">\n        <option value=\"null\"></option>\n        <option *ngFor=\"let opt of dropdownsData.versionStatuses\" [ngValue]=\"opt.id\">{{opt.description}}</option>\n\n      </select>\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Comments</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"file.comments\" />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <button class=\"btn btn-primary\" (click)=\"uploadDocumentVersion()\">Upload</button>\n    </div>\n  </div>\n  <h5>Version History</h5>\n  <table class=\"table table-bordered cms-table\">\n    <thead>\n      <th>File Name</th>\n      <th>Description</th>\n      <th>Version</th>\n      <th>Status</th>\n      <th>Added By</th>\n      <!-- <th>Added Date</th> -->\n      <th>Reviewd By</th>\n      <!-- <th>Reviewd Date</th> -->\n      <th>Approved By</th>\n      <!-- <th>Approved Date</th> -->\n      <th></th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let doc of document.complianceDocumentVersionHistoryView | sortBy: reverse : keyName;\">\n        <td>{{doc.originalFileName}}</td>\n        <td>{{doc.fileDescription}}</td>\n        <td>{{doc.versionNumber}}</td>\n        <td>{{doc.documentHistoryStatusDescription}}</td>\n        <td>{{doc.addedUserFullName}}</td>\n        <!-- <td>{{doc.addedDate | date: \"dd/MM/yyyy\"}}</td> -->\n        <td>{{doc.reviewedUserFullName}}</td>\n        <!-- <td>{{doc.reviewedDate | date: \"dd/MM/yyyy\"}}</td> -->\n        <td>{{doc.approvedUserFullName}}</td>\n        <!-- <td>{{doc.approvedDate | date: \"dd/MM/yyyy\"}}</td> -->\n        <td>\n          <span class=\"fa fa-file btn btn-sm  btn-outline-info\" data-toggle=\"tooltip\" title=\"Publish\" [routerLink]=\"['/cms/publish-document',doc.id]\"></span>\n          <span class=\"fa fa-bell btn btn-sm  btn-outline-info\" data-toggle=\"tooltip\" title=\"Notify\" [routerLink]=\"['/cms/notify-admin',doc.id]\"></span>\n          <span class=\"fa fa-envelope btn btn-sm  btn-outline-info\" data-toggle=\"tooltip\" title=\"Email\" [routerLink]=\"['/cms/document/send-email',doc.id]\"></span>\n          <span class=\"fa fa-download btn btn-sm btn-outline-info\" data-toggle=\"tooltip\" title=\"Download\" (click)=\"downloadVersion(doc)\"></span>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-danger\" data-toggle=\"tooltip\" title=\"Delete\" (click)=\"deleteVersionHistory(doc)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/cms/components/document/add-document/add-document.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cms/components/document/add-document/add-document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver_FileSaver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver_FileSaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_file_saver_FileSaver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddDocumentComponent = /** @class */ (function () {
    function AddDocumentComponent(_apiService, _alertsService, route, _sharedService) {
        var _this = this;
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this.route = route;
        this._sharedService = _sharedService;
        this.document = {};
        this.editMode = false;
        this.file = {};
        this.dropdownsData = {};
        this.reverse = false;
        this.keyName = 'versionNumber';
        this.dropdownsData = this._sharedService.cmsDropDownsData;
        if (!this._sharedService.cmsDropDownsData.documentStatuses || !this._sharedService.cmsDropDownsData.documentClassifications) {
            this._sharedService.getCmsDropdownsData();
        }
        this._sharedService.cmsDropDownsService.subscribe(function (data) {
            _this.dropdownsData = data;
        });
    }
    AddDocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var Id = params["id"];
            if (Id) {
                _this.getDocumentById(Id);
                _this.editMode = true;
            }
            else {
                _this.initDocumnet();
            }
        });
    };
    AddDocumentComponent.prototype.initDocumnet = function () {
        this.document = {
            "id": null,
            "statusFlag": null,
            "documentId": null,
            "documentTitle": null,
            "documentDescription": null,
            "documentClassification": null,
            "documentStatus": {
                "id": "DRAFT",
                description: "Draft"
            },
            "approvalLevel": null,
            "isPublished": null,
            "publishedDate": null,
            "publishedBy": null,
            "publishComments": null,
            "isLmsNotified": null,
            "lmsNotificationDate": null,
            "lmsNotifiedBy": {
                "fullName": null
            },
            "lmsNotificationComments": null,
            "expiryDate": null,
            "neverExpires": null,
            "complianceDocumentVersionHistory": null
        };
    };
    AddDocumentComponent.prototype.getDocumentById = function (docId) {
        var _this = this;
        this._apiService.get("/compliance/complianceDocumentId/" + docId).subscribe(function (data) {
            _this.document = data;
        }, function (error) {
            _this._alertsService.error("Error occured while getting documents details");
        });
    };
    AddDocumentComponent.prototype.selectCompareFunction = function (item1, item2) {
        if (item1 == null || item2 == null) {
            return false;
        }
        return item1.id == item2.id;
    };
    AddDocumentComponent.prototype.uploadDocumentVersion = function () {
        var _this = this;
        if (!this.document.id) {
            this._alertsService.error("Please save document details first.");
            return;
        }
        this.formData.append("comments", this.file.comments);
        this.formData.append("statusCode", this.file.statusCode);
        this._apiService.post("/compliance/save-compliance-document-history", this.formData)
            .subscribe(function (data) {
            _this._alertsService.success("Document successfully uploaded.");
            _this.clearSelectedFile();
            _this.getVersionHistory();
        }, function (error) {
            _this._alertsService.error("Some error occured while uploading document.");
        });
    };
    AddDocumentComponent.prototype.clearSelectedFile = function () {
        this.file = {};
        this.fileInput.value = null;
    };
    AddDocumentComponent.prototype.documentSelected = function ($event) {
        this.formData = new FormData();
        this.fileInput = $event.target;
        this.formData.append("complianceDocumentId", this.document.id);
        this.formData.append("file", $event.target.files[0]);
        this.formData.append("fileDescription", this.file.fileDescription);
    };
    AddDocumentComponent.prototype.save = function () {
        var _this = this;
        this._apiService.put("/compliance/create-or-update-compliance-document", this.document).subscribe(function (data) {
            _this._alertsService.success("Document details saved successfully.");
            _this.document = data;
            _this.editMode = true;
            //this.initDocumnet();
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    AddDocumentComponent.prototype.getVersionHistory = function () {
        var _this = this;
        this._apiService.get("/compliance/compliance-document-history/complianceDocumentId/" + this.document.id).subscribe(function (data) {
            _this.document.complianceDocumentVersionHistoryView = data;
        }, function (error) {
            _this._alertsService.error("Error getting version history.");
        });
    };
    AddDocumentComponent.prototype.deleteVersionHistory = function (ver) {
        var _this = this;
        this._apiService.delete("/compliance/delete-compliance-document-history/id/" + ver.id).subscribe(function (data) {
            _this._alertsService.success("Version history successfully deleted.");
            _this.getVersionHistory();
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    AddDocumentComponent.prototype.downloadVersion = function (ver) {
        var _this = this;
        this._apiService.get("/compliance/download-compliance-document-history/id/" + ver.id, {}, true, true).subscribe(function (data) {
            _this.saveFile(data, ver.originalFileName);
        }, function (error) {
            _this._alertsService.error("Error downloading version history. Try again.");
        });
    };
    AddDocumentComponent.prototype.saveFile = function (blobContent, fileName) {
        var blob = new Blob([blobContent], { type: 'application/octet-stream' });
        Object(__WEBPACK_IMPORTED_MODULE_5_file_saver_FileSaver__["saveAs"])(blob, fileName);
    };
    AddDocumentComponent.prototype.neverExpireChange = function () {
        if (this.document.neverExpires == 'Y') {
            this.document.expiryDate = null;
        }
    };
    AddDocumentComponent.prototype.changeSort = function (keyName) {
        this.reverse = !this.reverse;
        this.keyName = keyName;
    };
    AddDocumentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-add-document',
            template: __webpack_require__("./src/app/cms/components/document/add-document/add-document.component.html"),
            styles: [__webpack_require__("./src/app/cms/components/document/add-document/add-document.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]])
    ], AddDocumentComponent);
    return AddDocumentComponent;
}());



/***/ }),

/***/ "./src/app/cms/components/document/document-list/document-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h4>\n      <span class=\"fa fa-building\"></span> Documents |\n      <button class=\"btn btn-info btn-sm\" [routerLink]=\"'add-document'\">\n        <span class=\"fa fa-plus\"></span> Add</button>\n    </h4>\n  </div>\n  <div class=\"col-md-6\">\n    <button class=\"btn btn-info btn-sm float-right ml-2\" (click)=\"advancedSearch()\">\n      <span class=\"fa fa-search\"></span> Advance Search</button>\n    <div class=\"input-group search float-right\">\n      <input class=\"form-control form-control-sm \" placeholder=\"Search\" [(ngModel)]=\"searchText\" />\n      <span class=\"input-group-addon\">\n        <span class=\"fa fa-search\"></span>\n      </span>\n    </div>\n\n  </div>\n</div>\n<table class=\"table table-bordered cms-table\">\n  <thead>\n    <th (click)=\"changeSort('documentId')\"> ID</th>\n    <th (click)=\"changeSort('documentTitle')\"> Title</th>\n    <th (click)=\"changeSort('versionNumber')\">Version</th>\n    <th (click)=\"changeSort('documentClassificationDescription')\">Classification </th>\n    <th (click)=\"changeSort('documentStatusDescription')\">Status</th>\n    <th (click)=\"changeSort('isPublished')\">Published</th>\n    <!-- <th>Expiry Date </th> -->\n    <th (click)=\"changeSort('addedBy')\">Author</th>\n    <th (click)=\"changeSort('approvedBy')\">Approver</th>\n    <th></th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let doc of documentsList | searchFilter: searchText | sortBy: reverse : keyName; let i = index;\">\n      <td>\n        <a [routerLink]=\"['edit-document',doc.id]\">{{doc.documentId}}</a>\n      </td>\n      <td> {{doc.documentTitle}}</td>\n      <td>{{doc.versionNumber}}</td>\n      <td>{{doc.documentClassificationDescription}}</td>\n      <td>{{doc.documentStatusDescription}}</td>\n      <td> {{doc.isPublished}}</td>\n      <!-- <td>{{doc.expiryDate ? (doc.expiryDate | date:'dd/MM/yyyy'): 'NA'}}</td> -->\n      <td>{{doc.addedBy}}</td>\n      <td>{{doc.approvedBy}}</td>\n      <td>\n        <span class=\"fa fa-envelope btn btn-sm  btn-outline-info\" data-toggle=\"tooltip\" title=\"Email\" [routerLink]=\"['send-email',doc.versionHistoryId]\"></span>\n        <span class=\"fa fa-download btn btn-sm btn-outline-info\" data-toggle=\"tooltip\" title=\"Download\" (click)=\"downloadDocument(doc)\"></span>\n        <span class=\"fa fa-trash btn btn-sm btn-outline-danger\" data-toggle=\"tooltip\" title=\"Delete\" (click)=\"deleteDocumnet(doc,i)\"></span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<ng-pagination *ngIf=\"documentsList.length>0\" [itemsCount]=\"itemsCount\" [pageSize]=\"pageSize\" (getPageData)=\"getPageData($event)\"></ng-pagination>\n<app-ajax-loader *ngIf=\"!documentsList\"></app-ajax-loader>"

/***/ }),

/***/ "./src/app/cms/components/document/document-list/document-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cms/components/document/document-list/document-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search_component__ = __webpack_require__("./src/app/cms/components/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocumentListComponent = /** @class */ (function () {
    function DocumentListComponent(_apiService, _alertService, viewContainerRef, componentFactoryResolver) {
        this._apiService = _apiService;
        this._alertService = _alertService;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.documentsList = [];
        this.pageSize = 10;
        this.itemsCount = 0;
        this.reverse = false;
        this.keyName = 'documentId';
        this.searchParams = {
            paging: { currentPage: 0, pageSize: 10 },
            sorts: [
                {
                    field: "documentTitle",
                    order: "ASC"
                }
            ],
            filters: []
        };
        this.getDocuments();
    }
    DocumentListComponent.prototype.ngOnInit = function () {
    };
    DocumentListComponent.prototype.getDocuments = function () {
        var _this = this;
        this._apiService.get("/compliance/search-compliance-document-and-version-history", { Search: JSON.stringify(this.searchParams) }).subscribe(function (data) {
            _this.documentsList = data.complianceDocuments;
            _this.itemsCount = data.totalRecords;
        }, function (error) {
            console.log(error);
        });
    };
    DocumentListComponent.prototype.getPageData = function ($event) {
        this.searchParams.paging.currentPage = $event.pageNo - 1;
        this.searchParams.paging.pageSize = $event.pageSize;
        this.getDocuments();
    };
    DocumentListComponent.prototype.downloadDocument = function (doc) {
        var _this = this;
        this._apiService.get("/compliance/download-compliance-document-history/id/" + doc.versionHistoryId, {}, true, true).subscribe(function (data) {
            _this.saveFile(data, doc.originalFileName);
        }, function (error) {
            _this._alertService.error("Some error occured while downloading document.");
            console.log(error);
        });
    };
    DocumentListComponent.prototype.saveFile = function (blobContent, fileName) {
        var blob = new Blob([blobContent], { type: 'application/octet-stream' });
        Object(__WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__["saveAs"])(blob, fileName);
    };
    DocumentListComponent.prototype.deleteDocumnet = function (doc, index) {
        var _this = this;
        this._apiService.delete("/compliance/delete-compliance-document/complianceDocumentId/" + doc.id, {}, true).subscribe(function (data) {
            _this._alertService.success("Documnet deleted successfully");
            _this.documentsList.splice(index, 1);
        }, function (error) {
            _this._alertService.error(error);
            console.log(error);
        });
    };
    DocumentListComponent.prototype.advancedSearch = function () {
        var _this = this;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__search_search_component__["a" /* SearchComponent */]);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.parentSearchParams = this.searchParams;
        this.componentRef.instance.searchResult.subscribe(function (data) {
            _this.advancedSearchResult(data);
        });
        this.componentRef.instance.closeModal.subscribe(function (searchParams) {
            _this.closeModal(searchParams);
        });
    };
    DocumentListComponent.prototype.closeModal = function (searchParams) {
        this.componentRef.instance.searchResult.unsubscribe();
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
        if (JSON.stringify(this.searchParams) == JSON.stringify(searchParams)) {
            this.getDocuments();
        }
    };
    DocumentListComponent.prototype.advancedSearchResult = function ($event) {
        this.itemsCount = $event.data.totalRecords;
        this.documentsList = $event.data.complianceDocuments;
        this.searchParams = $event.searchParams;
    };
    DocumentListComponent.prototype.changeSort = function (keyName) {
        this.reverse = !this.reverse;
        this.keyName = keyName;
    };
    DocumentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-document-list',
            template: __webpack_require__("./src/app/cms/components/document/document-list/document-list.component.html"),
            styles: [__webpack_require__("./src/app/cms/components/document/document-list/document-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], DocumentListComponent);
    return DocumentListComponent;
}());



/***/ }),

/***/ "./src/app/cms/components/document/document.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header class=\"d-none d-lg-block\"></app-header>\n<div class=\"row view\">\n  <div class=\"col-lg-2 col-md-12 pl-0 pr-0 d-none d-lg-block\" >\n    <app-side-nav [thisView]=\"'document'\"></app-side-nav>\n  </div>\n  <div class=\"col-lg-2 col-md-12 pl-0 pr-0 d-lg-none\" >\n    <app-sm-menu [thisView]=\"'document'\"></app-sm-menu>\n  </div>\n  <div class=\"col-lg-10 col-md-12 col-sm-12 content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cms/components/document/document.component.scss":
/***/ (function(module, exports) {

module.exports = ".zero-margin {\n  margin: 0 !important; }\n\n.zero-padding {\n  padding: 0 !important; }\n\n.center-block {\n  display: block;\n  margin: auto; }\n\n.text-overflow {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.fa-6 {\n  font-size: 10em; }\n\n.content {\n  border-color: #019f31; }\n\nthead {\n  background-color: #019f31;\n  color: white; }\n\n.btn:hover {\n  background-color: #019f31; }\n"

/***/ }),

/***/ "./src/app/cms/components/document/document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(_sharedService) {
        this._sharedService = _sharedService;
        this._sharedService.getCmsDropdownsData();
    }
    DocumentComponent.prototype.ngOnInit = function () {
    };
    DocumentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-document',
            template: __webpack_require__("./src/app/cms/components/document/document.component.html"),
            styles: [__webpack_require__("./src/app/cms/components/document/document.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/cms/components/notify-admin/notify-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pb-3\">\n  <div class=\"col-md-12\">\n    <h4>\n      <span class=\"fa fa-file\"></span>Notify Admin</h4>\n  </div>\n</div>\n\n\n<div class=\"tab-content\">\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Document ID</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.documentId\" readonly/>\n    </div>\n\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Title</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.documentTitle\" readonly/>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Status</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.documentStatusDescription\" readonly />\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Document Classification</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.documentClassificationDescription\" readonly />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <label>File Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.originalFileName\" readonly/>\n    </div>\n    <div class=\"col-6\">\n      <label>Version Number</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.versionNumber\" readonly/>\n    </div>\n\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <label>Version Status</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.versionStatusDescription\" readonly/>\n    </div>\n    <div class=\"col-6\">\n      <label>Approved By</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.approvedBy\" readonly/>\n    </div>\n\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <label>Notification Date</label>\n      <input class=\"form-control\" [(ngModel)]=\"notifiedDate\" readonly/>\n    </div>\n    <div class=\"col-6\">\n      <label>Notified By</label>\n      <input class=\"form-control\" [(ngModel)]=\"notifiedBy\" readonly/>\n    </div>\n\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Comments</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"data.comments\" maxlength=\"256\"></textarea>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <button class=\"btn btn-primary\" (click)=\"Save()\">Notify</button>\n      <button class=\"btn btn-danger\" [routerLink]=\"['/cms/document/edit-document',document.complianceDocumentId]\">Cancel</button> \n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/cms/components/notify-admin/notify-admin.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cms/components/notify-admin/notify-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotifyAdminComponent = /** @class */ (function () {
    function NotifyAdminComponent(route, _apiService, _alertsService, userService) {
        this.route = route;
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this.userService = userService;
        this.document = {};
        this.data = {};
        this.notifiedDate = (new Date()).toJSON().slice(0, 10).split('-').reverse().join('/');
        this.userDetails = this.userService.userDetails;
        this.notifiedBy = this.userDetails.firstName + " " + this.userDetails.lastName;
    }
    NotifyAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.initDocumnet();
            _this.Id = params["id"];
            if (_this.Id) {
                _this.getDocumentById(_this.Id);
            }
            else {
                //this.initDocumnet()
            }
        });
    };
    NotifyAdminComponent.prototype.initDocumnet = function () {
        this.data = {
            "versionHistoryId": this.Id,
            "comments": null,
        };
    };
    NotifyAdminComponent.prototype.Save = function () {
        var _this = this;
        this.data.versionHistoryId = this.document.versionHistoryId;
        this._apiService.post("/compliance/notify-lms-admin", this.data)
            .subscribe(function (data) {
            _this._alertsService.success("Notified admin successfully.");
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    NotifyAdminComponent.prototype.getDocumentById = function (docId) {
        var _this = this;
        this._apiService.get("/compliance/send-email-info/versionHistoryId/" + docId).subscribe(function (data) {
            _this.document = data;
            console.log(_this.document);
        }, function (error) {
            _this._alertsService.error("Error occured while getting documents details");
        });
    };
    NotifyAdminComponent.prototype.Reset = function () {
        this.initDocumnet();
    };
    NotifyAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'app-notify-admin',
            template: __webpack_require__("./src/app/cms/components/notify-admin/notify-admin.component.html"),
            styles: [__webpack_require__("./src/app/cms/components/notify-admin/notify-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], NotifyAdminComponent);
    return NotifyAdminComponent;
}());



/***/ }),

/***/ "./src/app/cms/components/publish-email/publish-email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pb-3\">\n  <div class=\"col-md-12\">\n    <h4>\n      <span class=\"fa fa-file\"></span> Publish Email</h4>\n  </div>\n</div>\n\n\n<div class=\"tab-content\">\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Document ID</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.documentId\" readonly/>\n    </div>\n\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Title</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.documentTitle\" readonly/>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Status</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.documentStatusDescription\" readonly />\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Document Classification</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.documentClassificationDescription\" readonly />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <label>File Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.originalFileName\" readonly/>\n    </div>\n    <div class=\"col-6\">\n      <label>Version Number</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.versionNumber\" readonly/>\n    </div>\n\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <label>Version Status</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.versionStatusDescription\" readonly/>\n    </div>\n    <div class=\"col-6\">\n      <label>Approved By</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.approvedBy\" readonly/>\n    </div>\n </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <label>Publish Date</label>\n      <input class=\"form-control\" [(ngModel)]=\"notifiedDate\"/>\n    </div>\n    <div class=\"col-6\">\n      <label>Published By</label>\n      <input class=\"form-control\" [(ngModel)]=\"notifiedBy\"/>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Comments</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"data.comments\" name=\"documentDescription\" maxlength=\"256\"></textarea>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label> Departments</label>\n      <ngx-select-dropdown *ngIf=\"dropDownsData.departmentList\" [multiple]=\"true\" \n      [config]=\"multiselectConfig\" [(value)]=\"data.departments\" [options]=\"dropDownsData.departmentList\"></ngx-select-dropdown>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Selected users</label>\n      <button class=\"btn btn-primary btn-sm\" (click)=\"userLookup()\">User Lookup</button>\n    </div>\n  </div>\n  <table class=\"table table-bordered\">\n    <thead>\n      <th>\n        Login Id\n      </th>\n      <th>\n        First Name\n      </th>\n      <th>\n        Last Name\n      </th>\n      <th></th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of data.users\">\n        \n        <td>{{user.userLoginId}}\n        </td>\n        <td>{{user.firstName}}</td>\n        <td>{{user.lastName}}</td>\n        <td>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-success\" (click)=\"deleteUser(user)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <button class=\"btn btn-primary\" (click)=\"publish()\">Publish</button>\n      <button class=\"btn btn-danger\" [routerLink]=\"['/cms/document/edit-document',document.complianceDocumentId]\">Cancel</button> \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/cms/components/publish-email/publish-email.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cms/components/publish-email/publish-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_lookup_user_lookup_component__ = __webpack_require__("./src/app/cms/components/user-lookup/user-lookup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PublishEmailComponent = /** @class */ (function () {
    function PublishEmailComponent(route, _apiService, _alertsService, viewContainerRef, componentFactoryResolver, userService, _sharedService) {
        var _this = this;
        this.route = route;
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.userService = userService;
        this._sharedService = _sharedService;
        this.document = {};
        this.dropDownsData = {};
        this.notifiedDate = (new Date()).toJSON().slice(0, 10).split('-').reverse().join('/');
        this.multiselectConfig = {
            displayKey: "description",
            search: false
        };
        this.dropDownsData = this._sharedService.cmsDropDownsData;
        if (!this._sharedService.cmsDropDownsData.departmentList) {
            this._sharedService.getCmsDropdownsData();
        }
        this._sharedService.cmsDropDownsService.subscribe(function (data) {
            _this.dropDownsData = data;
        });
        this.userDetails = this.userService.userDetails;
        this.notifiedBy = this.userDetails.firstName + " " + this.userDetails.lastName;
    }
    PublishEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initDocumnet();
        this.route.params.subscribe(function (params) {
            var Id = params["id"];
            if (Id) {
                _this.getDocumentById(Id);
            }
        });
    };
    PublishEmailComponent.prototype.initDocumnet = function () {
        this.data = {
            "versionHistoryId": null,
            "comments": null,
            "departments": [],
            "users": [],
            "emailIds": []
        };
    };
    PublishEmailComponent.prototype.getDocumentById = function (docId) {
        var _this = this;
        this._apiService.get("/compliance/send-email-info/versionHistoryId/" + docId).subscribe(function (data) {
            _this.document = data;
            console.log(_this.document);
        }, function (error) {
            _this._alertsService.error("Error occured while getting documents details");
        });
    };
    PublishEmailComponent.prototype.publish = function () {
        var _this = this;
        this.data.versionHistoryId = this.document.versionHistoryId;
        this._apiService.post("/compliance/publish-document", this.data).subscribe(function (data) {
            _this._alertsService.success("Documnet published succesfully.");
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    PublishEmailComponent.prototype.Reset = function () {
        this.initDocumnet();
    };
    PublishEmailComponent.prototype.userLookup = function () {
        var _this = this;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__user_lookup_user_lookup_component__["a" /* UserLookupComponent */]);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assignUser.subscribe(function (data) {
            _this.assignUser(data);
        });
        this.componentRef.instance.closeModal.subscribe(function () {
            _this.closeModal();
        });
    };
    PublishEmailComponent.prototype.closeModal = function () {
        this.componentRef.instance.assignUser.unsubscribe();
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
    };
    PublishEmailComponent.prototype.assignUser = function (user) {
        this.data.users.push(user);
    };
    PublishEmailComponent.prototype.deleteUser = function (user) {
        for (var i = 0; i < this.data.users.length; i++) {
            if (this.data.users[i].firstName === user.firstName && this.data.users[i].lastName === user.lastName) {
                this.data.users.splice(i, 1);
                break;
            }
        }
    };
    PublishEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({
            selector: 'app-publish-email',
            template: __webpack_require__("./src/app/cms/components/publish-email/publish-email.component.html"),
            styles: [__webpack_require__("./src/app/cms/components/publish-email/publish-email.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_6__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]])
    ], PublishEmailComponent);
    return PublishEmailComponent;
}());



/***/ }),

/***/ "./src/app/cms/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" [ngClass]=\"{'show backdrop d-block':display}\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h3 class=\"modal-title\">Advanced Search</h3>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"close()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n\n                <div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Document ID</label>\n                        </div>\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.documentId)\" [(ngModel)]=\"lookupOptions.documentId.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"lookupOptions.documentId.value\" (change)=\"lookupFieldChange(lookupOptions.documentId)\" name=\"documentId\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.documentId.sort\" (change)=\"lookupSortChange(lookupOptions.documentId)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.documentId)\" [(ngModel)]=\"lookupOptions.documentId.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Title</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.documentTitle)\" [(ngModel)]=\"lookupOptions.documentTitle.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"lookupOptions.documentTitle.value\" (change)=\"lookupFieldChange(lookupOptions.documentTitle)\" name=\"documentTitle\" />\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.documentTitle.sort\" (change)=\"lookupSortChange(lookupOptions.documentTitle)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.documentTitle)\" [(ngModel)]=\"lookupOptions.documentTitle.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Classification</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.documentClassificationCode)\" [(ngModel)]=\"lookupOptions.documentClassificationCode.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <select class=\"form-control\" [(ngModel)]=\"lookupOptions.documentClassificationCode.value\"\n                            (change)=\"lookupFieldChange(lookupOptions.documentClassificationCode)\">\n                                <option value=\"null\"></option>\n                                <option *ngFor=\"let department of dropDownsData.documentClassifications\" [ngValue]=\"department.id\">{{department.description}}</option>\n                            </select>\n                         \n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.documentClassificationCode.sort\" (change)=\"lookupSortChange(lookupOptions.documentClassificationCode)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.documentClassificationCode)\" [(ngModel)]=\"lookupOptions.documentClassificationCode.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Status</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" [(ngModel)]=\"lookupOptions.documentStatusCode.operator\"\n                            (change)=\"lookupFieldChange(lookupOptions.documentStatusCode)\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                                \n                                <select class=\"form-control\" [(ngModel)]=\"lookupOptions.documentStatusCode.value\"\n                                (change)=\"lookupFieldChange(lookupOptions.documentStatusCode)\">\n                                        <option value=\"null\"></option>\n                                        <option *ngFor=\"let department of dropDownsData.documentStatuses\" [ngValue]=\"department.id\">{{department.description}}</option>\n                                    </select>\n                         \n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.documentStatusCode.sort\" (change)=\"lookupSortChange(lookupOptions.documentStatusCode)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.documentStatusCode)\" [(ngModel)]=\"lookupOptions.documentStatusCode.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Expiry Date</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.expiryDate)\" [(ngModel)]=\"lookupOptions.expiryDate.operator\">\n                                <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                      \n                            <input class=\"form-control\" (dateTimeChange)=\"lookupFieldChange(lookupOptions.expiryDate)\" [owlDateTime]=\"dt9\" [owlDateTimeTrigger]=\"dt9\" [(ngModel)]=\"lookupOptions.expiryDate.date\"\n                            name=\"expiryDate\" />\n                        <owl-date-time [pickerType]=\"'calendar'\" #dt9></owl-date-time>\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.expiryDate.sort\" (change)=\"lookupSortChange(lookupOptions.expiryDate)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.expiryDate)\" [(ngModel)]=\"lookupOptions.expiryDate.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Author</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.addedBy)\" [(ngModel)]=\"lookupOptions.addedBy.operator\">\n                                 <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"lookupOptions.addedBy.value\" (change)=\"lookupFieldChange(lookupOptions.addedBy)\" name=\"addedBy\">\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.addedBy.sort\" (change)=\"lookupSortChange(lookupOptions.addedBy)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.addedBy)\" [(ngModel)]=\"lookupOptions.addedBy.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-3\">\n                            <label>Approver</label>\n                        </div>\n\n                        <div class=\"col-sm-12 col-md-3\">\n                            <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.approvedBy)\" [(ngModel)]=\"lookupOptions.approvedBy.operator\">\n                                 <option value=\"EQ\" selected>Equals</option>\n                                <option value=\"NEQ\">Not equals</option>\n                                <option value=\"STARTS_WITH\">Starts with</option>\n                                <option value=\"ENDS_WITH\">Ends with</option>\n                                <option value=\"CONTAINS\">Contains</option>\n                                <option value=\"NOT_CONTAINS\">Does not contain</option>\n                            </select>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <input class=\"form-control\" [(ngModel)]=\"lookupOptions.approvedBy.value\" (change)=\"lookupFieldChange(lookupOptions.approvedBy)\" name=\"approvedBy\">\n                        </div>\n                        <div class=\"col-sm-12 col-md-2\">\n                            <span>\n                                <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.approvedBy.sort\" (change)=\"lookupSortChange(lookupOptions.approvedBy)\"> Sort\n                            </span>\n                            <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.approvedBy)\" [(ngModel)]=\"lookupOptions.approvedBy.order\">\n                                <option value=\"ASC\">ASC</option>\n                                <option value=\"DESC\">DESC</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n              \n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"searchAsset()\">Submit</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"initSearchParams(true)\">Clear</button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cms/components/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = ".backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh; }\n"

/***/ }),

/***/ "./src/app/cms/components/search/search.component.ts":
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
        this.dropDownsData = this._sharedService.cmsDropDownsData;
        if (!this._sharedService.cmsDropDownsData.documentStatuses) {
            this._sharedService.getCmsDropdownsData();
        }
        this._sharedService.cmsDropDownsService.subscribe(function (data) {
            _this.dropDownsData = data;
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.searchUrl = "/search";
        this.display = true;
        this.initSearchParams(false);
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
        var propsArray = ['documentId', 'documentTitle', 'documentClassificationCode', 'documentStatusCode', 'documentAuthor',
            'addedBy', 'expiryDate', 'approvedBy'];
        propsArray.forEach(function (prop) {
            var parentFilter = {};
            var parentSort = {};
            if (!clear) {
                parentFilter = _this.parentSearchParams.filters.filter(function (item) { return item.field == prop; });
                parentSort = _this.parentSearchParams.sorts.filter(function (item) { return item.field == prop; });
                parentFilter.length != 0 ? parentFilter = parentFilter[0] : parentFilter = {};
                parentSort.length != 0 ? parentSort = parentSort[0] : parentSort = {};
            }
            else {
                _this.searchAsset();
            }
            _this.lookupOptions[prop] = {
                field: prop,
                operator: parentFilter.operator || "EQ",
                value: parentFilter.value || null,
                order: parentSort.order || "ASC",
                // date:  moment(parentFilter.value, "DD/MM/YYYY").toDate(),
                sort: typeof parentSort.order === 'undefined' ? false : true
            };
            // console.log(prop + " " + parentFilter.value );
            // console.log(this.lookupOptions[prop].date);
        });
    };
    SearchComponent.prototype.lookupFieldChange = function (_a) {
        var field = _a.field, operator = _a.operator, value = _a.value, date = _a.date;
        if (date) {
            value = date.format('DD/MM/YYYY');
        }
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
        //    if(this.lookupOptions.documentClassificationCode)  
        //      this.searchParams.filters.push(this.lookupOptions.documentClassificationCode)
        var _this = this;
        this._apiService
            .get('/compliance/search-compliance-document-and-version-history', { Search: JSON.stringify(this.searchParams) })
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
            template: __webpack_require__("./src/app/cms/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/cms/components/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alerts_loader_service__["a" /* AlertsLoaderService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/cms/components/send-email/send-email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pb-3\">\n  <div class=\"col-md-12\">\n    <h4>\n      <span class=\"fa fa-file\"></span> Send Email</h4>\n  </div>\n</div>\n\n\n<div class=\"tab-content\">\n\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Document ID</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.documentId\" readonly/>\n    </div>\n\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Title</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.documentTitle\" readonly/>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Status</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.documentStatusDescription\" readonly />\n    </div>\n    <div class=\"col-sm-12 col-md-6\">\n      <label>Document Classification</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.documentClassificationDescription\" readonly />\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <label>File Name</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.originalFileName\" readonly/>\n    </div>\n    <div class=\"col-6\">\n      <label>Version Number</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.versionNumber\" readonly/>\n    </div>\n\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <label>Version Status</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.versionStatusDescription\" readonly/>\n    </div>\n    <div class=\"col-6\">\n      <label>Approved By</label>\n      <input class=\"form-control\" [(ngModel)]=\"document.approvedBy\" readonly/>\n    </div>\n\n  </div>\n\n  <div class=\"row pb-2\">\n    <div class=\"col-6\">\n      <label>Sent Date</label>\n      <input class=\"form-control\" [(ngModel)]=\"notifiedDate\" readonly/>\n    </div>\n    <div class=\"col-6\">\n      <label>From</label>\n      <input class=\"form-control\" [(ngModel)]=\"notifiedBy\" readonly/>\n    </div>\n\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Sender Comments</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"data.comments\" maxlength=\"256\"></textarea>\n    </div>\n  </div>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <label>Selected users</label>\n    \n      <button class=\"btn btn-primary btn-sm\" (click)=\"userLookup()\">Lookup</button>\n    </div>\n  </div>\n  <table class=\"table table-bordered\">\n    <thead>\n      <th>\n        Login Id\n      </th>\n      <th>\n        First Name\n      </th>\n      <th>\n        Last Name\n      </th>\n      <th></th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of data.users\">\n        \n        <td>{{user.userLoginId}}\n        </td>\n        <td>{{user.firstName}}</td>\n        <td>{{user.lastName}}</td>\n        <td>\n          <span class=\"fa fa-trash btn btn-sm btn-outline-success\" (click)=\"deleteUser(user)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"row pb-2\">\n    <div class=\"col-sm-12\">\n      <button class=\"btn btn-primary\" (click)=\"Save()\">Save</button>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/cms/components/send-email/send-email.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cms/components/send-email/send-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__ = __webpack_require__("./src/app/services/alerts-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_lookup_user_lookup_component__ = __webpack_require__("./src/app/cms/components/user-lookup/user-lookup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SendEmailComponent = /** @class */ (function () {
    function SendEmailComponent(route, _apiService, _alertsService, viewContainerRef, componentFactoryResolver, userService) {
        this.route = route;
        this._apiService = _apiService;
        this._alertsService = _alertsService;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.userService = userService;
        this.document = {};
        this.notifiedDate = (new Date()).toJSON().slice(0, 10).split('-').reverse().join('/');
        this.userDetails = this.userService.userDetails;
        this.notifiedBy = this.userDetails.firstName + " " + this.userDetails.lastName;
    }
    SendEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initDocumnet();
        this.route.params.subscribe(function (params) {
            _this.Id = params["id"];
            if (_this.Id) {
                _this.getDocumentById(_this.Id);
            }
            else {
                //this.initDocumnet()
            }
        });
    };
    SendEmailComponent.prototype.initDocumnet = function () {
        this.data = {
            "versionHistoryId": null,
            "comments": null,
            "users": []
        };
    };
    SendEmailComponent.prototype.Save = function () {
        var _this = this;
        this.data.versionHistoryId = this.document.versionHistoryId;
        this._apiService.post("/compliance/send-email", this.data)
            .subscribe(function (data) {
            _this._alertsService.success("Email successfully sent.");
        }, function (error) {
            _this._alertsService.error(error);
        });
    };
    SendEmailComponent.prototype.getDocumentById = function (docId) {
        var _this = this;
        this._apiService.get("/compliance/send-email-info/versionHistoryId/" + docId).subscribe(function (data) {
            _this.document = data;
            console.log(_this.document);
        }, function (error) {
            _this._alertsService.error("Error occured while getting documents details");
        });
    };
    SendEmailComponent.prototype.Reset = function () {
        this.initDocumnet();
    };
    SendEmailComponent.prototype.userLookup = function () {
        var _this = this;
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_2__user_lookup_user_lookup_component__["a" /* UserLookupComponent */]);
        this.componentRef = this.viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.assignUser.subscribe(function (data) {
            _this.assignUser(data);
        });
        this.componentRef.instance.closeModal.subscribe(function () {
            _this.closeModal();
        });
    };
    SendEmailComponent.prototype.closeModal = function () {
        this.componentRef.instance.assignUser.unsubscribe();
        this.componentRef.instance.closeModal.unsubscribe();
        this.componentRef.destroy();
    };
    SendEmailComponent.prototype.assignUser = function (user) {
        this.data.users.push(user);
    };
    SendEmailComponent.prototype.deleteUser = function (user) {
        for (var i = 0; i < this.data.users.length; i++) {
            if (this.data.users[i].firstName === user.firstName && this.data.users[i].lastName === user.lastName) {
                this.data.users.splice(i, 1);
                break;
            }
        }
    };
    SendEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
            selector: 'app-send-email',
            template: __webpack_require__("./src/app/cms/components/send-email/send-email.component.html"),
            styles: [__webpack_require__("./src/app/cms/components/send-email/send-email.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__["a" /* AlertsLoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_core__["_10" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_5__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], SendEmailComponent);
    return SendEmailComponent;
}());



/***/ }),

/***/ "./src/app/cms/components/side-nav/side-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pr-1 pb-3 pt-3 zero-margin\">\n    <div class=\"col-3\" style=\"vertical-align:middle\">\n        <img src=\"./assets/images/logo@1x.png\" alt=\"gotorisk.co.uk\" class=\"user-image\"/>\n    </div>\n    <div class=\"col-6\" style=\"vertical-align:middle;\">\n        <span>{{userDetails.roles[0].roleName}}</span><br>\n        <span class=\"fa fa-circle text-success\" > Online</span>\n    </div>\n    <div class=\"col-3\">\n        <button class=\"btn float-right btn-info btn-sm\" style=\"vertical-align:middle\" (click)=\"logOut()\">\n            <span class=\"fa fa-power-off \"></span>\n        </button>\n        \n    </div>\n</div>\n<div class=\"navbar\">\n    <ul>\n        <li [ngClass]=\"{active:thisView=='document'}\">\n            <a [routerLink]=\"['/cms/document']\" title=\"\">\n                <i class=\"fa fa-file\"></i> Document\n            </a>\n        </li>       \n    </ul>\n\n</div>"

/***/ }),

/***/ "./src/app/cms/components/side-nav/side-nav.component.scss":
/***/ (function(module, exports) {

module.exports = ".zero-margin, .navbar ul {\n  margin: 0 !important; }\n\n.zero-padding, .navbar {\n  padding: 0 !important; }\n\n.center-block {\n  display: block;\n  margin: auto; }\n\n.text-overflow, .user-role {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.fa-6 {\n  font-size: 10em; }\n\n.navbar {\n  height: 100%;\n  position: relative;\n  -webkit-box-align: initial;\n      -ms-flex-align: initial;\n          align-items: initial; }\n\n.navbar ul {\n    list-style: none;\n    padding-left: 5px;\n    padding-right: 5px;\n    width: 100%; }\n\n.navbar ul li {\n      cursor: pointer;\n      background-color: #2e2e2e;\n      border-bottom: 2px solid white;\n      font-size: 13px; }\n\n.navbar ul li.active a {\n        background-color: #019f31;\n        color: #fff; }\n\n.navbar ul li:hover a {\n        background-color: #019f31;\n        color: #fff; }\n\n.navbar ul li a {\n        display: block;\n        padding: 10px;\n        font-size: 1.1em;\n        color: #d2d2d2; }\n\n.user-image {\n  width: 50px; }\n\n.user-role {\n  min-width: 100px; }\n"

/***/ }),

/***/ "./src/app/cms/components/side-nav/side-nav.component.ts":
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
        this.thisView = 'document';
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
            template: __webpack_require__("./src/app/cms/components/side-nav/side-nav.component.html"),
            styles: [__webpack_require__("./src/app/cms/components/side-nav/side-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__services_shared_service__["a" /* SharedService */]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/cms/components/sm-menu/sm-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light d-lg-none\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"/assets/images/logo@0_5x.png\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> GotoRisk\n  </a>\n  <span class=\"fa fa-2x fa-bars\" (click)=\"toggleSideNav()\"></span>\n</nav>\n<div class=\"side-nav\" [ngClass]=\"{'menu-open':menuOpen}\">\n  <span class=\"fa fa-close close-btn float-right\" (click)=\"closeMenu()\">Close</span>\n  <ul class=\"menu\">\n    <li [ngClass]=\"{active:thisView=='document'}\">\n        <a [routerLink]=\"['/cms/document']\" title=\"\">\n            <i class=\"fa fa-file\"></i> Document\n        </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/cms/components/sm-menu/sm-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ".zero-margin {\n  margin: 0 !important; }\n\n.zero-padding {\n  padding: 0 !important; }\n\n.center-block {\n  display: block;\n  margin: auto; }\n\n.text-overflow {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.fa-6 {\n  font-size: 10em; }\n\n.side-nav {\n  height: 100%;\n  overflow: hidden;\n  position: fixed;\n  width: 0;\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  overflow-x: hidden;\n  -webkit-transition: width 0.5s;\n  transition: width 0.5s;\n  padding-top: 25px; }\n\n.side-nav.menu-open {\n    width: 180px;\n    padding: 5px; }\n\n.side-nav ul {\n    padding: 5px;\n    padding-top: 25px;\n    background-color: #fff;\n    height: 100%; }\n\n.side-nav ul li {\n      cursor: pointer;\n      background-color: #2e2e2e;\n      border-bottom: 2px solid white;\n      font-size: 13px; }\n\n.side-nav ul li {\n      text-decoration: none;\n      color: #fff;\n      display: block; }\n\n.side-nav ul li.active a {\n        background-color: #0b4d8a;\n        color: #fff; }\n\n.side-nav ul li:hover a {\n        background-color: #0b4d8a;\n        color: #fff; }\n\n.side-nav ul li a {\n        display: block;\n        padding: 10px;\n        font-size: 1.1em;\n        color: #d2d2d2; }\n\n.side-nav .close-btn {\n    color: #2e2e2e;\n    padding: 2px; }\n"

/***/ }),

/***/ "./src/app/cms/components/sm-menu/sm-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmMenuComponent; });
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

var SmMenuComponent = /** @class */ (function () {
    function SmMenuComponent() {
        this.menuOpen = false;
    }
    SmMenuComponent.prototype.ngOnInit = function () {
    };
    SmMenuComponent.prototype.toggleSideNav = function () {
        this.menuOpen = !this.menuOpen;
    };
    SmMenuComponent.prototype.closeMenu = function () {
        this.menuOpen = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SmMenuComponent.prototype, "thisView", void 0);
    SmMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sm-menu',
            template: __webpack_require__("./src/app/cms/components/sm-menu/sm-menu.component.html"),
            styles: [__webpack_require__("./src/app/cms/components/sm-menu/sm-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SmMenuComponent);
    return SmMenuComponent;
}());



/***/ }),

/***/ "./src/app/cms/components/user-lookup/user-lookup.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" class=\"modal fade\" role=\"dialog\" tabindex=\"-1\" [ngClass]=\"{'show backdrop d-block':display}\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h3 class=\"modal-title\">User Lookup</h3>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"close()\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-3\">\n                        <label>User Login ID</label>\n                    </div>\n                    <div class=\"col-sm-12 col-md-3\">\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.userLoginId)\" [(ngModel)]=\"lookupOptions.userLoginId.operator\">\n                            <option value=\"EQ\" selected>Equals</option>\n                            <option value=\"NEQ\">Not equals</option>\n                            <option value=\"STARTS_WITH\">Starts with</option>\n                            <option value=\"ENDS_WITH\">Ends with</option>\n                            <option value=\"CONTAINS\">Contains</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <input class=\"form-control\" [(ngModel)]=\"lookupOptions.userLoginId.value\" (change)=\"lookupFieldChange(lookupOptions.userLoginId)\"\n                            name=\"userLoginId\" />\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                        <span>\n                            <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.userLoginId.sort\" (change)=\"lookupSortChange(lookupOptions.userLoginId)\"> Sort\n                        </span>\n                        <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.userLoginId)\" [(ngModel)]=\"lookupOptions.userLoginId.order\">\n                            <option value=\"ASC\">ASC</option>\n                            <option value=\"DESC\">DESC</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-3\">\n                        <label>First Name</label>\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-3\">\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.firstName)\" [(ngModel)]=\"lookupOptions.firstName.operator\">\n                            <option value=\"EQ\" selected>Equals</option>\n                            <option value=\"NEQ\">Not equals</option>\n                            <option value=\"STARTS_WITH\">Starts with</option>\n                            <option value=\"ENDS_WITH\">Ends with</option>\n                            <option value=\"CONTAINS\">Contains</option>\n\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <input class=\"form-control\" [(ngModel)]=\"lookupOptions.firstName.value\" (change)=\"lookupFieldChange(lookupOptions.firstName)\"\n                            name=\"buildingName\" />\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                        <span>\n                            <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.firstName.sort\" (change)=\"lookupSortChange(lookupOptions.firstName)\"> Sort\n                        </span>\n                        <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.firstName)\" [(ngModel)]=\"lookupOptions.firstName.order\">\n                            <option value=\"ASC\">ASC</option>\n                            <option value=\"DESC\">DESC</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-3\">\n                        <label>Last Name</label>\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-3\">\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.lastName)\" [(ngModel)]=\"lookupOptions.lastName.operator\">\n                            <option value=\"EQ\" selected>Equals</option>\n                            <option value=\"NEQ\">Not equals</option>\n                            <option value=\"STARTS_WITH\">Starts with</option>\n                            <option value=\"ENDS_WITH\">Ends with</option>\n                            <option value=\"CONTAINS\">Contains</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <input class=\"form-control\" [(ngModel)]=\"lookupOptions.lastName.value\" (change)=\"lookupFieldChange(lookupOptions.lastName)\"\n                            name=\"lastName\">\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                        <span>\n                            <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.lastName.sort\" (change)=\"lookupSortChange(lookupOptions.lastName)\"> Sort\n                        </span>\n                        <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.lastName)\" [(ngModel)]=\"lookupOptions.lastName.order\">\n                            <option value=\"ASC\">ASC</option>\n                            <option value=\"DESC\">DESC</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-3\">\n                        <label>Full Name</label>\n                    </div>\n\n                    <div class=\"col-sm-12 col-md-3\">\n                        <select class=\"form-control\" (change)=\"lookupFieldChange(lookupOptions.fullName)\" [(ngModel)]=\"lookupOptions.fullName.operator\">\n                            <option value=\"EQ\" selected>Equals</option>\n                            <option value=\"NEQ\">Not equals</option>\n                            <option value=\"STARTS_WITH\">Starts with</option>\n                            <option value=\"ENDS_WITH\">Ends with</option>\n                            <option value=\"CONTAINS\">Contains</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-12 col-md-4\">\n                        <input class=\"form-control\" [(ngModel)]=\"lookupOptions.fullName.value\" (change)=\"lookupFieldChange(lookupOptions.fullName)\"\n                            name=\"fullName\">\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                        <span>\n                            <input type=\"checkbox\" [(ngModel)]=\"lookupOptions.fullName.sort\" (change)=\"lookupSortChange(lookupOptions.fullName)\"> Sort\n                        </span>\n                        <select class=\"form-control d-inline w-50\" (change)=\"lookupSortChange(lookupOptions.fullName)\" [(ngModel)]=\"lookupOptions.fullName.order\">\n                            <option value=\"ASC\">ASC</option>\n                            <option value=\"DESC\">DESC</option>\n                        </select>\n                    </div>\n                </div>\n                <table class=\"table table-bordered\">\n                    <thead>\n                        <tr>\n                            <th>User Login Id</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Full Name</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let user of searchResult\">\n                            <td>{{user.userLoginId}}</td>\n                            <td>{{user.firstName}}</td>\n                            <td>{{user.lastName}}</td>\n                            <td>{{user.fullName}}</td>\n                            <td><span class=\"fa fa-user-plus btn btn-sm btn-outline-success\" (click)=\"assignUserToAsset(user)\"></span></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"searchUsers()\">Submit</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"initSearchParams()\">Clear</button>\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cms/components/user-lookup/user-lookup.component.scss":
/***/ (function(module, exports) {

module.exports = ".backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh; }\n"

/***/ }),

/***/ "./src/app/cms/components/user-lookup/user-lookup.component.ts":
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
            template: __webpack_require__("./src/app/cms/components/user-lookup/user-lookup.component.html"),
            styles: [__webpack_require__("./src/app/cms/components/user-lookup/user-lookup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_0__services_alerts_loader_service__["a" /* AlertsLoaderService */]])
    ], UserLookupComponent);
    return UserLookupComponent;
}());



/***/ })

});
//# sourceMappingURL=app.cms.module.chunk.js.map