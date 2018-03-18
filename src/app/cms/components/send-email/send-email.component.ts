
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {
  document: any={};
  constructor(private route: ActivatedRoute, private _apiService: ApiService, private _alertsService: AlertsLoaderService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let Id = params["id"];
      if (Id) {
        this.getDocumentById(Id);
      } else {
        //this.initDocumnet()
      }
    });
  }
  save(){
    
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
}
