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
export class ApiService {
    apiUrl: string = 'https://gotorisk.co.uk:8443/rmsrest/s';
    loginApi: string = 'https://gotorisk.co.uk:8443/rmsrest/p';
    config: any;
    constructor(
        private _http: HttpClient,
        private _ajaxLoader: AlertsLoaderService,
        private _userService: UserService,
        private _configService: ConfigService
    ) {
        this.config = this._configService.config;
        this.apiUrl = this.config.apiUrl;
        this.loginApi = this.config.loginApi;
    }
    post(url: string, data: any, formdata: boolean, headers?: any, showLoader: boolean = true) {

        let apiUrl = url.indexOf('login') != -1 || url.indexOf('external') != -1 ? this.loginApi : this.apiUrl;
        this._ajaxLoader.showLoader();
        if (!headers) {
            headers = {};
        }
        if (url.indexOf('login') == -1) {
            headers["X-AUTH-TOKEN"] = this._userService.authToken;
            if (!formdata) {
                data = this.parseDateToApiFormat(JSON.parse(JSON.stringify(data)));
            }
        }
        if (url.indexOf('add-feedback-external') > - 1) {
            delete headers["X-AUTH-TOKEN"];
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
        let apiUrl = url.indexOf('external') != -1 ? this.loginApi : this.apiUrl;
        if (url == '/search-user' && this._userService.authToken === null) {
            apiUrl = this.loginApi;
        }
        if (url.indexOf(`view-feedback-external`) !== -1) {
            apiUrl = this.apiUrl;
        }
        this._ajaxLoader.showLoader();
        if (!headers) {
            headers = {};
        }
        if ((url.indexOf('external') == -1 || url.indexOf(`view-feedback-external`) !== -1)
            && this._userService.authToken !== null) {
            headers["X-AUTH-TOKEN"] = this._userService.authToken;
        }
        let options: any = {
            headers: headers,
        }
        if (blob) {
            options.responseType = 'blob';
        }
        return this._http
            .get(apiUrl + url, options)
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
        data = this.parseDateToApiFormat(JSON.parse(JSON.stringify(data)));
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
        if (!headers) {
            headers = {};
        }
        if (showLoader) {
            this._ajaxLoader.showLoader();
        }
        headers["X-AUTH-TOKEN"] = this._userService.authToken;
        return this._http
            .delete(this.apiUrl + url, { headers: headers })
            .map((res: any) => {
                this._ajaxLoader.hideLoader();
                res = this.parseDate(res);
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
        if (Array.isArray(payload)) {
            payload.forEach((item) => {
                this.parseDateToApiFormat(item);
            })
        }
        for (let key in payload) {

            if (payload[key] === null) {
                continue;
            }
            if (key.indexOf('totalTime') > -1) {
                continue;
            }

            if (key.indexOf("Time") > -1 && payload[key]) {
                let val = payload[key];
                payload[key] = moment(payload[key]).format("DD/MM/YYYY HH:mm:ss").toString();
                if (payload[key] === 'Invalid date') {
                    payload[key] = val;
                }
                continue;
            }
            if ((key.indexOf("Date") > -1 || key.indexOf('dateOf') > -1) && payload[key]) {
                let val = payload[key];
                payload[key] = moment(payload[key]).format("DD/MM/YYYY").toString();
                if (payload[key] === 'Invalid date') {
                    payload[key] = val;
                }
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
                element = this.parseDate(element);
            });
        }
        for (let key in response) {
            if (Array.isArray(response[key])) {
                response[key].forEach(element => {
                    element = this.parseDate(element);
                });
            }
            if (typeof response[key] === 'object') {
                response[key] = this.parseDate(response[key])
            }
            if ((key.indexOf("Date") > -1 || key.indexOf('dateOf') > -1) && response[key]) {
                response[key] = moment(response[key], "DD/MM/YYYY HH:mm:ss").toDate();
            }
        }
        return response;
    }
    login(url, data) {
        return this.post(url, data, false);
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

    passwordReset(url: any) {
        this._ajaxLoader.showLoader();
        return this._http
            .put(this.loginApi + url, {}, { headers: {} })
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

    postcodelookup(url: string) {
        return this._http.get(url);
    }

}
