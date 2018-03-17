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
  constructor(public _httpIndicatorService: AlertsLoaderService){}
  @ViewChild(HttpActionDirective) httpActionDirective: HttpActionDirective;
  ngAfterViewInit() {
    this._httpIndicatorService.httpActionIndicator = this.httpActionDirective;
  }
}
