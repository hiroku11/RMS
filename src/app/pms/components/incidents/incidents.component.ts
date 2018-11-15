import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  @Input() cycle: any;
  data:any;
  constructor() { }

  ngOnInit() {
    
  }
  ngOnChanges(cycle){
    this.data = this.cycle.incidentTabPage;
  
  }

}
