import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  department: any;
  address: any;
  editMode: boolean;
  constructor(private api: ApiService, private alert: AlertsLoaderService, private route: ActivatedRoute) {
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
}
