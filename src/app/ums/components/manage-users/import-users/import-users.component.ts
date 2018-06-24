import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-users',
  templateUrl: './import-users.component.html',
  styleUrls: ['./import-users.component.scss']
})
export class ImportUsersComponent implements OnInit {
  importData = new FormData();
  constructor(private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
  }

  fileSelected($event){
    //this.importData.append()
    debugger
  }
  import(){
    // this.api.post(`/bulk-upload/users`,this.importData,true)

  }

}
