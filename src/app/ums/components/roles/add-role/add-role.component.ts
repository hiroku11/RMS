import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  role: any;
  address: any;
  editMode: boolean;
  constructor(private api: ApiService, private alert: AlertsLoaderService, private route: ActivatedRoute,
    private _location: Location) {
    this.initRole();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let Id = params["id"];
      if (Id) {
        this.getRoleById(Id);
        this.editMode = true;
      }
    });
  }

  initRole() {
    this.role = {
      "id": null,
      "roleName": null,
      "roleDescription": null
    };
  }


  getRoleById(id: any) {
    this.api.get(`/role/id/${id}`).subscribe(
      (data) => {
        this.role = data;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  updateRole() {
    this.api.put(`/role/update-role`, this.role).subscribe(
      (data) => {
        this.alert.success('Role updated successfully');
      }, (error) => {
        this.alert.error(error);
      }
    )
  }
  addRole() {
    this.api.post(`/role/create-role`, this.role, false).subscribe(
      (data) => {
        this.alert.success('Role created successfully');
        this.initRole();
      }, (error) => {
        this.alert.error(error);
      }
    )
  }
  goBack() {
    this._location.back();
  }
}
