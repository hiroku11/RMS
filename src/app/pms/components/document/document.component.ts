import { Component, OnInit, Input } from '@angular/core';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Params, ActivatedRoute } from '@angular/router';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  @Input() userPerformanceCycleId: number;
  @Input() cycle: any;
  data: any;
  constructor(private route: ActivatedRoute, private _api: ApiService, private _alert: AlertsLoaderService, private userService: UserService) { }

  ngOnInit() {
    this.getDocument()
  }

  documentSelected($event: any) {

  }
  downloadDocument(id: number) {
    this._api.get(`/performance/download-performance-document/id/${id}`).subscribe(
      (data) => {
        this.data = data;
      }, (error) => {

      }
    )
  }
  deleteDocumnet(id: number) {

    this._api.delete(`performance/delete-performance-document/userPerformanceCycleId/` + this.userPerformanceCycleId + `/id/${id}`).subscribe(
      (data) => {
        this.data = data;
      }, (error) => {

      }
    )
  }
  getDocument() {
    this._api.get(`/performance/performance-documents/userPerformanceCycleId/` + this.userPerformanceCycleId).subscribe(
      (data) => {
        this.data = data;
      }, (error) => {

      }
    )
  }
}
