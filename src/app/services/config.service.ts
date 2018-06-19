import { ApiService } from './api.service';
import { Injectable } from "@angular/core";
import { Router, CanActivate, CanLoad } from "@angular/router";
import {
    HttpClient
} from "@angular/common/http";
@Injectable()
export class ConfigService  {
    config: any;
    constructor(private _http: HttpClient) {
    }
    getConfig() {
        return this._http.get('assets/config.json').toPromise();
    }
}
