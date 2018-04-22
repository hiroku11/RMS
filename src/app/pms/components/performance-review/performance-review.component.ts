import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-review',
  templateUrl: './performance-review.component.html',
  styleUrls: ['./performance-review.component.scss']
})
export class PerformanceReviewComponent implements OnInit {
  tabs: any[] = [
    {
      tab: 1,
      name: 'Goal Details'
    },
    {
      tab: 2,
      name: '360 Feedback'
    },
    {
      tab: 3,
      name: 'Documnets'
    },
    {
      tab: 4,
      name: 'Incidents'
    },
    {
      tab: 5,
      name: 'LMS'
    }
  ];
  currentTab: any;
  constructor() {
    this.currentTab = this.tabs[0];
  }

  ngOnInit() {
  }

  changeTab(tab: any) {
    this.currentTab = tab;
  }
}
