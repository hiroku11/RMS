import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor() { }
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
  }

}
