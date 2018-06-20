import { UserService } from './../../../services/user.service';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-addresses',
  templateUrl: './my-addresses.component.html',
  styleUrls: ['./my-addresses.component.scss']
})
export class MyAddressesComponent implements OnInit {
  userAddresses: any = [];
  newAddress: any;
  constructor(private api: ApiService, private user: UserService,
    private alert: AlertsLoaderService) { }

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
    // /address/create-address
    this.api.post(`/address/create-address`, this.newAddress, false).subscribe(
      (data) => {
        this.alert.success('New address added successfully');
        this.userAddresses.push(data);
        this.initNewAddress();
      }, (error) => {
        this.alert.error(error);
      }
    )

  }

  deleteAddress(id: number, index: number) {
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

}
