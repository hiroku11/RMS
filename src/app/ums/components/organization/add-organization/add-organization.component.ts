import { PostcodeLookupComponent } from './../../../../core.components.module/component/postcode-lookup/postcode-lookup.component';
import { OrganizationLookupComponent } from './../../organization-lookup/organization-lookup.component';
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { OfficeAddressLookupComponent } from '../../office-address-lookup/office-address-lookup.component';
import { Location } from '@angular/common'
@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {
  organization: any;
  address: any;
  editMode: boolean;
  componentRef: any;
  constructor(private api: ApiService, private alert: AlertsLoaderService,
    private route: ActivatedRoute, private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver, private _location: Location) {
    this.initOrganization();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let Id = params["id"];
      if (Id) {
        this.getOrganizationByCode(Id);
        this.editMode = true;
      }
    });
  }

  initOrganization() {
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
    this.organization = {
      "id": null,
      "name": null,
      "officeAddresses": [
      ],
      "statusFlag": null,
      "email": null,
      "phone": null,
      "alternatePhone": null,
      "fax": null,
      "website": null,
      "subOrganization": null,
      "location": null,
      "totalEmployees": null
    };
  }

  getOrganizationByCode(id: any) {
    this.api.get(`/organization/organizationCode/${id}`).subscribe(
      (data) => {
        this.address = { ...data.officeAddresses[0] };
        if (typeof this.address === 'undefined') {
          this.initOrganization();
        }
        this.organization = data;
        this.organization.statusFlag = this.organization.statusFlag === 'ACTIVE' ? 'Y' : 'N'
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  updateOrganization() {
    this.organization.statusFlag = this.organization.statusFlag === 'Y' ? 'ACTIVE' : null
    this.organization.officeAddresses[0] = this.address;
    this.api.put(`/organization/update-organization`, this.organization).subscribe(
      (data) => {
        this.alert.success('Organization updated successfully');
        // this.initOrganization();
      }, (error) => {
        this.alert.error(error);
      }
    )
  }
  addOrganization() {
    this.organization.officeAddresses.push({ ...this.address });
    this.organization.statusFlag = this.organization.statusFlag === 'Y' ? 'ACTIVE' : null
    this.api.post(`/organization/create-organization`, this.organization, false).subscribe(
      (data) => {
        this.alert.success('Organization created successfully');
        this.initOrganization();
      }, (error) => {
        this.alert.error(error);
      }
    )
  }
  goBack() {
    this._location.back();
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
    if (type == 'post') {
      this.componentRef.instance.mod = 'lms';
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
}
