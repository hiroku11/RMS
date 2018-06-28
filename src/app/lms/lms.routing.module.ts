import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { ProgressComponent } from './components/progress/progress.component';
import { UserCourseDetailComponent } from './components/user-course-detail/user-course-detail.component';

const lmsRoutes = [
    { path: '', redirectTo: "dashboard" },
    { path: 'dashboard' ,component: DashboardComponent},
    { path: 'courses', component:CoursesComponent},
    { path: 'progress', component : ProgressComponent},
    {path: 'user-course-detail/:id', component:UserCourseDetailComponent}
]
@NgModule({
    imports: [
        RouterModule.forChild(lmsRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class LmsRoutingModule { }