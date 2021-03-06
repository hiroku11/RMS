import { Params } from '@angular/router';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../../../services/shared.service';
import { saveAs } from 'file-saver/FileSaver';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {
  document: any = {};
  editMode: boolean = false;
  file: any = {};
  formData: FormData;
  fileInput: any;
  dropdownsData: any = {};
  versionHistory: any;
  reverse: boolean = false;
  keyName: string = 'versionNumber';
  constructor(private _apiService: ApiService, private _alertsService: AlertsLoaderService,
    private route: ActivatedRoute, private _sharedService: SharedService) {
    this.dropdownsData = this._sharedService.cmsDropDownsData;
    if (!this._sharedService.cmsDropDownsData.documentStatuses || !this._sharedService.cmsDropDownsData.documentClassifications) {
      this._sharedService.getCmsDropdownsData();
    }
    this._sharedService.cmsDropDownsService.subscribe((data) => {
      this.dropdownsData = data;
    })
  }

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
      "lmsNotifiedBy": {
        "fullName": null
      },
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
    if (!this.document.id) {
      this._alertsService.error("Please save document details first.");
      return;
    }
    this.formData.append("comments", this.file.comments);
    this.formData.append("statusCode", this.file.statusCode);
    this._apiService.post("/compliance/save-compliance-document-history", this.formData, true)
      .subscribe(
        (data) => {
          this._alertsService.success("Document successfully uploaded.");
          this.clearSelectedFile();
          this.getVersionHistory();
        },
        (error) => {
          this._alertsService.error(error);
        }
      )
  }

  clearSelectedFile() {
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
        this._alertsService.error(error);
      }
    )
  }

  getVersionHistory() {
    this._apiService.get(`/compliance/compliance-document-history/complianceDocumentId/${this.document.id}`).subscribe(
      (data) => {
        this.document.complianceDocumentVersionHistoryView = data;
      },
      (error) => {
        this._alertsService.error("Error getting version history.");
      }
    )
  }

  deleteVersionHistory(ver: any) {
    if (!window.confirm("Are you sure you want to delete this item/record?")) {
      return;
  }
    this._apiService.delete(`/compliance/delete-compliance-document-history/id/${ver.id}`).subscribe(
      (data) => {
        this._alertsService.success("Version history successfully deleted.");
        this.getVersionHistory();
      },
      (error) => {
        this._alertsService.error(error)
      }
    )

  }

  downloadVersion(ver: any) {
    this._apiService.get(`/compliance/download-compliance-document-history/id/${ver.id}`, {}, true, true).subscribe(
      (data) => {
        this.saveFile(data, ver.originalFileName);
      },
      (error) => {
        this._alertsService.error("Error downloading version history. Try again.")
      }
    )
  }

  saveFile(blobContent: any, fileName: string) {
    const blob = new Blob([blobContent], { type: 'application/octet-stream' });
    saveAs(blob, fileName);
  }

  neverExpireChange() {
    if (this.document.neverExpires == 'Y') {
      this.document.expiryDate = null;
    }
  }

  changeSort(keyName: string) {
    this.reverse = !this.reverse;
    this.keyName = keyName;
  }
}
