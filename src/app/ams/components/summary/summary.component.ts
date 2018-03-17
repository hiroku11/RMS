import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'asset-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() asset: any;
  constructor() { }

  ngOnInit() {
  }

  getFireExtinguishersDisplay(fireExtinguisherTypes: any){
     if(fireExtinguisherTypes.length > 1){
       return fireExtinguisherTypes[0].description + " +" + (fireExtinguisherTypes.length - 1) + "more"
     }
     if(fireExtinguisherTypes.length === 1){
       return fireExtinguisherTypes[0].description;
     }
     return "";
  }
}
