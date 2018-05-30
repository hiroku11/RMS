import { GiveFeedbackExternalComponent } from './core.components.module/component/give-feedback-external/give-feedback-external.component';
import { HomeComponent } from './core.components.module/component/home/home.component';
import { UserService } from './services/user.service';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core.components.module/component/login/login.component';

const appRoutes: Routes = [
   { path: '', component: HomeComponent, pathMatch: "full" },
   { path: 'home', component: HomeComponent, pathMatch: "full" },
   { path: 'login', component: LoginComponent },
   { path: 'give-feedback-external/:cycleId', component: GiveFeedbackExternalComponent },
   { path: 'cms', loadChildren: "app/cms/app.cms.module#CmsModule", canLoad: [UserService], canActivate: [UserService] },
   { path: 'ams', loadChildren: "app/ams/app.ams.module#AmsModule", canLoad: [UserService], canActivate: [UserService] },
   { path: 'pms', loadChildren: "app/pms/app.pms.module#PmsModule", canLoad: [UserService], canActivate: [UserService] },
   { path: 'lms', loadChildren: "app/lms/app.lms.module#LmsModule", canLoad: [UserService], canActivate: [UserService] }
]

@NgModule({
   imports: [
      RouterModule.forRoot(appRoutes)
   ],
   exports: [RouterModule],
   providers: []
})
export class AppRoutingModule { }