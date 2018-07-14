import { UserLookupComponent } from './../../user-lookup/user-lookup.component';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ViewContainerRef } from '@angular/core';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-remove-profile',
  templateUrl: './remove-profile.component.html',
  styleUrls: ['./remove-profile.component.scss']
})
export class RemoveProfileComponent implements OnInit {
  componentRef: any;
  selectedUser: any;
  user: any;
  constructor(private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
  }


  lookup(which: string) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      UserLookupComponent
    );
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    this.componentRef.instance.selectUser.subscribe((data) => {
      this.selectUser(data);
    });

    this.componentRef.instance.closeModal.subscribe(() => {
      this.closeModal();
    });
  }



  selectUser(data) {
    this.selectedUser = [data];
    this.getUser();
  }

  getUser() {
    this.api.get(`/user/id/${this.selectedUser[0].id}`).subscribe(
      (data) => {
        this.user = data;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  closeModal() {
    this.componentRef.instance.selectUser.unsubscribe();
    this.componentRef.instance.closeModal.unsubscribe();
    this.componentRef.destroy();
  }

  removeProfile(prof, index) {
    if (!window.confirm("Are you sure you want to delete this item/record?")) {
      return;
    }
    this.api.delete(`/user/remove-profile-from-user/userId/${this.user.id}/profileCode/${prof.id}`).subscribe(
      (data) => {
        this.alert.success("Profile successfully removed");
        this.user.profiles.splice(index, 1);
      }, (error) => {
        this.alert.error(error);
      }
    )
  }
}
