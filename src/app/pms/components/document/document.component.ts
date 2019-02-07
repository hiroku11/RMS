import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Params, ActivatedRoute } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { saveAs } from 'file-saver/FileSaver';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  @Input() userPerformanceCycleId: number;
  @Input() cycle: any;
  @Output() update: EventEmitter<any> = new EventEmitter();
  documents: any = [];
  formData: FormData;
  fileInput: any;
  file: any = {};
  isManager: boolean;
  comments: string;
  constructor(private route: ActivatedRoute, private _api: ApiService,
    private _alert: AlertsLoaderService, private userService: UserService) { }

  ngOnInit() {
    this.getDocument();

    this.route.params.subscribe((params: Params) => {
      let Id = params["cycleId"];
      let userId = params["name"];
      if (Id && userId) {
        this.isManager = true;
        // this.getUserPerfomanceCycle(this.Id, userId);
      } else if (Id) {
        this.isManager = false;
      }
    });
  }
  clearSelectedFile() {
    this.file = {};
    this.fileInput.value = null;
  }

  documentSelected($event: any) {
    this.formData = new FormData();
    this.fileInput = $event.target;
    this.formData.append("file", $event.target.files[0]);
    this.formData.append('userPerformanceCycleId', this.cycle.userPerformanceCycleId);
    this.formData.append("fileDescription", this.file.fileDescription);
    this.formData.append('comments', this.file.comments);
  }

  addDocument() {
    this._api.post(`/performance/save-performance-document`, this.formData, true).subscribe(
      (data) => {
        this._alert.success("Documnet added successfully");
        this.documents.push(data);
      }, (error) => {
        this._alert.error(error);
      }
    )
  }
  downloadDocument(doc: any) {
    this._api.get(`/performance/download-performance-document/id/${doc.id}`, null, true, true).subscribe(
      (data) => {
        this.saveFile(data, doc.originalFileName);
      }, (error) => {
        this._alert.error("Some error occured while downloading document.");
      }
    )
  }
  deleteDocumnet(doc: any, index: number) {
    if (!window.confirm("Are you sure you want to delete this item/record?")) {
      return;
    }
    this._api.delete(`/performance/delete-performance-document/userPerformanceCycleId/${this.userPerformanceCycleId}/id/${doc.id}`).subscribe(
      (data) => {
        this._alert.success("Document successfully deleted");
        this.documents.splice(index, 1);
      }, (error) => {
        this._alert.error(error);
      }
    )
  }
  saveFile(blobContent: any, fileName: string) {
    const blob = new Blob([blobContent], { type: 'application/octet-stream' });
    saveAs(blob, fileName);
  }
  getDocument() {
    this._api.get(`/performance/performance-documents/userPerformanceCycleId/` + this.userPerformanceCycleId).subscribe(
      (data) => {
        this.documents = data;
      }, (error) => {
        this._alert.error(error)
      }
    )
  }
}
