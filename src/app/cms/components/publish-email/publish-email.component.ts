import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { UserService } from './../../../services/user.service';
import { UserLookupComponent } from './../user-lookup/user-lookup.component';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-publish-email',
  templateUrl: './publish-email.component.html',
  styleUrls: ['./publish-email.component.scss']
})
export class PublishEmailComponent implements OnInit {
  document: any = {};
  userDetails: any;
  Id: any;
  dropDownsData: any = {};
  data: any;
  notifiedDate = (new Date()).toJSON().slice(0, 10).split('-').reverse().join('/');
  notifiedBy: any;
  multiselectConfig = {
    displayKey: "description",
    search: false
  }
  public componentRef: any;

  constructor(private route: ActivatedRoute, private _apiService: ApiService, private _alertsService: AlertsLoaderService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private userService: UserService,
    private _sharedService: SharedService
  ) {
    if (!this._sharedService.cmsDropDownsData.departmentList) {
      this._sharedService.getCmsDropdownsData();
    }
    this._sharedService.cmsDropDownsService.subscribe((data) => {
      this.dropDownsData = data;
    })
    this.userDetails = this.userService.userDetails;
    this.notifiedBy = this.userDetails.firstName + " " + this.userDetails.lastName;
  }

  ngOnInit() {
    this.initDocumnet();
    this.route.params.subscribe((params: Params) => {
      let Id = params["id"];
      if (Id) {
        this.getDocumentById(Id);
      }
    })
  }

  initDocumnet() {
    this.data = {
      "versionHistoryId": null,
      "comments": null,
      "departments": [],
      "users": [],
      "emailIds": []
    }
  }

  getDocumentById(docId: any) {
    this._apiService.get(`/compliance/send-email-info/versionHistoryId/${docId}`).subscribe(
      (data) => {
        this.document = data;
      },
      (error) => {
        this._alertsService.error("Error occured while getting documents details");
      }
    )

  }
  publish() {
    this.data.versionHistoryId = this.document.versionHistoryId;
    this._apiService.post("/compliance/publish-document", this.data).subscribe(
      (data) => {
        this._alertsService.success("Documnet published succesfully.");
      },
      (error) => {
        this._alertsService.error("Error occured while publishing documnet.");
      }
    )
  }
  Reset() {
    this.initDocumnet();
  }
  userLookup() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      UserLookupComponent
    );
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);

    this.componentRef.instance.assignUser.subscribe((data) => {
      this.assignUser(data);
    });
    this.componentRef.instance.closeModal.subscribe(() => {
      this.closeModal();
    });
  }
  closeModal() {
    this.componentRef.instance.assignUser.unsubscribe();
    this.componentRef.instance.closeModal.unsubscribe();
    this.componentRef.destroy();

  }
  assignUser(user: any) {
    this.data.users.push(user);
  }
  deleteUser(user: any) {
    for (var i = 0; i < this.data.users.length; i++) {
      if (this.data.users[i].firstName === user.firstName && this.data.users[i].lastName === user.lastName) {
        this.data.users.splice(i, 1);

        break;
      }
    }
  }


}
