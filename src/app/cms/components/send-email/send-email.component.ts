
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { UserLookupComponent } from './../user-lookup/user-lookup.component';
import { UserService } from './../../../services/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {
  document: any = {};
  userDetails:any;
  Id: any;
  data: any;
  notifiedDate =(new Date()).toJSON().slice(0,10).split('-').reverse().join('/') ;
  notifiedBy:any;
  public componentRef: any;
  constructor(private route: ActivatedRoute,
    private _apiService: ApiService,
    private _alertsService: AlertsLoaderService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private userService: UserService

  ) {
    this.userDetails = this.userService.userDetails;
    this.notifiedBy = this.userDetails.firstName + " " + this.userDetails.lastName;
   }

  ngOnInit() {
    this.initDocumnet();
    this.route.params.subscribe((params: Params) => {
      this.Id = params["id"];
      if (this.Id) {
        this.getDocumentById(this.Id);
      } else {
        //this.initDocumnet()
      }
    });
  }
  initDocumnet() {
    this.data = {
      "versionHistoryId": null,
      "comments": null,
      "users": []

    }
  }
  Save() {
    this.data.versionHistoryId = this.document.versionHistoryId;
    this._apiService.post("/compliance/send-email", this.data, false)
      .subscribe(
        (data) => {
          this._alertsService.success("Email successfully sent.");

        },
        (error) => {
          this._alertsService.error(error);
        }
      )

  }
  getDocumentById(docId: any) {
    this._apiService.get(`/compliance/send-email-info/versionHistoryId/${docId}`).subscribe(
      (data) => {
        this.document = data;
        console.log(this.document);
      },
      (error) => {
        this._alertsService.error("Error occured while getting documents details");
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
