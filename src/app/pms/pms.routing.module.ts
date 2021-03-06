import { PerformanceReviewComponent } from './components/performance-review/performance-review.component';
import { AddCycleComponent } from './components/employee/add-cycle/add-cycle.component';
import { FeedbackQueueComponent } from './components/feedback/feedback-queue/feedback-queue.component';
import { ViewFeedbacksComponent } from './components/feedback/view-feedbacks/view-feedbacks.component';
import { GiveFeedbackComponent } from './components/feedback/give-feedback/give-feedback.component';
import { FeedbackRequestComponent } from './components/feedback-request/feedback-request.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ManagerSubViewComponent } from './components/manager/manager-sub-view/manager-sub-view.component';
import { ManagerViewComponent } from './components/manager/manager-view/manager-view.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../services/user.service';
import { EmployeeViewComponent } from './components/employee/employee-view/employee-view.component';


const pmsRoutes: Routes = [
    { path: '', redirectTo: "dashboard" },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'admin', component: AdminComponent },
    {
        path: 'feedback', component: FeedbackComponent, children: [
            { path: '', component: FeedbackQueueComponent, pathMatch: 'full' },
            { path: 'give-feedback/:userCycleId', component: GiveFeedbackComponent, pathMatch: 'full' },
            { path: 'view-feedbacks/:userCycleId', component: ViewFeedbacksComponent, pathMatch: 'full' },

        ]
    },
    {
        path: 'employee', component: EmployeeComponent, children: [
            { path: '', pathMatch: 'full', component: EmployeeViewComponent },
            { path: 'add-performance-cycle', component: AddCycleComponent, pathMatch: 'full' },
            { path: 'performance-review/:cycleId', component: PerformanceReviewComponent, pathMatch: 'full' },
            { path: 'request-feedback/:cycleId', pathMatch: 'full', component: FeedbackRequestComponent }

        ]
    },
    {
        path: 'manager', component: ManagerComponent, children: [
            { path: '', pathMatch: 'full', component: ManagerViewComponent },
            { path: 'manager-subview/:cycleId', component: ManagerSubViewComponent, pathMatch: 'full' },
            { path: 'manager-subview/:cycleId/:name', component: PerformanceReviewComponent, pathMatch: 'full' }

        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(pmsRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class PmsRoutingModule { }