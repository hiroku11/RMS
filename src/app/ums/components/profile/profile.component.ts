import { UserLookupComponent } from './../user-lookup/user-lookup.component';
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
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
  componentRef: any;
  constructor(private api: ApiService, private user: UserService,
    private alert: AlertsLoaderService, private shared: SharedService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
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

  
  lookup(which: string) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      UserLookupComponent
    );
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    this.componentRef.instance.lookupType = 'manager';
    this.componentRef.instance.selectUser.subscribe((data) => {
      this.selectManager(data, which);
    });
    this.componentRef.instance.closeModal.subscribe(() => {
      this.closeModal();
    });
  }

  selectManager(data, which) {
    this.userDetails[which] = data;;
  }

  closeModal() {
    this.componentRef.instance.selectUser.unsubscribe();
    this.componentRef.instance.closeModal.unsubscribe();
    this.componentRef.destroy();
  }
}
