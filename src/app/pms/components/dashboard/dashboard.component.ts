import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isAdmin: boolean;
  isSupervisor: boolean;
  constructor(private user: UserService) {
    if (this.user.isAdmin) {
      this.isAdmin = true;
    }
    if(this.user.isSupervisor){ 
      this.isSupervisor = true;
    }
  }

  ngOnInit() {
  }

}
