import { ViewContainerRef } from '@angular/core';
import { PostcodeLookupComponent } from './../../../core.components.module/component/postcode-lookup/postcode-lookup.component';
import { OfficeAddressLookupComponent } from './../office-address-lookup/office-address-lookup.component';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-office-address',
  templateUrl: './office-address.component.html',
  styleUrls: ['./office-address.component.scss']
})
export class OfficeAddressComponent implements OnInit {
  add: any;
  componentRef: any;
  constructor(private api: ApiService, private alert: AlertsLoaderService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.getOfficeAddress();
  }

  ngOnInit() {
  }

  getOfficeAddress() {
    this.api.get(`/user/get-office-addr-of-logged-in-user`).subscribe(
      (data) => {
        this.add = data;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  updateAddress() {
    this.api.put(`/user/update-office-addr-of-logged-in-user/officeAddressId/${this.add.id}`, this.add).subscribe(
      (data) => {
        this.alert.success('Address successfully updated');
      }, (error) => {
        this.alert.error(error);
      }
    )
  }


  lookup(type) {
    let comp : any= OfficeAddressLookupComponent;
    if(type == 'post'){
      comp = PostcodeLookupComponent
    }
    
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      comp
    );
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    if (type == 'post') {
      this.componentRef.instance.mod = 'lms';
    }
    this.componentRef.instance.selectAddress.subscribe((data) => {
      this.selectAddress(data);
    });
    this.componentRef.instance.closeModal.subscribe(() => {
      this.closeModal();
    });
  }

  selectAddress(data) {
    this.add = data;;
  }

  closeModal() {
    this.componentRef.instance.closeModal.unsubscribe();
    this.componentRef.destroy();
  }

}
