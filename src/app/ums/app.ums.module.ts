import { ManageTemplatesComponent } from './components/manage-templates/manage-templates.component';
import { ReportsComponent } from './components/reports/reports.component';
import { RolesComponent } from './components/roles/roles.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageTeamsComponent } from './components/manage-teams/manage-teams.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { DepartmentComponent } from './components/department/department.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { MyAddressesComponent } from './components/my-addresses/my-addresses.component';
import { OfficeAddressComponent } from './components/office-address/office-address.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SmMenuComponent } from './components/sm-menu/sm-menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileRoutingModule } from './ums.routing.module';
import { CoreComponentsModule } from '../core.components.module/core.components.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, MyProfileRoutingModule, CoreComponentsModule
  ],
  entryComponents: [],
  declarations: [ProfileComponent, SmMenuComponent, SideNavComponent, OfficeAddressComponent,
    MyAddressesComponent, UpdatePasswordComponent, DepartmentComponent, OrganizationComponent, ManageTeamsComponent
  , ManageUsersComponent, RolesComponent, ReportsComponent, ManageTemplatesComponent],
  providers: [],
})
export class UmsModule { }
