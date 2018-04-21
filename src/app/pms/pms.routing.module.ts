import { GiveFeedbackComponent } from './components/feedback/give-feedback/give-feedback.component';
import { FeedbackRequestComponent } from './components/feedback/feedback-request/feedback-request.component';
import { ManagerComponent } from './components/manager/manager.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../services/user.service';
import { Three60FeedbackComponent } from './components/feedback/360-feedback/360-feedback.component';
const pmsRoutes: Routes = [
    { path: '', redirectTo: "dashboard" },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'admin', component: AdminComponent },
    {
        path: 'feedback', component: FeedbackComponent, children: [
            { path: '', component: Three60FeedbackComponent, pathMatch: 'full' },
            { path: '360-feedback', component: Three60FeedbackComponent, pathMatch: 'full' },
            { path: 'give-feedback', component: GiveFeedbackComponent, pathMatch: 'full' },
            { path: 'request-feedback', pathMatch: 'full', component: FeedbackRequestComponent }
        ]
    },
    { path: 'employee', component: EmployeeComponent },
    { path: 'manager', component: ManagerComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(pmsRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class PmsRoutingModule { }