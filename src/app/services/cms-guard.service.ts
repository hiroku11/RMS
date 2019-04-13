import { CanActivate } from '@angular/router';
import { ApiService } from './api.service';
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
export class CmsGuardService implements CanLoad, CanActivate {
   isCmsUser: boolean;
   constructor(
      private _alerts: AlertsLoaderService,
      private _apiService: ApiService, private user: UserService
   ) {
      this.user.userLoggedOut.subscribe((logout) => {
         this.isCmsUser = null;
      });
   }

   canLoad(): Promise<boolean> | boolean {
      if (this.isCmsUser) {
         return true;
      }
      return new Promise((resolve, reject) => {
         this._apiService.get('/compliance/access-compliance-module').subscribe((data) => {
            resolve(true);
            this.isCmsUser = true;
         }, (error) => {
            if (error.status === 403) {
               reject(false);
               this._alerts.hideLoader();
            } else {
               reject(false);
            }
            this._alerts.error(error);
         });
         // setTimeout(() => resolve(false), 1000); // (*)
      });
   }

   canActivate(): Promise<boolean> | boolean {
      if (this.isCmsUser) {
         return true;
      }
      return new Promise((resolve, reject) => {
         this._apiService.get('/compliance/access-compliance-module').subscribe((data) => {
            resolve(true);
            this.isCmsUser = true;
         }, (error) => {
            if (error.status === 403) {
               reject(false);
               this._alerts.hideLoader();
            } else {
               reject(false);
            }
            this._alerts.error(error);
         });
         // setTimeout(() => resolve(false), 1000); // (*)
      });
   }
}

