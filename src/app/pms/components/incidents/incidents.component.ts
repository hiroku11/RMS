import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  @Input() cycle: any;
  constructor() { }

  ngOnInit() {
  }

}
