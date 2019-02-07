import { UserService } from './../../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userDetails: any;
  @Input() module: string;
  @Input() hideOptions = false;
  constructor(private userService: UserService) {
    this.userDetails = this.userService.userDetails;
  }

  ngOnInit() {
  }
  logOut() {
    this.userService.logOut();
  }
}
