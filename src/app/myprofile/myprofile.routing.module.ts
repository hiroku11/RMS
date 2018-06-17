
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProfileComponent } from './components/profile/profile.component';


const myProfileRoutes: Routes = [
    { path: '', redirectTo: "profile" },
    { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
    { path: 'update-password', pathMatch: 'full' },
    { path: 'my-addresses', pathMatch: 'full' },
    { path: 'office-address', pathMatch: 'full' },
]

@NgModule({
    imports: [
        RouterModule.forChild(myProfileRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class MyProfileRoutingModule { }