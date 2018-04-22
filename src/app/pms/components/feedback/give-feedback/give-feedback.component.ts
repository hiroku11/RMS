import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.component.html'
})
export class GiveFeedbackComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
  }

}
