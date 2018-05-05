import { element } from 'protractor';
import { AlertsLoaderService } from "./alerts-loader.service";
import { Injectable } from "@angular/core";
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from "@angular/common/http";
import { ResponseContentType } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import { UserService } from "./user.service";
import * as moment from 'moment';
import { ConfigService } from './config.service';

@Injectable()
export class ApiService {
    apiUrl: string = "https://b60be67e.ngrok.io/rmsrest/s";
    loginApi: string = "https://b60be67e.ngrok.io/rmsrest/p";
    config: any;
    constructor(
        private _http: HttpClient,
        private _ajaxLoader: AlertsLoaderService,
        private _userService: UserService,
        private _configService: ConfigService
    ) {
        this.config = this._configService.config;
    }
    post(url: string, data: any, headers?: any, showLoader: boolean = true) {
        let apiUrl = url.indexOf('login') != -1 ? this.loginApi : this.apiUrl;
        this._ajaxLoader.showLoader();
        if (!headers) {
            headers = {};
        }
        if (url.indexOf('login') == -1) {
            headers["X-AUTH-TOKEN"] = this._userService.authToken;
            data = this.parseDateToApiFormat(data);
        }
        return this._http
            .post(apiUrl + url, data, { headers: headers })
            .map((res: any) => {
                res = this.parseDate(res);
                this._ajaxLoader.hideLoader();
                return res;
            })
            .catch((error: HttpErrorResponse) => {
                this._ajaxLoader.hideLoader();
                return Observable.throw(error);
            });
    }
    get(url: string, headers?: any, showLoader: boolean = true, blob: boolean = false) {
        this._ajaxLoader.showLoader();
        if (!headers) {
            headers = {};
        }
        headers["X-AUTH-TOKEN"] = this._userService.authToken;
        let options: any = {
            headers: headers,
        }
        if (blob) {
            options.responseType = 'blob';
        }
        return this._http
            .get(this.apiUrl + url, options)
            .map((res: any) => {
                res = this.parseDate(res);
                this._ajaxLoader.hideLoader();
                return res;
            })
            .catch((error: HttpErrorResponse) => {
                this._ajaxLoader.hideLoader();
                return Observable.throw(error);
            });
    }

    put(url: string, data: any, headers?: any, showLoader: boolean = true) {
        this._ajaxLoader.showLoader();
        if (!headers) {
            headers = {};
        }
        headers["X-AUTH-TOKEN"] = this._userService.authToken;
        data = this.parseDateToApiFormat(data);
        return this._http
            .put(this.apiUrl + url, data, { headers: headers })
            .map((res: any) => {
                res = this.parseDate(res);
                this._ajaxLoader.hideLoader();
                return res;
            })
            .catch((error: HttpErrorResponse) => {
                this._ajaxLoader.hideLoader();
                return Observable.throw(error);
            });
    }

    delete(url: string, headers?: any, showLoader: boolean = true) {
        this._ajaxLoader.showLoader();
        if (!headers) {
            headers = {};
        }
        headers["X-AUTH-TOKEN"] = this._userService.authToken;
        return this._http
            .delete(this.apiUrl + url, { headers: headers })
            .map((res: any) => {
                res = this.parseDate(res);
                this._ajaxLoader.hideLoader();
                return res;
            })
            .catch((error: HttpErrorResponse) => {
                this._ajaxLoader.hideLoader();
                return Observable.throw(error);
            });
    }

    // getFile(url: string) {
    //     const options = new HttpHeaders();
    //     options.append("responseType",'arraybuffer');
    //     options.append('Accept', 'application/octet-stream');
    //     options.append("X-AUTH-TOKEN",this._userService.authToken);
    //     // let headers = {};
    //     // headers["X-AUTH-TOKEN"] = this._userService.authToken;
    //     // headers['responseType']='arraybuffer';
    //     return this._http.get(this.apiUrl + url,{headers:options});
    // }
    parseDateToApiFormat(payload: any) {
        for (let key in payload) {
            if (key.indexOf("Time") > -1 && payload[key]) {
                payload[key] = moment(payload[key]).format("DD/MM/YYYY HH:mm:ss").toString();
                continue;
            }
            if (key.indexOf("Date") > -1 && payload[key]) {
                payload[key] = moment(payload[key]).format("DD/MM/YYYY").toString();
                continue;
            }
            if (Array.isArray(payload[key]) || typeof payload[key] == 'object') {
                payload[key] = this.parseDateToApiFormat(payload[key]);
            }
        }
        return payload;
    }
    parseDate(response: any) {
        if (Array.isArray(response)) {
            response.forEach(element => {
                this.parseDate(element);
            });
        }
        for (let key in response) {
            if (Array.isArray(response[key])) {
                response[key].forEach(element => {
                    this.parseDate(element);
                });
            }
            if (key.indexOf("Date") > -1 && response[key]) {
                response[key] = moment(response[key], "DD/MM/YYYY HH:mm:ss").toDate();
            }
        }
        return response;
    }
    login(url, data) {
        return this.post(url, data);
    }
    getAssetTypes(url: string) {
        return this.get(url);
    }
    createOrUpdateBuilding(url: string, data: any) {
        return this.put(url, data);
    }

    createOrUpdateOtherAsset(url: string, data: any) {
        return this.put(url, data);
    }
    createOrUpdateEquipment(url: string, data: any) {
        return this.put(url, data);
    }
    createOrUpdateVehicle(url: string, data: any) {
        return this.put(url, data);
    }

}
