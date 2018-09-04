import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-courses-data',
  templateUrl: './my-courses-data.component.html',
  styleUrls: ['./my-courses-data.component.scss']
})
export class MyCoursesDataComponent implements OnInit {
  module = 'Learning Management System';
  constructor() { }

  ngOnInit() {
  }

}
