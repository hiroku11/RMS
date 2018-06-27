import { UserLookupComponent } from './../../user-lookup/user-lookup.component';
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from './../../../../services/shared.service';
import { UserService } from './../../../../services/user.service';
import { ApiService } from './../../../../services/api.service';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userDetails: any;
  dropdownsData: any;
  editMode: boolean;
  componentRef: any;
  constructor(private api: ApiService, private user: UserService,
    private alert: AlertsLoaderService, private shared: SharedService,
    private route: ActivatedRoute, private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
    if (!this.shared.dropDownsData.departmentList) {
      this.shared.getAllDropdownData();
      this.shared.dropDownsService.subscribe((data) => {
        this.dropdownsData = data;
      })
    }
    this.dropdownsData = this.shared.dropDownsData;
    this.initUser();

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let Id = params["id"];
      if (Id) {
        this.getUserById(Id);
        this.editMode = true;
      }
    });
  }

  getUserById(id: any) {
    this.api.get(`/user/loginId/${id}`).subscribe(
      (data) => {
        if (typeof data.addresses === 'undefined' || data.addresses.length === 0) {
          data.addresses = [this.initNewAddress()];
        }
        this.userDetails = data;
      }, (error) => {
        this.alert.error(error);
      }
    )

  }
  initUser() {
    this.userDetails = {
      "id": null,
      "loginId": null,
      "password": null,
      "username": null,
      "statusFlag": null,
      "title": null,
      "firstName": null,
      "middleName": null,
      "lastName": null,
      "nameSuffix": null,
      "phone": null,
      "alternatePhone": null,
      "email": null,
      "employeeId": null,
      "age": null,
      "dateOfBirth": null,
      "fax": null,
      "dateOfJoining": null,
      "dateOfLeaving": null,
      "position": {
        // "id": "PL"
      },
      "employeeType": {
        // "id": "EMP"
      },
      "manager": {
        //"id": 52
      },
      "managerLevel2": {
        //"id": 2
      },
      "managerLevel3": {
        //"id": 1
      },
      "subordinates": null,
      "addresses": [this.initNewAddress()],
      "officeAddress": this.initNewAddress(),
      "genderType": {
        // "id": "MALE"
      },
      "roles": [
        // {
        //   "id": 1
        // },
        // {
        //   "id": 5
        // }
      ],
      "passwordHistory": null,
      "fullName": null,
      "genderTypeOther": null,
      "employeeTypeOther": null,
      "expires": null,
      "department": {
        // "id": "IT"
      },
      "userAccountStatus": null,
      "certification": null
    };
  }

  initNewAddress() {
    return {
      "id": null,
      "organizationName": null,
      "buildingName": null,
      "streetName": null,
      "localityName": null,
      "postTown": null,
      "county": null,
      "city": null,
      "postcode": null,
      "country": null,
      "statusFlag": null,
      "doorNumber": null,
      "blockNumber": null,
      "apartmentNumber": null
    }
  }
  selectCompareFunction(item1: any, item2: any) {
    if (item1 == null || item2 == null) {
      return false;
    }
    return item1.id == item2.id;
  }

  saveUser() {
    this.api.put(`/user/create-or-update-user`, this.userDetails).subscribe(
      (data) => {
        if (!this.editMode) {
          this.alert.success('USer added successfully');
          this.initUser();
          return;
        }
        this.alert.success('User updated successfully');
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
