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
export class ProgressDashboardComponent  {
  progressCount: any;
  itemsCount = 0;
  progressData: any;
  currentTab: string;
  config:any;
  module = "Learning Management System"
  searchParams: any = {
    paging: { currentPage: 0, pageSize: 10 },
    sorts: [

    ],
    filters: [{ "field": "userCourseLessonStatus", "operator": "EQ", "value": "not attempted" }]
  };

  course: any;
  public courseData = [];
  tabs: any;

  constructor(private _apiService: ApiService,
    private _alertService: AlertsLoaderService,
    private viewContainerRef: ViewContainerRef,
    private _configService: ConfigService) { 
      this.config = this._configService.config;
    }

 
}
