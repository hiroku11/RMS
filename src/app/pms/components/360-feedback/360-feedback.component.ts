import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-360-feedback',
  templateUrl: './360-feedback.component.html',
  styleUrls: ['./360-feedback.component.scss']
})
export class Three60FeedbackComponent implements OnInit {
  @Input() cycle: any;
  @Output() update: EventEmitter<any> = new EventEmitter();
  externalFeedbacks: any = [];
  internalFeedbacks: any = [];
  constructor(private _api: ApiService, private _alert: AlertsLoaderService) { }

  ngOnInit() {
   if(this.cycle.peerComment){
      this.internalFeedbacks = this.cycle.peerComment.peerCommentsInternal;
      this.externalFeedbacks = this.cycle.peerComment.peerCommentsExternal;
    }
  }

  deleteInternalFeedback(feed: any) {
    if (!window.confirm("Are you sure you want to delete this item/record?")) {
      return;
    }
    this._api.delete(`/performance/delete-internal-feedback/userPerformanceCycleId/${this.cycle.userPerformanceCycleId}/internalFeedbackId/${feed.id}`).subscribe(
      (data) => {
        this.cycle.peerComment = data;
        this.update.emit(this.cycle);
        this._alert.success("Feedback successfully deleted");
      }, (error) => {
        this._alert.error(error);
      }
    )

  }
  deleteExternalFeedback(feed) {
    if (!window.confirm("Are you sure you want to delete this item/record?")) {
      return;
    }
    this._api.delete(`/performance/delete-external-feedback/userPerformanceCycleId/${this.cycle.userPerformanceCycleId}/externalFeedbackId/${feed.id}`).subscribe(
      (data) => {
        this.cycle.peerComment = data;
        this.update.emit(this.cycle);
        this._alert.success("Feedback successfully deleted");
      }, (error) => {
        this._alert.error(error);
      }
    );
  }

}
