import { ApiService } from '../../../services/api.service';

import { HttpActionDirective } from '../../../core.components.module/directives/http-action.directive';
import { AlertsLoaderService } from '../../../services/alerts-loader.service';
import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ConfigService } from '../../../services/config.service';
@Component({
  selector: 'app-progress',
  templateUrl: './progress-dashboard.component.html',
  styleUrls: ['./progress-dashboard.component.scss']
})
export class ProgressDashboardComponent {

  module = "Learning Management System"

  constructor() {
    // this.config = this._configService.config;
  }


}
