import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { ProfileLookupComponent } from './../../profile-lookup/profile-lookup.component';
import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UserLookupComponent } from '../../user-lookup/user-lookup.component';

@Component({
  selector: 'app-assign-profile',
  templateUrl: './assign-profile.component.html',
  styleUrls: ['./assign-profile.component.scss']
})
export class AssignProfileComponent implements OnInit {
  selectedProfiles: any[] = [];
  profiles = [];
  selectedUser: any[] = [];
  users = [];
  componentRef: any;
  constructor(private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
  }

  lookup(which: string) {
    let comp: any = which === 'user' ? UserLookupComponent : ProfileLookupComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      comp
    );
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    if (which === 'user') {
      this.componentRef.instance.selectUser.subscribe((data) => {
        this.selectUser(data);
      });
    } else {
      this.componentRef.instance.selectProfile.subscribe((data) => {
        this.selectProfile(data);
      });
    }
    this.componentRef.instance.closeModal.subscribe(() => {
      this.closeModal();
    });
  }

  selectProfile(data) {
    this.selectedProfiles.push(data);
    this.selectedProfiles = [...this.selectedProfiles];
  }

  selectUser(data) {
    this.selectedUser = [data];
  }

  closeModal() {
    this.componentRef.instance.closeModal.unsubscribe();
    this.componentRef.destroy();
  }

  addProfilesToUser() {
    this.api.put(`/user/add-profiles-to-user/userId/${this.selectedUser[0].id}`, { profiles: this.selectedProfiles }).subscribe(
      (data) => {
        this.alert.success("Profiles successfully assigned to user.");
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  clear() {
    this.selectedProfiles = [];
    this.selectedUser = [];
  }
}
