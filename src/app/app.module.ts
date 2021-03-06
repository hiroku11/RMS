import { HttpInterceptorService } from './services/http-interceptor.service';
import { ConfigService } from './services/config.service';
import { CoreComponentsModule } from './core.components.module/core.components.module';
import { FormsModule } from '@angular/forms';
import { HttpActionDirective } from './core.components.module/directives/http-action.directive';
import { SharedService } from './services/shared.service';
import { AlertsLoaderService } from './services/alerts-loader.service';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CmsGuardService } from './services/cms-guard.service';




@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, HttpClientModule,
    FormsModule, CoreComponentsModule
  ],
  providers: [UserService, CmsGuardService,
    {
      provide: APP_INITIALIZER,
      useFactory: getUserDetails,
      deps: [UserService],
      multi: true
    }, ApiService, ConfigService, {
      provide: APP_INITIALIZER,
      useFactory: getAppConfig,
      deps: [ConfigService],
      multi: true
    }, AlertsLoaderService, SharedService, {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getUserDetails(userService: UserService) {
  return () => userService.getUserDetails().then((data) => {
    if (!data) {
      return false;
    }
  });
}


export function getAppConfig(_configService: ConfigService) {
  return () => _configService.getConfig().then((data) => {
    // console.log(data);
    if (!data) {
      return false;
    } else {
      _configService.config = data;
      return true;
    }
  });
}
