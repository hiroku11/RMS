import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { saveAs } from 'file-saver/FileSaver';

@Component({
  selector: 'app-supporting-documents',
  templateUrl: './supporting-documents.component.html',
  styleUrls: ['./supporting-documents.component.scss']
})
export class SupportingDocumentsComponent implements OnInit {
  @Input() docsObject?: any;
  @Input() addTo: string;
  @Output() addedToAsset: EventEmitter<any> = new EventEmitter();
  files: any = [];
  fileName: string;
  uploadUrl: string;
  fileDescription: string;
  formData: FormData = new FormData();
  fileInput: any;

  constructor(private _apiService: ApiService, private _alertsService: AlertsLoaderService) {

  }

  ngOnInit() {
    this.uploadUrl = `/document/save-documents-for-${this.addTo}`;
  }

  clearSelectedFile() {
    this.fileDescription = null;
    this.fileName = null;
    this.fileInput.value = null;
  }

  documentSelected($event: any) {
    this.formData = new FormData();
    this.fileInput = $event.target;
    let addTo = this.addTo !== "rental-or-lease" ? this.addTo : "rentalOrLease";
    this.formData.append(`${addTo}Id`, this.docsObject.id);
    this.formData.append("file", $event.target.files[0]);
    this.formData.append("fileDescription", this.fileDescription);
  }
  addDocuments() {
    if (!this.docsObject.id) {
      this._alertsService.error("Please select an item from the table to add documents to.");
      return;
    }
    this._apiService.post(this.uploadUrl, this.formData, true).subscribe(
      data => {
        this._alertsService.success("Documents successfully uploaded");
        this.docsObject.documents.length == 0 ? this.docsObject.documents = data
          : this.docsObject.documents.push(data[0]);
        this.addedToAsset.emit(this.docsObject);
        this.clearSelectedFile();
      },
      error => {
        this._alertsService.error("Some error occured while uploading documents.");
      }
    )
  }

  deleteDocument(doc: any, index: number) {
    this._apiService.delete(`/document/delete-document/${doc.id}`).subscribe(
      data => {
        this._alertsService.success("Document deleted successfully");
        this.docsObject.documents.splice(index, 1);
        this.addedToAsset.emit(this.docsObject);
      },
      error => {
        this._alertsService.error(error);
      }
    )
  }

  downloadDocument(doc: any) {
    this._apiService.get(`/document/download-document/${doc.id}`, {}, true, true).subscribe(
      data => {
        this.saveFile(data, doc.originalFileName);
      },
      error => {
        this._alertsService.error("Some error occured while download document.");
        console.log(error);
      }
    )
  }

  saveFile(blobContent: any, fileName: string) {
    const blob = new Blob([blobContent], { type: 'application/octet-stream' });
    saveAs(blob, fileName);
  }
}
