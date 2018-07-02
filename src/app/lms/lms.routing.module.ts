import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseComponent } from './components/courses/course.component';
import { MyCoursesComponent } from './components/mycourses/mycourses.component';
import { CourseListComponent} from './components/courses/course-list/course-list.component';
import { ProgressComponent } from './components/progress/progress.component';
import { UserCourseDetailComponent } from './components/user-course-detail/user-course-detail.component';
import { CourseDetailComponent} from './components/courses/course-detail/course-detail.component';

const lmsRoutes = [
    { path: '', redirectTo: "dashboard" },
    { path: 'dashboard' ,component: DashboardComponent},
    { path: 'courses', component: CourseComponent, children: [
        { path: '', pathMatch: 'full', component: CourseListComponent },
        { path: 'course-detail/:id', component: CourseDetailComponent, pathMatch: 'full'}
    ]},
    // { path: 'courses', component:CourseComponent},
    { path: 'course-detail', component: CourseDetailComponent},
    { path: 'my-course',component:MyCoursesComponent},
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