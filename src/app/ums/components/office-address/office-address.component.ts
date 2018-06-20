import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-address',
  templateUrl: './office-address.component.html',
  styleUrls: ['./office-address.component.scss']
})
export class OfficeAddressComponent implements OnInit {
  add: any;
  constructor(private api: ApiService, private alert: AlertsLoaderService) {
    this.getOfficeAddress();
  }

  ngOnInit() {
  }

  getOfficeAddress() {
    this.api.get(`/user/get-office-addr-of-logged-in-user`).subscribe(
      (data) => {
        this.add = data;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  updateAddress() {
    this.api.put(`/user/update-office-addr-of-logged-in-user/officeAddressId/${this.add.id}`, this.add).subscribe(
      (data) => {
        this.alert.success('Address successfully updated');
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

}
