import { OfficeAddressComponent } from './components/office-address/office-address.component';
import { MyAddressesComponent } from './components/my-addresses/my-addresses.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProfileComponent } from './components/profile/profile.component';


const myProfileRoutes: Routes = [
    { path: '', redirectTo: "profile" },
    { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
    { path: 'update-password', component: UpdatePasswordComponent, pathMatch: 'full' },
    { path: 'my-addresses', component: MyAddressesComponent, pathMatch: 'full' },
    { path: 'office-address', component: OfficeAddressComponent, pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forChild(myProfileRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class MyProfileRoutingModule { }