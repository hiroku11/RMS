import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { AlertsLoaderService } from '../../../../services/alerts-loader.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {

  profile: any;
  editMode = false;
  componentRef: any;
  config = {
    displayKey: 'name'
  }
  constructor(private api: ApiService, private alert: AlertsLoaderService,
    private route: ActivatedRoute, private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.initProfile();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let Id = params["id"];
      if (Id) {
        this.getProfileId(Id);
        this.editMode = true;
      }
    });
  }

  getProfileId(id) {
    this.api.get(`/profile/profileCode/${id}`).subscribe(
      (data) => {
        this.profile = data;
      }, (error) => {
        this.alert.error(error);
      }
    )

  }
  initProfile() {
    this.profile = {
      "id": null,
      "description": null,
      "statusFlag": null,
      "courses": []
    }
  }

  addProfile() {
    this.api.post(`/profile/create-profile`, this.profile, false).subscribe(
      (data) => {
        this.alert.success('Profile created successfully');
        this.initProfile();
      }, (error) => {
        this.alert.error(error);
      }
    )

  }

  updateProfile() {
    this.api.put(`/profile/update-profile`, this.profile).subscribe(
      (data) => {
        this.alert.success('Prodile updated successfully');
      }, (error) => {
        this.alert.error(error);
      }
    )
  }
  courseLookup(){
    
  }

}
