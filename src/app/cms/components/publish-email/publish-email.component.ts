import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish-email',
  templateUrl: './publish-email.component.html',
  styleUrls: ['./publish-email.component.scss']
})
export class PublishEmailComponent implements OnInit {
  document: any={};
  publishData: any = {
    "versionHistoryId": null,
    "comments": null,
    "departments": [ ],
    "users": [ ],
    "emailIds": []
  }
  constructor(private route: ActivatedRoute,private _apiService: ApiService, private _alertsService: AlertsLoaderService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      let Id = params["id"];
      if (Id) {
        this.getDocumentById(Id);
      }
    })
  }

  getDocumentById(docId: any) {
    this._apiService.get(`/compliance/complianceDocumentId/${docId}`).subscribe(
      (data) => {
        this.document = data;
      },
      (error) => {
        this._alertsService.error("Error occured while getting documents details");
      }
    )

  }
  publish(){
    this._apiService.post("/compliance/publish-document",this.publishData).subscribe(
      (data)=>{
        this._alertsService.success("Documnet published succesfully.");
      },
      (error)=>{
        this._alertsService.error("Error occured while publishing documnet.");
      }
    )
  }
  cancel(){

  }

}
