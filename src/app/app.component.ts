import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { AlertsLoaderService } from './services/alerts-loader.service';
import { HttpActionDirective } from './core.components.module/directives/http-action.directive';
import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @ViewChild(HttpActionDirective) httpActionDirective: HttpActionDirective;
  constructor(public _httpIndicatorService: AlertsLoaderService, private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this._httpIndicatorService.showLoader();
        console.log("Navigation start");
      }
      if (event instanceof NavigationEnd) {
        this._httpIndicatorService.hideLoader();
        console.log("Navigation End");
      }
    })
  }

  ngAfterViewInit() {
    this._httpIndicatorService.httpActionIndicator = this.httpActionDirective;
  }
}
