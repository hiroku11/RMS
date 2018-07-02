import { ApiService } from '../../../../services/api.service';

import { HttpActionDirective } from '../../../../core.components.module/directives/http-action.directive';
import { AlertsLoaderService } from '../../../../services/alerts-loader.service';
import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { UserService } from './../../../../services/user.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  userId:any;
  reason:any;
  cid:any;
  constructor(private _apiService: ApiService,
    private _alertService: AlertsLoaderService,
    private viewContainerRef: ViewContainerRef,
  private userService: UserService) {
     this.userId = userService.userDetails.id;
     }
  courseData : any = [];
 
  ngOnInit() {
    this.getCourse();
  }
  getCourse(){
    this._apiService
    .get("/course/search-courses")
    .subscribe(data => {
      this.courseData = data.courses; 
    });
  }
  addCourse(id:number){
    let payload = {
      "addReason": this.reason
    }
    this._apiService
    .put(`/user/add-course-to-user/userId/`+this.userId +`/courseId/`+this.cid,payload)
    .subscribe(data => {
      this._alertService.success("Course Added successfully.");
    });
  }

}
