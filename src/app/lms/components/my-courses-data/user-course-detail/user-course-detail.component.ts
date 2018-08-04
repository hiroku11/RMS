import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit,ViewContainerRef} from '@angular/core';
import { UserService } from './../../../../services/user.service';
import { SharedService } from '../../../../services/shared.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-course-detail',
  templateUrl: './user-course-detail.component.html',
  styleUrls: ['./user-course-detail.component.scss']
})
export class UserCourseDetailComponent implements OnInit {

  Id:any;
  course:any;
   constructor(private route: ActivatedRoute,private _apiService: ApiService,
     private _alertService: AlertsLoaderService,
     private viewContainerRef: ViewContainerRef,
   private userService: UserService,private _location: Location) { }
 
   ngOnInit() {
     this.route.params.subscribe((params: Params) => {
       this.Id = params["id"];
     });
     this.getCourseDetail(this.Id)
   }
   getCourseDetail(Id:number){
     this._apiService
     .get(`/user-course-entity/id/${Id}`)
     .subscribe(data => {
       this.course = data.course;
       // this._alertService.success("Course Detail fetched successfully.");
     },(error)=>{
       this._alertService.error('Some error occured. Try Again')
     });
   }
   goBack(){
     this._location.back();
   }
}
