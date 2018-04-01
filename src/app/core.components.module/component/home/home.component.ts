import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slideImages = [
    {
      image: './assets/images/slider2.jpg',
      title: null
    },
    {
      image: './assets/images/slider3.jpg',
      title: null
    },
    {
      image: './assets/images/slider4.jpg',
      title: null
    },
    {
      image: './assets/images/slider6.jpg',
      title: null
    },
    {
      image: './assets/images/slider7.jpg',
      title: null
    }
  ];
  config = {
    autoPlay: true,
    height: '300px',
    width: '100%',
    delay: 3000
  }
  constructor() { }

  ngOnInit() {
  }

}
