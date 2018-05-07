import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-queue',
  templateUrl: './feedback-queue.component.html',
  styleUrls: ['./feedback-queue.component.scss']
})
export class FeedbackQueueComponent implements OnInit {
  feedbackQueue: any
  searchParams: any = { "paging": { "currentPage": 0, "pageSize": 10 } };
  itemsCount: number;
  pageSize: number = 10;

  constructor(private _api: ApiService, private _alert: AlertsLoaderService) { }

  ngOnInit() {
    this.getFeedbackQueue();
  }

  getFeedbackQueue() {
    this._api.get(`/performance/search-user-feedback-queues`, { Search: JSON.stringify(this.searchParams) }).subscribe(
      (data) => {
        this.feedbackQueue = data.userFeedbackQueues;
        this.itemsCount = data.totalRecords;
      }, (error) => {
        this._alert.error(error);
      }
    );


    // this._api.get(`/performance/user-feedback-queue/id/30`).subscribe(
    //   (data)=>{
    //     console.log(data);
    //   },(error)=>{

    //   }
    // )
  }
  getPerfId(feed: any) {
    let temp = feed.url.split("/");
    return temp[temp.length - 1];
  }
  getPageData($event) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.getFeedbackQueue();
  }
}
