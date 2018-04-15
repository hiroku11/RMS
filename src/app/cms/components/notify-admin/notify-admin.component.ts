import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { UserService } from './../../../services/user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notify-admin',
  templateUrl: './notify-admin.component.html',
  styleUrls: ['./notify-admin.component.scss']
})
export class NotifyAdminComponent implements OnInit {
  userDetails:any;
  document: any={};
  data:any={};
  notifiedDate =(new Date()).toJSON().slice(0,10).split('-').reverse().join('/') ;
  notifiedBy:any;
  Id:any;
  constructor(private route: ActivatedRoute, private _apiService: ApiService, private _alertsService: AlertsLoaderService,
    private userService: UserService) { 
      this.userDetails = this.userService.userDetails;
      this.notifiedBy = this.userDetails.firstName + " " + this.userDetails.lastName;
    }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.initDocumnet();
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
     
      "versionHistoryId": this.Id,
      "comments": null,
    }
  }
  Save() {
    this.data.versionHistoryId = this.document.versionHistoryId;
    this._apiService.post("/compliance/notify-lms-admin", this.data)
      .subscribe(
        (data) => {
          this._alertsService.success("Notified admin successfully.");

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

}
