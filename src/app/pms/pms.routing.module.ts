import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AdminComponent} from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../services/user.service';
const pmsRoutes: Routes = [
    { path: '', redirectTo:"dashboard"},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'admin', component:AdminComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(pmsRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class PmsRoutingModule { }