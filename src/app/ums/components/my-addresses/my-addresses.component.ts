import { PostcodeLookupComponent } from './../../../core.components.module/component/postcode-lookup/postcode-lookup.component';
import { OrganizationLookupComponent } from './../organization-lookup/organization-lookup.component';
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { OfficeAddressLookupComponent } from '../office-address-lookup/office-address-lookup.component';
import {Location} from '@angular/common'
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-my-addresses',
  templateUrl: './my-addresses.component.html',
  styleUrls: ['./my-addresses.component.scss']
})
export class MyAddressesComponent implements OnInit {
  userAddresses: any = [];
  newAddress: any;
  componentRef:any;
  constructor(private api: ApiService, private alert: AlertsLoaderService,
    private route: ActivatedRoute, private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,private _location: Location,
  private user:UserService) { }

  ngOnInit() {
    this.getUserAddresses();
    this.initNewAddress();
  }

  initNewAddress() {
    this.newAddress = {
      "id": null,
      "doorNumber": null,
      "blockNumber": null,
      "apartmentNumber": null,
      "organizationName": null,
      "buildingName": null,
      "streetName": null,
      "localityName": null,
      "postTown": null,
      "county": null,
      "city": null,
      "country": null,
      "postcode1": null,
      "postcode2": null,
      "user": {
        "id": null,
        "loginId": this.user.userDetails.loginId,
        "username": null
      },
      "building": null,
      "witness": null,
      "injuredPerson": null,
      "suspect": null,
      "crimeSuspect": null,
      "equipment": null,
      "vehicle": null,
      "assetTypeOther": null
    }
  }
  getUserAddresses() {
    this.api.get(`/address/addresses/userLoginId/${this.user.userDetails.loginId}`).subscribe(
      (data) => {
        this.userAddresses = data;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  addAddress() {
    this.api.post(`/address/create-address`, this.newAddress, false).subscribe(
      (data) => {
        this.alert.success('New address added successfully');
        this.userAddresses.push(data);
        this.initNewAddress();
      }, (error) => {
        this.alert.error(error);
      }
    );

  }

  deleteAddress(id: number, index: number) {
    if (!window.confirm("Are you sure you want to delete this item/record?")) {
      return;
    }
    // /address/delete-address/addressId/
    this.api.delete(`/address/delete-address/id/${id}`).subscribe(
      (data) => {
        this.alert.success('Address deleted successfully');
        this.userAddresses.splice(index, 1);
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  updateAddress(add: any) {
    // /address/delete-address/addressId/
    add.user = {
      "id": null,
      "loginId": this.user.userDetails.loginId,
      "username": null
    },
      this.api.put(`/address/update-address`, add).subscribe(
        (data) => {
          this.alert.success('Address updated successfully');
        }, (error) => {
          this.alert.error(error);
        }
      )
  }
  lookup(type,add) {
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
   
    if (type === 'add' || type === 'post') {
      this.componentRef.instance.selectAddress.subscribe((data) => {
        this.selectAddress(data,add);
      });
    }
  
    this.componentRef.instance.closeModal.subscribe(() => {
      this.closeModal(type);
    });
  }
  selectAddress(address,add) {
    add.city = address.city;
    add.country = address.country;
    add.county = address.county;
    add.localityName = address.localityName;
    add.postcode1 = address.postcode1;
    add.postcode2 = address.postcode2;

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
