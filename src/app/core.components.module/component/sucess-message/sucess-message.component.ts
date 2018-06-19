import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './sucess-message.component.html',
  styleUrls: ['./sucess-message.component.css']
})
export class SuccessMessageComponent implements OnInit {
  message: string;
  constructor() {
    this.message = "Successfully saved.";
   }

  ngOnInit() {
  }

}
