import { TeamsComponent } from './components/manage-teams/teams/teams.component';
import { ImportUsersComponent } from './components/manage-users/import-users/import-users.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { AddAdminTeamComponent } from './components/admin-team/add-admin-team/add-admin-team.component';
import { AdminTeamListComponent } from './components/admin-team/admin-team-list/admin-team-list.component';
import { AdminTeamComponent } from './components/admin-team/admin-team.component';
import { AddInvestigationTeamtComponent } from './components/investigation-team/add-investigation-teamt/add-investigation-teamt.component';
import { InvestigationTeamComponent } from './components/investigation-team/investigation-team.component';
import { AddRoleComponent } from './components/roles/add-role/add-role.component';
import { AddUserComponent } from './components/manage-users/add-user/add-user.component';
import { UserListsComponent } from './components/manage-users/user-lists/user-lists.component';
import { UserLookupComponent } from './components/user-lookup/user-lookup.component';
import { OrganizationLookupComponent } from './components/organization-lookup/organization-lookup.component';
import { AddDepartmentComponent } from './components/department/add-department/add-department.component';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { PaginationModule } from 'ngx-pagination-bootstrap';
import { AddOrganizationComponent } from './components/organization/add-organization/add-organization.component';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { OwlDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
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
import { OrganizationListComponent } from './components/organization/organization-list/organization-list.component';
import { OfficeAddressLookupComponent } from './components/office-address-lookup/office-address-lookup.component';
import { RolesListComponent } from './components/roles/roles-list/roles-list.component';
import { InvestigationTeamListComponent } from './components/investigation-team/investigation-team-list/investigation-team-list.component';

const MY_MOMENT_FORMATS = {
  parseInput: 'DD/MM/YYYY HH:mm:ss',
  fullPickerInput: 'DD/MM/YYYY HH:mm:ss',
  datePickerInput: 'DD/MM/YYYY',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};
@NgModule({
  imports: [
    CommonModule, FormsModule, MyProfileRoutingModule, CoreComponentsModule,
    OwlDateTimeModule, OwlMomentDateTimeModule, PaginationModule, SelectDropDownModule
  ],
  entryComponents: [UserLookupComponent, OfficeAddressLookupComponent, OrganizationLookupComponent],
  declarations: [ProfileComponent, SmMenuComponent, SideNavComponent, OfficeAddressComponent,
    MyAddressesComponent, UpdatePasswordComponent, DepartmentComponent, OrganizationComponent,
    ManageTeamsComponent, OrganizationListComponent, ManageUsersComponent, RolesComponent,
    AddOrganizationComponent, ReportsComponent, ManageTemplatesComponent, DepartmentListComponent,
    AddDepartmentComponent, OfficeAddressLookupComponent, OrganizationLookupComponent,
    UserLookupComponent, UserListsComponent, AddUserComponent, AddRoleComponent, ReportsComponent,
    RolesListComponent, InvestigationTeamComponent, AddInvestigationTeamtComponent, InvestigationTeamListComponent,
    AdminTeamComponent, AdminTeamListComponent, AddAdminTeamComponent, ImportUsersComponent, TeamsComponent],
  providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS }],
})
export class UmsModule { }
