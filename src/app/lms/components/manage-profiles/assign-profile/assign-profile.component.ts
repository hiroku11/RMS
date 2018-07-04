import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UserLookupComponent } from '../../user-lookup/user-lookup.component';
import { ProfileLookupComponent } from '../../profile-lookup/profile-lookup.component';

@Component({
  selector: 'app-assign-profile',
  templateUrl: './assign-profile.component.html',
  styleUrls: ['./assign-profile.component.scss']
})
export class AssignProfileComponent implements OnInit {
  selectedProfiles: any[] = [];
  profiles = [];
  selectedUsers: any[] = [];
  users = [];
  componentRef: any;
  constructor(private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  lookup(which: string) {
    let comp = which === 'user' ? UserLookupComponent : ProfileLookupComponent
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
    this.selectedUsers.push(data);
    this.selectedUsers = [...this.selectedUsers];
  }

  closeModal() {
    this.componentRef.instance.selectUser.unsubscribe();
    this.componentRef.instance.closeModal.unsubscribe();
    this.componentRef.destroy();
  }
}
