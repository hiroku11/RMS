import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-request',
  templateUrl: './feedback-request.component.html',
  styleUrls: ['./feedback-request.component.scss']
})
export class FeedbackRequestComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {
    
   }

  ngOnInit() {
  }

}
