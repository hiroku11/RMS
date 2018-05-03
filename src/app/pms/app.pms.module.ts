import { FormsModule } from '@angular/forms';
import { Three60FeedbackComponent } from './components/360-feedback/360-feedback.component';
import { PerformanceReviewComponent } from './components/performance-review/performance-review.component';
import { GiveFeedbackComponent } from './components/feedback/give-feedback/give-feedback.component';
import { FeedbackRequestComponent } from './components/feedback-request/feedback-request.component';
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
import {IncidentsComponent} from './components/incidents/incidents.component';
import {DocumentComponent} from './components/document/document.component';
import {EmployeeComponent} from './components/employee/employee.component';
import {ManagerComponent} from './components/manager/manager.component';
import {ManagerSubViewComponent} from './components/manager/manager-sub-view/manager-sub-view.component';
import {ManagerViewComponent} from './components/manager/manager-view/manager-view.component'
import {FeedbackComponent} from './components/feedback/feedback.component';
import { FeedbackQueueComponent } from './components/feedback/feedback-queue/feedback-queue.component';
import { EmployeeViewComponent } from './components/employee/employee-view/employee-view.component';
import { AddCycleComponent } from './components/employee/add-cycle/add-cycle.component';
import { GoalDetailsComponent } from './components/goal-details/goal-details.component';
import { LmsDetailsComponent } from './components/lms-details/lms-details.component';
import { UserLookupComponent } from './components/user-lookup/user-lookup.component';




@NgModule({
  imports: [
    CommonModule,FormsModule,
    PmsRoutingModule, CoreComponentsModule, SelectDropDownModule
  ],
  declarations: [DashboardComponent, SideNavComponent, SmMenuComponent, AdminComponent, FeedbackComponent, ManagerComponent, EmployeeComponent,
    Three60FeedbackComponent, FeedbackRequestComponent, GiveFeedbackComponent, FeedbackQueueComponent, EmployeeViewComponent, AddCycleComponent,
    IncidentsComponent,ManagerViewComponent,ManagerSubViewComponent, PerformanceReviewComponent,
    ManagerSubViewComponent, GoalDetailsComponent, DocumentComponent, LmsDetailsComponent, UserLookupComponent]

})
export class PmsModule { }
