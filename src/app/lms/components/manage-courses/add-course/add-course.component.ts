import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../services/user.service';
import { SharedService } from '../../../../services/shared.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  dropDownsData:any;
  constructor(private route: ActivatedRoute, private _api: ApiService, private _alert: AlertsLoaderService,
    private userService: UserService,  private _sharedService: SharedService ) {
      this._sharedService.lmsDropDownService.subscribe((data) => {
        this.dropDownsData = data;
      });
      this.dropDownsData = this._sharedService.lmsDropDownsData;
      if (!this._sharedService.lmsDropDownsData.courseTypes) {
        this._sharedService.getLmsDropdownsData();
      }
    }
  editMode =false;  
  course:any={
    "id": null,
    "statusFlag": null,
    "code": "",
    "name": "",
    "description": "",
    "facultyPhone": "",
    "courseCategory": "",
    "venue": "",
    "prerequisite": "",
    "contentDescription": "",
    "passingGrade": "",
    "startDateTime": "",
    "endDateTime": "",
    "cost": null,
    "duration": null ,
    "availableSeats": null,
    "daysToComplete": null,
    "peopleManager": "",
    "approvalRequired": "",
    "learningType": null,
    "courseType":null,
    "courseDomain": null,
    "courseDuration":null
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let Id = params["id"];
      if (Id) {
        this.getCourseId(Id);
        this.editMode = true;
      }
    });
  }
 
  getCourseId(id){
    this._api.get(`/course/id/${id}`).subscribe(
      (data) => {
        this.course = data;
      }, (error) => {
        this._alert.error(error);
      }
    )
  }
  saveCourse(){
    this._api.post(`/course/create-course`, this.course, false).subscribe(
      (data) => {
        this._alert.success('Course created successfully');
     
      }, (error) => {
        this._alert.error(error);
      }
    )

  }

  updateCourse() {
    this._api.put(`/course/update-course`, this.course).subscribe(
      (data) => {
        this._alert.success('Prodile updated successfully');
      }, (error) => {
        this._alert.error(error);
      }
    )
  }

  clearCourse(){
    this.course = {};
  }

  selectCompareFunction(item1: any, item2: any) {
    if (item1 == null || item2 == null) {
      return false;
    }
    return item1.id == item2.id;
  }
}
