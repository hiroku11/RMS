import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-360-feedback',
  templateUrl: './360-feedback.component.html',
  styleUrls: ['./360-feedback.component.scss']
})
export class Three60FeedbackComponent implements OnInit {
  @Input() cycle: any;
  constructor() { }

  ngOnInit() {
    console.log(this.cycle);
  }

}
