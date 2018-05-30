import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const lmsRoutes = [
    { path: '', redirectTo: "dashboard" },
    { path: 'dashboard' ,component: DashboardComponent},
]
@NgModule({
    imports: [
        RouterModule.forChild(lmsRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class LmsRoutingModule { }