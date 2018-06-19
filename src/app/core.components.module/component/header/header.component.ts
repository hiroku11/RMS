import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userDetails:any;
  constructor(private userService: UserService) { 
    this.userDetails = this.userService.userDetails;
  }

  ngOnInit() {
  }
  logOut(){
    this.userService.logOut();
  }
}
