import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {
  organization: any;
  address: any;
  editMode: boolean;
  constructor(private api: ApiService, private alert: AlertsLoaderService, private route: ActivatedRoute) {
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
}
