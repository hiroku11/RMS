import { UserService } from './../../../services/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sm-menu',
  templateUrl: './sm-menu.component.html',
  styleUrls: ['./sm-menu.component.scss']
})
export class SmMenuComponent implements OnInit {
  menuOpen: boolean = false;
  @Input() thisView: string;
  userDetails: any;
  constructor(private userService: UserService) {
    this.userDetails = this.userService.userDetails;
  }

  ngOnInit() {
    //this.thisView = this._sharedService.activeView;
  }
  logOut() {
    this.userService.logOut();
  }
  toggleSideNav() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }

}
