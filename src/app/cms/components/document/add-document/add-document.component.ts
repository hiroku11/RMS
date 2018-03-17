import { Params } from '@angular/router';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {
  document: any = {};
  editMode: boolean = false;
  file: any ={};
  formData: FormData;
  fileInput: any;
  constructor(private _apiService: ApiService, private _alertsService: AlertsLoaderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let Id = params["id"];
      if (Id) {
        this.getDocumentById(Id);
        this.editMode = true;
      } else {
        this.initDocumnet()
      }
    });
  }

  initDocumnet() {
    this.document = {
      "id": null,
      "statusFlag": null,
      "documentId": null,
      "documentTitle": null,
      "documentDescription": null,
      "documentClassification": null,
      "documentStatus": {
        "id": "DRAFT",
        description: "Draft"
      },
      "approvalLevel": null,
      "isPublished": null,
      "publishedDate": null,
      "publishedBy": null,
      "publishComments": null,
      "isLmsNotified": null,
      "lmsNotificationDate": null,
      "lmsNotifiedBy": null,
      "lmsNotificationComments": null,
      "expiryDate": null,
      "neverExpires": null,
      "complianceDocumentVersionHistory": null
    }
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
  selectCompareFunction(item1: any, item2: any) {
    if (item1 == null || item2 == null) {
      return false;
    }
    return item1.id == item2.id;
  }
  uploadDocumentVersion() {
    ///compliance/save-compliance-document-history
    if(!this.document.id){
      this._alertsService.error("Please save document details first.");
      return;
    }
    let headers: {
      'Content-Type': undefined
    }
    this.formData.append("comments",this.file.comments);
    this.formData.append("statusCode",this.file.statusCode);
    this._apiService.post("/compliance/save-compliance-document-history", this.formData, headers).subscribe(
      data => {
        this.clearSelectedFile();
      },
      error => {
        this._alertsService.error("Some error occured while uploading document.");
      }
    )
  }

  clearSelectedFile(){
    this.file = {};
    this.fileInput.value = null;
  }
  documentSelected($event: any) {
    this.formData = new FormData();
    this.fileInput = $event.target;
    this.formData.append(`complianceDocumentId`, this.document.id);
    this.formData.append("file", $event.target.files[0]);
    this.formData.append("fileDescription", this.file.fileDescription);
  }

  save() {
    this._apiService.put("/compliance/create-or-update-compliance-document", this.document).subscribe(
      (data) => {
        this._alertsService.success("Document details saved successfully.");
        this.document = data;
        this.editMode = true;
        //this.initDocumnet();
      },
      (error) => {
        this._alertsService.error("Error saving document details.");
      }
    )
  }
}
