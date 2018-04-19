import { CoreComponentsModule } from './../core.components.module/core.components.module';
import { PmsRoutingModule } from './pms.routing.module';
import { PaginationModule } from 'ngx-pagination-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SmMenuComponent } from './components/sm-menu/sm-menu.component';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
// import { UserLookupComponent } from './components/user-lookup/user-lookup.component';
import { SelectDropDownModule } from "ngx-select-dropdown";
// import { SearchComponent } from './components/search/search.component';
import {AdminComponent} from './components/admin/admin.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {ManagerComponent} from './components/manager/manager.component';
import {FeedbackComponent} from './components/feedback/feedback.component';

@NgModule({
  imports: [
    CommonModule,
    PmsRoutingModule, CoreComponentsModule
  ],
  declarations: [DashboardComponent, SideNavComponent, SmMenuComponent, AdminComponent, FeedbackComponent, ManagerComponent, EmployeeComponent]
})
export class PmsModule { }
