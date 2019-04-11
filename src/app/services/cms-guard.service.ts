import { CanLoad } from '@angular/router';
import { AlertsLoaderService } from "./alerts-loader.service";
import { Injectable } from "@angular/core";
import {
   HttpClient,
   HttpHeaders,
   HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import { UserService } from "./user.service";
import * as moment from 'moment';
import { ConfigService } from './config.service';

@Injectable()
export class CmsGuardService implements CanLoad {
   apiUrl: string = 'https://gotorisk.co.uk:8443/rmsrest/s';
   loginApi: string = 'https://gotorisk.co.uk:8443/rmsrest/p';
   config: any;
   constructor(
      private _http: HttpClient,
      private _alerts: AlertsLoaderService,
      private _configService: ConfigService
   ) {
      this.config = this._configService.config;
      this.apiUrl = this.config.apiUrl;
      this.loginApi = this.config.loginApi;
   }

   canLoad(): Promise<boolean> {
      return new Promise((resolve: Function, reject: Function) => {
         this._http.get('/rmsrest/s/compliance/access-compliance-module').subscribe((data) => {
            resolve(true);
         }, (error) => {
            if (error.status === 403) {
               reject(false);
            } else {
               this._alerts.error(error);
               reject(false);
            }
         });
      });

   }
}
