import { Injectable,Injector } from "@angular/core";
import { Router, CanActivate, CanLoad } from "@angular/router";
@Injectable()
export class UserService implements CanActivate, CanLoad {
    userDetails: any;
    authToken: any;
    constructor(private injector: Injector) {

    }
    decryptToken(token: any) {
        var base64Url = token.split(".")[0];
        var decryptedUserDetails = JSON.parse(window.atob(base64Url));
        if (decryptedUserDetails) {
            //check if the token has expired
            if (new Date(decryptedUserDetails.expires) < new Date()) {
                return false;
            } else {
                this.userDetails = decryptedUserDetails;
                return decryptedUserDetails;
            }
        }
    }
    getUserDetails() {
        return new Promise((resolve, reject) => {
            let rmsAuthToken = localStorage.getItem("rmsAuthToken");
            this.authToken = rmsAuthToken;
            setTimeout(() => {
                if (!rmsAuthToken) {
                    resolve(false);
                } else {
                    resolve(this.decryptToken(rmsAuthToken));
                }
            }, 1000);
        });
    }
    logOut(){
            localStorage.removeItem("rmsAuthToken");
            this.userDetails = null;
            let router = this.injector.get(Router);
             router.navigate(["login"]);
    }
    canActivate() {
        if (this.userDetails) {
            return true;
        } else {
            let router = this.injector.get(Router);
             router.navigate(["login"]);
            return false;
        }
    }
    canLoad(){
        if (this.userDetails) {
            return true;
        } else {
            let router = this.injector.get(Router);
             router.navigate(["login"]);
            return false;
        }
    }
}
