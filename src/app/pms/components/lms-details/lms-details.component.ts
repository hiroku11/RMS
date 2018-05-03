import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lms-details',
  templateUrl: './lms-details.component.html',
  styleUrls: ['./lms-details.component.scss']
})
export class LmsDetailsComponent implements OnInit {
  @Input() cycle: any;
  constructor() { }

  ngOnInit() {
  }

}
