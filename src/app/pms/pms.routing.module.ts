import { AddCycleComponent } from './components/employee/add-cycle/add-cycle.component';
import { FeedbackQueueComponent } from './components/feedback/feedback-queue/feedback-queue.component';
import { GiveFeedbackComponent } from './components/feedback/give-feedback/give-feedback.component';
import { FeedbackRequestComponent } from './components/feedback/feedback-request/feedback-request.component';
import { ManagerComponent } from './components/manager/manager.component';
import {ManagerSubViewComponent} from './components/manager/manager-sub-view/manager-sub-view.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../services/user.service';
import { EmployeeViewComponent } from './components/employee/employee-view/employee-view.component';
import { PerformanceReviewComponent } from './components/employee/performance-review/performance-review.component';

const pmsRoutes: Routes = [
    { path: '', redirectTo: "dashboard" },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'admin', component: AdminComponent },
    {
        path: 'feedback', component: FeedbackComponent, children: [
            { path: '', component: FeedbackQueueComponent, pathMatch: 'full' },
            { path: 'give-feedback', component: GiveFeedbackComponent, pathMatch: 'full' },
            { path: 'request-feedback', pathMatch: 'full', component: FeedbackRequestComponent }
        ]
    },
<<<<<<< HEAD
    { path: 'employee', component: EmployeeComponent },
    { path: 'manager', component: ManagerComponent, children:[
        {path:'manager-subview', component:ManagerSubViewComponent, pathMatch:'full'}
    ] },
    {path:'manager-subview', component:ManagerSubViewComponent}
=======
    {
        path: 'employee', component: EmployeeComponent, children: [
            { path: '', pathMatch: 'full', component: EmployeeViewComponent },
            { path: 'add-performance-cycle', component: AddCycleComponent, pathMatch: 'full' },
            { path: 'performance-review', component: PerformanceReviewComponent, pathMatch: 'full' }
        ]
    },
    { path: 'manager', component: ManagerComponent }
>>>>>>> e6956009d71b55999612731acdc0738247e349f4
]

@NgModule({
    imports: [
        RouterModule.forChild(pmsRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class PmsRoutingModule { }