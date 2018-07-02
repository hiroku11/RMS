import { AddCourseComponent } from './components/manage-courses/add-course/add-course.component';
import { ManageCourseListComponent } from './components/manage-courses/manage-course-list/manage-course-list.component';
import { AddProfileComponent } from './components/manage-profiles/add-profile/add-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseComponent } from './components/courses/course.component';
import { MyCoursesComponent } from './components/mycourses/mycourses.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { ProgressComponent } from './components/progress/progress.component';
import { UserCourseDetailComponent } from './components/user-course-detail/user-course-detail.component';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';
import { ProfilesListComponent } from './components/manage-profiles/profiles-list/profiles-list.component';
import { ManageProfilesComponent } from './components/manage-profiles/manage-profiles.component';

const lmsRoutes = [
    { path: '', redirectTo: "dashboard" },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'courses', component: CourseComponent, children: [
            { path: '', pathMatch: 'full', component: CourseListComponent },
            { path: 'course-detail/:id', component: CourseDetailComponent, pathMatch: 'full' }
        ]
    },
    // { path: 'courses', component:CourseComponent},
    { path: 'course-detail', component: CourseDetailComponent },
    { path: 'my-courses', component: MyCoursesComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'user-course-detail/:id', component: UserCourseDetailComponent },
    {
        path: 'manage-profiles', component: ManageProfilesComponent, children: [
            { path: '', pathMatch: 'full', component: ProfilesListComponent },
            { path: 'add-profile', pathMatch: 'full', component: AddProfileComponent },
            { path: 'edit-profile/:id', pathMatch: 'full', component: AddProfileComponent },
        ]
    },
    {
        path: 'manage-courses', component: ManageProfilesComponent, children: [
            { path: '', pathMatch: 'full', component: ManageCourseListComponent },
            { path: 'add-course', pathMatch: 'full', component: AddCourseComponent },
            { path: 'edit-course/:id', pathMatch: 'full', component: AddCourseComponent },
        ]
    },

]
@NgModule({
    imports: [
        RouterModule.forChild(lmsRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class LmsRoutingModule { }