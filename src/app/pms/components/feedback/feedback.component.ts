import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  hideReqButton: boolean = true;
  constructor(private _route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url.indexOf('request-feedback') > -1 || event.url.indexOf('give-feedback') > -1) {
          this.hideReqButton = false;
          return;
        } else {
          this.hideReqButton = true;
        }
      }
    });
  }

  ngOnInit() {

  }

}
