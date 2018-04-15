import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm-menu',
  templateUrl: './sm-menu.component.html',
  styleUrls: ['./sm-menu.component.scss']
})
export class SmMenuComponent implements OnInit {
  menuOpen: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleSideNav() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }

}
