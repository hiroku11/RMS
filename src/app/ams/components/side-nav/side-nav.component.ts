import { SharedService } from './../../../services/shared.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() thisView: string;
  userDetails: any;
  constructor(private userService: UserService,private _sharedService: SharedService) { 
    this.userDetails = this.userService.userDetails;
  }

  ngOnInit() {
    //this.thisView = this._sharedService.activeView;
  }
  logOut(){
    this.userService.logOut();
  }

  // navigateToView(view){
  //   this.thisView = view;
  //   this._sharedService.activeView = view;
  // }

}
