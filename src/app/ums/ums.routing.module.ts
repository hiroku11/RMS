import { ImportUsersComponent } from './components/manage-users/import-users/import-users.component';
import { RolesListComponent } from './components/roles/roles-list/roles-list.component';
import { AddRoleComponent } from './components/roles/add-role/add-role.component';
import { AddUserComponent } from './components/manage-users/add-user/add-user.component';
import { UserListsComponent } from './components/manage-users/user-lists/user-lists.component';
import { AddInvestigationTeamtComponent } from './components/investigation-team/add-investigation-teamt/add-investigation-teamt.component';
import { AddAdminTeamComponent } from './components/admin-team/add-admin-team/add-admin-team.component';
import { AdminTeamListComponent } from './components/admin-team/admin-team-list/admin-team-list.component';
import { AdminTeamComponent } from './components/admin-team/admin-team.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ManageTemplatesComponent } from './components/manage-templates/manage-templates.component';
import { ManageTeamsComponent } from './components/manage-teams/manage-teams.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { RolesComponent } from './components/roles/roles.component';
import { DepartmentComponent } from './components/department/department.component';
import { DepartmentListComponent } from './components/department/department-list/department-list.component';
import { AddDepartmentComponent } from './components/department/add-department/add-department.component';
import { AddOrganizationComponent } from './components/organization/add-organization/add-organization.component';
import { OrganizationListComponent } from './components/organization/organization-list/organization-list.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { OfficeAddressComponent } from './components/office-address/office-address.component';
import { MyAddressesComponent } from './components/my-addresses/my-addresses.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProfileComponent } from './components/profile/profile.component';
import { InvestigationTeamComponent } from './components/investigation-team/investigation-team.component';
import { InvestigationTeamListComponent } from './components/investigation-team/investigation-team-list/investigation-team-list.component';
import { TeamsComponent } from './components/manage-teams/teams/teams.component';


const myProfileRoutes: Routes = [
    { path: '', redirectTo: "profile" },
    { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
    { path: 'update-password', component: UpdatePasswordComponent, pathMatch: 'full' },
    { path: 'my-addresses', component: MyAddressesComponent, pathMatch: 'full' },
    { path: 'office-address', component: OfficeAddressComponent, pathMatch: 'full' },
    {
        path: 'organization', component: OrganizationComponent, children: [
            { path: '', component: OrganizationListComponent, pathMatch: 'full' },
            { path: 'add-organization', component: AddOrganizationComponent, pathMatch: 'full' },
            { path: 'edit-organization/:id', component: AddOrganizationComponent, pathMatch: 'full' },


        ]
    },
    {
        path: 'department', component: DepartmentComponent, children: [
            { path: '', component: DepartmentListComponent, pathMatch: 'full' },
            { path: 'add-department', component: AddDepartmentComponent, pathMatch: 'full' },
            { path: 'edit-department/:id', component: AddDepartmentComponent, pathMatch: 'full' },


        ]
    },
    {
        path: 'roles', component: RolesComponent, children: [
            { path: '', component: RolesListComponent, pathMatch: 'full' },
            { path: 'add-role', component: AddRoleComponent, pathMatch: 'full' },
            { path: 'edit-role/:id', component: AddRoleComponent, pathMatch: 'full' },
        ]
    },
    {
        path: 'manage-users', component: ManageUsersComponent, children: [
            { path: '', component: UserListsComponent, pathMatch: 'full' },
            { path: 'add-user', component: AddUserComponent, pathMatch: 'full' },
            { path: 'import-users', component: ImportUsersComponent, pathMatch: 'full' },
            { path: 'edit-user/:id', component: AddUserComponent, pathMatch: 'full' },

        ]
    },
    {
        path: 'manage-teams', component: ManageTeamsComponent, children: [
            { path: '', component: TeamsComponent, pathMatch: 'full' },
            {

                path: 'investigation-teams', component: InvestigationTeamComponent, children: [
                    { path: '', component: InvestigationTeamListComponent, pathMatch: 'full' },
                    { path: 'add-investigation-team', component: AddInvestigationTeamtComponent, pathMatch: 'full' },
                    { path: 'edit-investigation-team/:id', component: AddInvestigationTeamtComponent, pathMatch: 'full' },
                ]
            },
            {
                path: 'admin-teams', component: AdminTeamComponent, children: [
                    { path: '', component: AdminTeamListComponent, pathMatch: 'full' },
                    { path: 'add-admin-team', component: AddAdminTeamComponent, pathMatch: 'full' },
                    { path: 'edit-admin-team/:id', component: AddAdminTeamComponent, pathMatch: 'full' },
                ]
            },
        ]
    },
    { path: 'manage-templates', component: ManageTemplatesComponent, pathMatch: 'full' },
    { path: 'reports', component: ReportsComponent, pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forChild(myProfileRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class MyProfileRoutingModule { }