import { PostcodeLookupComponent } from './../../../../core.components.module/component/postcode-lookup/postcode-lookup.component';
import { OrganizationLookupComponent } from './../../organization-lookup/organization-lookup.component';
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { OfficeAddressLookupComponent } from '../../office-address-lookup/office-address-lookup.component';
import {Location} from '@angular/common'
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  department: any;
  address: any;
  editMode: boolean;
  componentRef: any;
  formattedAddresses = [];
  constructor(private api: ApiService, private alert: AlertsLoaderService,
    private route: ActivatedRoute, private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,private _location: Location) {
    this.initDepartment();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let Id = params["id"];
      if (Id) {
        this.getDepartmentByCode(Id);
        this.editMode = true;
      }
    });
  }

  initDepartment() {
    this.address = {
      "id": null,
      "organizationName": null,
      "buildingName": null,
      "streetName": null,
      "localityName": null,
      "postTown": null,
      "county": null,
      "city": null,
      "postcode1": null,
      "postcode2": null,
      "country": null,
      "doorNumber": null,
      "blockNumber": null,
      "apartmentNumber": null
    };
    this.department = {
      "id": null,
      "description": null,
      "statusFlag": null,
      "organization": {
        "id": null
      },
      "officeAddresses": [
      ]
    }

  }
  getDepartmentByCode(id: any) {
    this.api.get(`/department/departmentCode/${id}`).subscribe(
      (data) => {
        this.address = { ...data.officeAddresses[0] };
        if (typeof this.address === 'undefined') {
          this.initDepartment();
        }
        this.department = data;
        if (this.department.organization === 'undefined') {
          this.department.organization = { id: null }
        }
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  updateDepartment() {
    this.department.officeAddresses[0] = this.address;
    this.api.put(`/department/update-department`, this.department).subscribe(
      (data) => {
        this.alert.success('Department updated successfully');
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  addDepartment() {
    this.department.officeAddresses.push({ ...this.address });
    this.api.post(`/department/create-department`, this.department, false).subscribe(
      (data) => {
        this.alert.success('Department created successfully');
        this.initDepartment();
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  lookup(type) {
    let comp: any = OrganizationLookupComponent;
    if (type === 'add') {
      comp = OfficeAddressLookupComponent
    }
    if (type === 'post') {
      comp = PostcodeLookupComponent;

    }
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      comp
    );
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    this.componentRef.instance.lookupType = 'admin';
    if (type === 'org') {
      this.componentRef.instance.selectOrg.subscribe((data) => {
        this.selectOrg(data);
      });
    }
    if (type === 'add' || type === 'post') {
      this.componentRef.instance.selectAddress.subscribe((data) => {
        this.selectAddress(data);
      });
    }
  
    this.componentRef.instance.closeModal.subscribe(() => {
      this.closeModal(type);
    });
  }
  selectOrg(org) {
    this.department.organization = org;
    this.alert.success('Organization selected.')
  }
  selectAddress(address) {
    this.address = address;
  }
  closeModal(type) {
    if (type === 'org') {
      this.componentRef.instance.selectOrg.unsubscribe();
    }
    if (type === 'add') {
      this.componentRef.instance.selectAddress.unsubscribe();
    }

    this.componentRef.instance.closeModal.unsubscribe();
    this.componentRef.destroy();
  }
  goBack() {
    this._location.back();
  }
 

 
}
