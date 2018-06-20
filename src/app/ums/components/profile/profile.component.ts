import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userDetails: any;
  originalUserDetails: any;
  dropdownsData: any;
  constructor(private api: ApiService, private user: UserService,
    private alert: AlertsLoaderService, private shared: SharedService) {
    this.userDetails = this.user.userDetails;
    if (!this.shared.dropDownsData.departmentList) {
      this.shared.getAllDropdownData();
      this.shared.dropDownsService.subscribe((data) => {
        this.dropdownsData = data;
      })
    }
    this.dropdownsData = this.shared.dropDownsData;

  }

  ngOnInit() {
    this.getUserDetails();
  }
  selectCompareFunction(item1: any, item2: any) {
    if (item1 == null || item2 == null) {
      return false;
    }
    return item1.id == item2.id;
  }

  getUserDetails() {
    this.api.get(`/user/loginId/${this.user.userDetails.loginId}`).subscribe(
      (data) => {
        this.originalUserDetails = data;
        this.userDetails = data;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  reset() {
    this.userDetails = { ...this.originalUserDetails };
  }

  updateProfile() {
    this.api.put(`/user/update-user`, this.userDetails).subscribe(
      (data) => {
        this.alert.success('Profile updated successfully');
      }, (error) => {
        this.alert.error(error);
      }
    )
  }
}
