import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  constructor(private _sharedService: SharedService) {
    this._sharedService.getCmsDropdownsData();
   }

  ngOnInit() {
  }

}
