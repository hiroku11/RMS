import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-sm-menu',
  templateUrl: './sm-menu.component.html',
  styleUrls: ['./sm-menu.component.scss']
})
export class SmMenuComponent implements OnInit {
  menuOpen: boolean = false;
  @Input() thisView:string;
  userDetails: any;
  isAdmin: boolean;
  isSupervisor : boolean;
  constructor(private userService: UserService) { 
    this.userDetails = this.userService.userDetails;
    this.isAdmin = this.userService.isAdmin;
    this.isSupervisor = this.userService.isSupervisor;
  }

  ngOnInit() {
  }
  toggleSideNav() {
    this.menuOpen = !this.menuOpen;
  }
  logOut() {
    this.userService.logOut();
  }
  closeMenu() {
    this.menuOpen = false;
  }

}
