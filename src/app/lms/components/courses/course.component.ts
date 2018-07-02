import { ApiService } from '../../../services/api.service';

import { HttpActionDirective } from '../../../core.components.module/directives/http-action.directive';
import { AlertsLoaderService } from '../../../services/alerts-loader.service';
import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  userId:any;
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
    this._apiService
    .put(`/user/add-course-to-user/userId/`+this.userId +`/courseId/${id}`,'')
    .subscribe(data => {
      this._alertService.success("Course Added successfully.");
    });
  }

}
