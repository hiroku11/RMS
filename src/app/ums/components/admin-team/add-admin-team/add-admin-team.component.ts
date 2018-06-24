import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-admin-team',
  templateUrl: './add-admin-team.component.html',
  styleUrls: ['./add-admin-team.component.scss']
})
export class AddAdminTeamComponent implements OnInit {

  team: any;
  editMode: boolean;
  config = {
    displayKey: 'fullName'
  }
  constructor(private api: ApiService, private alert: AlertsLoaderService, private route: ActivatedRoute) {
    this.initTeam();
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let Id = params["id"];
      if (Id) {
        this.getTeamById(Id);
        this.editMode = true;
      }
    });
  }

  initTeam() {
    this.team = {
      "id": null,
      "teamName": null,
      "teamDescription": null,
      "teamEmail": null,
      "rmsAdmins": [
        // {
        //   "id": 1,
        //   "loginId": null,
        //   "username": null
        // },
      ],
      "lmsAdmins": [
      ]
    }
  }
  getTeamById(id: number) {
    this.api.get(`/admin-team/teamId/${id}`).subscribe(
      (data) => {
        this.team = data;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  updateTeam() {
    this.api.put(`/admin-team/update-admin-team`, this.team).subscribe(
      (data) => {
        this.alert.success('Admin team successfully updated');
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  addTeam() {
    this.api.post(`/admin-team/create-admin-team`, this.team, false).subscribe(
      (data) => {
        this.alert.success('Admin team added successfully');
      }, (error) => {
        this.alert.error(error);
      }
    )
  }
}
