import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  documentSelected($event: any){

  }
  downloadDocument(doc:any){

  }
  deleteDocumnet(doc:any, index: number){

  }
}
